import React from "react";
import Container from "./Container";
import Title from "./Title";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";

const Feature = () => {
  return (
    <section
      id="features"
      aria-label="Jihan Qurban Law Firm Team"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title
            title="Our Legal Experts"
            className="text-brandBeige text-2xl"
          />
          <p className="mt-2 text-lg text-gray-400">
          Our team has extensive expertise in all legal areas, managing various companies and handling national and international arbitration.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Feature;
