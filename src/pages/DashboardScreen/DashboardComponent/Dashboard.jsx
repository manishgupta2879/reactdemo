import React from "react";
import HeadDashboard from "./HeadDashboard";
import DashBoardCard from "./DashBoardCard";
import DashBoardcharts from "./DashBoardcharts";

export default function Dashboard() {
  return (
    <div>

      {/*----------------------------- Head Of Dashboard -------------------------------------- */}
      <HeadDashboard />

       {/*----------------------------- Card Deatil Of Dashboard -------------------------------------- */}
      <DashBoardCard />

       {/*----------------------------- Charts Of Dashboard -------------------------------------- */}
       <DashBoardcharts/>

       {/* ------------------------------------Footer */}
      
    
       
    </div>
  );
}
