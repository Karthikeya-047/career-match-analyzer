
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Optimize Your Resume for <span className="text-primary">Every Job</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI-powered tool compares your resume to job descriptions and provides actionable feedback to increase your chances of landing interviews.
          </p>
          <a 
            href="#upload-section"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground py-2.5 px-5 rounded-lg font-medium transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
