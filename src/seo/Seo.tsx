
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Saurabh Yadav | Software Developer",
  description = "Explore Saurabh Yadav's portfolio, projects, technical skills, and experience in software development, AI and Machine Learning.",
  url = "https://isaurabh.me/",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurabh Yadav",
    url: "https://isaurabh.me/",
    jobTitle: "Software Developer",
    knowsAbout: [
      "Java",
      "Artificial Intelligence",
      "Machine Learning",
      "React.js",
      "Node.js",
      "Full Stack Development",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
