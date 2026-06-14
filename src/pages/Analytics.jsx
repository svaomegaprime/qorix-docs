import React from "react";
import soon from "../images/comming-soon.png";
import Thirteen from "../images/13.png";

export default function Analytics() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Analytics Page
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        This is the most powerful feature of the app, providing a deep dive into
        how your popups are performing.
      </p>

      <h2
        id="popup-performance-metrics"
        className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
      >
        Popup Performance Metrics
      </h2>
      <ul className="list-disc pl-5 space-y-2 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Popup Views:</strong> The total number of times your campaigns
          have been seen by visitors.
        </li>
        <li>
          <strong>Subscriber Collections:</strong> The total number of leads
          captured across all popups.
        </li>
        <li>
          <strong>Conversion Rate:</strong> The percentage of visitors who
          turned into subscribers.
        </li>
        <li>
          <strong>Active Popups:</strong> A quick count of how many campaigns
          are currently live on your store.
        </li>
      </ul>

      <h2
        id="visual-data"
        className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
      >
        Visual Data & Overview
      </h2>
      <ul className="list-disc pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Performance Overview Chart:</strong> A powerful visual chart
          that tracks Views and Subscribers by month and date. Use filters to
          see exactly when your store had the most engagement.
        </li>
        <li>
          <strong>Campaign Breakdown:</strong> View a detailed list of
          individual campaign performance, comparing Signups, Views, and
          Conversion Rates side-by-side to see which template works best.
        </li>
      </ul>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img src={Thirteen} alt="Analytics overview and chart" className="not-prose md:my-[1rem]" />
            </div>
            <div className="text-xs text-stone-400">
              Analytics overview and chart
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
