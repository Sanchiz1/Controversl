import { Link } from "react-router";

function HomePage() {
  return (
    <section>
      <h1 className='title mb-6'>Take an AI-generated quiz!</h1>
      <h2 className="title text-accent mb-6 text-xl">
        <Link to="/quiz/">Generate quiz</Link>
      </h2>
    </section>
  );
}

export default HomePage;