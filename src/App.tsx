import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Bell,
  Settings,
  FileText,
  Star,
  FileCheck,
  ChevronDown,
  Calendar,
  Search,
  MoreHorizontal,
} from "lucide-react";

import ImageEclipse from "./assets/image.png";
import { Sidebar } from "./components/sidebar";

const mockSpendData = [
  { month: "Jan", value: 3000000 },
  { month: "Feb", value: 8000000 },
  { month: "Mar", value: 7500000 },
  { month: "Apr", value: 5000000 },
  { month: "May", value: 6000000 },
  { month: "Jun", value: 6860300 },
  { month: "Jul", value: 5500000 },
  { month: "Aug", value: 5000000 },
  { month: "Sep", value: 4500000 },
  { month: "Oct", value: 4000000 },
  { month: "Nov", value: 3000000 },
  { month: "Dec", value: 3000000 },
];

const mockTrendData = [
  { day: "Mo", value: 10 },
  { day: "Tu", value: 20 },
  { day: "We", value: 38 },
  { day: "Th", value: 45 },
  { day: "Fr", value: 55 },
  { day: "Sa", value: 35 },
  { day: "Su", value: 25 },
];

const transactionData = [
  {
    description: "Payment for FMAAS",
    amount: "N57,900.00",
    date: "9/11/2024",
    category: "Debit",
  },
  {
    description: "Wallet Top-up",
    amount: "N80,000.00",
    date: "9/9/2024",
    category: "Credit",
  },
  {
    description: "Wallet Top-up",
    amount: "N34,900.00",
    date: "9/8/2024",
    category: "Credit",
  },
  {
    description: "Wallet Top-up",
    amount: "N100,000.00",
    date: "9/5/2024",
    category: "Credit",
  },
  {
    description: "Payment for FMAAS",
    amount: "N17,800.00",
    date: "9/3/2024",
    category: "Debit",
  },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}

      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <Search className="absolute ml-6 text-gray-400" />
          <div className="flex-1 max-w-md mx-4 bg-gray-100 rounded-md">
            <Input
              className="max-w-md"
              placeholder="       Start typing here to search"
              type="search"
            />
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-8 w-01 bg-gray-400">|</div>
            <div className="flex items-center gap-2">
              <img
                src={ImageEclipse}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <div className="font-medium text-black">Tonye Gbobo</div>
                <div className="text-sm text-gray-500">Facility Manager</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-400">Hi Tonye,</h1>
            <h2 className="text-3xl font-bold mt-2">Overview</h2>
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="bg-orange-500 text-white px-4 py-5 rounded-lg mt-4"
            >
              Create Request
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-900">Total Request</div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className=" h-1 bg-gray-100 mt-6 mb-4" />
            <div className="text-3xl font-bold">23</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">Request Completed</div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <FileCheck className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <div className=" h-1 bg-gray-100 mt-6 mb-4" />
            <div className="text-3xl font-bold">18</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">Avg Job Rating</div>
              <div className="p-2 bg-red-100 rounded-lg">
                <Calendar className="h-5 w-5 text-red-500" />
              </div>
            </div>
            <div className=" h-1 bg-gray-100 mt-6 mb-4" />
            <div className="text-3xl font-bold">31 hrs</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">
                Avg Work Completion Time
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <Star className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className=" h-1 bg-gray-100 mt-6 mb-4" />
            <div className="text-3xl font-bold">93%</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="p-6 col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-400">
                  Spend Analysis
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">₦65,854,431.00</span>
                  <span className="text-red-500 text-sm">34.2% ↑</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-gray-400">
                Current Year
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockSpendData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#10B981"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Request Trend</h3>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-8 text-gray-400" />
              </Button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockTrendData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563EB"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Transaction History</h3>
              <Button variant="outline" size="sm" className="text-gray-400">
                September
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-gray-500">
                    <th className="text-left pb-4">Description</th>
                    <th className="text-left pb-4">Amount</th>
                    <th className="text-left pb-4">Date</th>
                    <th className="text-left pb-4">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((transaction, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4">{transaction.description}</td>
                      <td className="py-4">{transaction.amount}</td>
                      <td className="py-4">{transaction.date}</td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            transaction.category === "Credit"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {transaction.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Invoice Management</h3>
                <div className="text-3xl font-bold mt-2">
                  78<span className="text-sm text-gray-500 ml-1">Invoices</span>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Total Paid", value: 39, fill: "#2563EB" },
                      { name: "Total Overdue", value: 24, fill: "#10B981" },
                      { name: "Total Unpaid", value: 35, fill: "#EF4444" },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={90}
                    dataKey="value"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="">
                  <p className="text-sm text-gray-400">Total Paid</p>
                  <div className="flex justify-center items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <span className="text-sm">31</span>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">Total Overdue</p>
                  <div className="flex justify-center items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                    <span className="text-sm">19</span>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">Total Unpaid</p>
                  <div className="flex justify-center items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm">28</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
