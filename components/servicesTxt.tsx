"use client";

import { useState } from "react";
import { subscriptionData, categoryConfig } from "@/lib/services";
import type { Currency, Service, CategoryKey } from "@/lib/services";

import { Button } from "@/components/ui/button";
import { CardHeader, CardAction, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DollarSign, Euro, Building2 } from "lucide-react";
import { H4 } from "./typography";

const ServicesTxt: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>(
    {}
  );

  const isServiceAvailable = (service: Service): boolean => {
    return service.monthly_cost[currency] > 0;
  };

  const handleCurrencyChange = (value: string): void => {
    setCurrency(value as Currency);
  };

  return (
    <>
      <CardHeader className="p-0">
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

      <CardContent className="space-y-4 p-0">
        {(Object.keys(categoryConfig) as CategoryKey[]).map(
          (categoryKey: CategoryKey) => {
            const config = categoryConfig[categoryKey];
            const Icon = config.icon;
            return (
              <div key={categoryKey}>
                <H4>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {config.label}
                  </div>
                </H4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(
                    subscriptionData.subscriptions[categoryKey]
                  ).map(([serviceId, service]: [string, Service]) => {
                    const isAvailable: boolean = isServiceAvailable(service);

                    return (
                      <Button
                        key={serviceId}
                        variant="outline"
                        className={`flex items-center h-auto ${
                          !isAvailable ? "opacity-50 cursor-not-allowed" : ""
                        }`}
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
                              <span className="text-xs">{service.note}</span>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </CardContent>
    </>
  );
};

export default ServicesTxt;
