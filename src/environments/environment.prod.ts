import { GvEnvironment } from '@pv-frontend/gift-voucher-journey';

interface EnvInterface extends GvEnvironment {
  clientId: string;
  projectId: string;
  apiUrlBsV1: string;
  apiUrlBsV1Internal: string;
  apiUrlLsV1: string;
  corePath: string;
  corePathV2: string;
  offerPath: string;
  offerPathV2: string;
  countryId: string;
  urlsToBeRemoved: string[];
}

export const environment: EnvInterface = {
  apiPerksServiceUrl: 'https://api-customer.poshvine.com/ps/v1',
  apiPerksServiceUrlV2: 'https://api-customer.poshvine.com/ps/v2',
  apiClientsServiceUrl: 'https://api-customer.poshvine.com/cs/v1',
  apiUrlPaV1: 'https://api-customer.poshvine.com/pa/v1/',
  apiBookingServiceUrl: 'https://api-customer.poshvine.com/bs/v1',
  clientId: 'efa07a16-273f-4fd0-9866-c1d42c5d0eac',
  projectId: 'd6f66808-6cd0-472c-954c-c571bcec90ba',
  apiUrlBsV1: 'https://api-customer.poshvine.com/bs/v1/',
  apiUrlBsV1Internal: 'https://api-customer.poshvine.com/bs/internal',
  apiUrlLsV1: 'https://api-customer.poshvine.com/ls/v1/',
  corePath: 'https://api-customer-offerservice.poshvine.com/core_service/v1',
  corePathV2: 'https://api-customer.poshvine.com/cs/v1',
  offerPath: 'https://api-customer-offerservice.poshvine.com/offer_service/v1',
  offerPathV2: 'https://api-customer.poshvine.com/ps/v1',
  countryId: '625a3e8e-e493-421a-8ece-609f10b37442',
  urlsToBeRemoved: ['https://fimoney.poshvine.com'],
  apiLoyaltyServiceUrl: 'https://api-customer.poshvine.com/ls/v1',
  campaignPath: '',
};
