"use client";

import { useState } from "react";
import { subscriptionData, categoryConfig } from "@/lib/services";
import type {
  Currency,
  Service,
  SelectedServices,
  CategoryKey,
} from "@/lib/services";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardAction, CardContent } from "@/components/ui/card";
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

import { DollarSign, Euro, Building2 } from "lucide-react";
import { A } from "@/components/typography";

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
            <A url="https://fmhy.net/beginners-guide">
              Find free alternatives here
            </A>
            .
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Category</TableHead>
              <TableHead className="text-right">Monthly</TableHead>
              <TableHead className="text-right">Yearly</TableHead>
              {/*<TableHead className="text-right">Lifetime (60yrs)</TableHead>*/}
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
