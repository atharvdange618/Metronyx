import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Headset,
  Code,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#8B2703]">
                METRONYX
              </h1>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#8B2703]">
                INDUSTRIAL IT SOLUTIONS
              </h2>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-[#8B2703] font-medium mt-4">
                TRANSFORM YOUR MANUFACTURING OPERATIONS WITH CUTTING-EDGE IT
                SOLUTIONS!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-[#8B2703] hover:bg-[#6d1e02]">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#8B2703] text-[#8B2703] hover:bg-[#8B2703] hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8B2703]">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive IT solutions tailored for industrial and
              manufacturing environments
            </p>
          </div>

          {/* Service 1 */}
          <div className="grid gap-8 md:grid-cols-2 items-center mb-12 p-6 rounded-lg bg-[#2A8B8B]">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#FFCC66] p-2 shadow-lg">
                <Code className="h-10 w-10 text-[#8B2703]" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                CUSTOMIZED SOFTWARE DEVELOPMENT
              </h3>
              <p className="text-gray-100">
                Tailored software solutions designed to meet specific business
                needs, offering flexibility with any technology as per customer
                requirements.
              </p>
              <Link href="/services#software-development">
                <Button variant="secondary" className="mt-4">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/software.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Customized Software Development"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid gap-8 md:grid-cols-2 items-center mb-12 p-6 rounded-lg bg-[#D64E12]">
            <div className="flex justify-center md:order-last">
              <Image
                src="/monitoring.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Real-time Data Monitoring"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#FFCC66] p-2 shadow-lg">
                <BarChart3 className="h-10 w-10 text-[#8B2703]" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                REAL-TIME DATA MONITORING AND ANALYTICS USING POWER BI
              </h3>
              <p className="text-gray-100">
                Power BI enables real-time data monitoring and analytics,
                providing actionable insights with seamless integration and
                flexibility to meet diverse customer requirements.
              </p>
              <Link href="/services#data-monitoring">
                <Button variant="secondary" className="mt-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid gap-8 md:grid-cols-2 items-center mb-12 p-6 rounded-lg bg-[#2A8B8B]">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#FFCC66] p-2 shadow-lg">
                <BrainCircuit className="h-10 w-10 text-[#8B2703]" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                PREDICTIVE MAINTENANCE AND AI-DRIVEN INSIGHTS
              </h3>
              <p className="text-gray-100">
                Leverage predictive maintenance and AI-driven insights to
                minimize downtime, optimize performance, and make proactive
                decisions with tailored solutions for diverse customer needs.
              </p>
              <Link href="/services#predictive-maintenance">
                <Button variant="secondary" className="mt-4">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/ai.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Predictive Maintenance"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid gap-8 md:grid-cols-2 items-center mb-12 p-6 rounded-lg bg-[#D64E12]">
            <div className="flex justify-center md:order-last">
              <Image
                src="/maintenance.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Maintenance Support"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#FFCC66] p-2 shadow-lg">
                <Headset className="h-10 w-10 text-[#8B2703]" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                FULL TIME MAINTENANCE SUPPORT
              </h3>
              <p className="text-gray-100">
                Comprehensive maintenance support for all delivered projects,
                ensuring reliability, seamless performance, and rapid issue
                resolution with solutions tailored to customer requirements.
              </p>
              <Link href="/services#maintenance-support">
                <Button variant="secondary" className="mt-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#8B2703]">
                Why Choose METRONYX?
              </h2>
              <p className="text-lg text-[#8B2703]">
                At METRONYX, we understand the unique challenges faced by
                manufacturing industries. Our solutions are designed to address
                these challenges head-on, providing you with the tools you need
                to succeed in today's competitive landscape.
              </p>
              <ul className="space-y-2 text-[#8B2703]">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Industry expertise and specialized knowledge
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Customized solutions tailored to your specific needs
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Cutting-edge technology and innovative approaches
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Dedicated support and maintenance
                </li>
              </ul>
              <Link href="/about">
                <Button className="bg-[#8B2703] hover:bg-[#6d1e02] mt-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/stats.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Industrial Manufacturing"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8B2703]">
                Ready to Transform Your Operations?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Contact us today to discuss how METRONYX can help optimize your
                manufacturing processes.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-[#8B2703] hover:bg-[#6d1e02]">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
