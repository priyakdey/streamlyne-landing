export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Streamlyne",
    url: "https://streamlyne.in",
    logo: "https://streamlyne.in/assets/brand/logo.png",
    description:
      "All-in-one creative workspace for YouTubers, bloggers, and content creators",
    founder: {
      "@type": "Person",
      name: "Priyak Dey",
      url: "https://priyakdey.com",
    },
    sameAs: [
      "https://github.com/priyakdey",
      "https://x.com/DeyPriyak",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Streamlyne",
    url: "https://streamlyne.in",
    description:
      "Stop juggling Google Drive, Notion, and Obsidian. Streamlyne is the all-in-one creative workspace for YouTubers, bloggers, and content creators.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://streamlyne.in/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Streamlyne",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Creative workspace for content creators to store assets, write notes, manage ideas, and plan content",
    featureList: [
      "Creative Assets Library",
      "Markdown Notes",
      "Ideas Inbox",
      "Content Planner",
      "Powerful Search",
      "Cloud Sync",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  );
}
