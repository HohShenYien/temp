"use client";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import style from "./mesra.module.css";
import { Button, clsx } from "@mantine/core";
import { BsTreeFill, BsTree } from "react-icons/bs";

const sides = [
  "bg-[#8617CA]",
  "bg-[#20419A]",
  "bg-[#53C1BA]",
  "bg-[#858585]",
  "bg-[#BFD730]",
  "bg-[#20939A]",
  "bg-[#1BBCF5]",
];

const Product = () => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-[50%] z-10 translate-y-[-50%]">
        {sides.map((color, idx) => (
          <div key={idx} className={clsx(color, "px-3 py-[6px]")}>
            <Image
              src={`/test${idx + 1}.svg`}
              alt="temp"
              width="40"
              height="40"
            />
          </div>
        ))}
      </div>
      <div className="z-10 flex items-center bg-[#7CCBB8] px-6 py-5">
        <Link href="./">
          <div className="flex items-center">
            <Image
              src="/petronas-normal.svg"
              alt="logo"
              className="mr-8"
              width={150}
              height={60}
            />
          </div>
        </Link>
        <div className="flex space-x-8">
          {[
            "For Consumer",
            "For Business",
            "Investor Relations",
            "Sustainability",
            "About Us",
          ].map((link, idx) => (
            <div key={idx} className="text-lg font-medium uppercase text-white">
              {link}
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center text-lg text-white">
          EN <BsChevronDown className="ml-3" />
        </div>
        <div className="relative overflow-visible">
          <div
            className={
              "relative ml-8 w-[52px] overflow-visible rounded-full bg-black " +
              style.chatbot
            }
          >
            <Image
              src="/chatbot.png"
              alt="chatbot"
              width={52}
              height={52}
              className="rounded-full bg-black"
            />
          </div>
        </div>
      </div>
      <div className="relative min-h-[800px] w-full bg-[#EDE0AB] px-40 pt-[72px]">
        <Image
          src="/banner.jpg"
          alt="Banner"
          width="1000"
          height="600"
          className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative z-10 flex items-center space-x-2 text-sm uppercase text-gray-600">
          <TiHome size="14" />
          <div>/</div>
          <div>For Consumers</div>
          <div>/</div>
          <div>Makan @ Mesra</div>
          <div>/</div>
          <div>Butter Croissant</div>
        </div>
        <div className="relative z-10 ml-6 mt-8 flex space-x-12">
          <Image
            src="/croissant.png"
            alt="Croissant"
            width="480"
            height="480"
          />
          <div>
            <h1 className="text-4xl font-semibold text-gray-700">
              Butter Croissant
            </h1>
            <div className="mt-4 text-gray-600">
              Savor the blissful simplicity of Makan Mesra&apos;s Butter
              Croissant—an authentic Malaysian delight that perfectly balances
              flaky layers with a heavenly buttery taste. Baked to golden
              perfection, each bite is a celebration of local craftsmanship and
              a delightful blend of crispiness and melt-in-your-mouth goodness.
              Whether it&apos;s for breakfast or an anytime treat, our Butter
              Croissant promises to transport you to a world of flavor, where
              every moment is a taste of Malaysia&apos;s finest. Experience the
              joy of Makan Mesra&apos;s Butter Croissant—a true Malaysian
              indulgence.
            </div>
            <div className="mt-6 text-3xl text-black">RM 3.90</div>
            <Button color="cyan" className="mt-6 uppercase" size="lg">
              Get it now
            </Button>
            <div className="mt-6 space-x-2 bg-white px-4 py-2">
              <div className="flex">
                <Image
                  src="/screenshot3.png"
                  alt="Gero"
                  width="180"
                  height="80"
                  className="object-contain"
                />
                <div>
                  <div className="text-sm text-[#01A14B]">
                    This product emits 30g of CO<sub>2</sub> lesser than similar
                    products.
                  </div>
                  <Image
                    src="/screenshot.png"
                    alt="Gero"
                    width="480"
                    height="80"
                    className=""
                  />
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/screenshot2.png"
                  alt="Gero"
                  width="160"
                  height="80"
                  className="mr-5 object-contain"
                />
                <div className="text-[#01A14B]">
                  comparable to the carbon footprint a <b>5 minute</b> hot
                  shower.{" "}
                  <span className="cursor-pointer text-blue-400 underline">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
