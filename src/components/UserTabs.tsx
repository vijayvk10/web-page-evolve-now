
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const UserTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('branch');

  const tabs = [
    { id: 'admin', label: 'Admin' },
    { id: 'branch', label: 'Branch' },
    { id: 'executive', label: 'Executive' },
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-gray-100 rounded-lg p-1">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserTabs;
