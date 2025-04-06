
import React, { useState, useCallback } from 'react';
import { UploadCloud, File, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FileUploadProps {
  label: string;
  accept?: string;
  onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  label, 
  accept = ".pdf,.doc,.docx",
  onFileChange 
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length) {
      const uploadedFile = files[0];
      const acceptedTypes = accept.split(',');
      const fileExtension = `.${uploadedFile.name.split('.').pop()}`;
      
      if (acceptedTypes.includes(fileExtension) || acceptedTypes.includes('*')) {
        setFile(uploadedFile);
        onFileChange(uploadedFile);
        toast.success(`${label} uploaded successfully`);
      } else {
        toast.error(`File type not supported. Please upload ${accept} files.`);
      }
    }
  }, [accept, label, onFileChange]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      onFileChange(uploadedFile);
      toast.success(`${label} uploaded successfully`);
    }
  };

  const removeFile = () => {
    setFile(null);
    onFileChange(null);
  };

  return (
    <div className="w-full">
      <p className="text-sm font-medium mb-2">{label}</p>
      
      {!file ? (
        <div 
          className={`dropzone ${isDragging ? 'active' : ''}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <UploadCloud className="h-12 w-12 text-gray-300 mb-2" />
          <p className="text-sm text-gray-500 text-center">
            Drag and drop your file here, or
          </p>
          <label className="mt-2">
            <Button 
              variant="outline" 
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                (document.getElementById(`${label}-upload`) as HTMLInputElement)?.click();
              }}
            >
              Browse files
            </Button>
            <input 
              id={`${label}-upload`}
              type="file" 
              className="hidden"
              accept={accept}
              onChange={handleFileChange}
            />
          </label>
          <p className="text-xs text-gray-400 mt-2">
            Supports {accept} files
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50">
          <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center">
            <File className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-500 hover:text-red-500"
            onClick={removeFile}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
