import React from "react";
import soon from "../images/comming-soon.png";
import twelve from "../images/12.png";

export default function Subscribers() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Subscribers Page
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        Manage your leads and prepare your data for external marketing
        campaigns.
      </p>

      <ul className="list-disc pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Subscriber Insights:</strong> View your Total Subscribers and
          track growth for the Last 30 Days.
        </li>
        <li>
          <strong>Status Distribution:</strong> See a percentage breakdown of
          your subscriber types (Standard vs. Spin Wheel).
        </li>
        <li>
          <strong>Comprehensive Lead Table:</strong> A professional, paginated
          table showing the Subscriber Name, Email, Phone, Campaign Source,
          Date, and Discount Status (to see if their code is Active or Expired).
        </li>
        <li>
          <strong>Data Export:</strong> Use the Export CSV feature to download
          your entire subscriber list perfect for importing into your email
          marketing platform.
        </li>
      </ul>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img src={twelve} alt="Subscribers Page overview" className="not-prose md:my-[1rem]" />
            </div>
            <div className="text-xs text-stone-400">
              Subscribers Page overview
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
