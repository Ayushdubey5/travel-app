import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-[280px] bg-white h-screen p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
             alt="Profile" 
             className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold text-text-primary">Sarah Johnson</h3>
          <p className="text-sm text-text-secondary">Travel Enthusiast</p>
        </div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-secondary text-primary font-medium">
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-secondary">
              <span>My Trips</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-secondary">
              <span>Bookings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}