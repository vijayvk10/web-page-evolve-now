
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const BudgetVsBilledConfig: React.FC = () => {
  const [salesSheet, setSalesSheet] = useState('');
  const [budgetSheet, setBudgetSheet] = useState('');
  const [salesHeaderRow, setSalesHeaderRow] = useState('1');
  const [budgetHeaderRow, setBudgetHeaderRow] = useState('1');

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-8">
      <h2 className="text-xl font-bold text-white mb-6">Budget vs Billed Report</h2>
      
      {/* Sheet Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Sheet Selection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Sheet Name</label>
            <Select value={salesSheet} onValueChange={setSalesSheet}>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Sheet Name</label>
            <Select value={budgetSheet} onValueChange={setBudgetSheet}>
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
      </div>

      {/* Header Row Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">Header Row Selection</h3>
          <span className="text-gray-400 text-sm">ℹ️</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Header Row (1-based)</label>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setSalesHeaderRow(String(Math.max(1, parseInt(salesHeaderRow) - 1)))}
              >
                -
              </Button>
              <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-center min-w-[60px]">
                {salesHeaderRow}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setSalesHeaderRow(String(parseInt(salesHeaderRow) + 1))}
              >
                +
              </Button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Header Row (1-based)</label>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setBudgetHeaderRow(String(Math.max(1, parseInt(budgetHeaderRow) - 1)))}
              >
                -
              </Button>
              <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-center min-w-[60px]">
                {budgetHeaderRow}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setBudgetHeaderRow(String(parseInt(budgetHeaderRow) + 1))}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Column Mapping */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Sales Column Mapping</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Date Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Value Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Product Group Column</label>
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Area Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="branch">Branch</SelectItem>
                <SelectItem value="region">Region</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Quantity Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales SL Code Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Customer Code" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="customer_code">Customer Code</SelectItem>
                <SelectItem value="sl_code">SL Code</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Sales Executive Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Area Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="COMPANY" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="company">COMPANY</SelectItem>
                <SelectItem value="branch">Branch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Quantity Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget SL Code Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="SL Code" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="sl_code">SL Code</SelectItem>
                <SelectItem value="customer_code">Customer Code</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Value Column</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Product Group Column</label>
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
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Executive Column</label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="COMPANY" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="company">COMPANY</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Executive Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Executive Selection</h3>
        <div className="bg-red-900/50 border border-red-700 rounded p-4">
          <p className="text-red-200 text-sm">No executives found in selected Executive columns.</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetVsBilledConfig;
