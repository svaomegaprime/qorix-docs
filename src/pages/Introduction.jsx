import React from "react";

export default function Introduction() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Qorix Popup
      </h1>
      <p className="mb-8 text-xl text-stone-600 dark:text-stone-400">
        User Documentation & Setup Guide
      </p>

      <div className="rounded-xl bg-stone-50 p-6 dark:bg-stone-800 border border-stone-200/75 dark:border-stone-700/50">
        <p className="text-lg font-normal  dark:text-taupe-300">
          <strong>Qorix Popup:</strong> Grow your email list with
          high-converting popups and Spin-to-win offers, instant discounts, and
          capture email for users that help to lead collect.
          <br />
          Qorix Popup helps you capture more leads and turn visitors into
          customers using customizable newsletter popups and engaging spin wheel
          campaigns. Reward subscribers with instant discounts, increase
          conversions, and create a seamless shopping experience with the option
          to apply a discount code on the checkout page. Also, you can see a
          good analytics feature for the conversion rate, and the list option
          for your email subscriber list, which boosts your sales for marketing.
          Simple to set up, powerful in results, perfect for growing stores.
        </p>
        <ul>
          <strong>Key Features:</strong>

          <li className="dark:text-taupe-300">
            Build high-converting newsletter popups in minutes.
          </li>
          <li className="dark:text-taupe-300">
            Capture emails with a customizable pop-up design.
          </li>
          <li className="dark:text-taupe-300">
            Offer instant discounts after email submission.
          </li>
          <li className="dark:text-taupe-300">
            Engage visitors with spin-to-win (wheel) pop-ups
          </li>
          <li className="dark:text-taupe-300">
            For the remainder bar, apply the discount code at checkout
          </li>
          <li className="dark:text-taupe-300">
            Manage campaigns easily from one dashboard
          </li>
        </ul>
      </div>
    </>
  );
}
