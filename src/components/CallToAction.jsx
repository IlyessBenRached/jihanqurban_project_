import React from "react";
import CircleBackground from "./CircleBackground";
import Container from "./Container";
import Title from "./Title";
import Button from "./Button"; // Import the Button component
import { FaEnvelope } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section
      id="contact-us-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <CircleBackground color="#C3AA8B" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Title
            title="Get in touch with our legal experts"
            className="text-3xl text-brandBeige sm:text-4xl"
          />
          <p className="mt-4 text-lg text-gray-300">
            Contact us today to receive professional legal advice and support tailored to your needs. Our team of experienced lawyers is here to help you navigate through any legal challenges you may face.
          </p>
          <div className="mt-8 flex justify-center"> {/* Center the button */}
            <Button variant="outline" color="brandBeige" href="mailto:your-email@example.com">
              <FaEnvelope className="text-xl" />
              <span className="ml-2.5 font-bold">Contact Us</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
