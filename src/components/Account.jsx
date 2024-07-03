import React from "react";
import Container from "./Container";
import Title from "./Title";
import { accountData } from "@/constants";
import Image from 'next/image';

const Account = () => {
  return (
    <section className="bg-brandBlue">
      <Container
        id="account"
        aria-label="Jihan Qurban Law Firm Services"
        className="py-20 sm:py-32"
      >
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title
            title="Our Services"
            className="text-2xl text-brandBeige font-bold"
          />
          <p className="mt-2 text-lg text-white">
            This is what we offer when dealing with us 
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {accountData.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-brandBeige p-8 group cursor-pointer"
            >
              <Image src={item.icon} alt={item.name} width={250} height={32}  />
              {/* <h3 className="mt-6 font-bold text-white">
                {item.name}
              </h3> */}
              <p className="mt-2 text-white">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Account;
