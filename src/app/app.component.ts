import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { LoginConfigOverride } from '@pv-frontend/authentication';
import { JOURNEY_METADATA_SERVICE_TOKEN, JourneyMetadataService } from '@pv-frontend/pv-shared-services/journey-metadata-service';
import { PV_USER_SERVICE, PvUserService } from '@pv-frontend/pv-shared-services/pv-user-service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public showAuthenticationModal: boolean = false;
  private readonly AuthConfigPath: string = 'journey.authentication';
  private destroy$: Subject<void> = new Subject<void>();
  private eventBus: any;

  constructor(
    @Inject(PV_USER_SERVICE) private pvUserService: PvUserService,
    @Inject(JOURNEY_METADATA_SERVICE_TOKEN)
    private journeyMetadataService: JourneyMetadataService,
    @Inject('singleSpaProps') private singleSpaProps$: Observable<any>,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.subscribeToAuthModal(); 
    this.subscribeToUserLogin();
    this.eventBus?.['emit']('userLoggedIn', this.pvUserService.isUserAuthenticated());
    this.singleSpaProps$.subscribe((props) => {
      this.eventBus = props.eventBus;
      // Now you can use this.eventBus for emitting or listening to events
      this.eventBus?.['on']?.('openAuthModal', (open: any) => {
        this.pvUserService.toggleAuthModal(open);
      });

      this.eventBus?.['on']?.('logoutUser', () => {
        this.pvUserService.logoutUser();
        this.pvUserService.notifyUserLogin(false);
      });
    });
  }

  private subscribeToUserLogin(): void {
    this.pvUserService.userLoggedInObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.eventBus?.['emit']('userLoggedIn', this.pvUserService.isUserAuthenticated());
      });
  }

  private subscribeToAuthModal(): void {
    const authModalConfig: LoginConfigOverride =
      this.journeyMetadataService.getJourneyConfig(
        this.AuthConfigPath
      ) as LoginConfigOverride;
    // COMMENT: if the user auth is not by mobile/email, when the toggleAuthModal is called white drawer is showing up.
    if (authModalConfig?.authenticationFlow?.config?.flow?.length > 0) {
      this.pvUserService.loginModalObservable$
        .pipe(takeUntil(this.destroy$))
        .subscribe((showAuthenticationModal: boolean) => {
          this.showAuthenticationModal = showAuthenticationModal;
          this.changeDetector.detectChanges();
        });
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
