import { GvEnvironment } from '@pv-frontend/gift-voucher-journey';

interface EnvInterface extends GvEnvironment {
  clientId: string;
  projectId: string;
  countryId: string;
}

// TODO: rename the variables with proper convention, blocker for this is razorpay-pg lib.
export const environment: EnvInterface = {
  apiPerksServiceUrl: 'https://sandbox-api.poshvine.com/ps/v1',
  apiPerksServiceUrlV2: 'https://sandbox-api.poshvine.com/ps/v2',
  apiClientsServiceUrl: 'https://sandbox-api.poshvine.com/cs/v1',
  apiUrlPaV1: 'https://sandbox-api.poshvine.com/pa/v1/',
  apiBookingServiceUrl: 'https://sandbox-api.poshvine.com/bs/v1',
  clientId: '9d1207af-b3c1-4096-8cea-8858acf5e27b',
  projectId: '94071ce9-7efb-4c62-be72-494a13a4b286',
  countryId: 'efb468c6-2d84-4caa-a826-ff0ab253d0c6',
  campaignPath: '',
  apiLoyaltyServiceUrl: ''
};

// production:
// clientId: 'efa07a16-273f-4fd0-9866-c1d42c5d0eac',
// projectId: 'd6f66808-6cd0-472c-954c-c571bcec90ba'
