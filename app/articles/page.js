import Articles from "../components/Articles";

export const metadata = {
  title: "Articles - MJAJC",
  description: "Explore our latest articles on web development, design, and technology trends.",
};

export default function ArticlesPage() {
  return (
    <>
      <section>
        <h1>
          Articles & Insights
        </h1>
        <p>
          Dive deep into the world of web development, design trends, and cutting-edge technologies. 
          Our expert authors share their knowledge to help you stay ahead in the digital landscape.
        </p>
      </section>
      <Articles />
    </>
  );
}