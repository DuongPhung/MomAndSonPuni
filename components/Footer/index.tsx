"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { menuSocial, menus } from "./components/config";
import { IconBottom, IconTop } from "./components";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
      data-wow-delay=".1s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-2 flex items-center">
                <Image
                  src="/images/logo/2.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <h2 className="text-xl font-bold text-primary dark:text-white">
                  PUNI Spa
                </h2>
              </Link>
              <p className="dark:text-body-color-dark mb-12 text-base leading-relaxed text-body-color">
                Dịch vụ chăm sóc mẹ và bé tại Puni Spa.
              </p>
              <div className="flex items-center">
                {menuSocial.map((menu, index) => (
                  <a
                    href={menu.link}
                    key={index}
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    {menu.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {menus.map((menu, index) => (
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12" key={index}>
              <div className="mb-12 lg:mb-16">
                <h3 className="mb-10 text-xl font-bold text-primary dark:text-white">
                  {menu.title}
                </h3>
                <ul>
                  {menu.children.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.link}
                        className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            ©{moment().format('YYYY')} PUNI SPA's
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-14 z-[-1]">
        <IconTop />
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        <IconBottom />
      </div>
    </footer>
  );
};

export default Footer;
