"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnnotationIcon,
  VideoCameraIcon,
  ChartSquareBarIcon,
  DeviceMobileIcon,
  ChatAlt2Icon,
  PresentationChartBarIcon,
} from "@heroicons/react/outline";
import { NavBar } from "../components/NavBar"; // Import the NavBar component
import { menuItems } from "./config/menuItems";
import { services } from "./config/menuItems";
export default function Home() {
  // const services =
  //   menuItems.find((item) => item.title === "Services")?.subMenuItems || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      {/* Navigation Bar */}
      <NavBar menuItems={menuItems} />

      <header
        id="home"
        className="relative w-full h-96 pt-24 animate__animated animate__fadeIn"
      >
        <Image
          src="/Images/Hero image.jpg"
          alt="Digital Marketing"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 bg-background bg-opacity-75 text-foreground text-center py-16 animate__animated animate__fadeInDown">
          <h1 className="text-5xl font-extrabold">
            Welcome to Ideariver Marketing Agency
          </h1>
          <p className="mt-4 text-2xl">
            Your Partner in Elevating Your Digital Presence
          </p>
        </div>
      </header>

      {/* About Us Section */}
      <section
        id="about"
        className="bg-card py-16 w-full animate__animated animate__fadeIn"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-card-foreground">
            About Us
          </h2>
          <Image
            src="/Images/team-photo.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="mx-auto rounded-lg mb-8"
          />
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-card-foreground">
            At Ideariver Marketing Agency, we specialize in providing
            comprehensive digital marketing solutions tailored to meet the
            unique needs of businesses in Windsor, Ontario, Canada. Our expert
            team is dedicated to helping you achieve your marketing goals
            through innovative strategies and cutting-edge technology.
          </p>
        </div>
      </section>

      <section id="services" className="bg-muted py-16 w-full">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-muted-foreground animate__animated animate__fadeInUp">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex flex-col bg-card p-8 rounded-lg shadow-lg  transition-shadow   h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 text-foreground">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary ml-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-card-foreground flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className="bg-card py-16 w-full animate__animated animate__fadeInUp"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-card-foreground">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary">
                Expert Team
              </h3>
              <p className="text-lg leading-relaxed text-card-foreground">
                Our team of experienced professionals is dedicated to delivering
                results and helping your business grow.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary">
                Tailored Solutions
              </h3>
              <p className="text-lg leading-relaxed text-card-foreground">
                We customize our services to meet your specific needs and goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary">
                Cutting-Edge Technology
              </h3>
              <p className="text-lg leading-relaxed text-card-foreground">
                We leverage the latest digital marketing tools and technologies
                to give you a competitive edge.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary">
                Local Focus
              </h3>
              <p className="text-lg leading-relaxed text-card-foreground">
                As a Windsor-based agency, we understand the local market and
                can provide insights and strategies tailored to your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="bg-muted py-16 w-full animate__animated animate__fadeInUp"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-muted-foreground">
            Contact Me
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
            Ready to take your digital presence to the next level? Get in touch
            with me today to discuss how I can help your business thrive.
          </p>
          <div className="text-center space-y-4 text-muted-foreground">
            <p className="text-lg">
              <strong>Email:</strong> ideariver.hope@gmail.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> (437) 808-5666
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
