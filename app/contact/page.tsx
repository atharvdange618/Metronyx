"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <>
      <section className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#8B2703]">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-[#8B2703]">
                Get in touch with our team to discuss how we can help transform
                your manufacturing operations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-[#8B2703]">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and one of our experts will get back
                  to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Smith" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.smith@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 1234567890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="METRONYX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">
                        Customized Software Development
                      </SelectItem>
                      <SelectItem value="data">
                        Real-Time Data Monitoring
                      </SelectItem>
                      <SelectItem value="predictive">
                        Predictive Maintenance
                      </SelectItem>
                      <SelectItem value="support">
                        Maintenance Support
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or requirements"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B2703] hover:bg-[#6d1e02]"
                >
                  {formSubmitted ? (
                    <span className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#8B2703]">
                    Contact Information
                  </CardTitle>
                  <CardDescription>Reach out to us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        info@metronyx.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +91 1234567890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Industrial Way
                        <br />
                        Tech Park, Suite 456
                        <br />
                        Innovation City, IC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#8B2703]">
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>
                    Quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">
                      How long does implementation typically take?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Implementation timelines vary based on project complexity.
                      Simple solutions can be deployed in a few weeks, while
                      more complex systems may take several months. We'll
                      provide a detailed timeline during our initial
                      consultation.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">
                      Do you offer training for our team?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we provide comprehensive training as part of our
                      implementation process. We ensure your team is comfortable
                      and proficient with the new systems before we complete the
                      project.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">
                      What industries do you serve?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We specialize in manufacturing and industrial sectors,
                      including automotive, aerospace, pharmaceuticals, food and
                      beverage, electronics, and more. Our solutions are
                      adaptable to various industrial environments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#8B2703]">
                Ready to Transform Your Operations?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-[#8B2703]">
                Contact us today to schedule a consultation with one of our
                experts.
              </p>
            </div>
            <Button className="bg-[#8B2703] hover:bg-[#6d1e02]">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
