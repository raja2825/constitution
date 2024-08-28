import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import './Sidebar.css'; 

const SidebarDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);


  // Area chart options
  const areaChartOptions = {
    series: [
      { name: 'Purchase Orders', data: [31, 40, 28, 51, 42, 109, 100] },
      { name: 'Sales Orders', data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    chart: { height: 350, type: 'area', toolbar: { show: false } },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: { size: 0 },
    yaxis: [
      { title: { text: 'Purchase Orders' } },
      { opposite: true, title: { text: 'Sales Orders' } },
    ],
    tooltip: { shared: true, intersect: false },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside id="sidebar" className={sidebarOpen ? 'sidebar-responsive' : ''}>
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="material-icons-outlined"></span> Constitutional Dashboard
          </div>
          <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="index.html">
              <span className="material-icons-outlined"></span> DASHBOARD
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="http://127.0.0.1:5500/client/public/articles/index.html" target="_blank">
              <span className="material-icons-outlined"></span> Articles
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="http://127.0.0.1:5500/client/public/Analyze/index.html" target="_blank">
              <span className="material-icons-outlined"></span> Games
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined"></span> History
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined"></span> Documents
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined"></span> Information
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined"></span> Settings
            </a>
          </li>
        </ul>
      </aside>

      

       


    </div>
  );
};

export default SidebarDashboard;

