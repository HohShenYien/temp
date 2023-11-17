"use client";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Integration = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const onLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 500);
  };

  return (
    <div className="">
      <div className="fixed left-0 right-0 top-0 z-10 flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-400 bg-black px-4 shadow-sm">
        <Link href="./">
          <div className="flex items-center">
            <Image
              src="/sap.png"
              alt="logo"
              className="mr-4"
              width={100}
              height={40}
            />
          </div>
        </Link>
        <div>Welcome, Makan Mesra</div>
      </div>
      <div className="mx-auto max-w-xl text-black">
        <div className="mb-4 mt-16 flex items-center text-2xl">
          <Image
            src="/gero.png"
            alt="Gero"
            className="mr-3 rounded-full"
            width="120"
            height="120"
          />
          <div className="mt-2">
            Connecting <span className="font-semibold">Gero</span> to{" "}
            <span className="font-semibold">Makan Mesra</span>
          </div>
        </div>
        {!completed ? (
          <>
            <div>
              <div className="mb-4 text-xl font-semibold">
                {"Let's connect Gero"}
              </div>
            </div>
            <div>The following permissions are required</div>
            <ul className="mt-3 pl-8">
              <li className="list-disc text-lg">
                Allow <span className="font-semibold text-black">Gero</span> to
                view your products.
              </li>
              <li className="list-disc text-lg">
                Allow <span className="font-semibold text-black">Gero</span> to
                access your service providers.
              </li>
              <li className="list-disc text-lg">
                Allow <span className="font-semibold text-black">Gero</span> to
                view your supplychain information.
              </li>
            </ul>
            <div className="mb-4 mt-12 text-sm text-slate-600">
              Select <span className="font-semibold text-black">Connect</span>{" "}
              below to get started using{" "}
              <span className="font-semibold text-black">Gero</span>
            </div>
            <div className="flex justify-between">
              <Button
                variant="outline"
                className="!rounded-full border-gray-600 !px-12 !py-3 text-gray-600"
              >
                No, thanks
              </Button>
              <Button
                className="!rounded-full bg-blue-600 !px-12 !py-3 hover:bg-blue-800 active:bg-blue-900"
                onClick={onLoading}
                loading={loading}
              >
                Connect
              </Button>
            </div>
          </>
        ) : (
          <div>
            <div className="text-xl">Connected successfully!</div>
            <div className="mt-3 text-slate-600">
              You can safely close this tab now.
            </div>
          </div>
        )}

        <div className="mt-16 text-xs text-slate-500">
          SAP and Gero may share the information in your SAP and Gero accounts.
          Your relationship to Gero and its use of your information are subject
          to {"Gero's"} <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>. To learn more about how Intuit uses
          your data. see Our Privacy Statement. Disconnect Gero anytime from
          your MyApps page.
        </div>
        <div className="mt-8 flex justify-between">
          <div className="text-xs font-thin text-slate-500">
            ©2023 SAP. All rights reserved.
          </div>
          <Image
            src="/sap.png"
            alt="logo"
            className="mr-4"
            width={60}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Integration;
