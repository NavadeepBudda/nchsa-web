import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title = 'NCHSA | National Cybersecurity High School Association',
    description = 'The flagship organization for high school cybersecurity clubs and students. Join the national network of future cyber defenders.',
    keywords = 'high school cybersecurity, cyber clubs, NCHSA, cyber defense, student cybersecurity, computer science competitions',
    image = '/favicon.svg',
    url = 'https://nationalchsa.com',
}: SEOProps) {
    const siteTitle = title;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'National Cybersecurity High School Association',
                    alternateName: 'NCHSA',
                    url: 'https://nationalchsa.com',
                    logo: 'https://nationalchsa.com/favicon.svg',
                    sameAs: [
                        // Add social profiles here when available
                    ],
                })}
            </script>
        </Helmet>
    );
}
