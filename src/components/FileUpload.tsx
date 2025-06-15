
import React, { useState } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  title: string;
  fileType: string;
  maxSize?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  title, 
  fileType, 
  maxSize = "10MB" 
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="font-medium text-gray-900 mb-3">{title}</h3>
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver
            ? 'border-blue-400 bg-blue-50'
            : uploadedFile
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {uploadedFile ? (
          <div className="flex items-center justify-center space-x-2">
            <File className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-green-700">{uploadedFile.name}</p>
              <p className="text-xs text-green-600">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-red-500 hover:text-red-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <p className="text-sm text-gray-600 mb-2">Drag and drop file here</p>
            <p className="text-xs text-gray-500 mb-4">
              {fileType} files only • Max {maxSize}
            </p>
          </>
        )}
      </div>

      <div className="flex space-x-2 mt-4">
        <Button variant="outline" size="sm" className="flex-1">
          <input
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            accept={fileType === 'Excel' ? '.xlsx,.xls' : '*'}
          />
          <label className="cursor-pointer">Browse files</label>
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          Files View
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
