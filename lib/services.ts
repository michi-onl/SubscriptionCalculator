import {
  MonitorPlay,
  ChevronsLeftRightEllipsis,
  Volume2,
  Laptop,
  LucideIcon,
} from "lucide-react";

export type Currency = "USD" | "EUR";

export interface CurrencyPricing {
  USD: number;
  EUR: number;
}

export interface Service {
  name: string;
  monthly_cost: CurrencyPricing;
  plan: string;
  note?: string;
}

export interface ServiceCategory {
  [serviceId: string]: Service;
}

export interface SubscriptionData {
  subscriptions: {
    streaming_services: ServiceCategory;
    music_and_audio: ServiceCategory;
    software_and_apps: ServiceCategory;
    communication: ServiceCategory;
  };
  calculation_settings: {
    selected_currency: Currency;
    supported_currencies: Currency[];
    tax_rate: number;
  };
}

export interface SelectedServices {
  [serviceId: string]: boolean;
}

export type CategoryKey = keyof SubscriptionData["subscriptions"];

export interface CategoryConfig {
  [key: string]: {
    label: string;
    icon: LucideIcon;
  };
}

export const subscriptionData: SubscriptionData = {
  subscriptions: {
    streaming_services: {
      netflix: {
        name: "Netflix",
        monthly_cost: {
          USD: 15.49,
          EUR: 12.99,
        },
        plan: "Standard",
      },
      amazon_prime_video: {
        name: "Amazon Prime Video",
        monthly_cost: {
          USD: 8.99,
          EUR: 8.99,
        },
        plan: "Monthly",
      },
      disney_plus: {
        name: "Disney+",
        monthly_cost: {
          USD: 7.99,
          EUR: 8.99,
        },
        plan: "Monthly",
      },
      hulu: {
        name: "Hulu",
        monthly_cost: {
          USD: 7.99,
          EUR: 0.0,
        },
        plan: "Basic with Ads",
        note: "Not available in EU",
      },
      hbo_max: {
        name: "HBO Max",
        monthly_cost: {
          USD: 15.99,
          EUR: 8.99,
        },
        plan: "Ad-Free",
      },
      apple_tv_plus: {
        name: "Apple TV+",
        monthly_cost: {
          USD: 6.99,
          EUR: 6.99,
        },
        plan: "Monthly",
      },
      paramount_plus: {
        name: "Paramount+",
        monthly_cost: {
          USD: 5.99,
          EUR: 5.99,
        },
        plan: "Essential",
      },
      youtube_premium: {
        name: "YouTube Premium",
        monthly_cost: {
          USD: 13.99,
          EUR: 11.99,
        },
        plan: "Individual",
      },
    },
    music_and_audio: {
      spotify: {
        name: "Spotify",
        monthly_cost: {
          USD: 10.99,
          EUR: 9.99,
        },
        plan: "Premium",
      },
      apple_music: {
        name: "Apple Music",
        monthly_cost: {
          USD: 10.99,
          EUR: 9.99,
        },
        plan: "Individual",
      },
      amazon_music: {
        name: "Amazon Music",
        monthly_cost: {
          USD: 9.99,
          EUR: 9.99,
        },
        plan: "Unlimited",
      },
      pandora: {
        name: "Pandora",
        monthly_cost: {
          USD: 4.99,
          EUR: 0.0,
        },
        plan: "Plus",
        note: "Not available in EU",
      },
      audible: {
        name: "Audible",
        monthly_cost: {
          USD: 14.95,
          EUR: 9.95,
        },
        plan: "Plus",
      },
      siriusxm: {
        name: "SiriusXM",
        monthly_cost: {
          USD: 16.99,
          EUR: 0.0,
        },
        plan: "All Access",
        note: "Not available in EU",
      },
    },
    software_and_apps: {
      microsoft_365: {
        name: "Microsoft 365",
        monthly_cost: {
          USD: 6.99,
          EUR: 6.99,
        },
        plan: "Personal",
      },
      adobe_creative_suite: {
        name: "Adobe Creative Suite",
        monthly_cost: {
          USD: 52.99,
          EUR: 59.99,
        },
        plan: "All Apps",
      },
      dropbox: {
        name: "Dropbox",
        monthly_cost: {
          USD: 9.99,
          EUR: 9.99,
        },
        plan: "Plus",
      },
      canva_pro: {
        name: "Canva Pro",
        monthly_cost: {
          USD: 12.99,
          EUR: 11.99,
        },
        plan: "Pro",
      },
      grammarly: {
        name: "Grammarly",
        monthly_cost: {
          USD: 12.0,
          EUR: 12.0,
        },
        plan: "Premium",
      },
      lastpass: {
        name: "LastPass",
        monthly_cost: {
          USD: 3.0,
          EUR: 3.0,
        },
        plan: "Premium",
      },
    },
    communication: {
      internet: {
        name: "Internet",
        monthly_cost: {
          USD: 60.0,
          EUR: 45.0,
        },
        plan: "High Speed",
      },
      cable_tv: {
        name: "Cable TV",
        monthly_cost: {
          USD: 90.0,
          EUR: 60.0,
        },
        plan: "HD",
      },
      mobile_phone: {
        name: "Mobile Phone",
        monthly_cost: {
          USD: 45.0,
          EUR: 25.0,
        },
        plan: "Unlimited",
      },
    },
  },
  calculation_settings: {
    selected_currency: "USD",
    supported_currencies: ["USD", "EUR"],
    tax_rate: 0.0,
  },
};

export const categoryConfig: CategoryConfig = {
  streaming_services: { label: "Streaming", icon: MonitorPlay },
  music_and_audio: { label: "Music & Audio", icon: Volume2 },
  software_and_apps: { label: "Software & Apps", icon: Laptop },
  communication: { label: "Communication", icon: ChevronsLeftRightEllipsis },
};
