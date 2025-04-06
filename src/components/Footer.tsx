
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gray-50 border-t mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">RR</span>
              </div>
              <h3 className="text-lg font-bold text-primary">ResumeReviewer</h3>
            </div>
            <p className="text-sm text-gray-600">
              Optimize your resume for every job opportunity with our AI-powered resume reviewer.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <p className="text-sm text-gray-600 mb-2">
              <Mail className="inline-block h-4 w-4 mr-2" />
              support@resumereviewer.com
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ResumeReviewer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
