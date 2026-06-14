import React from "react";
import CodeBlock from "../components/CodeBlock";

export default function QuickStart() {
  const sdkCode = `<script src="https://cdn.shopifydocs.com/v1/sdk.js"></script>
<script>
  ShopifyDocs.init({
    apiKey: 'YOUR_API_KEY',
    storeId: 'YOUR_STORE_ID'
  });
</script>`;

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Quick Start
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        Get up and running with ShopifyDocs in less than 5 minutes.
      </p>

      <h2 id="basic-setup">Basic Setup</h2>
      <p>
        The quickest way to get started is by using our pre-built components.
        Simply add the following script to your store's theme.
      </p>

      <CodeBlock code={sdkCode} language="html" />

      <h2 id="syncing-products">Syncing Products</h2>
      <p>
        To sync your products, navigate to the "Product Sync" tab and click
        "Sync Now". This will fetch all your products from Shopify and store
        them in our database.
      </p>

      <h2 id="monitoring-orders">Monitoring Orders</h2>
      <p>
        Orders are synced automatically via webhooks. You can view your recent
        orders in the "Orders" tab.
      </p>

      <h3 id="webhook-configuration">Webhook Configuration</h3>
      <p>
        Make sure your webhooks are configured correctly in the Shopify admin to
        receive real-time order updates.
      </p>
    </>
  );
}
