import { GTMTrackLabels } from '@pv-frontend/gift-voucher-journey';

export const appConstants: {
  trackLabels: GTMTrackLabels;
  cardIconsMapping: object;
  dateDisplayFormat: string;
} = {
  trackLabels: {
    search: {
      recommendedBrands: 'gv_search.recommended_brands.gv_unit_clicked',
      pastSearch: 'gv_search.past_search.gv_unit_clicked',
      searchResults: 'gv_search.search_results.gv_unit_clicked',
    },
    landing: {
      companyIcon: 'gv_landingpage.company_icon_clicked',
      loginBanner: 'gv_landingpage.login_rendered',
      topBanner: 'gv_landingpage.banner_clicked',
      homeSearch: 'gv_landingpage.search_clicked',
      category: 'gv_landingpage.category_clicked',
      personalisedOfferSection:
        'gv_landingpage.personalised_offer_clicked_offer.view_all_clicked',
      personalisedOffer: 'gv_landingpage.personalised_offer_clicked',
      limitedOfferSection: 'gv_landingpage.limited_offers.view_all_clicked',
      limitedOffer: 'gv_landingpage.limited_offer_clicked',
      mostSearchedBrand: 'gv_landingpage.most_searched_brand_clicked',
      bestsellerOfferSection:
        'gv_landingpage.bestseller_offer.view_all_clicked',
      bestsellerOffer: 'gv_landingpage.bestseller_offer_clicked',
      topOfferSection: 'gv_landingpage.top_offer.view_all_clicked',
      topOffer: 'gv_landingpage.top_brands_clicked',
    },
  },
  cardIconsMapping: {
    VISA: 'visa.png',
    AMEX: 'amex-512.png',
    DINR: 'diners-club.png',
    MAST: 'master.png',
    RUPAY: 'RuPay.png',
    MASTERCARD: 'master.png',
    Unknown: 'credit.png',
  },
  dateDisplayFormat: 'd MMM, y',
};
