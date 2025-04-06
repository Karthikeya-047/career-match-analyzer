
import React from 'react';
import { Upload, Search, FileText } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-primary" />,
    title: "Upload Documents",
    description: "Upload your resume and the job description you're targeting."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "AI Analysis",
    description: "Our system analyzes the match between your resume and the job requirements."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Get Feedback",
    description: "Receive personalized feedback and a match score to improve your application."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process helps you optimize your resume for specific job applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
