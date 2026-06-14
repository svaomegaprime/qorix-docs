import React from "react";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.6.png";

export default function Campaigns() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Creating Your First Campaign
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        Once the app is enabled, you are ready to launch your first marketing
        popup.
      </p>

      <ol className="list-decimal pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <p>
            In the dashboard, click <strong>Create</strong> under the "Create
            your first popup" section.
          </p>
          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img src={three} alt="three" className="not-prose md:my-[1rem]" />
                </div>
                <div className="text-xs text-stone-400">
                  Create your first popup
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>
            You can see the individual menu name pop-up. You can see the
            top-right button to create a pop-up, and the selected menu pop-up
            will appear.
          </p>
          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img src={four} alt="four" className="not-prose md:my-[1rem]" />
                </div>
                <div className="text-xs text-stone-400">
                  Top-right create button
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>
            The <strong>Select popup type</strong> modal will appear. Choose
            your goal:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Email Capture Popup:</strong> Best for growing your
              subscriber list.
            </li>
            <li>
              <strong>Spin Wheel Popup:</strong> Best for engaging users with a
              "win a discount" game.
            </li>
          </ul>
          <div className="mt-4 rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              <strong>Note:</strong> The spin wheel is currently pre-selected.
              In the future, we will add dynamic options such as random discount
              codes.
            </p>
          </div>
        </li>
        <li>
          <p>
            Select your choice and click <strong>Create popup</strong>.
          </p>
          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img src={five} alt="five" className="not-prose md:my-[1rem]" />
                </div>
                <div className="text-xs text-stone-400">
                  Create popup confirmation
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <hr className="my-12 border-stone-200 dark:border-stone-800" />

      <h2
        id="popups-page"
        className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
      >
        Popups Page
      </h2>
      <p className="mb-6 text-stone-700 dark:text-stone-300">
        This is your campaign command center where you can manage and track
        every popup you’ve created.
      </p>

      <ul className="list-disc pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Real-Time Analytics:</strong> View live updates for Views,
          Subscribers, and Conversion Rates for every campaign.
        </li>
        <li>
          <strong>Campaign Management:</strong> The table lists your popups by
          Name, Editing Date, and Status.
        </li>
        <li>
          <strong>Quick Actions:</strong> Use the Filter button to find specific
          campaigns or the Create Popup button in the top right to start a new
          one.
        </li>
        <li>
          <strong>Advanced Tools:</strong> Every listed campaign includes
          options to Duplicate (to quickly test a new idea) or Delete an old
          campaign.
        </li>
      </ul>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img src={six} alt="six" className="not-prose md:my-[1rem]" />
            </div>
            <div className="text-xs text-stone-400">Popups Page overview</div>
          </div>
        </div>
      </div>
    </>
  );
}
