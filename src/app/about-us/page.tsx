// src/app/about-us.tsx

import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-background">
      <section className="bg-card py-16 w-full">
        <div className="container mx-auto px-6 text-center ">
          <h1 className="text-4xl font-bold mb-8 text-foreground">About Me</h1>
          <div className="mb-8 flex justify-center ">
            <Image
              src="/Where to begin.jpg"
              alt="My Picture"
              width={1920}
              height={1080}
              className="shadow-lg  w-full lg:w-3/5"
            />
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Welcome to Ideariver Marketing Agency! My name is Nima, and I am the
            sole proprietor of this agency. With a passion for digital marketing
            and a dedication to helping businesses succeed, I specialize in
            providing comprehensive digital marketing solutions tailored to meet
            the unique needs of businesses in Windsor, Ontario, Canada.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
            My Mission
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            My mission is to help businesses grow and thrive in the digital age.
            I achieve this by leveraging cutting-edge technology and innovative
            strategies to deliver measurable results.
          </p>
          {/* <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Me?</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed max-w-3xl mx-auto">
            <li>
              <strong>Expertise</strong>: I have years of experience in the
              digital marketing industry.
            </li>
            <li>
              <strong>Tailored Solutions</strong>: I offer personalized services
              to meet your specific needs.
            </li>
            <li>
              <strong>Proven Results</strong>: I have a track record of
              delivering successful digital marketing campaigns.
            </li>
          </ul> */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
            Contact Me
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Ready to take your digital presence to the next level? Get in touch
            with me today to discuss how I can help your business thrive.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
