
import React from 'react';
import { Upload } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from '@/components/ui/sidebar';
import FileUpload from '@/components/FileUpload';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-blue-800">ACCLLP Dashboard</h2>
          </div>
          <h3 className="text-md font-medium text-blue-700 mt-2">File Uploads</h3>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Upload Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-4">
              <FileUpload
                title="Upload Current Year Sales Excel File"
                fileType="Excel"
                maxSize="10MB"
                uploadKey="currentYearSales"
              />
              
              <FileUpload
                title="Upload Last Year Sales Excel File"
                fileType="Excel"
                maxSize="10MB"
                uploadKey="lastYearSales"
              />
              
              <FileUpload
                title="Upload Budget Excel File"
                fileType="Excel"
                maxSize="10MB"
                uploadKey="budget"
              />
              
              <FileUpload
                title="Upload OS-Previous Month Excel File"
                fileType="Excel"
                maxSize="10MB"
                uploadKey="osPrevious"
              />
              
              <FileUpload
                title="Upload OS-Current Month Excel File"
                fileType="Excel"
                maxSize="10MB"
                uploadKey="osCurrent"
              />
              
              <FileUpload
                title="Upload Logo"
                fileType="Image"
                maxSize="5MB"
                uploadKey="logo"
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
