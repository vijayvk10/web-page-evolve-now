
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus } from 'lucide-react';

const OdTargetVsCollectionConfig: React.FC = () => {
  const [osPreHeaderRow, setOsPreHeaderRow] = useState('1');
  const [osCurrentHeaderRow, setOsCurrentHeaderRow] = useState('1');
  const [salesHeaderRow, setSalesHeaderRow] = useState('1');

  return (
    <div className="space-y-8 bg-white p-6 rounded-lg border border-gray-200">
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-6">OD Target vs Collection Report</h2>
        
        {/* Sheet Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Sheet Selection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OS-Previous Month Sheet</Label>
              <Select defaultValue="sheet1">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sheet1">Sheet1</SelectItem>
                  <SelectItem value="sheet2">Sheet2</SelectItem>
                  <SelectItem value="sheet3">Sheet3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OS-Current Month Sheet</Label>
              <Select defaultValue="sheet1">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sheet1">Sheet1</SelectItem>
                  <SelectItem value="sheet2">Sheet2</SelectItem>
                  <SelectItem value="sheet3">Sheet3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Sales Sheet</Label>
              <Select defaultValue="sheet1">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sheet1">Sheet1</SelectItem>
                  <SelectItem value="sheet2">Sheet2</SelectItem>
                  <SelectItem value="sheet3">Sheet3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Header Row Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">OS-Previous Month Header Row (1-based)</Label>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setOsPreHeaderRow(String(Math.max(1, parseInt(osPreHeaderRow) - 1)))}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input 
                type="number" 
                value={osPreHeaderRow}
                onChange={(e) => setOsPreHeaderRow(e.target.value)}
                className="text-center h-8 w-16"
                min="1"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setOsPreHeaderRow(String(parseInt(osPreHeaderRow) + 1))}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">OS-Current Month Header Row (1-based)</Label>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setOsCurrentHeaderRow(String(Math.max(1, parseInt(osCurrentHeaderRow) - 1)))}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input 
                type="number" 
                value={osCurrentHeaderRow}
                onChange={(e) => setOsCurrentHeaderRow(e.target.value)}
                className="text-center h-8 w-16"
                min="1"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setOsCurrentHeaderRow(String(parseInt(osCurrentHeaderRow) + 1))}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Sales Header Row (1-based)</Label>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSalesHeaderRow(String(Math.max(1, parseInt(salesHeaderRow) - 1)))}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input 
                type="number" 
                value={salesHeaderRow}
                onChange={(e) => setSalesHeaderRow(e.target.value)}
                className="text-center h-8 w-16"
                min="1"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSalesHeaderRow(String(parseInt(salesHeaderRow) + 1))}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* OS-Previous Month Column Mapping */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">OS-Previous Month Column Mapping</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Due Date Column</Label>
              <Select defaultValue="due-date">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="due-date">Due Date</SelectItem>
                  <SelectItem value="invoice-date">Invoice Date</SelectItem>
                  <SelectItem value="bill-date">Bill Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Branch Column</Label>
              <Select defaultValue="branch">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branch">Branch</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Executive Column</Label>
              <Select defaultValue="executive-name">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="executive-name">Executive Name</SelectItem>
                  <SelectItem value="sales-person">Sales Person</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Reference Date Column</Label>
              <Select defaultValue="ref-date">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ref-date">Ref. Date</SelectItem>
                  <SelectItem value="reference-date">Reference Date</SelectItem>
                  <SelectItem value="created-date">Created Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Net Value Column</Label>
              <Select defaultValue="net-value">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="net-value">Net Value</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="total">Total</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Region Column</Label>
              <Select defaultValue="region">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="region">Region</SelectItem>
                  <SelectItem value="area">Area</SelectItem>
                  <SelectItem value="zone">Zone</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* OS-Current Month Column Mapping */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">OS-Current Month Column Mapping</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Due Date Column</Label>
              <Select defaultValue="due-date">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="due-date">Due Date</SelectItem>
                  <SelectItem value="invoice-date">Invoice Date</SelectItem>
                  <SelectItem value="bill-date">Bill Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Branch Column</Label>
              <Select defaultValue="branch">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branch">Branch</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Executive Column</Label>
              <Select defaultValue="executive-name">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="executive-name">Executive Name</SelectItem>
                  <SelectItem value="sales-person">Sales Person</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Reference Date Column</Label>
              <Select defaultValue="ref-date">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ref-date">Ref. Date</SelectItem>
                  <SelectItem value="reference-date">Reference Date</SelectItem>
                  <SelectItem value="created-date">Created Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Net Value Column</Label>
              <Select defaultValue="net-value">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="net-value">Net Value</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="total">Total</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Region Column</Label>
              <Select defaultValue="region">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="region">Region</SelectItem>
                  <SelectItem value="area">Area</SelectItem>
                  <SelectItem value="zone">Zone</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Total Sale Column Mapping */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Total Sale Column Mapping</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Bill Date Column</Label>
              <Select defaultValue="date">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="bill-date">Bill Date</SelectItem>
                  <SelectItem value="invoice-date">Invoice Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Branch Column</Label>
              <Select defaultValue="branch">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branch">Branch</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Executive Column</Label>
              <Select defaultValue="executive-name">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="executive-name">Executive Name</SelectItem>
                  <SelectItem value="sales-person">Sales Person</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Due Date Column</Label>
              <Select defaultValue="due-date">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="due-date">Due Date</SelectItem>
                  <SelectItem value="payment-date">Payment Date</SelectItem>
                  <SelectItem value="maturity-date">Maturity Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Value Column</Label>
              <Select defaultValue="invoice-value">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="invoice-value">Invoice Value</SelectItem>
                  <SelectItem value="net-value">Net Value</SelectItem>
                  <SelectItem value="total-amount">Total Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Region Column</Label>
              <Select defaultValue="region">
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="region">Region</SelectItem>
                  <SelectItem value="area">Area</SelectItem>
                  <SelectItem value="zone">Zone</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          No valid months found in the sales bill date column. Please check column selection.
        </div>
      </div>
    </div>
  );
};

export default OdTargetVsCollectionConfig;
