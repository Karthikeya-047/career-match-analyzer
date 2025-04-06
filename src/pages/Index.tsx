
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FileUpload from '@/components/FileUpload';
import ResultsCard from '@/components/ResultsCard';
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
      // Mock results
      const mockResults = {
        matchPercentage: 75,
        feedback: [
          { type: 'positive', text: "Your technical skills match the job requirements well." },
          { type: 'positive', text: "You have relevant experience in the required industry." },
          { type: 'negative', text: "Your resume lacks specific achievements and metrics." },
          { type: 'negative', text: "Consider adding more keywords related to project management." },
          { type: 'negative', text: "Your education section could be more prominent for this role." },
        ]
      };

      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        
        <section id="upload-section" className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto">
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

            {(isAnalyzing || results) && (
              <ResultsCard 
                matchPercentage={results?.matchPercentage || 0} 
                feedback={results?.feedback || []}
                isLoading={isAnalyzing}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
