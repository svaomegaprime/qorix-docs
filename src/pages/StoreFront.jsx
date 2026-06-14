import React from "react";
import soon from "../images/comming-soon.png";
import fourteen from "../images/14.png";
import storeone from "../images/store-1.png";
import storetwo from "../images/store-2.png";
import storethree from "../images/store-3.png";
import storefore from "../images/store-4.png";
import storefive from "../images/store-5.png";

export default function StoreFront() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Store Front Integration
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        Seamlessly integrate Qorix Popup into your online store and start
        engaging your customers with personalized popups that drive conversions
        and boost sales.
      </p>
      {/* <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        The merchant Experience Flow
      </h3> */}

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Popup
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        When all parts are completed, the popup will show on the merchant&apos;s
        store. Basically, the popup is shown on the storefront with a close
        button (cross button) and a &quot;no thanks&quot; hyperlink text.
      </p>
      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={storeone}
                alt="Popup flow"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">Popup flow</div>
          </div>
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Sidebar
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        If the customer clicks either button, it will show a sidebar with a
        message. This sidebar is clickable until they subscribe to the popup. It
        shows for every session per user.
      </p>
      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={storetwo}
                alt="Sidebar flow"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">Sidebar flow</div>
          </div>
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Discount code popup
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        If the customer subscribes with their email, they instantly see a
        discount code popup. When the client continues with shopping, it shows a
        reminder bar with the discount code. It shows until the customer uses
        the discount code. Also, merchants can set up a discount code usage
        limit to control how many times a code can be used.
      </p>
      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={storethree}
                alt="Discount code popup flow"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">
              Discount code popup flow
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Reminderbar discount show
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        After the subscription, when the customer continues shopping, a reminder
        bar will show on the storefront with the discount code. This reminder
        bar will persist until the customer uses the discount code during
        checkout, ensuring they are constantly reminded of the offer and
        encouraging them to take advantage of it.
      </p>
      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={storefore}
                alt="Checkout discount apply"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">
              Checkout discount apply
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        How to applies?
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        After all of these processes are completed, the customer can apply the
        discount code on the checkout page.
      </p>
      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={storefive}
                alt="Checkout discount apply"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">
              Checkout discount apply
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#ff7c7c] p-6 dark:bg-[#ff7c7c]/60 border border-stone-200/75 dark:border-stone-700/50">
        <p className="text-lg font-normal  dark:text-taupe-300">
          <strong>Please note:</strong> To prevent conflicts, the popup will not
          display if a discount is already applied. To test multiple times, use
          a private window or create a new campaign to see the popup again on the same store.
        </p>
      </div>
    </>
  );
}
