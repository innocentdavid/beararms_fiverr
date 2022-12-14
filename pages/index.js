/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

//import images
import GridImage from "../public/images/grid.png";
import Bank from "../public/images/bank.png";
import Shield from "../public/images/shield.png";
import Money from "../public/images/money.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Content>
      <Grid>
        <Image src={GridImage} />
      </Grid>
      <div className="isolate">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-semibold text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Log in
                </a>
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full bg-purple-100 py-1.5 px-4 text-sm text-white leading-6 ring-1">
                    <span className="text-gray-600">
                      We just released a new feature{" "}
                      <a href="#" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Sign Up <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-6xl">
                    Stay in control of your spending
                  </h1>
                  <p className="mt-6 text-slate-200 text-lg leading-8 text-gray-600 sm:text-center">
                    The no-stress solution to control your spending habits
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <Link href="/dashboard">
                      <CTA>
                        Connect Bank <span aria-hidden="true">&rarr;</span>
                      </CTA>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="container mx-auto px-12">
        <FeatureList>
          <Feature>
            <Image src={Bank} width={40} height={40} alt="" />
            <FeatureContent>
              <FeatureTitle>Connect your Bank</FeatureTitle>
              <Description>
                Beararms connects to any of your financial institution for easy
                integrations.
              </Description>
            </FeatureContent>
          </Feature>

          <Feature>
            <Image src={Money} width={40} height={40} alt="" />
            <FeatureContent>
              <FeatureTitle>View your Spending</FeatureTitle>
              <Description>
                Beararms connects to any of your financial institution for easy
                integrations.
              </Description>
            </FeatureContent>
          </Feature>

          <Feature>
            <Image src={Shield} width={40} height={40} alt="" />
            <FeatureContent>
              <FeatureTitle>Create a monthly budget</FeatureTitle>
              <Description>
                Beararms connects to any of your financial institution for easy
                integrations.
              </Description>
            </FeatureContent>
          </Feature>
        </FeatureList>
      </div>
    </Content>
  );
}

const CTA = styled.a`
  color: #fff;
  text-align: center;
  width: 400px;
  padding: 10px 15px;
  background: #6f68f2;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.09s all ease-in;

  &:hover {
    opacity: 0.8;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;

  @media only screen and (max-width: 768px) {
    scale: 2;
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: none;
  }
`;

const Feature = styled.div`
  display: gird;
  grid-template-rows: max-content 1fr;
  padding: 15px;
  background: linear-gradient(240.83deg, #1a1a23 25.25%, #191930 84.83%);
  border: 1px solid #2d2d48;
  border-radius: 8px;
`;

const FeatureContent = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  padding-top: 15px;
`;

const FeatureTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #c6c6ca;
`;
