"use client";

import { useState } from "react";

import { CardHeader, CardAction, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  MonitorPlay,
  ChevronsLeftRightEllipsis,
  DollarSign,
  Euro,
  Volume2,
  Laptop,
  LucideIcon,
  Building2,
} from "lucide-react";

type Currency = "USD" | "EUR";

interface CurrencyPricing {
  USD: number;
  EUR: number;
}

interface Service {
  name: string;
  monthly_cost: CurrencyPricing;
  plan: string;
  note?: string;
}

interface ServiceCategory {
  [serviceId: string]: Service;
}

interface SubscriptionData {
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

interface SelectedServices {
  [serviceId: string]: boolean;
}

type CategoryKey = keyof SubscriptionData["subscriptions"];

interface CategoryConfig {
  [key: string]: {
    label: string;
    icon: LucideIcon;
  };
}

const subscriptionData: SubscriptionData = {
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

const categoryConfig: CategoryConfig = {
  streaming_services: { label: "Streaming", icon: MonitorPlay },
  music_and_audio: { label: "Music & Audio", icon: Volume2 },
  software_and_apps: { label: "Software & Apps", icon: Laptop },
  communication: { label: "Communication", icon: ChevronsLeftRightEllipsis },
};

const SubscriptionCalculator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedServices>(
    {}
  );
  const [currency, setCurrency] = useState<Currency>("USD");
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleService = (serviceId: string): void => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const calculateCategoryTotal = (category: CategoryKey): number => {
    return Object.entries(subscriptionData.subscriptions[category]).reduce(
      (total: number, [serviceId, service]: [string, Service]) => {
        const cost: number = service.monthly_cost[currency];
        return total + (selectedServices[serviceId] && cost > 0 ? cost : 0);
      },
      0
    );
  };

  const calculateGrandTotal = (): number => {
    return (
      Object.keys(subscriptionData.subscriptions) as CategoryKey[]
    ).reduce(
      (total: number, category: CategoryKey) =>
        total + calculateCategoryTotal(category),
      0
    );
  };

  const formatCurrency = (amount: number): string => {
    const symbol: string = currency === "USD" ? "$" : "€";
    return `${symbol}${amount.toFixed(2)}`;
  };

  const isServiceAvailable = (service: Service): boolean => {
    return service.monthly_cost[currency] > 0;
  };

  const handleCurrencyChange = (value: string): void => {
    setCurrency(value as Currency);
  };

  return (
    <>
      <CardHeader>
        <CardAction>
          <Select value={currency} onValueChange={handleCurrencyChange}>
            <SelectTrigger className="w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  USD
                </div>
              </SelectItem>
              <SelectItem value="EUR">
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4" />
                  EUR
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-6">
        <Table className="lg:w-1/2">
          <TableCaption>
            A table with an overview of your subscription costs.{" "}
            <a
              href="https://fmhy.net/beginners-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Find free alternatives here.
            </a>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Category</TableHead>
              <TableHead className="text-right">Monthly</TableHead>
              <TableHead className="text-right">Yearly</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(Object.keys(categoryConfig) as CategoryKey[]).map(
              (categoryKey: CategoryKey) => {
                const config = categoryConfig[categoryKey];
                const Icon = config.icon;
                return (
                  <TableRow key={categoryKey}>
                    <TableCell className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {config.label}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(calculateCategoryTotal(categoryKey))}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(calculateCategoryTotal(categoryKey) * 12)}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
            <TableRow className="font-bold">
              <TableCell>Total</TableCell>
              <TableCell className="text-right">
                {formatCurrency(calculateGrandTotal())}
              </TableCell>
              <TableCell className="text-right">
                {formatCurrency(calculateGrandTotal() * 12)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Service Selection */}
        <Accordion
          type="multiple"
          defaultValue={Object.keys(categoryConfig)}
          className="w-full"
        >
          {(Object.keys(categoryConfig) as CategoryKey[]).map(
            (categoryKey: CategoryKey) => {
              const config = categoryConfig[categoryKey];
              const Icon = config.icon;
              return (
                <AccordionItem key={categoryKey} value={categoryKey}>
                  <AccordionTrigger className="text-lg">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      {config.label}
                      <Badge variant="secondary">
                        {formatCurrency(calculateCategoryTotal(categoryKey))}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(
                        subscriptionData.subscriptions[categoryKey]
                      ).map(([serviceId, service]: [string, Service]) => {
                        const isSelected: boolean =
                          selectedServices[serviceId] || false;
                        const isAvailable: boolean =
                          isServiceAvailable(service);

                        return (
                          <Button
                            key={serviceId}
                            variant={isSelected ? "default" : "outline"}
                            className={`flex items-center h-auto  ${
                              !isAvailable
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() =>
                              isAvailable && toggleService(serviceId)
                            }
                            disabled={!isAvailable}
                          >
                            <div className="flex-shrink-0 size-7 border rounded p-1 mx-1">
                              {!imageErrors[serviceId] ? (
                                <img
                                  src={`https://cdn.simpleicons.org/${service.name
                                    .toLowerCase()
                                    .replace(/\s+/g, "")}`}
                                  onError={() => {
                                    setImageErrors((prev) => ({
                                      ...prev,
                                      [serviceId]: true,
                                    }));
                                  }}
                                  alt={service.name}
                                />
                              ) : (
                                <Building2 />
                              )}
                            </div>
                            <div className="flex flex-col text-left flex-grow min-w-0">
                              <div className="font-medium leading-tight truncate">
                                {service.name}
                              </div>
                              <div className="text-xs leading-tight text-muted-foreground">
                                {service.note && currency === "EUR" ? (
                                  <span className="text-xs">
                                    {service.note}
                                  </span>
                                ) : (
                                  <p className="opacity-80">
                                    {service.plan} -{" "}
                                    <span className="font-bold">
                                      {isAvailable
                                        ? formatCurrency(
                                            service.monthly_cost[currency]
                                          )
                                        : "N/A"}
                                    </span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            }
          )}
        </Accordion>
      </CardContent>
    </>
  );
};

export default SubscriptionCalculator;
