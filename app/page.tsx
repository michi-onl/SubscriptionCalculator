import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SubscriptionCalculator from "@/components/calculator";

import {
  H1,
  H3,
  H4,
  P,
  Blockquote,
  List,
  InlineCode,
} from "@/components/typography";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function FMHY() {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-2 gap-8 m-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <H1>Subscription Cost Calculator</H1>
          </CardTitle>
          <CardDescription>
            Track your monthly subscription expenses with this free calculator.
            Research shows most people underestimate their subscription costs by
            79%.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <H3>Calculate Your Subscription Costs</H3>
            <P>
              Select your active subscriptions from popular services to see your
              monthly and yearly totals. The calculator includes current pricing
              for services across streaming, music, software, and lifestyle
              categories.
            </P>
          </div>

          <div>
            <H4>Features:</H4>
            <List>
              <li>
                Current pricing for the most popular subscription services
              </li>
              <li>Monthly and annual cost calculations</li>
              <li>Privacy-focused - no data stored or shared</li>
              <li>Completely free and open source</li>
            </List>
          </div>

          <Accordion type="multiple">
            <AccordionItem value="section-1">
              <AccordionTrigger>
                <H3>Understanding Subscription Costs</H3>
              </AccordionTrigger>
              <AccordionContent>
                <P>
                  Digital subscriptions have become a significant household
                  expense. Services that cost{" "}
                  <InlineCode>$9.99/month</InlineCode> individually can add up
                  quickly when combined.
                </P>
                <Blockquote>
                  Research indicates the average household spends over $273
                  monthly on subscriptions, totaling $3,276 annually.
                </Blockquote>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section-2">
              <AccordionTrigger>
                <H3>Managing Your Subscription Expenses</H3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8">
                  <div>
                    <H4>Get a Complete Overview</H4>
                    <P>
                      Calculate your total monthly and yearly subscription costs
                      to understand your actual spending patterns.
                    </P>
                  </div>

                  <div>
                    <H4>Identify Unused Services</H4>
                    <P>
                      Review your subscriptions to find services you rarely use
                      or have forgotten about entirely.
                    </P>
                  </div>

                  <div>
                    <H4>Make Informed Choices</H4>
                    <P>
                      Use the data to decide which subscriptions provide value
                      and which ones you can cancel or replace with free
                      alternatives.
                    </P>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section-3">
              <AccordionTrigger>
                <H3>How to Use This Calculator</H3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8">
                  <div>
                    <H4>Step 1: Select Services</H4>
                    <P>
                      Choose your active subscriptions from the comprehensive
                      list of streaming, music, software, and lifestyle
                      services.
                    </P>
                  </div>
                  <div>
                    <H4>Step 2: Review Totals</H4>
                    <P>
                      View your monthly and yearly subscription costs calculated
                      with current pricing data.
                    </P>
                  </div>
                  <div>
                    <H4>Step 3: Make Informed Decisions</H4>
                    <P>
                      Use the results to evaluate which subscriptions provide
                      value for your needs and budget.
                    </P>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/*<AccordionItem value="section-4">
              <AccordionTrigger>
                <H3>Supported Services</H3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8">
                  <div>
                    <H4>Streaming Services:</H4>
                    <P>
                      Netflix, Amazon Prime Video, Disney+, Hulu, HBO Max, Apple
                      TV+, Paramount+, YouTube Premium
                    </P>
                  </div>

                  <div>
                    <H4>Music & Audio:</H4>
                    <P>
                      Spotify, Apple Music, Amazon Music, Pandora, Audible,
                      SiriusXM
                    </P>
                  </div>

                  <div>
                    <H4>Software & Productivity:</H4>
                    <P>
                      Microsoft 365, Adobe Creative Suite, Dropbox, Canva Pro,
                      Grammarly, LastPass
                    </P>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>*/}

            <AccordionItem value="section-5">
              <AccordionTrigger>
                <H3>Free Alternatives</H3>
              </AccordionTrigger>
              <AccordionContent>
                <P>
                  Consider exploring free alternatives to paid subscriptions.
                  The{" "}
                  <a
                    href="https://fmhy.net/beginners-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    FMHY Beginners Guide
                  </a>{" "}
                  by freemediaheckyeah provides a comprehensive collection of
                  free services and resources across various categories,
                  including streaming, music, software, and productivity tools.
                </P>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section-7">
              <AccordionTrigger>
                <H3>Frequently Asked Questions</H3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8">
                  <div>
                    <H4>Is this calculator really free?</H4>
                    <P>
                      Yes, completely free with no hidden fees or registration
                      required.
                    </P>
                  </div>

                  <div>
                    <H4>Do you store my subscription information?</H4>
                    <P>
                      No, all calculations happen in your browser and nothing is
                      stored or shared.
                    </P>
                  </div>

                  <div>
                    <H4>How accurate are the subscription prices?</H4>
                    <P>
                      Prices are updated regularly from official sources to
                      maintain current accuracy.
                    </P>
                  </div>

                  <div className="hidden">
                    <H4>Can I save my results?</H4>
                    <P>
                      You can save a summary of your calculations for future
                      reference.
                    </P>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <div className="text-center">
            <H3>Calculate Your Subscription Costs</H3>
            <P>
              Get a clear overview of your monthly subscription expenses and
              make informed decisions about your digital services.
            </P>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            <p>
              <strong className="flex items-center justify-center gap-2">
                Free • Updated Regularly • No Registration • Privacy-Focused •{" "}
                <a
                  href="https://github.com/michi-onl/SubscriptionCalculator"
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:text-blue-600"
                >
                  <SiGithub className="size-4" /> Open Source
                </a>
              </strong>
            </p>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <SubscriptionCalculator />
      </Card>
    </main>
  );
}
