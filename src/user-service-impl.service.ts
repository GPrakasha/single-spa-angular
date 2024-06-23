import {
  Country,
  UserCard,
  UserDetails,
} from '@pv-frontend/pv-shared-services/common';
import { PvUserService } from '@pv-frontend/pv-shared-services/pv-user-service';

interface CurrentState {
  token: string;
  isExpired: boolean;
  selectedCard: UserCard;
}
export class PvUserServiceImpl extends PvUserService {
  // COMMENT: had to implement as making this an abtract class would give us "Cannot assign an abstract constructor type to a non-abstract constructor type.""
  // COMMENT: had to disable lint for the below unImplemented functions
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override setSelectedUserCardId(userCardId: string): void {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override setCountries(countries: Country[]): void {
    throw new Error('Method not implemented.');
  }
  public override getCountries(): Country[] {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override getCountryById(countryId: string): Country | null {
    throw new Error('Method not implemented.');
  }

  private getCurrentState(): CurrentState | null {
    return JSON.parse(localStorage.getItem('pvCurrentState') ?? 'null');
  }

  public override setUserCards(userCards: UserCard[]): void {
    localStorage.setItem('pvUserCards', JSON.stringify(userCards));
  }

  public override getUserCards(): UserCard[] {
    return JSON.parse(localStorage.getItem('pvUserCards') ?? '[]');
  }

  public override setSelectedUserCard(userCard: UserCard | null): void {
    localStorage.setItem(
      'pvCurrentState',
      JSON.stringify({
        ...this.getCurrentState(),
        selectedCard: userCard,
      })
    );
  }

  public override getSelectedUserCard(): UserCard | null {
    return this.getCurrentState()?.selectedCard ?? null;
  }

  public override getSelectedUserCardId(): string {
    return this.getSelectedUserCard()?.id ?? '';
  }

  public override setToken(token: string): void {
    localStorage.setItem(
      'pvCurrentState',
      JSON.stringify({
        ...this.getCurrentState(),
        token: token,
      })
    );
  }

  public override getToken(): string {
    return this.getCurrentState()?.token ?? '';
  }

  public override getUserDetails(): UserDetails | null {
    return JSON.parse(localStorage.getItem('pvUserDetails') ?? 'null');
  }

  public override isUserAuthenticated(): boolean {
    return !!this.getToken();
  }

  public override setUserDetails(userDetails: UserDetails): void {
    localStorage.setItem('pvUserDetails', JSON.stringify(userDetails));
  }

  public override logoutUser(): void {
    localStorage.removeItem('pvCurrentState');
    localStorage.removeItem('pvUserCards');
    localStorage.removeItem('pvUserDetails');
    sessionStorage.removeItem('pvUserPoints');
  }

  public override setUserPoints(points: number): void {
    sessionStorage.setItem('pvUserPoints', points.toString());
  }

  public override getUserPoints(): number {
    return JSON.parse(sessionStorage.getItem('pvUserPoints') ?? '0');
  }

  public override isTokenExpired(): boolean {
    const currentState = this.getCurrentState();
    if (currentState?.isExpired) return currentState?.isExpired;
    const token = this.getToken();
    if (!token) return true;
    const tokenDetails = JSON.parse(atob(token.split('.')?.[1]));
    const expiresOn = new Date(tokenDetails.exp * 1000);
    return expiresOn < new Date();
  }
  private tempUserToken = '';

  public override setTempToken(tempToken: string): void {
    this.tempUserToken = tempToken;
  }
  public override getTempToken(): string | null {
    return this.tempUserToken;
  }
}
