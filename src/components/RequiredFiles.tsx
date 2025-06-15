
import React from 'react';
import { X, Check } from 'lucide-react';

interface FileStatus {
  name: string;
  status: 'missing' | 'uploaded';
}

const RequiredFiles: React.FC = () => {
  const files: FileStatus[] = [
    { name: 'Current Year Sales File', status: 'missing' },
    { name: 'Last Year Sales File', status: 'missing' },
    { name: 'Budget File', status: 'missing' },
    { name: 'OS-Previous Month File', status: 'missing' },
    { name: 'OS-Current Month File', status: 'missing' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-blue-600 mb-4">Required Files:</h2>
      
      <ul className="space-y-3">
        {files.map((file, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className={`flex-shrink-0 ${
              file.status === 'missing' ? 'text-red-500' : 'text-green-500'
            }`}>
              {file.status === 'missing' ? (
                <X className="h-5 w-5" />
              ) : (
                <Check className="h-5 w-5" />
              )}
            </div>
            <span className="text-sm text-gray-700">{file.name}:</span>
            <span className={`text-sm font-medium ${
              file.status === 'missing' ? 'text-red-600' : 'text-green-600'
            }`}>
              {file.status === 'missing' ? 'Missing' : 'Uploaded'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequiredFiles;
