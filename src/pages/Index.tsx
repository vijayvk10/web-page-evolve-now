
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import AdminView from '@/components/AdminView';
import UserTabs from '@/components/UserTabs';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-between mb-4">
                <SidebarTrigger />
                <div className="flex-1">
                  <UserTabs />
                </div>
              </div>
              <AdminView />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
