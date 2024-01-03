import React from "react";
import HeadDashboard from "./HeadDashboard";
import DashBoardCard from "./DashBoardCard";
import DashBoardcharts from "./DashBoardcharts";
import DashboardMainCard from "./DashboardMainCard";
import QuestionsSeaction from "./QuestionsSeaction";
import Footer from "../../../components/Basics/Footer";
import WithUser from "../../../hoc/withUser";


function Dashboard() {
 
  return (
    <div>
      {/*----------------------------- Head Of Dashboard -------------------------------------- */}
      <HeadDashboard />

       {/*----------------------------- Card Deatil Of Dashboard -------------------------------------- */}
      <DashBoardCard />

       {/*----------------------------- Charts Of Dashboard -------------------------------------- */}
       <DashBoardcharts/>
 
 
       {/*----------------------------- Charts Of Dashboard -------------------------------------- */}
       <DashboardMainCard/> 
       
       
       {/*----------------------------- Query Seactions Of Dashboard -------------------------------------- */}
       <QuestionsSeaction/>

        {/* ------------------------------------Footer */}

        <Footer/>
      
    
       
    </div>
  );
}

const ProtectedDashboardWrapper = WithUser(Dashboard);
export default ProtectedDashboardWrapper;

