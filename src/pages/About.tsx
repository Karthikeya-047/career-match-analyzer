
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">About Resume Reviewer</h1>
            
            <div className="prose max-w-none">
              <p className="mb-6 text-lg">
                Resume Reviewer is an AI-powered tool designed to help job seekers optimize their resumes 
                for specific job applications. We understand that the modern job market is highly 
                competitive, and having a resume that stands out is crucial for landing interviews.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="mb-6">
                Our mission is to empower job seekers with the insights they need to present their 
                skills and experiences in the most effective way possible. By providing personalized 
                feedback and recommendations, we help bridge the gap between job requirements and 
                resume content.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How Our Technology Works</h2>
              <p className="mb-6">
                Resume Reviewer uses advanced natural language processing and machine learning 
                algorithms to analyze the content of your resume against job descriptions. Our system 
                identifies key skills, qualifications, and experiences mentioned in the job posting and 
                compares them to those presented in your resume.
              </p>
              <p className="mb-6">
                The analysis provides a match percentage score and generates specific recommendations 
                for improving your resume's relevance to the target position. This helps you tailor 
                your application materials for each job opportunity.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
              <p className="mb-6">
                Resume Reviewer was founded by a team of HR professionals, data scientists, and career 
                coaches who understand both sides of the hiring process. Our combined expertise ensures 
                that our recommendations are practical, effective, and aligned with current industry 
                standards.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy & Security</h2>
              <p>
                We take the security and privacy of your data seriously. All uploaded documents are 
                encrypted and processed securely. We do not share your information with third parties, 
                and you can request the deletion of your data at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
