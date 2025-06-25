import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useFileUpload } from '@/contexts/FileUploadContext';
import BudgetVsBilledConfig from '@/components/BudgetVsBilledConfig';
import OdTargetVsCollectionConfig from '@/components/OdTargetVsCollectionConfig';
import ProductGrowthConfig from '@/components/ProductGrowthConfig';
import BilledCustomerConfig from '@/components/BilledCustomerConfig';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ReportTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('budget-vs-billed');
  const { uploadedFiles } = useFileUpload();

  const tabs = [
    { id: 'budget-vs-billed', label: 'Budget vs Billed' },
    { id: 'od-target-vs-collection', label: 'Od Target vs Collection' },
    { id: 'product-growth', label: 'Product Growth' },
    { id: 'number-of-billed-customer', label: 'Number of Billed customer' },
  ];

  const renderBudgetVsBilled = () => {
    const hasRequiredFiles = uploadedFiles.currentYearSales && uploadedFiles.budget;
    
    if (!hasRequiredFiles) {
      return (
        <div className="bg-purple-600 text-white p-4 rounded-lg">
          <p className="text-center">Please upload both Sales and Budget files in the sidebar</p>
        </div>
      );
    }

    return <BudgetVsBilledConfig />;
  };

  const renderOdTargetVsCollection = () => {
    const hasRequiredFiles = uploadedFiles.osPrevious && uploadedFiles.osCurrent;
    
    if (!hasRequiredFiles) {
      return (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-gray-600">Upload required OS files to generate this report</p>
        </div>
      );
    }

    return <OdTargetVsCollectionConfig />;
  };

  const renderProductGrowth = () => {
    const hasRequiredFiles = uploadedFiles.currentYearSales && uploadedFiles.lastYearSales;
    
    if (!hasRequiredFiles) {
      return (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-gray-600">Upload current and last year sales files to generate this report</p>
        </div>
      );
    }

    return <ProductGrowthConfig />;
  };

  const renderBilledCustomers = () => {
    const hasRequiredFiles = uploadedFiles.currentYearSales;
    
    if (!hasRequiredFiles) {
      return (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-gray-600">Upload current year sales file to generate this report</p>
        </div>
      );
    }

    return <BilledCustomerConfig />;
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'hover:bg-purple-50 text-purple-600 border-purple-200'
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="space-y-6">
        {activeTab === 'budget-vs-billed' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Budget vs Billed Report</h3>
            {renderBudgetVsBilled()}
          </div>
        )}

        {activeTab === 'od-target-vs-collection' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Od Target vs Collection Report</h3>
            {renderOdTargetVsCollection()}
          </div>
        )}

        {activeTab === 'product-growth' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Product Growth Report</h3>
            {renderProductGrowth()}
          </div>
        )}

        {activeTab === 'number-of-billed-customer' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Number of Billed Customer Report</h3>
            {renderBilledCustomers()}
          </div>
        )}

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Consolidated Report</h3>
          <div className="bg-purple-600 text-white p-4 rounded-lg">
            <p className="text-center">Generate at least one report from any tab to enable the consolidated report option</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTabs;
