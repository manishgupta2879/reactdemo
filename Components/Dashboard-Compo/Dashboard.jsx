import React from "react";
import HeadDashboard from "./headdashboard";
import DashBoardCard from "./DashBoardCard";
import DashBoardcharts from "./DashBoardcharts";
import Footer from "../Basics/footer";

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
      
       <Footer/>
       
    </div>
  );
}
