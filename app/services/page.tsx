import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Headset,
  CheckCircle,
  Code,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#8B2703]">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-[#8B2703]">
                Comprehensive IT solutions tailored for industrial and
                manufacturing environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section id="software-development" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#2A8B8B] p-2 shadow-lg">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#8B2703]">
                Customized Software Development
              </h2>
              <p className="text-lg text-muted-foreground">
                Tailored software solutions designed to meet specific business
                needs, offering flexibility with any technology as per customer
                requirements.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Our Approach
                </h3>
                <p>
                  At METRONYX, we understand that every manufacturing operation
                  has unique requirements. Our customized software development
                  service is designed to address your specific challenges with
                  solutions that are built from the ground up to meet your
                  needs.
                </p>
                <p>
                  We work closely with your team to understand your processes,
                  identify pain points, and develop software solutions that
                  streamline operations, improve efficiency, and drive growth.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Tailored Solutions:</strong> Custom-built software
                      designed specifically for your business needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Technology Flexibility:</strong> Development using
                      the most appropriate technologies for your requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Scalable Architecture:</strong> Solutions that
                      grow with your business
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Integration Capabilities:</strong> Seamless
                      integration with existing systems and third-party
                      applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>User-Friendly Interfaces:</strong> Intuitive
                      designs that minimize training requirements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/software.svg?height=500&width=500"
                width={450}
                height={450}
                alt="Customized Software Development"
                className="rounded-lg"
              />

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Technologies We Use
                </h3>
                <p>
                  Our development team is proficient in a wide range of
                  technologies, including but not limited to:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    Java
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    Express.js
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    Redis
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    BullMQ
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    TailwindCSS
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    Power BI
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    React
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-[#2A8B8B]" />
                    SQL/NoSQL Databases
                  </li>
                </ul>
              </div>

              {/* <div className="bg-[#2A8B8B] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Case Study: Manufacturing Process Optimization
                </h3>
                <p className="mb-4">
                  A leading manufacturing company was struggling with
                  inefficient production processes and data silos. METRONYX
                  developed a custom ERP solution that integrated all
                  departments, automated workflows, and provided real-time
                  visibility into operations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Productivity Increase</span>
                    <span>35%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost Reduction</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI Timeline</span>
                    <span>9 months</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Data Monitoring */}
      <section
        id="data-monitoring"
        className="w-full py-12 md:py-24 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6 md:order-last">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#D64E12] p-2 shadow-lg">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#8B2703]">
                Real-Time Data Monitoring and Analytics Using Power BI
              </h2>
              <p className="text-lg text-muted-foreground">
                Power BI enables real-time data monitoring and analytics,
                providing actionable insights with seamless integration and
                flexibility to meet diverse customer requirements.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Our Approach
                </h3>
                <p>
                  In today's data-driven manufacturing environment, having
                  access to real-time information is crucial for making informed
                  decisions. Our Power BI solutions provide comprehensive
                  dashboards and reports that give you instant visibility into
                  your operations.
                </p>
                <p>
                  We design and implement custom Power BI solutions that connect
                  to your existing data sources, transform raw data into
                  meaningful insights, and present information in an intuitive,
                  visual format.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/monitoring.svg?height=500&width=500"
                width={430}
                height={430}
                alt="Real-time Data Monitoring"
                className="rounded-lg"
              />

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Real-Time Dashboards:</strong> Live monitoring of
                      key performance indicators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Data Integration:</strong> Connect to multiple
                      data sources for a unified view
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Advanced Analytics:</strong> Predictive analytics
                      and trend analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Custom Reporting:</strong> Tailored reports for
                      different stakeholders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Mobile Access:</strong> Access insights on any
                      device, anywhere
                    </span>
                  </li>
                </ul>
              </div>

              {/* <div className="bg-[#D64E12] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Case Study: Production Efficiency Monitoring
                </h3>
                <p className="mb-4">
                  A manufacturing plant needed better visibility into their
                  production line efficiency. METRONYX implemented a Power BI
                  solution that collected data from IoT sensors and machine PLCs
                  to provide real-time monitoring of OEE (Overall Equipment
                  Effectiveness).
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>OEE Improvement</span>
                    <span>22%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "22%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Downtime Reduction</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Decision-Making Speed</span>
                    <span>65% faster</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Maintenance */}
      <section id="predictive-maintenance" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#2A8B8B] p-2 shadow-lg">
                <BrainCircuit className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#8B2703]">
                Predictive Maintenance and AI-Driven Insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Leverage predictive maintenance and AI-driven insights to
                minimize downtime, optimize performance, and make proactive
                decisions with tailored solutions for diverse customer needs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Our Approach
                </h3>
                <p>
                  Unplanned downtime can cost manufacturing operations thousands
                  of dollars per minute. Our predictive maintenance solutions
                  use advanced AI algorithms to analyze equipment data and
                  predict potential failures before they occur.
                </p>
                <p>
                  By combining IoT sensors, machine learning, and domain
                  expertise, we help you transition from reactive to predictive
                  maintenance, significantly reducing downtime and maintenance
                  costs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Failure Prediction:</strong> Early warning system
                      for potential equipment failures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Condition Monitoring:</strong> Real-time
                      monitoring of equipment health
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Maintenance Optimization:</strong> AI-driven
                      maintenance scheduling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Root Cause Analysis:</strong> Identify underlying
                      issues affecting performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#2A8B8B] mt-0.5" />
                    <span>
                      <strong>Performance Optimization:</strong> Recommendations
                      for improving equipment efficiency
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/ai.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Predictive Maintenance"
                className="rounded-lg"
              />
              {/* <div className="bg-[#2A8B8B] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Case Study: Equipment Failure Prevention
                </h3>
                <p className="mb-4">
                  A large industrial manufacturer was experiencing frequent
                  unexpected equipment failures, resulting in costly downtime.
                  METRONYX implemented a predictive maintenance solution that
                  analyzed vibration, temperature, and other sensor data to
                  predict potential failures.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Unplanned Downtime</span>
                    <span>78% reduction</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance Costs</span>
                    <span>32% reduction</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment Lifespan</span>
                    <span>15% increase</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Support */}
      <section
        id="maintenance-support"
        className="w-full py-12 md:py-24 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6 md:order-last">
              <div className="inline-flex items-center justify-center rounded-lg bg-[#D64E12] p-2 shadow-lg">
                <Headset className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#8B2703]">
                Full Time Maintenance Support
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive maintenance support for all delivered projects,
                ensuring reliability, seamless performance, and rapid issue
                resolution with solutions tailored to customer requirements.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Our Approach
                </h3>
                <p>
                  We believe that successful IT solutions require ongoing
                  support and maintenance. Our dedicated support team ensures
                  that your systems continue to operate at peak performance long
                  after implementation.
                </p>
                <p>
                  With flexible support packages tailored to your needs, we
                  provide proactive monitoring, regular updates, and rapid
                  response to any issues that may arise.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B2703]">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>24/7 Support:</strong> Round-the-clock assistance
                      for critical systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Proactive Monitoring:</strong> Continuous system
                      monitoring to identify potential issues
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Regular Updates:</strong> System updates and
                      security patches
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Performance Optimization:</strong> Ongoing system
                      tuning for optimal performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#D64E12] mt-0.5" />
                    <span>
                      <strong>Knowledge Transfer:</strong> Training and
                      documentation for your team
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/maintenance.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Maintenance Support"
                className="rounded-lg"
              />
              {/* <div className="bg-[#D64E12] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Case Study: Continuous Improvement Program
                </h3>
                <p className="mb-4">
                  After implementing a custom MES (Manufacturing Execution
                  System), a client partnered with METRONYX for ongoing support
                  and enhancement. Our team provided 24/7 support, regular
                  updates, and continuous improvements based on user feedback
                  and changing business needs.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>System Uptime</span>
                    <span>99.98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "99.98%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Issue Resolution Time</span>
                    <span>85% reduction</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>User Satisfaction</span>
                    <span>96%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-[#FFCC66] h-2.5 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-[#FFCC66]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#8B2703]">
                Ready to Transform Your Manufacturing Operations?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-[#8B2703]">
                Contact us today to discuss how our services can help optimize
                your processes and drive growth.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-[#8B2703] hover:bg-[#6d1e02]">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
