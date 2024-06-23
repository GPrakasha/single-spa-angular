import { GiftVouchersConfig } from '@pv-frontend/gift-voucher-journey';

import { giftVouchersConfig } from './gift-vouchers';

export interface AllJourneyConfig {
  journey: GiftVouchersConfig;
}

export const allJourneyDetails: AllJourneyConfig = {
  journey: giftVouchersConfig,
};
