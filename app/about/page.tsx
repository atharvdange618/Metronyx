import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Award } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#111111]">
                About METRONYX
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-[#111111]">
                Transforming industrial operations through innovative IT
                solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-[#111111]">
                Our Story
              </h2>
              <div className="space-y-4">
                <p>
                  METRONYX was founded with a clear vision: to bridge the gap
                  between industrial operations and cutting-edge information
                  technology. We recognized that while manufacturing and
                  industrial sectors were advancing rapidly in terms of
                  machinery and production techniques, many were still relying
                  on outdated IT systems that couldn't keep pace with their
                  evolving needs.
                </p>
                <p>
                  Our team of industry experts and technology specialists came
                  together to create solutions specifically designed for the
                  unique challenges faced by manufacturing operations. We
                  understand that in industrial environments, efficiency,
                  reliability, and precision are not just desirable—they're
                  essential.
                </p>
                {/* <p>
                  Since our inception, we've partnered with dozens of
                  manufacturing companies across various sectors, helping them
                  transform their operations through customized software,
                  real-time data analytics, predictive maintenance, and
                  comprehensive support services.
                </p> */}
                <p>
                  Today, METRONYX stands as a trusted partner for industrial
                  businesses looking to leverage technology to gain a
                  competitive edge, optimize processes, and drive sustainable
                  growth.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about.svg?height=500&width=500"
                width={400}
                height={400}
                alt="METRONYX Team"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#111111]">
              Our Mission, Vision & Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#2A8B8B] p-2 shadow-lg mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">
                Our Mission
              </h3>
              <p>
                To empower industrial and manufacturing operations with
                innovative IT solutions that drive efficiency, reduce costs, and
                accelerate growth. We are committed to delivering technology
                that works as hard as the industries we serve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#D64E12] p-2 shadow-lg mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">
                Our Vision
              </h3>
              <p>
                To be the leading provider of industrial IT solutions,
                recognized for our expertise, innovation, and commitment to
                customer success. We envision a future where every manufacturing
                operation leverages the full potential of technology to achieve
                unprecedented levels of performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#2A8B8B] p-2 shadow-lg mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">
                Our Values
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#2A8B8B]" />
                  <span>
                    <strong>Excellence:</strong> We strive for excellence in
                    everything we do
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#2A8B8B]" />
                  <span>
                    <strong>Innovation:</strong> We embrace new ideas and
                    technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#2A8B8B]" />
                  <span>
                    <strong>Integrity:</strong> We operate with honesty and
                    transparency
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#2A8B8B]" />
                  <span>
                    <strong>Partnership:</strong> We build lasting relationships
                    with our clients
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#111111]">
              Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Meet the experts behind METRONYX's innovative solutions
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Pruthviraj Shinde</h3>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Atharv Dange</h3>
                <p className="text-sm text-muted-foreground">CTO & Founder</p>
              </div>
            </div>

            {/* <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">
                  Head of Software Development
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground">
                  Lead Data Scientist
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-[#111111]">
                Why Choose METRONYX?
              </h2>
              <div className="space-y-4">
                <p className="text-[#111111]">
                  At METRONYX, we understand the unique challenges faced by
                  manufacturing and industrial operations. Our solutions are
                  specifically designed to address these challenges, providing
                  you with the tools you need to succeed in today's competitive
                  landscape.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#111111]" />
                    <span className="text-[#111111]">
                      <strong>Industry Expertise:</strong> Our team has deep
                      knowledge of manufacturing processes and challenges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#111111]" />
                    <span className="text-[#111111]">
                      <strong>Customized Solutions:</strong> We tailor our
                      solutions to your specific needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#111111]" />
                    <span className="text-[#111111]">
                      <strong>Cutting-Edge Technology:</strong> We leverage the
                      latest technologies to deliver superior results
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#111111]" />
                    <span className="text-[#111111]">
                      <strong>Proven Track Record:</strong> We have a history of
                      successful implementations across various industries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 mt-1 text-[#111111]" />
                    <span className="text-[#111111]">
                      <strong>Dedicated Support:</strong> We provide
                      comprehensive support to ensure your success
                    </span>
                  </li>
                </ul>
              </div>
              <Link href="/contact">
                <Button className="bg-[#111111] hover:bg-[#6d1e02] mt-4">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/story.svg?height=500&width=500"
                width={500}
                height={500}
                alt="About Us"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
