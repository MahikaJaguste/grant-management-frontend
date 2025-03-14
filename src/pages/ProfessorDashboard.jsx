import { useState } from "react";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import Notifications from "../components/Notifications";
import { useApplications, useProfessorNotifications } from "../hooks/useApplications";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfessorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("applications");
  const tabs = [
    { label: "Application Form", path: "form" },
    { label: "My Applications", path: "applications" },
    { label: "Notifications", path: "notifications" },
  ];

  return (
    <div>
      <Header title="Professor Dashboard" tabs={tabs} onTabClick={setSelectedTab} />
      <div className="main-content pt-5">
        {selectedTab === "form" && <ApplicationForm />}
        {selectedTab === "applications" && <ApplicationList applicationLoader={useApplications} title={"My Applications"} />}
        {selectedTab === "notifications" && <Notifications notificationLoader={useProfessorNotifications} />}
      </div>
      <Footer />
    </div>
  );
};

export default ProfessorDashboard;