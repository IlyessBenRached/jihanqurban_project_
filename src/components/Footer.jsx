"use client";
import React from "react";
import Link from "next/link";
import Container from "./Container";
import { TextField } from "./Fields";
import Button from "./Button";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black pt-16 md:pt-20 lg:pt-24">
      <Container>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16 mx-auto text-center">
              <div className="mb-8 inline-block">
                <Logo className="w-full" />
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 text-center md:text-left">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-brandBeige">
                Important Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="#home"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-primary"
                  >
                    
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#account"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 text-center md:text-left">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-brandBeige">
                About
              </h2>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-primary"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12 text-center md:text-left">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-brandBeige">
                Contact Information
              </h2>
              <ul>
                <li className="mb-4 flex items-center justify-center md:justify-start text-base text-white font-bold duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2 h-5 w-5 fill-current text-brandBeige"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                  jihan@jmq-lawfirm.com
                </li>
                <li className="flex items-center justify-center md:justify-start text-base text-white font-bold duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2 h-5 w-5 fill-current text-brandBeige"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  0534055353
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-brandBeige to-transparent"></div>
        <div className="py-8 flex items-center justify-center">
          <a
          /* &copy; Copyright {new Date().getFullYear()}. All rights reserved. */
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-brandBeige duration-300 hover:text-primary"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-brandBeige duration-300 hover:text-primary"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-brandBeige duration-300 hover:text-primary"
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              className="fill-current"
            >
              <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
            </svg>
          </a>
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandBeige duration-300 hover:text-primary"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              className="fill-current"
            >
              <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
            </svg>
          </a>
        </div>
        <p className="mt-1 text-xs font-bold text-brandBeige text-center">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
