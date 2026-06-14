import React from "react";
import soon from "../images/comming-soon.png";
import fourteen from "../images/14.png";
import emailone from "../images/Email-1.png";
import emailtwo from "../images/Email-2.png";

export default function Settings() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Settings Page
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        Control your app's behavior and global branding from a single location.
      </p>

      <ul className="list-disc pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Global Controls:</strong> Manage your campaign settings across
          the entire store.
        </li>
        <li>
          <strong>Remove App Branding:</strong> If you prefer a completely
          white-label look, you can uncheck the branding box to hide the
          "Powered by" text from your popups.
        </li>
        <li>
          <strong>Mail confirmation template:</strong> You can customize the
          subscribe confirmation mail template with your own branding
        </li>
      </ul>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={fourteen}
                alt="Settings"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">Settings page controls</div>
          </div>
        </div>
      </div>


      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Email Configuration
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        Ensure every subscriber receives a professional, branded response. Qorix
        Popup allows you to fully customize the automated emails sent to your
        customers.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Subscription Confirmation Email
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        When a customer signs up through your newsletter popup, they will
        automatically receive a confirmation email. You have full control over
        the following:
      </p>
      <ul className="list-disc pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Sender Details:</strong> Customize the Sender Name and
          Reply-To Email address.
        </li>
        <li>
          <strong>Subject Line and Heading:</strong> Craft a compelling Subject
          Line and a personalized Heading to welcome your new subscribers.
        </li>
        <li>
          <strong>Branding and Content:</strong> Upload your Branding Logo to
          the email header. Edit the Email Body Content to include welcome
          messages, or brand stories.
        </li>
        <li>
          <strong>Compliance:</strong> An Unsubscribe Button is automatically
          included in every template to ensure your store stays compliant with
          email regulations.
        </li>
      </ul>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={emailone}
                alt="Subscription confirmation email"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">
              Subscription confirmation email
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-stone-900 dark:text-white">
        Unsubscribe Confirmation Email
      </h3>
      <p className="mb-4 text-stone-700 dark:text-stone-300">
        If a customer chooses to unsubscribe, they will receive a confirmation
        email. Merchants can fully customize this template.
      </p>
      <ul className="list-disc pl-5 space-y-4 mb-8 text-stone-700 dark:text-stone-300">
        <li>
          <strong>Customizable Template:</strong> Use the editor to modify the
          Sender, Subject, and Branding Logo specifically for the unsubscribe
          notification.
        </li>
        <li>
          <strong>Final Message:</strong> Personalize the Body Content to thank
          the customer for their time, and show a message for
          unsubscribe-related.
        </li>
      </ul>

      <div className="my-2 overflow-hidden rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-800">
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-stone-500">
              <img
                src={emailtwo}
                alt="Unsubscribe confirmation email"
                className="not-prose my-[1rem]"
              />
            </div>
            <div className="text-xs text-stone-400">
              Unsubscribe confirmation email
            </div>
          </div>
        </div>
      </div>

    
     

    </>
  );
}
