import React from "react";
import SideMenu from "../../components-dashboard/sidemenu/SideMenu";
import DashboardContent from "./DashboardContent";
import "../../components-dashboard/dashboardcss/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
