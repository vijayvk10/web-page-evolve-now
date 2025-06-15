
import React from 'react';
import FileUpload from '@/components/FileUpload';
import RequiredFiles from '@/components/RequiredFiles';
import ReportTabs from '@/components/ReportTabs';
import UserTabs from '@/components/UserTabs';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <UserTabs />
          <h1 className="text-3xl font-bold text-blue-600 mb-2">ACCLLP Integrated Dashboard</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - File Uploads */}
          <div className="lg:w-1/3">
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-4">ACCLLP Dashboard</h2>
              <h3 className="text-md font-medium text-blue-700 mb-4">File Uploads</h3>
            </div>

            <div className="space-y-4">
              <FileUpload
                title="Upload Current Year Sales Excel File"
                fileType="Excel"
                maxSize="10MB"
              />
              
              <FileUpload
                title="Upload Last Year Sales Excel File"
                fileType="Excel"
                maxSize="10MB"
              />
              
              <FileUpload
                title="Upload Budget Excel File"
                fileType="Excel"
                maxSize="10MB"
              />
              
              <FileUpload
                title="Upload OS-Previous Month Excel File"
                fileType="Excel"
                maxSize="10MB"
              />
              
              <FileUpload
                title="Upload OS-Current Month Excel File"
                fileType="Excel"
                maxSize="10MB"
              />
              
              <FileUpload
                title="Upload Logo"
                fileType="Image"
                maxSize="5MB"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <RequiredFiles />
            </div>
            
            <ReportTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
