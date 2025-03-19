import React, { useState } from "react";
import { 
  Activity, 
  Clock, 
  Utensils, 
  PlusCircle
} from "lucide-react";

function UserDashboard() {
  // Sample user data - in a real app, this would come from your backend
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    lastUpdate: "Today, 2:45 PM",
    currentSymptoms: [
      { id: 1, name: "Abdominal Pain", severity: 3, trend: "decreasing" },
      { id: 2, name: "Fatigue", severity: 2, trend: "stable" },
      { id: 3, name: "Joint Pain", severity: 1, trend: "increasing" }
    ],
    recentMeals: [
      { id: 1, time: "8:30 AM", description: "Oatmeal with banana", reaction: "none" },
      { id: 2, time: "12:15 PM", description: "Grilled chicken salad", reaction: "mild" }
    ],
    medications: [
      { id: 1, name: "Mesalamine", dosage: "1g", schedule: "Twice daily", nextDose: "8:00 PM" },
      { id: 2, name: "Prednisone", dosage: "5mg", schedule: "Once daily", nextDose: "Tomorrow, 9:00 AM" }
    ],
    upcomingAppointments: [
      { id: 1, doctor: "Dr. Smith (Gastroenterologist)", date: "March 25, 2025", time: "10:30 AM" }
    ]
  });

  // State for the symptom input form
  const [newSymptom, setNewSymptom] = useState({
    type: "",
    severity: 1,
    notes: ""
  });

  // State for the meal input form
  const [newMeal, setNewMeal] = useState({
    description: "",
    time: "",
    notes: ""
  });

  // Handle form submissions
  const handleSymptomSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save this to your backend
    console.log("New symptom logged:", newSymptom);
    // Reset form
    setNewSymptom({ type: "", severity: 1, notes: "" });
  };

  const handleMealSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save this to your backend
    console.log("New meal logged:", newMeal);
    // Reset form
    setNewMeal({ description: "", time: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Layout */}
        {/* Sidebar Component */}
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Hello, {userData.name}</h1>
            <p className="text-gray-500">Last updated: {userData.lastUpdate}</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Health Overview Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Activity className="text-blue-500 mr-2" size={20} />
                Current Health Status
              </h2>
              
              <div className="space-y-4">
                {userData.currentSymptoms.map(symptom => (
                  <div key={symptom.id} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-medium">{symptom.name}</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-2 w-6 rounded-sm mr-1 ${
                                i < symptom.severity ? 'bg-blue-500' : 'bg-gray-200'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">Severity: {symptom.severity}/5</span>
                      </div>
                    </div>
                    <div className={`text-sm ${
                      symptom.trend === "increasing" ? "text-red-500" :
                      symptom.trend === "decreasing" ? "text-green-500" : 
                      "text-gray-500"
                    }`}>
                      {symptom.trend === "increasing" ? "↑" : 
                       symptom.trend === "decreasing" ? "↓" : "→"} {symptom.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Medication & Appointments Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="text-blue-500 mr-2" size={20} />
                Medications & Appointments
              </h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-3">MEDICATIONS</h3>
                {userData.medications.map(med => (
                  <div key={med.id} className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">{med.name}</p>
                      <p className="text-sm text-gray-500">{med.dosage} • {med.schedule}</p>
                    </div>
                    <div className="text-sm text-blue-500 font-medium">
                      {med.nextDose}
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">UPCOMING APPOINTMENTS</h3>
                {userData.upcomingAppointments.map(appt => (
                  <div key={appt.id} className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">{appt.doctor}</p>
                      <p className="text-sm text-gray-500">{appt.date} • {appt.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Meal Tracker */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Utensils className="text-blue-500 mr-2" size={20} />
                Recent Meals
              </h2>
              
              <div className="space-y-4 mb-6">
                {userData.recentMeals.map(meal => (
                  <div key={meal.id} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-medium">{meal.description}</p>
                      <p className="text-sm text-gray-500">{meal.time}</p>
                    </div>
                    <div className={`text-sm px-2 py-1 rounded ${
                      meal.reaction === "none" ? "bg-green-50 text-green-700" :
                      meal.reaction === "mild" ? "bg-yellow-50 text-yellow-700" :
                      "bg-red-50 text-red-700"
                    }`}>
                      {meal.reaction === "none" ? "No reaction" :
                       meal.reaction === "mild" ? "Mild reaction" :
                       "Severe reaction"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Input Data Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <PlusCircle className="text-blue-500 mr-2" size={20} />
                Input New Data
              </h2>
              
              <div className="mb-6">
                <div className="flex space-x-2 mb-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Log Symptom</button>
                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">Log Meal</button>
                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">Log Medication</button>
                </div>
                
                <form onSubmit={handleSymptomSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Symptom Type
                    </label>
                    <select 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newSymptom.type}
                      onChange={(e) => setNewSymptom({...newSymptom, type: e.target.value})}
                      required
                    >
                      <option value="">Select symptom</option>
                      <option value="abdominal_pain">Abdominal Pain</option>
                      <option value="diarrhea">Diarrhea</option>
                      <option value="fatigue">Fatigue</option>
                      <option value="joint_pain">Joint Pain</option>
                      <option value="bloating">Bloating</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Severity (1-5)
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <button
                          key={level}
                          type="button"
                          className={`w-1/5 py-2 border ${
                            newSymptom.severity === level 
                              ? 'bg-blue-500 text-white border-blue-500' 
                              : 'bg-white text-gray-700 border-gray-300'
                          } rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          onClick={() => setNewSymptom({...newSymptom, severity: level})}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes (Optional)
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      value={newSymptom.notes}
                      onChange={(e) => setNewSymptom({...newSymptom, notes: e.target.value})}
                      placeholder="Add any additional details about this symptom..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200"
                  >
                    Log Symptom
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default UserDashboard;