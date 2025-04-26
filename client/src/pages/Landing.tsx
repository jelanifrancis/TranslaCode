import React from 'react';
import { Link } from 'wouter';

// Feature card component
const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl mb-4 text-tc-blue">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Step card component
const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-tc-blue text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Button component
const Button = ({
  primary = true,
  children,
  href = "#",
  className = ""
}: {
  primary?: boolean,
  children: React.ReactNode,
  href?: string,
  className?: string
}) => {
  return (
    <Link href={href}>
      <a className={`
        px-8 py-3 rounded-lg font-medium transition-all duration-300
        ${primary
          ? 'bg-tc-blue text-white hover:bg-blue-600 hover:shadow-lg'
          : 'bg-tc-yellow text-gray-800 hover:bg-yellow-400 hover:shadow-lg'}
        ${className}
      `}>
        {children}
      </a>
    </Link>
  );
};

export default function Landing() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tc-blue to-tc-yellow bg-clip-text text-transparent">
            Learn to Code in Two Languages with TranslaCode
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Unlock your coding potential with the world's first bilingual interactive coding platform. Learn programming in English and Spanish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button primary href="/signin" className="animate-pulse-scale">Start Learning Free</Button>
            <Button primary={false}>Explore Features</Button>
          </div>
          <div className="mt-16">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Coding on a laptop"
              className="rounded-xl shadow-xl max-w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why TranslaCode Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why TranslaCode?</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our platform is designed to make learning to code accessible to everyone, regardless of language barriers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🌍"
              title="Bilingual Learning"
              description="Learn programming concepts in both English and Spanish, switching between languages with one click."
            />
            <FeatureCard
              icon="🚀"
              title="Interactive Challenges"
              description="Practice with real coding challenges that provide instant feedback on your progress."
            />
            <FeatureCard
              icon="🧩"
              title="Beginner Friendly"
              description="No prior coding experience required. Our step-by-step tutorials make coding accessible to everyone."
            />
            <FeatureCard
              icon="🏆"
              title="Skill Progression"
              description="Track your progress and gradually advance from basics to more complex programming concepts."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Getting started with TranslaCode is simple and straightforward.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              number={1}
              title="Sign Up for Free"
              description="Create your account in seconds and access our library of tutorials and challenges."
            />
            <StepCard
              number={2}
              title="Choose Your Path"
              description="Select from various programming topics in your preferred language - English or Spanish."
            />
            <StepCard
              number={3}
              title="Code and Learn"
              description="Practice coding in our interactive environment with real-time feedback and guidance."
            />
          </div>
        </div>
      </section>

      {/* Built for Dreamers Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-tc-blue to-tc-yellow text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Dreamers</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            TranslaCode was created with a mission to break down language barriers in the tech world. We believe that everyone should have the opportunity to learn coding, regardless of their native language.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg max-w-sm">
              <p className="italic mb-4">
                "TranslaCode changed my life. As a native Spanish speaker, I struggled with English programming tutorials. Now I can learn in my language and gradually improve my English tech vocabulary."
              </p>
              <p className="font-bold">- Maria G., Web Developer</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg max-w-sm">
              <p className="italic mb-4">
                "I use TranslaCode to teach coding to students in bilingual schools. It's the perfect tool for diverse classrooms where students have different language preferences."
              </p>
              <p className="font-bold">- James T., CS Teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Coding Journey Today</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of learners who are breaking language barriers and building their future with code.
          </p>
          <Button primary href="/signin" className="text-lg px-10 py-4 animate-pulse-scale">
            Start Learning Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-tc-blue">TranslaCode</h2>
          <p className="text-gray-600 mb-8">
            Breaking language barriers in coding education since 2023
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-tc-blue transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-tc-blue transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-tc-blue transition-colors">Tutorials</a>
            <a href="#" className="text-gray-600 hover:text-tc-blue transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2023 TranslaCode. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}