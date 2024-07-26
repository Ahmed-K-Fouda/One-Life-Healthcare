import { Link } from "react-router-dom";

function About() {
  return (
    <section className="mt-10 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-gray-900 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-900">
          About Us
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl text-center">
          At One Life Healthcare, we harness the power of technology to connect
          and heal. Every interaction nurtures both mind and soul, transforming
          narratives into pathways for growth and recovery.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl text-center">
          In a world where mental well-being is often overlooked, especially in
          India, we are committed to making a difference. Our platform unites
          voices from all walks of life—survivors, therapists, psychologists,
          and everyday heroes. Here, conversations cover a range of topics from
          financial challenges to family dynamics, all bound by empathy and
          understanding.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl text-center">
          We are more than just a platform; we are a beacon of hope in the
          digital realm. Our mission is to provide a nurturing environment where
          individuals can openly share their struggles and receive support from
          a caring community.
        </p>
        <blockquote className="text-lg md:text-xl italic font-semibold text-gray-700 border-l-4 border-blue-600 pl-4 mb-8">
          “Recovery is not one and done. It's a lifelong journey that takes
          place one day, one step at a time.”
        </blockquote>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-right max-w-3xl">
          - Steve Jobs, Mental Health & Adaptations.
        </p>
        <div className="text-center">
          <Link className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1">
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
