
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const BilledCustomerConfig: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = useState('');
  const [activeTab, setActiveTab] = useState('branches');
  const [selectedFile, setSelectedFile] = useState('previous-month');
  const [headerRow, setHeaderRow] = useState('1');

  const tabs = [
    { id: 'number-of-billed-customers', label: 'Number of Billed Customers' },
    { id: 'od-target', label: 'OD Target' }
  ];

  const filterTabs = [
    { id: 'branches', label: 'Branches' },
    { id: 'executives', label: 'Executives' }
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-8 min-h-screen">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-white mb-6">Number of Billed Customers & OD Target Report</h1>
        
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm ${
                tab.id === 'number-of-billed-customers' 
                  ? 'text-red-400 border-b-2 border-red-400' 
                  : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Number of Billed Customers Setup */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Number of Billed Customers Setup</h2>
          
          {/* Select Sales Sheet */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Select Sales Sheet</label>
            <Select value={selectedSheet} onValueChange={setSelectedSheet}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Sheet1" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="sheet1">Sheet1</SelectItem>
                <SelectItem value="sheet2">Sheet2</SelectItem>
                <SelectItem value="sheet3">Sheet3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Column Mapping */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Column Mapping</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Date Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="transaction_date">Transaction Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Customer ID Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Customer Code" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="customer_code">Customer Code</SelectItem>
                    <SelectItem value="customer_id">Customer ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Branch Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Branch" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="branch">Branch</SelectItem>
                    <SelectItem value="area">Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Executive Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Executive Name" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="executive_name">Executive Name</SelectItem>
                    <SelectItem value="sales_rep">Sales Rep</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Filter Options</h3>
            <div className="flex gap-2 mb-4">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm ${
                    activeTab === tab.id 
                      ? 'text-red-400 border-b-2 border-red-400' 
                      : 'text-gray-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'branches' && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="select-all-branches" className="border-red-400 text-red-400" />
                  <label htmlFor="select-all-branches" className="text-sm text-white">Select All Branches</label>
                </div>
              </div>
            )}

            <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700">
              Generate Billed Customers Report
            </Button>
          </div>
        </div>

        {/* OD Target Setup */}
        <div className="space-y-6 border-t border-gray-700 pt-6">
          <h2 className="text-xl font-bold text-white">OD Target Setup</h2>
          
          {/* File and Sheet Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">File and Sheet Selection</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Choose OS file for OD Target calculation:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="previous-month-od" 
                    name="od-file" 
                    value="previous-month"
                    checked={selectedFile === 'previous-month'}
                    onChange={(e) => setSelectedFile(e.target.value)}
                    className="text-red-400"
                  />
                  <label htmlFor="previous-month-od" className="text-sm text-white">OS-Previous Month</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="current-month-od" 
                    name="od-file" 
                    value="current-month"
                    checked={selectedFile === 'current-month'}
                    onChange={(e) => setSelectedFile(e.target.value)}
                    className="text-red-400"
                  />
                  <label htmlFor="current-month-od" className="text-sm text-white">OS-Current Month</label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">Select OS-Previous Month Sheet</label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Sheet1" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="sheet1">Sheet1</SelectItem>
                  <SelectItem value="sheet2">Sheet2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">Header Row (1-based)</label>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  onClick={() => setHeaderRow(String(Math.max(1, parseInt(headerRow) - 1)))}
                >
                  -
                </Button>
                <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-center min-w-[60px] text-white">
                  {headerRow}
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  onClick={() => setHeaderRow(String(parseInt(headerRow) + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="preview-raw-data" className="border-red-400 text-red-400" />
              <label htmlFor="preview-raw-data" className="text-sm text-white">Preview Raw OS Data</label>
            </div>
          </div>

          {/* OS Column Mapping */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">OS Column Mapping</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Area Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Branch" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="branch">Branch</SelectItem>
                    <SelectItem value="area">Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Due Date Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Due Date" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="due_date">Due Date</SelectItem>
                    <SelectItem value="maturity_date">Maturity Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Net Value Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Net Value" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="net_value">Net Value</SelectItem>
                    <SelectItem value="amount">Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Executive Column</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Executive Name" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="executive_name">Executive Name</SelectItem>
                    <SelectItem value="sales_rep">Sales Rep</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Due Date Filter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Due Date Filter</h3>
            <div className="bg-yellow-900 border border-yellow-700 rounded p-3">
              <p className="text-yellow-300 text-sm">No valid years found in OS-Previous Month's due date column.</p>
            </div>
          </div>

          {/* Branch Selection */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Branch Selection</h3>
            <div className="bg-red-900 border border-red-700 rounded p-3">
              <p className="text-red-300 text-sm">No valid branches found in OS-Previous Month data. Check area column.</p>
            </div>
          </div>

          {/* Executive Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Executive Selection</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="select-all-executives" className="border-red-400 text-red-400" />
              <label htmlFor="select-all-executives" className="text-sm text-white">Select All OS Executives</label>
            </div>

            <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700">
              Generate OD Target Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilledCustomerConfig;
