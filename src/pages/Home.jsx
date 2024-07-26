import Hero from "../components/Hero/Hero";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Meryem Ajmani - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Meryem Ajmani's portfolio. Explore my projects, skills, and professional background in software engineering."
        />
        <meta
          property="og:title"
          content="Meryem Ajmani - Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Meryem Ajmani's projects, skills, and professional background in software engineering."
        />
        <meta
          property="og:image"
          content="https://meryemajmani.com/profile.jpg"
        />
        <meta property="og:url" content="https://meryemajmani.com" />
        <script type="application/ld+json">
          {`{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Meryem Ajmani",
        "url": "https://meryemajmani.com",
        "sameAs": [
          "https://www.linkedin.com/in/meryemajmani",
          "https://github.com/meryemajmani",
          "https://twitter.com/meryemajmani"
        ],
        "jobTitle": "Software Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "Your Company"
        }
      }`}
        </script>
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
