
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const ProductGrowthConfig: React.FC = () => {
  const [lastYearSheet, setLastYearSheet] = useState('');
  const [currentYearSheet, setCurrentYearSheet] = useState('');
  const [lastYearHeaderRow, setLastYearHeaderRow] = useState('1');
  const [currentYearHeaderRow, setCurrentYearHeaderRow] = useState('1');

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-8">
      <h2 className="text-xl font-bold text-white mb-6">Product Growth Dashboard</h2>
      
      {/* Configure Files */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Configure Files</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Year Sales Sheet</label>
            <Select value={lastYearSheet} onValueChange={setLastYearSheet}>
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
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Sheet</label>
            <Select value={currentYearSheet} onValueChange={setCurrentYearSheet}>
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Header Row (1-based)</label>
            <Select value={currentYearSheet} onValueChange={setCurrentYearSheet}>
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
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Year Header Row (1-based)</label>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setCurrentYearHeaderRow(String(Math.max(1, parseInt(currentYearHeaderRow) - 1)))}
              >
                -
              </Button>
              <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-center min-w-[60px]">
                {currentYearHeaderRow}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setCurrentYearHeaderRow(String(parseInt(currentYearHeaderRow) + 1))}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Last Year Column Mapping */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Last Year Column Mapping</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Date Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Quantity Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Actual Quantity" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="actual_quantity">Actual Quantity</SelectItem>
                <SelectItem value="qty">Qty</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Value Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Value" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="value">Value</SelectItem>
                <SelectItem value="amount">Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Product Group Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Type (Make)" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="type">Type (Make)</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company Group Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Company Group" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="company_group">Company Group</SelectItem>
                <SelectItem value="branch">Branch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Executive Column</label>
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

      {/* Current Year Column Mapping */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Current Year Column Mapping</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Date Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Product Group Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Type (Make)" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="type">Type (Make)</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Quantity Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Actual Quantity" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="actual_quantity">Actual Quantity</SelectItem>
                <SelectItem value="qty">Qty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company Group Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Company Group" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="company_group">Company Group</SelectItem>
                <SelectItem value="branch">Branch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Value Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Value" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="value">Value</SelectItem>
                <SelectItem value="amount">Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Executive Column</label>
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

      {/* Budget Column Mapping */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Budget Column Mapping</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Quantity Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Qty" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="qty">Qty</SelectItem>
                <SelectItem value="quantity">Quantity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Value Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Value" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="value">Value</SelectItem>
                <SelectItem value="amount">Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Product Group Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Product Group" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="product_group">Product Group</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Select Month Range */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Select Month Range</h3>
        <div className="bg-red-900/50 border border-red-700 rounded p-4">
          <p className="text-red-200 text-sm">No valid months found in LY or CY data. Please check date columns.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductGrowthConfig;
