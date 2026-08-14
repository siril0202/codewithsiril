import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  schemas?: Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = 'https://www.codewithsiril.site/og-banner.png',
  twitterTitle,
  twitterDescription,
  schemas = []
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Meta Description
    setMetaTag('description', description);

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 5. Open Graph Meta Tags
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:url', ogUrl || canonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:type', 'website', true);

    // 6. Twitter Card Meta Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', twitterTitle || title);
    setMetaTag('twitter:description', twitterDescription || description);
    setMetaTag('twitter:image', ogImage);

    // 7. Dynamic JSON-LD Structured Data Schema
    const scriptId = 'dynamic-seo-schemas';
    let schemaScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemas && schemas.length > 0) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = scriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Cleanup dynamic schema script if component unmounts
      const script = document.getElementById(scriptId);
      if (script) script.remove();
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl, ogImage, twitterTitle, twitterDescription, schemas]);

  return null;
};
