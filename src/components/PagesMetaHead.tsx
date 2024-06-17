import Head from "next/head";
import { NextSeo } from "next-seo";

type PagesMetaHeadProps = {
  title?: string;
  keywords?: string;
  description?: string;
  template?: string;
  icon?: string;
};

function PagesMetaHead({
  title = "Ritch Johan Jefferson - Personal Template",
  keywords = "next.js",
  description = "Ritch Johan Jefferson - Personal Template",
  template = "%s | Personal Template",
  icon = "/next.svg",
}: PagesMetaHeadProps) {
  const siteUrl = process.env.SITE_URL || "https://jeffersonrj.com";
  const seoTitle = template.replace("%s", title);
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={description}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: siteUrl,
          siteName: "Portfolio",
        }}
        twitter={{
          handle: "@jeffersonrj14",
          site: "@jeffersonrj14",
          cardType: "summary_large_image",
        }}
      />

      {/* next/head for other customizations */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <link rel="icon" href={icon} />
      </Head>
    </>
  );
}

export default PagesMetaHead;
