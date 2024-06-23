import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PvAuthenticationModule, PvTokenExpiredModule } from '@pv-frontend/authentication';
import { ErrorService, GvRedemptionModule, PvGiftVouchersModule } from '@pv-frontend/gift-voucher-journey';
import { PvButtonModule } from '@pv-frontend/pv-shared-components/button';
import { ToastrModule } from 'ngx-toastr';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { JOURNEY_METADATA_SERVICE_TOKEN } from '@pv-frontend/pv-shared-services/journey-metadata-service';
import { PV_USER_SERVICE } from '@pv-frontend/pv-shared-services/pv-user-service';
import { TelemetryModule } from '@pv-frontend/pv-shared-services/telemetry-service';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { JourneyMetaDataServiceImpl } from 'src/journey-metadata-impl.service';
import { PvUserServiceImpl } from 'src/user-service-impl.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LumberjackTelemetryProvider } from './telemetry-providers/lumberjack-telemetry-provider';
import { ErrorInterceptor } from 'src/interceptors/error.interceptor';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { PVHeaderModule } from '@pv-frontend/header';
import { PvDrawerModule } from '@pv-frontend/pv-shared-components/drawer';
import { SvgIconModule } from '@pv-frontend/pv-shared-components/svg-icon';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { appConstants } from './app.constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PvGiftVouchersModule.forRoot(environment),
    AppRoutingModule,
    PvAuthenticationModule,
    BrowserAnimationsModule,
    ToastModule,
    TelemetryModule.forRoot([
      {
        telemetryProvider: LumberjackTelemetryProvider,
        initConfig: {
          writeKey: 'writeKey',
          projectId: 'projectId',
        },
        enableErrorTracking: false,
        enableEventTracking: true,
        enablePageTracking: true,
      },
    ]),
    PvTokenExpiredModule,
    PvDrawerModule,
    PVHeaderModule,
    PvButtonModule,
    SvgIconModule,
  ],
  providers: [
    {
      provide: JOURNEY_METADATA_SERVICE_TOKEN,
      useExisting: JourneyMetaDataServiceImpl,
    },
    {
      provide: PV_USER_SERVICE,
      useExisting: PvUserServiceImpl,
    },
    {
      provide: 'environment',
      useValue: environment,
    },
    {
      provide: 'gtmLabels',
      useValue: appConstants.trackLabels,
    },
    {
      provide: 'env',
      useValue: environment,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    PvUserServiceImpl,
    JourneyMetaDataServiceImpl,
    MessageService,
    ErrorService,
    LumberjackTelemetryProvider,
    {
      provide: 'singleSpaProps',
      useFactory: () => singleSpaPropsSubject
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
