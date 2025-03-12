import { useState } from "react";
import ApplicationList from "../components/ApplicationList";
import Notifications from "../components/Notifications";
import { useReviewedApplications, usePendingApplications, useCommitteeNotifications } from "../hooks/useReviews";
import ReviewPanel from "../components/ReviewPanel";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GrantCommitteeDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("pending");
  const tabs = [
    { label: "Pending Applications", path: "pending" },
    { label: "Reviewed Applications", path: "reviewed" },
    { label: "Notifications", path: "notifications" },
  ];

  return (
    <div>
      <Header title="Grant Committee Dashboard" tabs={tabs} onTabClick={setSelectedTab} />
      <div className="main-content pt-5">
        {selectedTab === "pending" && <ReviewPanel />}
        {selectedTab === "reviewed" && <ApplicationList applicationLoader={useReviewedApplications} title={"Reviewed Applications"} />}
        {selectedTab === "notifications" && <Notifications notificationLoader={useCommitteeNotifications} />}
      </div>
      <Footer />
    </div>
  );
};

export default GrantCommitteeDashboard;
