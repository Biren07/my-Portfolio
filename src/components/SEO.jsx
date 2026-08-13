import { useEffect } from "react";

const DEFAULT_TITLE = "Birendra Singh Dhami | Full Stack Developer & MERN Specialist";
const DEFAULT_DESCRIPTION =
  "Birendra Singh Dhami is a Full Stack Developer & MERN Stack Specialist from Nepal specializing in React, Next.js, Node.js, Express.js, MongoDB and modern web applications.";
const DEFAULT_DOMAIN = "https://birendrasinghdhami07.com.np";
const DEFAULT_OG_IMAGE = `${DEFAULT_DOMAIN}/profile.jpeg`;

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = DEFAULT_DOMAIN,
  keywords,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, nameAttr, nameValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Description & Keywords
    updateMetaTag('meta[name="description"]', "name", "description", description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    }

    // 3. Robots
    const robotsContent = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    updateMetaTag('meta[name="robots"]', "name", "robots", robotsContent);

    // 4. Canonical URL
    updateLinkTag("canonical", canonicalUrl);

    // 5. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', "property", "og:title", title);
    updateMetaTag('meta[property="og:description"]', "property", "og:description", description);
    updateMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    updateMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    updateMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);

    // 6. Twitter / X Tags
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateMetaTag('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl);
    updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    // 7. Dynamic JSON-LD injection if provided
    let scriptElement = null;
    if (jsonLd) {
      const scriptId = "dynamic-json-ld";
      scriptElement = document.getElementById(scriptId);
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // Optional cleanup if needed when component unmounts
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonicalUrl, keywords, noindex, ogImage, ogType, jsonLd]);

  return null;
};

export default SEO;
