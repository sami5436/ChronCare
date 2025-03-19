import React from "react";
import { 
  Activity, 
  BarChart, 
  Calendar, 
  Bell,
  Settings,
  User,
  LogOut
} from "lucide-react";

function Sidebar({ userName }) {
  return (
    <div className="w-20 md:w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-500 hidden md:block">CrohnCare</h2>
        <div className="md:hidden flex justify-center">
          <span className="text-blue-500 font-bold text-xl">C</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-2 py-4">
          <li className="px-3">
            <a href="#" className="flex items-center p-2 bg-blue-50 text-blue-600 rounded-lg font-medium">
              <Activity className="h-5 w-5 mr-3" />
              <span className="hidden md:block">Dashboard</span>
            </a>
          </li>
          <li className="px-3">
            <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <BarChart className="h-5 w-5 mr-3" />
              <span className="hidden md:block">Insights</span>
            </a>
          </li>
          <li className="px-3">
            <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Calendar className="h-5 w-5 mr-3" />
              <span className="hidden md:block">Journal</span>
            </a>
          </li>
          <li className="px-3">
            <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Bell className="h-5 w-5 mr-3" />
              <span className="hidden md:block">Reminders</span>
            </a>
          </li>
          <li className="px-3">
            <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Settings className="h-5 w-5 mr-3" />
              <span className="hidden md:block">Settings</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <User className="h-5 w-5 mr-3" />
          <span className="hidden md:block">{userName}</span>
        </a>
        <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg mt-2">
          <LogOut className="h-5 w-5 mr-3" />
          <span className="hidden md:block">Sign Out</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;