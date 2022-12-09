/* This example requires Tailwind CSS v3.0+ */
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styled from "styled-components";

import Modal from "../components/Modal";

import CardImage from "../public/images/cards.png";
import TipsImage from "../public/images/tips.png";

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [budget, setBudget] = useState("800");

  return (
    <div>
      <Body>
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
                    <span className="sr-only">BearArms</span>
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

                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <a
                    href="#"
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Log in
                  </a>
                </div>
              </nav>
              <Dialog
                as="div"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <Dialog.Panel
                  focus="true"
                  className="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden"
                >
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
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
        </div>

        <Container>
          <Row>
            <Split>
              <LeftSide>
                <TitleContent>
                  <h2>Overview</h2>
                  <p>Manage and track your card spending.</p>
                </TitleContent>
                <BreakLine />
                <Image src={CardImage} alt="Cards" />
                <SplitTwo>
                  <TitleContent>
                    <h2>Budget</h2>
                    <p>Manage your budget.</p>
                  </TitleContent>
                  <Goal onClick={() => setShowModal(true)}>New Goal</Goal>
                  <Modal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                  ></Modal>
                </SplitTwo>
                <BreakLine />
                <BudgetSplit>
                  <SplitThree>
                    <CurrentBalance>
                      <h4>Current Balance</h4>
                      <p>$8,000.00</p>
                    </CurrentBalance>
                    <CurrentBalance>
                      <h4>Current Balance</h4>
                      <p>${budget}</p>
                    </CurrentBalance>
                  </SplitThree>
                </BudgetSplit>
                <TitleContent>
                  <h2>Tips on Budgeting</h2>
                  <p>Learn how to save using the Beararms technique.</p>
                </TitleContent>
                <BreakLine />
                <TipsWrapper>
                  <Image src={TipsImage} alt="Cards" />
                </TipsWrapper>
              </LeftSide>
              <p>sw</p>
            </Split>
          </Row>
        </Container>
      </Body>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1280px;
  }
`;

const Body = styled.div`
  color: #101828;
  background: #fff;
  min-height: 100vh;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-gap: 10px;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 10px;
`;

const SplitTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 10px;
`;

const SplitThree = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
`;

const LeftSide = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content min-content min-content;
  grid-gap: 15px;

  img {
    width: 100%;
  }
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    color: #667085;
  }
`;

const BreakLine = styled.div`
  width: 100%;
  height: 1px;
  background: #667075;
`;

const Goal = styled.button`
  display: block;
  cursor: pointer;
  padding: 5px 10px;
  background: #6f68f2;
  border: 1px solid #9893ff;
  color: #fff;
  border-radius: 8px;
`;

const BudgetSplit = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
`;

const CurrentBalance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.25rem;
  font-weight: 600;
  grid-gap: 10px;

  p {
    justify-self: end;
  }
`;

const TipsWrapper = styled.div`
  display: block;
  cursor: pointer;
  transition: 0.1s all ease-in;

  &:hover {
    transform: scale(0.99);
    opacity: 0.8;
  }
`;
