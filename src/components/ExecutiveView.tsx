
import React from 'react';
import { Button } from '@/components/ui/button';
import { useFileUpload } from '@/contexts/FileUploadContext';
import { X, Check } from 'lucide-react';

const ExecutiveView: React.FC = () => {
  const { uploadedFiles } = useFileUpload();

  const files = [
    { name: 'Current Year Sales File', key: 'currentYearSales' },
    { name: 'Last Year Sales File', key: 'lastYearSales' },
    { name: 'Budget File', key: 'budget' },
    { name: 'OS-Previous Month File', key: 'osPrevious' },
    { name: 'OS-Current Month File', key: 'osCurrent' },
  ];

  const reportTabs = [
    'Budget vs Billed',
    'Od Target vs Collection',
    'Product Growth',
    'Number of Billed customer & OD Target'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-8 text-center">Integrated Reports Dashboard</h1>
      
      {/* Required Files Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-blue-600 mb-4">Required Files:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map((file, index) => {
            const isUploaded = uploadedFiles[file.key as keyof typeof uploadedFiles];
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className={`flex-shrink-0 ${
                  !isUploaded ? 'text-red-500' : 'text-green-500'
                }`}>
                  {!isUploaded ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Check className="h-5 w-5" />
                  )}
                </div>
                <span className="text-sm text-gray-700">{file.name}:</span>
                <span className={`text-sm font-medium ${
                  !isUploaded ? 'text-red-600' : 'text-green-600'
                }`}>
                  {!isUploaded ? 'Missing' : 'Uploaded'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Report Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {reportTabs.map((tab, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Budget vs Billed Report Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Budget vs Billed Report</h2>
        <div className="bg-blue-600 text-white p-4 rounded">
          Please upload both Sales and Budget files to use this tab
        </div>
      </div>

      {/* Summary Report Generator */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Summary Report Generator</h2>
        <div className="bg-blue-600 text-white p-4 rounded">
          No reports generated yet
        </div>
      </div>
    </div>
  );
};

export default ExecutiveView;
