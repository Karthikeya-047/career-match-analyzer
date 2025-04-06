
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FileUpload from '@/components/FileUpload';
import ReviewResults from '@/components/ReviewResults';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Index = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    matchPercentage: number;
    feedback: { type: 'positive' | 'negative'; text: string; }[];
  } | null>(null);

  // In a real app, this would make an API call
  const analyzeResume = () => {
    if (!resume || !jobDescription) {
      toast.error("Please upload both your resume and the job description");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Mock results with explicitly typed feedback items
      const mockResults: {
        matchPercentage: number;
        feedback: { type: 'positive' | 'negative'; text: string; }[];
      } = {
        matchPercentage: 87,
        feedback: [
          { type: 'positive', text: "Your technical skills match the job requirements well." },
          { type: 'positive', text: "You have relevant experience in the required industry." },
          { type: 'negative', text: "Include more keywords from the job description like 'React' and 'Node.js'." },
          { type: 'negative', text: "Highlight leadership roles and project outcomes." },
          { type: 'negative', text: "Consider shortening the resume to keep it under 2 pages." },
        ]
      };

      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const resetAnalysis = () => {
    setResume(null);
    setJobDescription(null);
    setResults(null);
  };

  // Format data for ReviewResults component if we have results
  const formattedResults = results ? {
    match: `${results.matchPercentage}%`,
    summary: "You have strong experience in software development with relevant skills aligned to the job description.",
    suggestions: results.feedback
      .filter(item => item.type === 'negative')
      .map(item => item.text)
  } : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {!results ? (
          <>
            <Hero />
            <HowItWorks />
            
            <section id="upload-section" className="py-16 bg-white">
              <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Analyze Your Resume</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Upload your resume and job description to see how well they match and get personalized feedback
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <FileUpload 
                    label="Upload Resume"
                    onFileChange={setResume}
                  />
                  <FileUpload 
                    label="Upload Job Description"
                    onFileChange={setJobDescription}
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium px-8 py-2"
                    onClick={analyzeResume}
                    disabled={!resume || !jobDescription || isAnalyzing}
                  >
                    {isAnalyzing ? "Analyzing..." : "Get Feedback"}
                  </Button>
                </div>

                {isAnalyzing && (
                  <div className="mt-10 flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600">Analyzing your resume...</p>
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {formattedResults && (
                <ReviewResults 
                  match={formattedResults.match}
                  summary={formattedResults.summary}
                  suggestions={formattedResults.suggestions}
                  onReset={resetAnalysis}
                />
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
