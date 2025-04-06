
import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ReviewResultsProps {
  match: string;
  summary: string;
  suggestions: string[];
  onReset: () => void;
}

const ReviewResults: React.FC<ReviewResultsProps> = ({ 
  match, 
  summary, 
  suggestions,
  onReset
}) => {
  // Extract percentage number from match string
  const matchNumber = parseInt(match.replace('%', ''), 10);
  
  const getMatchColor = () => {
    if (matchNumber >= 80) return "text-green-600";
    if (matchNumber >= 50) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="animate-fade-up space-y-6 max-w-4xl mx-auto">
      <Card className="overflow-hidden border-t-4 border-t-primary shadow-md">
        <CardHeader className="bg-secondary/10 pb-2">
          <CardTitle className="text-2xl font-bold text-center text-primary">Resume Review Results</CardTitle>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Match Percentage with circular indicator */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-36 h-36 flex items-center justify-center mb-2">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#e6e6e6" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke={matchNumber >= 80 ? "#22c55e" : matchNumber >= 50 ? "#f59e0b" : "#ef4444"} 
                  strokeWidth="8"
                  strokeDasharray={`${matchNumber * 2.83} ${283 - matchNumber * 2.83}`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className={`text-3xl font-bold ${getMatchColor()}`}>{match}</span>
                <span className="text-sm text-gray-500">JD Match</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl text-primary mb-2 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Profile Summary
            </h3>
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <p className="text-gray-700">{summary}</p>
              </CardContent>
            </Card>
          </div>

          {/* Suggestions */}
          <div>
            <h3 className="font-semibold text-xl text-primary mb-2">Suggestions to Improve</h3>
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary/5 p-4 rounded-lg border-l-4 border-secondary">
                  <Badge variant="secondary" className="mt-0.5 shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <Button
              onClick={onReset}
              variant="outline"
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Upload Another Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewResults;
