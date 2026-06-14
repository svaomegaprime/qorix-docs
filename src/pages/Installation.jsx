import React from "react";
import one from "../images/1.png";
import two from "../images/2.png";

export default function Installation() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Quick Setup & Installation
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        To allow popups to display on your storefront, you must enable the App
        Embed extension in your Shopify Theme.
      </p>

      <ol className="list-decimal pl-5 space-y-2 mb-6 text-stone-700 dark:text-stone-300">
        <li>
          From the Qorix Popup dashboard, locate the{" "}
          <strong>Quick setup guide</strong>.
        </li>
        <li>
          Click the <strong>Enable</strong> button.
        </li>
      </ol>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img src={one} alt="one" className="not-prose md:my-[1rem]" />
            </div>
            <div className="text-xs text-stone-400">
              Quick setup guide - Enable button
            </div>
          </div>
        </div>
      </div>

      <ol
        start="3"
        className="list-decimal pl-5 space-y-2 mb-6 text-stone-700 dark:text-stone-300"
      >
        <li>
          You will be redirected to your <strong>Shopify Theme Editor</strong>.
        </li>
        <li>
          Toggle <strong>Qorix Popup</strong> to <strong>ON</strong> and click{" "}
          <strong>Save</strong> in the top right corner.
        </li>
      </ol>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img src={two} alt="two"  className="not-prose md:my-[1rem]" />
            </div>
            <div className="text-xs text-stone-400">
              Shopify Theme Editor - Toggle ON & Save
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm font-bold text-amber-800 dark:text-amber-200">
              Pro Tip
            </p>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              If you don't click <strong>Save</strong> in the Shopify Theme
              Editor, the app will not appear on your live site!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
