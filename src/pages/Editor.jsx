import React from "react";
import soon from "../images/comming-soon.png";
import seven from "../images/7.png";
import eight from "../images/8.png";
import nine from "../images/9.png";
import ten from "../images/10.png";
import eleven from "../images/11.png";
import spinone from "../images/spin-1.png";

export default function Editor() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Using the Campaign Editor
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        The Editor is where you customize the behavior and look of your popup.
      </p>

      <div className="space-y-12 text-stone-700 dark:text-stone-300">
        {/* Settings Tab */}
        <section>
          <h2
            id="settings-tab"
            className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            Settings Tab
          </h2>
          <p className="mb-6">
            The Settings tab in the Qorix Popup editor gives you granular
            control over how, when, and to whom your popup appears, as well as
            how your discounts are structured.
          </p>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            General Configuration
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Popup Status:</strong> Toggle your campaign between Active
              (live on storefront) and Draft (internal testing).
            </li>
            <li>
              <strong>Popup Name:</strong> Give your campaign a clear internal
              name (up to 50 characters) to keep track of different seasonal
              offers.
            </li>
          </ul>

          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img
                    src={seven}
                    alt="General Configuration"
                    className="not-prose md:my-[1rem]"
                  />
                </div>
                <div className="text-xs text-stone-400">
                  General Configuration
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Display Triggers (When it shows)
          </h3>
          <p className="mb-3">
            Choose the exact moment your customer sees your offer:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Immediately:</strong> The popup appears the instant the
              page finishes loading.
            </li>
            <li>
              <strong>After Delay:</strong> Shows the popup 5 seconds after the
              page loads, giving the customer time to look at your products
              first.
            </li>
            <li>
              <strong>Scroll Depth:</strong> The popup triggers once the user
              scrolls through 50% of your page content.
            </li>
            <li>
              <strong>Exit Intent:</strong> Triggers when the user scrolls to
              100% of the page, and will show pop-ups.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Display Frequency (How often it shows)
          </h3>
          <p className="mb-3">
            To ensure a great user experience, control how often a single
            visitor sees the same popup:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Once per session:</strong> The popup appears once per
              visit. If they open a new tab or come back later, it will show
              again until they subscribe.
            </li>
            <li>
              <strong>Once per Day/Week/Month:</strong> Limits the popup to
              appearing only once within that specific timeframe for each unique
              visitor.
            </li>
          </ul>

          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img
                    src={eight}
                    alt=" Display Triggers & Frequency"
                    className="not-prose md:my-[1rem]"
                  />
                </div>
                <div className="text-xs text-stone-400">
                  Display Triggers & Frequency
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Discount & Offer Logic
          </h3>
          <p className="mb-3">
            Enable the "Enable Discount / Offer" checkbox to turn your popup
            into a lead-generation machine. If unchecked, the popup will simply
            act as a newsletter sign-up without a coupon.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Discount Type:</strong> Choose between Fixed Amount or
              Percentage.
              <p className="text-sm mt-1 text-stone-500 dark:text-stone-400">
                Note: When using Percentage, simply enter the number (e.g., 10).
                The system automatically applies the % symbol for you.
              </p>
            </li>
            <li>
              <strong>Code Usage Limit:</strong> By default, codes are set to
              one-time use per customer to prevent discount abuse.
            </li>
            <li>
              <strong>Applies To:</strong>
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>
                  <strong>All Products:</strong> The discount works store-wide.
                </li>
                <li>
                  <strong>Collections:</strong> Limit the discount to specific
                  categories.
                </li>
                <li>
                  <strong>Specific Products:</strong> Target only the items you
                  want to promote.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Requirements & Combinations
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Minimum Requirements:</strong> Set a Minimum Purchase
              Amount (e.g., $100) or a Minimum Quantity of Items (e.g., Buy 2
              items) before the discount becomes valid.
            </li>
            <li>
              <strong>Combinations:</strong> This powerful feature allows you to
              decide if this discount can be used alongside other offers:
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>
                  <strong>Product Discounts:</strong> Applies to the individual
                  price of items.
                </li>
                <li>
                  <strong>Order Discounts:</strong> Applies to the total order
                  value.
                </li>
                <li>
                  <strong>Shipping Discounts:</strong> Provides a discount on
                  shipping costs. If set to 100, the customer receives Free
                  Shipping.
                </li>
              </ul>
            </li>
          </ul>

          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img
                    src={nine}
                    alt="Discount Logic & Combinations"
                    className="not-prose md:my-[1rem]"
                  />
                </div>
                <div className="text-xs text-stone-400">
                  Discount Logic & Combinations
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Expiration Settings
          </h3>
          <p className="mb-3">
            By default, campaigns are set to <strong>Infinite</strong>, meaning
            the offer never expires as long as the popup is active. If you are
            running a limited-time sale (like Black Friday), you can set a
            specific <strong>Expiration Date</strong>. Once reached, the
            discount code will no longer be generated for new subscribers.
          </p>
        </section>

        <hr className="border-stone-200 dark:border-stone-800" />

        {/* Content Tab */}
        <section>
          <h2
            id="content-tab"
            className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            Content Tab
          </h2>
          <p className="mb-6">
            The Content tab is where you define your message and add your brand
            assets.
          </p>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Branding & Visuals
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Logo:</strong> Add your brand logo to build trust. We
              recommend a file size under 2MB.
            </li>
            <li>
              <strong>Supported Formats:</strong> PNG, JPG, and GIF.
            </li>
            <li>
              <strong>Customization:</strong> You can adjust the logo size
              directly within the dashboard.
            </li>
            <li>
              <strong>Layout (Side Image):</strong> Add a high-quality product
              image or lifestyle shot to the side of your popup.
            </li>
            <li>
              <strong>Flexibility:</strong> Switch the image between the left or
              right side and adjust the Image Scale to fit perfectly.
            </li>
          </ul>

          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img
                    src={ten}
                    alt="Content Tab Visuals"
                    className="not-prose md:my-[1rem]"
                  />
                </div>
                <div className="text-xs text-stone-400">
                  Content Tab Visuals
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Spin Color Wheel
          </h3>

          <p className="mb-6">
            The email campaign includes the same functionality as the spin
            campaign. The only difference is the Rewards Configuration when it
            is active. When the merchant enables this option, the wheel will
            rotate and display a reward, such as a 15% discount.
          </p>

          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img
                    src={spinone}
                    alt="Discount Logic & Combinations"
                    className="not-prose md:my-[1rem]"
                  />
                </div>
                <div className="text-xs text-stone-400">
                  Discount Logic & Combinations
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Messaging & Form Fields
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Copywriting:</strong> You have full control over the
              Heading, Description, and even the Close Link text.
            </li>
            <li>
              <strong>Data Capture:</strong> While Email is collected by
              default, you can enable additional input fields for Subscriber
              Name and Phone Number.
            </li>
            <li>
              <strong>Post-Subscription Views:</strong> Customize the "Thank
              You" experience across three areas:
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>
                  <strong>Success Status:</strong> The main message shown after
                  signing up.
                </li>
                <li>
                  <strong>Reminder Bar:</strong> The persistent bar that stays
                  on screen.
                </li>
                <li>
                  <strong>Sidebar Widget:</strong> The floating button used to
                  re-open the popup.
                </li>
              </ul>
            </li>
          </ul>

          <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              <strong>Note:</strong> Qorix Popup includes Inbuilt Error Logic.
              If a user enters invalid or suspicious information, the app will
              automatically display a corrective error message.
            </p>
          </div>
        </section>

        <hr className="border-stone-200 dark:border-stone-800" />

        {/* Design Tab */}
        <section>
          <h2
            id="design-tab"
            className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            Design Tab
          </h2>
          <p className="mb-6">
            The Design tab allows you to control the "look and feel" of your
            popup to match your store’s "vibe."
          </p>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Structure & Alignment
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Sizing:</strong> Choose from three standard sizes:
              Standard, Large, or Extra Large.
            </li>
            <li>
              <strong>Text Alignment:</strong> Align your content to the Left,
              Center, or Right to match your layout.
            </li>
            <li>
              <strong>Corner Radius:</strong> Adjust the "roundness" of your
              popup corners using the Standard, Large, or Extra Large presets.
            </li>
          </ul>

          <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-stone-500">
                  <img
                    src={eleven}
                    alt="Design Tab settings"
                    className="not-prose md:my-[1rem]"
                  />
                </div>
                <div className="text-xs text-stone-400">
                  Design Tab settings
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-6 mb-3">
            Color & Appearance
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Popup Palette:</strong> Set custom colors for the
              Background, Headings, Body Text, and Buttons.
            </li>
            <li>
              <strong>The Overlay:</strong> You can change the background "dim"
              color and adjust the Opacity so your shop remains visible behind
              the popup.
            </li>
            <li>
              <strong>Widget Colors:</strong> Sidebar: Set the background/text
              colors and position it at the Left, Left-Bottom, or Right.
            </li>
            <li>
              <strong>Reminder Bar:</strong> Match the reminder background and
              text to your primary campaign colors.
            </li>
          </ul>
        </section>

        <hr className="border-stone-200 dark:border-stone-800" />

        {/* The Preview Window */}
        <section>
          <h2
            id="preview-window"
            className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            The Preview Window
          </h2>
          <p className="mb-6">
            Before going live, use the preview tools at the top right of the
            editor to ensure everything looks perfect.
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Desktop & Mobile Preview:</strong> Switch views to ensure
              your popup is easy to read on smartphones.
            </li>
            <li>
              <strong>State Toggles:</strong> Switch between the Opt-in-screen
              (the initial form) and the Success status (the thank-you view) to
              check the entire flow.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
