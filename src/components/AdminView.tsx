import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronDown } from 'lucide-react';

const AdminView: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState('executive-management');
  const [activeSubTab, setActiveSubTab] = useState('executive-creation');
  const [executiveName, setExecutiveName] = useState('');
  const [executiveCode, setExecutiveCode] = useState('');
  const [selectedExecutive, setSelectedExecutive] = useState('');

  // Sample data for current executives
  const currentExecutives = [
    { executive: 'John Doe', code: 'EX001', customers: 150, branches: 5 },
    { executive: 'Jane Smith', code: 'EX002', customers: 200, branches: 8 },
    { executive: 'Mike Johnson', code: 'EX003', customers: 120, branches: 4 },
  ];

  const mainTabs = [
    { id: 'executive-management', label: 'Executive Management' },
    { id: 'branch-region-mapping', label: 'Branch & Region Mapping' },
    { id: 'company-product-mapping', label: 'Company &Product Mapping' },
    { id: 'backup-restore', label: 'Backup & Restore' },
    { id: 'consolidated-data-view', label: 'Consolidated Data View' },
    { id: 'file-processing', label: 'File Processing' },
  ];

  const subTabs = [
    { id: 'executive-creation', label: 'Executive Creation' },
    { id: 'customer-code-management', label: 'Customer code management' },
  ];

  const handleAddExecutive = () => {
    if (executiveName && executiveCode) {
      console.log('Adding executive:', { name: executiveName, code: executiveCode });
      // Reset form
      setExecutiveName('');
      setExecutiveCode('');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Executive Mapping Administration Portal</h1>
      
      {/* Main Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {mainTabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeMainTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveMainTab(tab.id)}
            className={activeMainTab === tab.id ? "bg-blue-600 hover:bg-blue-700" : ""}
            size="sm"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Executive Management Content */}
      {activeMainTab === 'executive-management' && (
        <div className="space-y-6">
          {/* Sub Navigation */}
          <div className="flex gap-2 mb-4">
            {subTabs.map((subTab) => (
              <Button
                key={subTab.id}
                variant={activeSubTab === subTab.id ? "default" : "outline"}
                onClick={() => setActiveSubTab(subTab.id)}
                className={activeSubTab === subTab.id ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-blue-600 border-blue-600"}
                size="sm"
              >
                {subTab.label}
              </Button>
            ))}
          </div>

          {/* Executive Creation Tab */}
          {activeSubTab === 'executive-creation' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add New Executive Form */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-blue-600 mb-6">Add New Executive</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="executive-name" className="text-blue-600 font-medium">Executive Name :</Label>
                    <Input
                      id="executive-name"
                      type="text"
                      value={executiveName}
                      onChange={(e) => setExecutiveName(e.target.value)}
                      className="mt-2 bg-gray-100 border-gray-300"
                      placeholder="Enter executive name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="executive-code" className="text-blue-600 font-medium">Executive Code:</Label>
                    <Input
                      id="executive-code"
                      type="text"
                      value={executiveCode}
                      onChange={(e) => setExecutiveCode(e.target.value)}
                      className="mt-2 bg-gray-100 border-gray-300"
                      placeholder="Enter executive code"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleAddExecutive}
                    className="bg-blue-600 hover:bg-blue-700 text-white mt-6"
                  >
                    Add Executive
                  </Button>
                </div>
              </div>

              {/* Current Executive Display */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-blue-600 mb-6">Current Executive</h2>
                
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-gray-600 font-medium">Executive</TableHead>
                        <TableHead className="text-gray-600 font-medium">Code</TableHead>
                        <TableHead className="text-gray-600 font-medium">Customers</TableHead>
                        <TableHead className="text-gray-600 font-medium">Branches</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentExecutives.map((exec, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{exec.executive}</TableCell>
                          <TableCell>{exec.code}</TableCell>
                          <TableCell>{exec.customers}</TableCell>
                          <TableCell>{exec.branches}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6">
                  <Label htmlFor="executive-select" className="text-blue-600 font-medium">Executive Code:</Label>
                  <div className="relative mt-2">
                    <select
                      id="executive-select"
                      value={selectedExecutive}
                      onChange={(e) => setSelectedExecutive(e.target.value)}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Executive</option>
                      {currentExecutives.map((exec, index) => (
                        <option key={index} value={exec.code}>
                          {exec.code} - {exec.executive}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer Code Management Tab */}
          {activeSubTab === 'customer-code-management' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Customer Code Management</h2>
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <p className="text-center">Customer code management functionality will be implemented here</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Other Main Tabs Content */}
      {activeMainTab !== 'executive-management' && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            {mainTabs.find(tab => tab.id === activeMainTab)?.label}
          </h2>
          <div className="bg-blue-600 text-white p-4 rounded-lg">
            <p className="text-center">This functionality will be implemented soon</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;
