import React, { useState } from 'react';

export default function PlanTrip({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    dates: '',
    travelers: '1',
    budget: '',
    interests: []
  });

  const interests = [
    'Culture & History',
    'Food & Dining',
    'Nature & Outdoors',
    'Shopping',
    'Adventure',
    'Relaxation'
  ];

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end">
      <div className="w-[480px] bg-white h-full p-6 overflow-y-auto animate-slide-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Plan New Trip</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {step === 1 && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Where would you like to go?
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                    placeholder="Enter destination"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    When do you plan to travel?
                  </label>
                  <input
                    type="text"
                    value={formData.dates}
                    onChange={(e) => setFormData(prev => ({ ...prev, dates: e.target.value }))}
                    placeholder="Select dates"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Number of travelers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelers: e.target.value }))}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'traveler' : 'travelers'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    What's your budget?
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    placeholder="Enter budget"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    What are your interests?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map(interest => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                          formData.interests.includes(interest)
                            ? 'bg-primary text-white'
                            : 'bg-secondary text-text-primary hover:bg-primary/10'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-secondary text-text-primary py-3 rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Create Trip
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}