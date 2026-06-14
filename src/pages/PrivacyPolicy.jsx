const merchantData = [
  "Name",
  "Email address",
  "Store address",
  "Store ID",
];

const customerData = [
  "Name, if you enable name input",
  "Email address",
  "Phone number, if you enable phone number input",
];

const storeData = [
  "Customer records",
  "Discount codes and promotions",
  "Products and collections, if required for functionality",
  "Online store content for pop-up display",
  "Shopify admin files, if required",
];

const usageItems = [
  "Operating popup campaigns",
  "Collecting and storing subscriber data",
  "Generating and applying discount codes",
  "Displaying pop-ups on your storefront",
  "Providing analytics and performance insights",
  "Offering customer support",
];

const sharingItems = [
  "When required to operate the app within Shopify",
  "When required by law or legal processes",
  "To protect our rights, users, or platform security",
];

const securityItems = [
  "Secure data storage systems",
  "Access control and authentication",
  "Protection against unauthorized access",
];

const merchantResponsibilities = [
  "Informing your customers about data collection",
  "Obtaining consent where required, such as under email marketing laws",
  "Using collected data in compliance with applicable laws like GDPR and CAN-SPAM",
];

const retentionItems = [
  "Provide app functionality",
  "Comply with legal obligations",
  "Resolve disputes",
];

const rightsItems = [
  "Access your data",
  "Request correction or deletion",
  "Withdraw consent where applicable",
];

const EMAIL_ADDRESS = "svaomegaprime@gmail.com";

function PolicyList({ items }) {
  return (
    <ul className="mb-0 list-disc pl-5 text-stone-700 dark:text-stone-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="py-4">
      <h2 className="mt-0 text-2xl font-bold text-stone-900 dark:text-white">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Privacy Policy
      </h1>
      <p className="mb-6 text-sm font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
        Effective Date: April 01, 2026
      </p>
      <p className="mb-2 text-lg text-stone-600 dark:text-stone-400">
        Qorix Popup respects your privacy and is committed to protecting the
        personal information of merchants and their customers.
      </p>

      <div>
        <PolicySection title="Information We Collect">
          <div>
            <h3 className="mt-0 text-lg font-semibold text-stone-900 dark:text-white">
              Merchant Data
            </h3>
            <p className="text-stone-700 dark:text-stone-300">
              When you install and use Qorix Popup, we may access the following
              information provided by Shopify to enable app functionality and
              support:
            </p>
            <PolicyList items={merchantData} />
          </div>

          <div>
            <h3 className="mt-0 text-lg font-semibold text-stone-900 dark:text-white">
              Customer Data
            </h3>
            <p className="text-stone-700 dark:text-stone-300">
              Through pop-up campaigns, we may collect customer information only
              when customers voluntarily submit it through pop-ups on your
              store.
            </p>
            <PolicyList items={customerData} />
          </div>

          <div>
            <h3 className="mt-0 text-lg font-semibold text-stone-900 dark:text-white">
              Store Data
            </h3>
            <p className="text-stone-700 dark:text-stone-300">
              To provide core features, we may access and modify the following
              store-related data:
            </p>
            <PolicyList items={storeData} />
          </div>
        </PolicySection>

        <div>
          <PolicySection title="How We Use Information">
            <p className="text-stone-700 dark:text-stone-300">
              We use collected data strictly to provide and improve our services,
              including:
            </p>
            <PolicyList items={usageItems} />
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              We do not sell, rent, or share personal data with third parties for
              marketing purposes.
            </p>
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Data Sharing">
            <p className="text-stone-700 dark:text-stone-300">
              We do not share your data except in the following cases:
            </p>
            <PolicyList items={sharingItems} />
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Data Storage & Security">
            <p className="text-stone-700 dark:text-stone-300">
              We take reasonable measures to protect your data, including:
            </p>
            <PolicyList items={securityItems} />
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              However, no system is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Merchant Responsibilities">
            <p className="text-stone-700 dark:text-stone-300">
              As a merchant, you are responsible for:
            </p>
            <PolicyList items={merchantResponsibilities} />
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Data Retention">
            <p className="text-stone-700 dark:text-stone-300">
              We retain data only as long as necessary to:
            </p>
            <PolicyList items={retentionItems} />
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              You may request deletion of your data at any time.
            </p>
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Your Rights">
            <p className="text-stone-700 dark:text-stone-300">
              You have the right to:
            </p>
            <PolicyList items={rightsItems} />
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              To make a request, contact us using the details below.
            </p>
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Third-Party Services">
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              Currently, Qorix Popup does not integrate with external email
              marketing platforms. Future integrations may be added and reflected
              in updated policies.
            </p>
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Changes to This Policy">
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              We may update this Privacy Policy from time to time. Updates will
              be posted with a revised effective date.
            </p>
          </PolicySection>
        </div>

        <div>
          <PolicySection title="Contact Us">
            <p className="mb-0 text-stone-700 dark:text-stone-300">
              You can contact our team through live chat in the app dashboard, the support form, or by emailing <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>.
            </p>
          </PolicySection>
        </div>
      </div>
    </>
  );
}
