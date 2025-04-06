
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";

interface Feedback {
  type: 'positive' | 'negative';
  text: string;
}

interface ResultsCardProps {
  matchPercentage: number;
  feedback: Feedback[];
  isLoading?: boolean;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ 
  matchPercentage, 
  feedback,
  isLoading = false
}) => {
  const getMatchColor = () => {
    if (matchPercentage >= 80) return "text-green-600";
    if (matchPercentage >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const positiveItems = feedback.filter(item => item.type === 'positive');
  const negativeItems = feedback.filter(item => item.type === 'negative');

  if (isLoading) {
    return (
      <Card className="w-full mt-6">
        <CardHeader>
          <CardTitle className="text-center text-xl">Analyzing your resume...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">This may take a moment</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full mt-6 animate-fade-up">
      <CardHeader>
        <CardTitle className="text-center text-xl">Resume Analysis Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Match Score</h3>
            <span className={`font-bold text-lg ${getMatchColor()}`}>
              {matchPercentage}%
            </span>
          </div>
          <Progress value={matchPercentage} className="h-2.5" />
          <p className="mt-2 text-sm text-gray-600">
            {matchPercentage >= 80 
              ? "Excellent match! Your resume is well-aligned with this job." 
              : matchPercentage >= 50 
                ? "Good match with room for improvement." 
                : "Your resume needs significant improvements for this job."}
          </p>
        </div>

        <div className="space-y-6">
          {positiveItems.length > 0 && (
            <div>
              <h3 className="font-medium text-green-600 mb-2 flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Strengths
              </h3>
              <ul className="space-y-2 pl-6">
                {positiveItems.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 list-disc">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {negativeItems.length > 0 && (
            <div>
              <h3 className="font-medium text-red-600 mb-2 flex items-center">
                <X className="h-4 w-4 mr-2" />
                Areas for Improvement
              </h3>
              <ul className="space-y-2 pl-6">
                {negativeItems.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 list-disc">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
