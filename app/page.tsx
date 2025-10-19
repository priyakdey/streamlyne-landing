import { Container } from "@/components/container";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Asterisk,
  Calendar,
  CheckCircle2,
  Cloud,
  Focus,
  FolderOpen,
  LayoutTemplate,
  Lightbulb,
  Lock,
  Search,
  Zap
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto text-center">
            <div
              className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-4 shadow-lg shadow-primary/20">
                            <span className="relative flex h-3 w-3">
                                <span
                                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span
                                  className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                            </span>
              <span
                className="text-base font-semibold tracking-wider text-primary sm:text-lg">
                                COMING SOON
                            </span>
            </div>
            <h1
              className="mb-6 flex flex-wrap items-center justify-center gap-3 font-bold tracking-tight sm:gap-4">
              <Image
                src="/assets/brand/logo.png"
                alt="Streamlyne"
                width={220}
                height={50}
                className="sm:h-[60px] sm:w-[264px]"
                priority
              />
              <span className="whitespace-nowrap text-4xl sm:text-5xl">your creative flow</span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              A unified creative workspace that helps streamlynes your workflow
              for content creation.
              Store notes, assets, and ideas in a single space - without
              switching between apps or losing context.
            </p>
            <div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="outline" asChild>
                <a href="#features">See Features</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Add later - most likely going to add youtube promo videos */}
      {/* /!* Product Preview *!/ */}
      {/* <section className="border-t py-20"> */}
      {/*   <Container> */}
      {/*     <div className="mb-16 text-center"> */}
      {/*       <SectionHeading>Where Ideas Turn Into Videos</SectionHeading> */}
      {/*       <p className="mt-4 text-lg text-muted-foreground"> */}
      {/*         A sneak peek at what's coming */}
      {/*       </p> */}
      {/*     </div> */}
      {/*     <div className="grid gap-8 md:grid-cols-2"> */}
      {/*       <ScreenshotFrame */}
      {/*         src="/placeholder-screenshot-1.png" */}
      {/*         alt="Streamlyne markdown editor" */}
      {/*         caption="Write and reference assets inline" */}
      {/*       /> */}
      {/*       <ScreenshotFrame */}
      {/*         src="/placeholder-screenshot-2.png" */}
      {/*         alt="Streamlyne asset library" */}
      {/*         caption="Your media library, organized" */}
      {/*       /> */}
      {/*     </div> */}
      {/*     <p className="mt-8 text-center text-sm text-muted-foreground"> */}
      {/*       💡 Replace these placeholder images with actual product screenshots */}
      {/*       at{" "} */}
      {/*       <code>/public/placeholder-screenshot-*.png</code> */}
      {/*     </p> */}
      {/*   </Container> */}
      {/* </section> */}

      {/* Feature Pillars */}
      <section id="features" className="border-t py-20">
        <Container>
          <div className="mb-16 text-center">
            <SectionHeading>Everything You Need</SectionHeading>
            <p className="mt-4 text-lg text-muted-foreground">
              Built for creators who value simplicity and power
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={FolderOpen}
              title="Creative Assets Library"
              description="Upload and organize all your creative assets - thumbnails, clips, images, and files - in one clean library."
            />
            <FeatureCard
              icon={Lightbulb}
              title="Ideas Inbox"
              description="Jot down quick thoughts, hooks, or content ideas the moment they appear. Keep them safe until you're ready to turn them into something real."
            />
            <FeatureCard
              icon={Calendar}
              title="Content Planner"
              description="Plan your content calendar, track progress, and never miss a deadline. From concept to publication."
            />
            <FeatureCard
              icon={Search}
              title="Powerful Search"
              description="Find anything instantly with smart search across all your notes, assets, and ideas. Tags and filters included."
            />
            <FeatureCard
              icon={Zap}
              title="Fast Performance"
              description="Built for speed. Whether you're uploading assets or searching through thousands of notes, it just works."
            />
            <FeatureCard
              icon={Cloud}
              title="Cloud Sync"
              description="Access your work from anywhere. Real-time sync across all your devices keeps you in flow."
            />
            <FeatureCard
              icon={Lock}
              title="Secure & Private"
              description="Your creative work is yours. Industry-standard encryption and privacy-first design keep it that way."
            />
            <FeatureCard
              icon={Focus}
              title="Focus Mode"
              description="Enter a distraction-free workspace designed for clarity and deep focus."
            />
            <FeatureCard
              icon={LayoutTemplate}
              title="Templates"
              description="Start faster with ready-made templates for videos, blogs, and planning. Customize them to fit your creative flow."
            />
          </div>
        </Container>
      </section>

      {/* Most likely later */}
      {/* /!* Roadmap Preview *!/ */}
      {/* <section className="border-t py-20"> */}
      {/*   <Container> */}
      {/*     <div className="mb-16 text-center"> */}
      {/*       <SectionHeading>What's Coming</SectionHeading> */}
      {/*       <p className="mt-4 text-lg text-muted-foreground"> */}
      {/*         We're building in the open */}
      {/*       </p> */}
      {/*     </div> */}
      {/*     <div className="grid gap-8 md:grid-cols-3"> */}
      {/*       <Card> */}
      {/*         <CardHeader> */}
      {/*           <Badge variant="default" className="mb-2 w-fit"> */}
      {/*             Now */}
      {/*           </Badge> */}
      {/*           <CardTitle>Foundation</CardTitle> */}
      {/*         </CardHeader> */}
      {/*         <CardContent> */}
      {/*           <ul className="space-y-2 text-sm text-muted-foreground"> */}
      {/*             <li>• Landing page</li> */}
      {/*             <li>• Notes MVP with markdown</li> */}
      {/*             <li>• Basic file storage</li> */}
      {/*             <li>• Google OAuth integration</li> */}
      {/*           </ul> */}
      {/*         </CardContent> */}
      {/*       </Card> */}

      {/*       <Card> */}
      {/*         <CardHeader> */}
      {/*           <Badge variant="secondary" className="mb-2 w-fit"> */}
      {/*             Next */}
      {/*           </Badge> */}
      {/*           <CardTitle>Core Features</CardTitle> */}
      {/*         </CardHeader> */}
      {/*         <CardContent> */}
      {/*           <ul className="space-y-2 text-sm text-muted-foreground"> */}
      {/*             <li>• File uploads & management</li> */}
      {/*             <li>• Tags & smart search</li> */}
      {/*             <li>• Ideas inbox</li> */}
      {/*           </ul> */}
      {/*         </CardContent> */}
      {/*       </Card> */}

      {/*       <Card> */}
      {/*         <CardHeader> */}
      {/*           <Badge variant="outline" className="mb-2 w-fit"> */}
      {/*             Later */}
      {/*           </Badge> */}
      {/*           <CardTitle>Advanced</CardTitle> */}
      {/*         </CardHeader> */}
      {/*         <CardContent> */}
      {/*           <ul className="space-y-2 text-sm text-muted-foreground"> */}
      {/*             <li>• Content planner</li> */}
      {/*             <li>• Collaboration features</li> */}
      {/*             <li>• API & SDK access</li> */}
      {/*           </ul> */}
      {/*         </CardContent> */}
      {/*       </Card> */}
      {/*     </div> */}
      {/*     <div className="mt-8 text-center"> */}
      {/*       <Button variant="outline" asChild> */}
      {/*         <Link href="/roadmap">View Full Roadmap</Link> */}
      {/*       </Button> */}
      {/*     </div> */}
      {/*   </Container> */}
      {/* </section> */}

      {/* Pricing Section */}
      <section id="pricing" className="border-t py-20">
        <Container>
          <div className="mx-auto">
            <div className="mb-12 text-center">
              <SectionHeading>Pricing Built on Principles</SectionHeading>
            </div>

            <div className="space-y-8">
              <Card
                className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">Simple &
                        Transparent</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        No hidden fees, no complex tiers, no confusion
                      </CardDescription>
                    </div>
                    <Zap className="h-8 w-8 text-primary opacity-50" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're designing pricing that's straightforward and honest.
                    You'll know
                    exactly what you're paying for, with no surprises along the
                    way.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">Generous Free
                        Tier</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        Build trust before asking for commitment
                      </CardDescription>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-primary opacity-50" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe you should experience the value before paying a
                    cent. Our free
                    tier will be substantial enough for you to fall in love with
                    Streamlyne.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">Quality Over
                        Quantity</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        Every plan receives the same exceptional service
                      </CardDescription>
                    </div>
                    <Badge className="h-8 shrink-0 px-3 text-sm">Our
                      Promise</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Whatever amount you pay, you deserve quality service. Price
                    determines
                    quantity - storage, features, limits - but never quality.
                    Every user gets the
                    same reliable, polished experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground">
                We're finalizing the details to ensure our pricing reflects
                these values.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Stay tuned for updates as we get closer to launch.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t py-20">
        <Container>
          <div className="mb-16 text-center">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
          </div>
          <div className="mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Streamlyne?</AccordionTrigger>
                <AccordionContent>
                  Streamlyne is your all-in-one creative hub that combines
                  note-taking,
                  asset management, and content planning. It's designed to
                  eliminate
                  context switching and keep your creative workflow flowing
                  smoothly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>When will Streamlyne
                  launch?</AccordionTrigger>
                <AccordionContent>
                  We're currently in active development. Follow us on social
                  media or check
                  back here for updates on our launch timeline and beta access.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Will there be a free plan?</AccordionTrigger>
                <AccordionContent>
                  We're designing our pricing to be fair and accessible. Details
                  will be
                  announced closer to launch, but our goal is to offer options
                  for
                  creators at every stage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What file types are
                  supported?</AccordionTrigger>
                <AccordionContent>
                  Streamlyne will support all major media formats including
                  images
                  (JPG, PNG, GIF, WebP), videos (MP4, MOV, WebM), audio (MP3,
                  WAV), and
                  documents. We're building with creators in mind.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I import my existing
                  notes?</AccordionTrigger>
                <AccordionContent>
                  Yes! We're building import tools for popular formats including
                  markdown files, Notion exports, and more. Your content will
                  come
                  with you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use industry-standard encryption for data at
                  rest and
                  in transit. Your creative work is yours, and we take security
                  seriously.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t py-20">
        <Container>
          <div
            className="mx-auto rounded-3xl border bg-gradient-to-br from-primary/5 to-primary/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Streamlyne Your Creative Flow?
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Be part of the first wave to shape the first version of
              Streamlyne.
            </p>
            <p
              className="mt-8 flex items-center justify-center gap-1 text-md text-red-500 italic">
              <Asterisk className="h-5 w-5" />
              <span>Early access coming soon</span>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
