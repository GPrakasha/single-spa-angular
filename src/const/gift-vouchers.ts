import {
  GiftVouchersConfig,
  REDEMPTION_VALUE_ROUNDING_METHOD,
} from '@pv-frontend/gift-voucher-journey';

// TODO: extract repitive styles into separate file

export const giftVouchersConfig: GiftVouchersConfig = {
  global: {
    config: {
      imagePlaceholder:
        'https://images.poshvine.com/icon/gv/rectangular-image-placeholder.jpeg',
      isCardBasedLogin: false,
      includeLedger: false,
      includeLoginFlow: true,
      pointsIconFirst: true,
      coinIconName: 'fi-coin',
      defaultPaymentMode: 'point_redemption',
      allowedPaymentMethods: ['card_payment', 'point_redemption'],
      hasCardBasedDiscounts: true,
      coinName: 'Fi-Coins',
      pointsLabel: 'Fi-Coins',
      redemptionValueRoundingMethod: REDEMPTION_VALUE_ROUNDING_METHOD.ceil,
    },
    style: {
      chevronDown: {
        width: '1.4375rem',
        height: '1.4375rem',
        fill: 'var(--brand-primary-500)',
      },
    },
  },
  loginBanner: {
    container: {
      background: 'var(--background-light-base)',
      backdropFilter: 'blur(1.5px)',
    },
    loginButton: {
      borderRadius: '20px',
      background: 'var(--interactive-light-primary-action)',
      fontSize: '16px',
      fontWeight: '600',
      padding: '10px 40px',
    },
    iconStyle: {
      width: 'unset',
      height: 'unset',
    },
  },
  voucherCard: {
    container: {
      style: {
        error: {
          background: 'var(--neutrals-ivory-50)',
          color: 'var(--content-on-light-high-emphasis-850)',
        },
        success: {
          background: 'var(--supporting-moss-700)',
        },
      },
    },
    redeemButton: {
      style: {
        padding: '0',
        'text-decoration': 'underline',
        'font-size': '0.857rem',
        color: 'white',
        'min-width': 'auto',
      },
    },
    statusIcon: {
      style: {
        width: '1.14286rem',
        height: '1.14286rem',
      },
    },
    divider: {
      style: {
        width: 'calc(100% + 2rem)',
        margin: '1.4rem -1rem 1.9rem',
      },
    },
  },
  landingPage: {
    topBanner: {
      image: {
        borderRadius: '20px',
      },
    },
    middleBanner: {
      container: {
        background: 'var(--supporting-indigo-900)',
        paddingBottom: '5px',
      },
      image: {
        borderRadius: '20px',
      },
    },
    categoryListing: {
      config: {
        showCustomIcons: true,
        subPathName: 'fi-money',
      },
    },
    viewAllButton: {
      style: {
        color: 'var(--interactive-light-green-text)',
        backgroundColor: 'var(--neutrals-ivory-50)',
        borderRadius: '20px',
        fontWeight: '600',
        width: 'calc(100vw - 32px)',
      },
    },
    offersSectionStyle: {
      style: {
        cardSection: {},
        categoryBasedOffers: {
          card: {},
        },
      },
    },
    showLoginAlert: false,
    sectionOrder: [
      'BANNERS',
      'SEARCH_BAR',
      'CATEGORIES',
      'BEST_SELLER_OFFERS',
      'MOST_SEARCHED_OFFERS',
      'TOP_CATEGORY_BASED_OFFERS',
      // 'MID_BANNERS',
      // 'TOP_MEMBERSHIPS',
    ],
    personalisedCardSectionStyle: {
      style: {
        backgroundImage: {
          position: 'absolute',
          top: '-15px',
          right: '1rem',
          transform: 'rotate(0deg)',
          width: '6rem',
          height: '6rem',
        },
        title: {
          container: {
            color: 'var(--content-on-light-high-emphasis-850)',
            fontWeight: '700',
          },
          image: {
            display: 'none',
          },
        },
        link: {},
        card: {
          'background-color': 'var(--background-light-base)',
          margin: '1.5rem 0 0',
          padding: '0 0.5rem 1.5rem',
          'border-radius': '20px',
        },
      },
    },
    personalisedCardStyle: {
      cardContainer: {
        width: '100% !important',
        height: '100% !important',
        border: '0',
        'border-radius': '20px',
      },
      image: {
        minHeight: '107px',
        'border-radius': '20px 20px 0 0',
      },
      cardContent: {
        'border-top': '0',
      },
      information: {
        attentionText: {
          color: 'var(--supporting-moss-700)',
        },
      },
    },
    limitedTimeCardSectionStyle: {
      style: {
        backgroundImage: {},
        title: {
          container: {
            color: 'var(--content-on-light-high-emphasis-850)',
          },
          image: {
            'margin-right': '.2rem',
            height: '1.5rem',
          },
        },
        link: {
          'font-weight': '600',
          'font-size': '0.75rem',
          color: 'var(--interactive-light-tertiary-action-2)',
          'text-transform': 'uppercase',
        },
        card: {
          'background-color': 'var(--background-light-base)',
          margin: '0',
          padding: '.3rem 0 1.5rem .5rem',
        },
      },
    },
    limitedTimeCardStyle: {
      style: {
        cardContainer: {
          'min-height': '15rem',
          'border-radius': '20px',
        },
        title: {},
        actionButton: {
          'font-weight': '600',
          color: 'var(--interactive-light-green-text)',
        },
      },
    },
    bestSellerCardSectionStyle: {
      style: {
        backgroundImage: {
          position: 'absolute',
          top: '-15px',
          right: '1rem',
          transform: 'rotate(0deg)',
          width: '6rem',
          height: '6rem',
        },
        title: {
          container: {
            paddingLeft: '0.8rem',
            color: 'var(--content-on-light-high-emphasis-850)',
            fontWeight: '700',
            textTransform: 'capitalize',
          },
          image: {
            fill: 'var(--green-600)',
            'margin-right': '.2rem',
            height: '1.5rem',
          },
        },
        link: {
          'font-weight': '600',
          'font-size': '0.75rem',
          color: 'var(--interactive-light-tertiary-action-2)',
          'text-transform': 'uppercase',
        },
        card: {
          'background-color': 'var(--background-light-base)',
          margin: '0',
          padding: '.6rem 0rem 1.5rem',
        },
      },
    },
    bestSellerCardStyle: {
      style: {
        cardContainer: {
          width: '100% !important',
          height: '100% !important',
          border: '0',
        },
        title: {
          color: 'var(--surface-text-normal-low-contrast)',
        },
        cardContent: {
          padding: '0.75rem 0.75rem 2rem',
        },
        footer: {
          background:
            'linear-gradient(90deg, rgba(0, 140, 177, 0.12) 13.92%, rgba(0, 140, 177, 0.00) 111.39%)',
          position: 'absolute',
          width: '100%',
          bottom: '0',
          'font-size': '.75rem !important',
        },
      },
    },
    categoryOfferSectionStyle: {
      style: {
        backgroundImage: {
          position: 'absolute',
          top: '-15px',
          right: '1rem',
          transform: 'rotate(0deg)',
          width: '6rem',
          height: '6rem',
        },
        title: {
          container: {
            color: 'var(--content-on-light-high-emphasis-850)',
          },
          image: {
            fill: 'var(--green-600)',
            'margin-right': '.2rem',
            height: '1.5rem',
          },
        },
        link: {
          'font-weight': '700',
          'font-size': '1rem',
        },
        card: {
          backgroundColor: 'var(--background-light-base)',
          margin: '0',
          padding: '.5rem 0.5rem .5rem',
        },
      },
    },
    categoryOfferCard: {
      style: {
        cardContainer: {
          width: '100% !important',
          height: '100% !important',
          border: '0',
          'border-radius': '16px !important',
        },
        cardContent: {
          'border-top': '0',
        },
        information: {
          attentionText: {
            color: 'var(--supporting-moss-700)',
          },
        },
        image: {
          minHeight: '107px',
          'border-radius': '16px 16px 0 0 !important',
        },
      },
    },
    topMembershipSectionStyle: {
      style: {
        backgroundImage: {
          top: '-15px',
          right: '1rem',
          transform: 'rotate(0deg)',
          width: '6rem',
          height: '6rem',
        },
        title: {
          container: {
            color: 'var(--content-on-light-high-emphasis-850)',
          },
          image: {
            fill: 'var(--blue-600)',
            'margin-right': '.2rem',
            height: '1.5rem',
          },
        },
        link: {
          color: 'var(--interactive-light-tertiary-action-2)',
          'text-transform': 'uppercase',
        },
        card: {
          backgroundColor: 'var(--background-dark-translucent)',
          margin: '5px 0 0',
          paddingBottom: '20px',
        },
      },
      config: {
        buttonLabel: 'View all',
        emphasizedTitleText: 'Top Memberships',
      },
    },
    topMembershipCardStyle: {
      style: {
        cardContainer: {
          width: '100% !important',
          height: '100% !important',
          border: '0',
          'border-radius': '20px',
        },
        title: {
          color: 'var(--surface-text-normal-low-contrast)',
        },
        image: {
          'border-radius': '20px 20px 0 0',
        },
        cardContent: {
          padding: '0.75rem 0.75rem 0.75rem',
          color: 'var(--content-on-light-high-emphasis-850)',
        },
        information: {
          attentionText: {
            color: 'var(--supporting-moss-700)',
          },
        },
      },
    },
    mostSearchedSectionStyle: {
      style: {
        backgroundImage: {},
        title: {
          container: {
            'padding-left': '0.8rem',
            color: 'var(--content-on-light-high-emphasis-850)',
          },
          image: {
            fill: 'var(--supporting-blue-500)',
            'margin-right': '.2rem',
            height: '1.5rem',
          },
        },
        link: {
          display: 'none',
        },
        card: {
          'background-color': 'var(--surface-a)',
          margin: '1rem 0 0',
          padding: '0',
        },
      },
    },
    merchantAvatarStyle: {
      style: {
        label: {
          'line-height': '1.2rem',
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          'text-overflow': 'ellipsis',
          'white-space': 'normal',
          '-webkit-line-clamp': '1',
          width: '100%',
          fontWeight: '600',
        },
        container: {},
      },
    },
    membershipTag: {
      position: 'top-right',
      style: {
        tag: {
          backgroundColor: 'hsla(35, 84%, 54%, .8)',
          padding: '0.5rem',
        },
        label: {
          'font-size': '0.71429rem',
        },
      },
      label: 'Membership',
    },
    loginAlertDarwer: {
      style: {
        'box-shadow': 'unset',
        background: 'transparent',
        padding: '0',
      },
    },
    categoryAvatarStyle: {
      label: {
        width: 'auto !important',
        fontWeight: '600',
        'font-size': '0.875rem',
        color: 'var(--content-on-light-medium-emphasis-600)',
      },
      container: {
        paddingLeft: '0px',
        minWidth: '70px',
      },
    },
    banners: {
      config: {
        data: [
          {
            imageUrl:
              'https://images.poshvine.com/banners/epifi-banner-gc.webp',
          },
          {
            imageUrl:
              'https://images.poshvine.com/banners/epifi-banner-coins.webp',
          },
        ],
        showPageTopBanner: true,
        showPageMiddleBanner: true,
      },
    },
    topBannersCarouselOptions: [
      {
        breakpoint: '1280',
        numVisible: 1.1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 1.1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1.05,
        numScroll: 1,
      },
    ],
    midBannersCarouselOptions: [
      {
        breakpoint: '1280',
        numVisible: 1.2,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 1.2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1.2,
        numScroll: 1,
      },
    ],
    limitedCarouselOptions: [
      {
        breakpoint: '767px',
        numVisible: 2.5,
        numScroll: 1,
      },
      {
        breakpoint: '500px',
        numVisible: 2.2,
        numScroll: 1,
      },
      {
        breakpoint: '400px',
        numVisible: 2.2,
        numScroll: 1,
      },
      {
        breakpoint: '340px',
        numVisible: 2,
        numScroll: 1,
      },
    ],
    bestSellerCarouselOptions: [
      {
        breakpoint: '767px',
        numVisible: 2.5,
        numScroll: 1,
      },
      {
        breakpoint: '500px',
        numVisible: 2.2,
        numScroll: 1,
      },
      {
        breakpoint: '400px',
        numVisible: 2.2,
        numScroll: 1,
      },
      {
        breakpoint: '340px',
        numVisible: 2,
        numScroll: 1,
      },
    ],
    searchBar: {
      style: {
        container: {
          background: 'white',
          border: '0',
          padding: '8px 14px',
        },
        searchIcon: {
          stroke: 'var(--interactive-light-green-text)',
        },
        input: {
          height: '24px',
          fontSize: '0.75rem',
          color: 'var(--content-on-light-disabled-400)',
          paddingTop: '8px',
        },
      },
      config: {
        placeholder: 'Search via category, brand or product',
      },
    },
  },
  listing: {
    pageLayout: {
      chipType: 'category',
      chipOptions: [
        {
          displayName: 'Gift card',
          paramName: 'GiftCard',
        },
        {
          displayName: 'Membership',
          paramName: 'Membership',
        },
      ],
    },
    personalisedCardSectionStyle: {
      style: {
        backgroundImage: {
          position: 'absolute',
          top: '-.9rem',
          right: '1rem',
          transform: 'rotate(0deg)',
          width: '7rem',
          height: '7rem',
        },
        title: {
          image: {
            fill: 'var(--surface-text-normal-low-contrast)',
            'margin-right': '.2rem',
            width: '1rem',
          },
        },
        card: {
          'background-color': '#E6E9ED',
          margin: '.5rem 0 0',
          padding: '0 0.7rem 1.5rem',
        },
      },
    },
    card: {
      style: {
        cardContainer: {
          width: '100% !important',
          height: '100% !important',
          borderRadius: '20px',
        },
        image: {
          minHeight: '107px',
          borderRadius: '20px 20px 0 0',
        },
      },
    },
    chip: {
      style: {
        active: {
          container: {
            border: '1px solid var(--interactive-light-primary-action)',
            color: 'var(--content-on-light-high-emphasis-850)',
            fontWeight: '600',
            background: 'var(--surface-a)',
          },
          label: {
            textWrap: 'nowrap',
          },
        },
        inActive: {
          container: {
            border: '0',
            color: 'var(--content-on-light-medium-emphasis-600)',
            fontWeight: '600',
          },
          label: {
            textWrap: 'nowrap',
          },
        },
      },
    },
    membershipTag: {
      position: 'top-right',
      style: {
        tag: {
          backgroundColor: 'hsla(35, 84%, 54%, .8)',
          padding: '0.5rem',
        },
        label: {
          fontSize: '0.71429rem',
        },
      },
      label: 'Membership',
    },
    navBar: {
      style: {
        container: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
        },
      },
    },
  },
  benefitDetails: {
    backButton: {
      style: {
        width: '1.6rem',
        fill: 'var(--surface-a)',
      },
    },
    buyButton: {
      style: {
        width: '100%',
        height: '40px',
        borderRadius: '20px',
        background: 'var(--interactive-light-primary-action)',
        // boxShadow: '0 4px 0 0 var(--interactive--light-box-shadow)',
      },
    },
    panel: {
      style: {
        container: {
          boxShadow: 'unset',
          marginBottom: '.5rem',
        },
        dropDownIcon: {
          width: '1.2rem',
          height: '1.2rem',
        },
      },
    },
  },
  header: {
    backBtnContainer: {},
    container: {
      style: {
        backgroundColor: 'var(--background-dark-base)',
      },
    },
    logo: {
      config: {
        url: './assets/fi.webp',
      },
      style: {
        width: '40px',
        height: '40px',
      },
    },
    overlay: {
      style: {
        right: '0',
        padding: '0',
        width: '22rem',
        'border-radius': '20px',
        'margin-top': '14px',
        'box-shadow': 'none',
      },
    },
    divider: {
      style: {
        border: '0',
        'border-top': '.7px solid var(--surface-action-icon-low-contrast)',
      },
    },
    logout: {
      style: {
        display: 'none',
      },
    },
    panel: {
      style: {
        container: {
          'box-shadow': 'unset',
          'line-height': '1.5',
        },
        dropDownIcon: {
          width: '.875rem',
          height: '.875rem',
        },
      },
    },
    loginButton: {
      style: {
        color: 'var(--surface-a)',
        'font-size': '14px',
      },
    },
    points: {
      style: {
        color: 'white !important',
        fontSize: '12px',
      },
    },
    searchIcon: {
      style: {
        height: '1.1rem',
        width: '1.1rem',
        fill: 'var(--content-on-light-low-emphasis-500)',
      },
      config: {
        imageSrc: 'search',
      },
    },
    coinIcon: {
      style: {
        height: '1.25rem',
        width: '1.25rem',
      },
    },
    backBtn: {
      style: {
        width: '2rem',
        height: '2rem',
        fill: 'var(--surface-a)',
      },
      config: {
        imageSrc: 'chevron-left',
      },
    },
    avatar: {
      style: {
        container: {
          border: '.8px solid var(--surface-background-level1-low-contrast)',
          width: '1.71429rem',
          height: '1.71429rem',
          margin: '0',
          'border-radius': '50%',
        },
        label: {
          color: 'var(--surface-a)',
          'font-size': '0.71429rem',
          'font-weight': '700',
        },
        imageOrInitialsContainer: {
          initials: {
            background: 'transparent',
            'font-size': '0.71429rem',
          },
          container: {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
    dropdown: {
      style: {},
      config: {
        termsAndConditionsUrl: 'https://fi.money/blog/tnc#rewards',
      },
    },
  },
  searchPage: {
    modal: {
      style: {
        padding: 0,
      },
    },
    modalContent: {
      style: {
        background: 'var(--background-light-base)',
      },
    },
    searchResult: {
      config: {
        maxSearchResultsToShow: 20,
        apiErrorHeading: 'Uh oh! Failed to load',
        apiErrorDescription:
          'Something went wrong while connecting to the API. Please reload the page',
        apiErrorButtonLabel: 'Retry',
      },
      style: {
        apiErrorButton: {
          width: '200px',
          height: '48px',
        },
        apiErrorButtonSize: 'large',
        emptySearchImage: {
          width: '100px',
        },
      },
    },
    searchBar: {
      style: {
        container: {
          padding: '0 14px',
          background: 'var(--background-dark-layer-2)',
          border: '0',
          color: 'var(--content-on-dark-medium-emphasis-500)',
        },
        searchIcon: {
          fill: 'var(--surface-action-icon-low-contrast)',
        },
        input: {
          height: '3rem',
          fontSize: '1rem',
          color: 'var(--neutrals-ivory-50)',
          caretColor: 'var(--interactive-light-primary-action)',
        },
      },
      config: {
        placeholder: 'Search via category, brand or product',
      },
    },
    recommendedBrands: {
      style: {
        container: {
          height: '100%',
          width: '60px',
        },
        label: {
          fontSize: '12px',
        },
      },
      config: {
        heading: 'Recommended brands',
        maxRecommendedBrandsToShow: 8,
      },
    },
    pastSearch: {
      config: {
        heading: 'Past Search',
        maxSearchHistoryToShow: 3,
      },
    },
  },
  authentication: {
    authenticationFlow: {
      config: {
        flow: [
        'MOBILE_SEARCH',
        'OTP_VERIFICATION'
        ],
        handleDuplicateUser: false,
      },
    },
    drawer: {
      config: {
        dismissOnBackdropClick: true,
      },
      style: undefined,
    },
    binValidation: {
      config: {
        heading: '',
        shouldValidate: false,
        errorMessage: '',
        binType: 'first4',
        submitButtonLabel: '',
        binSeparator: '',
      },
      style: undefined,
    },
    mobileSearch: {
      config: {
        skipMobileSearch: false,
        otpTriggerFailureMessage: '',
        showBackIcon: false,
      },
      style: undefined,
    },
    otpVerification: {
      config: {
        skipOtpVerification: false,
        heading: '',
        errorMessage: '',
        resendOtpLabel: '',
        editMobileBtnLabel: '',
        countdownValue: 0,
        submitButtonLabel: '',
      },
      style: undefined,
    },
    emailSearch: {
      config: {
        skipEmailSearch: false,
        showBackIcon: false,
        otpTriggerFailureMessage: '',
      },
    },
  },
  redemption: {
    cardDropdown: {
      style: {
        width: '100%',
        borderRadius: '50px',
        fontSize: '0.875rem',
        height: '44px',
        backgroundColor: 'var(--surface-0)',
      },
      panelStyle: {
        borderRadius: '24px',
      },
    },
    benefitHeader: {
      style: {
        knowMoreButton: {
          fontWeight: 700,
          color: 'var(--interactive-light-green-text)',
        },
        benefitTitle: {
          color: 'var(--content-on-light-high-emphasis-850)',
          fontWeight: '600',
        },
        closeButton: {
          height: '28px',
          width: '28px',
        },
      },
      config: {
        showCloseButton: true,
      },
    },
    cardDropdownLabel: {
      style: {
        textTransform: 'uppercase',
        color: 'var(--surface-text-placeholder-low-contrast)',
        fontSize: '12px',
      },
    },
  },
  checkout: {
    style: {
      paymentMethodAvailablePointsIcon: {
        width: '12px',
        height: '12px',
      },
      redeemablePointsIcon: {
        width: '12px',
        height: '12px',
      },
      billDetailsLabel: {
        color: 'var(--content-on-light-medium-emphasis-600)',
        fontWeight: '600',
      },
      buyButton: {
        width: '200px',
        height: '40px',
        borderRadius: '20px',
        background: 'var(--interactive-light-primary-action)',
        boxShadow: '0 4px 0 0 var(--interactive--light-box-shadow)',
      },
      merchantName: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      bookingTitle: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      paymentMethodTitle: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      paymentMethodNote: {
        color: 'var(--content-on-light-low-emphasis-500)',
        fontWeight: '400',
      },
      billDetailsHeader: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      billDetailsTotalLabel: {
        color: 'var(--content-on-light-high-emphasis-600)',
        fontWeight: '600',
      },
      billDetailsTotalValue: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      billDetailsDiscountValue: {
        color: 'var(--supporting-moss-400)',
        fontWeight: '600',
      },
      billDetailsEffecSavingsValue: {
        color: 'var(--supporting-moss-400)',
        fontWeight: '600',
      },
      billDetailsPayableAmount: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      payableAmount: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
      cardDetailsContainer: {
        marginTop: '2px',
      },
      availablePointsAndBurnRateContainer: {
        marginTop: '2px',
      },
      paymentMethodCardNumber: {
        display: 'none',
      },
      razorpayPGColor: '#00B899',
      razorpayPGBackdropColor: '#00B899',
      cancellationPointRefundMessage: {
        backgroundColor: 'var(--content-on-light-extra-low-emphasis)',
        color: 'var(--content-on-light-low-emphasis-500)',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      },
    },
    config: {
      paymentMethodContainerHeading: 'Payment method',
      paymentMethodContainerNote: 'Discount is applicable on Card Payout only!',
      payUsingCardTitle: 'Pay using Card/UPI',
      payWithPointsAndCardTitle: 'Pay using your Fi-coins + Card/UPI',
      rewardsPointsUsedDesc: 'Used Fi-coins',
      availablePointsDesc: 'Available Fi-coins',
      billDetailsHeading: 'Bill Details',
      billDetailsGcTotalLabel: 'Giftcard Total',
      billDetailsMemTotalLabel: 'Membership Total',
      valueOfRewardPointsLabel: 'Value of Fi-coins used',
      backButtonIcon: 'chevron-left',
      redeemablePointsDesc: 'Redeemable Fi-coins',
      cancellationPointRefundMessage:
        'In case of payment failure/cancellation, any deducted Fi-Coins will be available for use within 20 minutes',
    },
  },
  giftcardRedemption: {
    footer: {
      style: {
        buyButton: {
          width: '200px',
          height: '40px',
          borderRadius: '20px',
          background: 'var(--interactive-light-primary-action)',
          boxShadow: '0 4px 0 0 var(--interactive--light-box-shadow)',
        },
        circleCheckIcon: {
          fill: 'var(--feedback-background-positive-high-contrast )',
          width: '0.75rem',
          height: '1rem',
        },
        discountLabelContainer: {
          backgroundColor: 'var(--supporting-moss-100)',
        },
      },
    },
    amountQuantityLabel: {
      style: {
        textTransform: 'uppercase',
        color: 'var(--surface-text-placeholder-low-contrast)',
        fontSize: '12px',
      },
    },
    amountQuantityComponent: {
      style: {
        incrementDecrement: {
          container: {
            border: '0',
          },
        },
      },
      config: {
        maximumOrderValueAllowed: 5,
        maxAllowedQuantityPerDenomination: 4,
        maxAllowedUniqueDenominations: 4,
      },
    },
  },
  membershipRedemption: {
    footer: {
      style: {
        buyButton: {
          width: '200px',
          height: '40px',
          borderRadius: '20px',
          background: 'var(--interactive-light-primary-action)',
          boxShadow: '0 4px 0 0 var(--interactive--light-box-shadow)',
        },
        circleCheckIcon: {
          fill: 'var(--feedback-background-positive-high-contrast )',
          width: '0.75rem',
          height: '1rem',
        },
        discountLabelContainer: {
          backgroundColor: 'var(--supporting-moss-100)',
        },
      },
      config: {},
    },
  },
  orderDetails: {
    homeNavigationPath: [''],
    metaInfoDrawerPanel: {},
    buyButton: {
      style: {
        width: '100%',
        fontSize: '1rem',
        borderRadius: '20px',
        background: 'var(--interactive-light-primary-action)',
        boxShadow: '0 4px 0 0 var(--interactive--light-box-shadow)',
      },
    },
    learnButton: {
      style: {
        color: 'var(--brand-primary-500)',
        padding: '0',
        marginBottom: '2rem',
      },
    },
    statusIcon: {
      style: {
        width: '1.14286rem',
        height: '1.14286rem',
      },
    },
    backArrow: {
      style: {
        fill: 'var(--surface-action-icon-low-contrast-active)',
        width: '1.42857rem',
      },
      name: 'chevron-left',
    },
    panel: {
      style: {
        container: {
          background: 'var(--neutrals-ivory-50)',
          'box-shadow': 'unset',
          'line-height': '1.5',
        },
        dropDownIcon: {
          width: '.875rem',
          height: '.875rem',
        },
      },
    },
    topBar: {
      style: {
        background: 'var(--surface-a)',
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
      },
    },
  },
  orderHistory: {
    pageLayout: {
      moduleChipsVisible: true,
      chipOptions: [
        {
          displayName: 'Gift card',
          paramName: 'GiftCardBooking',
        },
      ],
      dateFormat: 'dd MMM yyyy',
    },
    navBar: {
      style: {
        backgroundColor: 'var(--background-dark-base)',
        color: 'var(--surface-a)',
      },
    },
    navBarTitle: {},
    chip: {
      style: {
        active: {
          container: {
            width: 'auto',
            whiteSpace: 'nowrap',
            border: 'unset',
            color: 'var(--surface-a)',
            backgroundColor: 'var(--interactive-light-primary-action)',
            margin: '0 1rem 1.2rem 0',
          },
          label: {
            fontWeight: '600',
          },
        },
        inActive: {
          container: {
            width: 'auto',
            whiteSpace: 'nowrap',
            border: 'unset',
            color: 'var(--surface-a)',
            backgroundColor: 'var(--inactive-gray)',
            margin: '0 1rem 1.2rem 0',
          },
          label: {
            fontWeight: '600',
          },
        },
      },
    },
    backArrow: {
      style: {
        fill: 'var(--surface-a)',
        width: '1.42857rem',
      },
      name: 'chevron-left',
      navigationPath: [''],
    },
    statusIcon: {
      style: {
        width: '0.85714rem',
        height: '0.85714rem',
      },
    },
    benefitButton: {
      style: {
        padding: '.2rem 0',
        fontWeight: '600',
        fontSize: '.86rem',
        color: 'var(--interactive-light-green-text)',
      },
    },
    card: {
      card: {
        padding: '0.7rem 0',
      },
      title: {
        fontWeight: '700',
        fontSize: '0.86rem',
      },
    },
    divider: {
      style: {
        border: '0',
        borderTop: '.5px solid var(--neutrals-ivory-50)',
      },
    },
  },
  orderStatus: {
    buyButton: {
      style: {
        width: '100%',
        fontSize: '1rem',
        borderRadius: '20px',
        background: 'var(--interactive-light-primary-action)',
        boxShadow: '0 4px 0 0 var(--interactive--light-box-shadow)',
      },
    },
    benefitButton: {
      style: {
        padding: '.2rem 0',
        fontWeight: '700',
        fontSize: '.86rem',
        color: 'var(--interactive-light-primary-action)',
      },
    },
    card: {
      container: {
        background: 'var(--surface-a) !important',
        borderRadius: '20px !important',
      },
      title: {
        color: 'var(--content-on-light-high-emphasis-850)',
        fontWeight: '600',
        fontSize: '0.86rem',
      },
    },
    statusIcon: {
      style: {
        width: '3.42rem',
        height: ' 3.42rem',
      },
    },
    cardStatusIcon: {
      style: {
        lineHeight: '1.8',
      },
    },
    homeNavigationPath: ['/'],
  },
  offerDetails: {
    config: {},
    style: {
      panelContainer: {},
      panelDropDownIcon: {},
      backButtonContainer: {},
    },
  },
  paymentStatus: {
    style: {
      statusIcon: {
        success: {
          width: '72px',
          height: '72px',
          fill: 'var(--supporting-moss-400)',
        },
        error: {
          width: '72px',
          height: '72px',
          fill: 'var(--feedback-background-negative-high-contrast-hover)',
        },
      },
    },
  },
  pointsLedger: {
    earnMore: {
      container: {
        config: { label: '' },
      },
    },
  },
  offersListing: {
    card: {},
  },
  tokenExpired: {
    config: {
      title: 'Your session has expired',
      tokenExpiredIcon: 'hour-glass',
      description: 'Please re-authenticate to continue',
      reAuthenticateCtaButton: {
        isRedirectedFromApp: true,
      },
    },
    style: {
      tokenExpiredIcon: {
        width: '60px',
        height: 'auto',
        fill: 'var(--primary-color)',
      },
      reAuthenticateCtaButton: {
        width: '160px',
        height: '50px',
      },
    },
  },
  offerRedemption: {},
  shellListing: {},
};
