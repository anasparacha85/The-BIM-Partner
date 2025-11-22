import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Manages meta tags, structured data, and Open Graph tags for each page
 * Usage: <SEO title="Page Title" description="Page description" />
 */
const SEO = ({
  title = 'Your BIM Partner - Professional BIM Engineering & Staffing Solutions',
  description = 'Your BIM Partner offers professional BIM engineering, staffing solutions, and training. Expert team specializing in Building Information Modeling.',
  keywords = 'BIM engineering, BIM staffing, BIM training, building information modeling',
  url = '',
  image = 'https://yourbimpartner.com/LOGO_The BIM Partner.jpg',
  type = 'website',
  author = 'Your BIM Partner',
  robotsIndex = 'index, follow',
  structuredData = null,
}) => {
  // Compute canonical URL: prefer provided `url`, otherwise derive from window.location
  let canonical = url;
  try {
    if (!canonical || canonical === '') {
      if (typeof window !== 'undefined' && window.location) {
        // remove querystring and hash
        canonical = `${window.location.origin}${window.location.pathname}`;
      } else {
        canonical = 'https://yourbimpartner.com';
      }
    }
  } catch (e) {
    canonical = url || 'https://yourbimpartner.com';
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsIndex} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Your BIM Partner" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={canonical} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
