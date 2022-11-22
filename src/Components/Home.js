import { useEffect, useState } from "react";
import "./Home.css";
import profile_picture from "./Images/image-jeremy.png";
import work from "./Images/icon-work.svg";
import play from "./Images/icon-play.svg";
import study from "./Images/icon-study.svg";
import exercise from "./Images/icon-exercise.svg";
import social from "./Images/icon-social.svg";
import self_care from "./Images/icon-self-care.svg";
import ellipsis from "./Images/icon-ellipsis.svg";
import json_data from "../data.json";


// - Light red (work): hsl(15, 100%, 70%)
// - Soft blue (play): hsl(195, 74%, 62%)
// - Light red (study): hsl(348, 100%, 68%)
// - Lime green (exercise): hsl(145, 58%, 55%)
// - Violet (social): hsl(264, 64%, 52%)
// - Soft orange (self care): hsl(43, 84%, 65%)


function Home() {

  const [properties] = useState([
    { color: "hsl(15, 100%, 70%)", icon: work},
    { color: "hsl(195, 74%, 62%)", icon: play},
    { color: "hsl(348, 100%, 68%)", icon: study},
    { color: "hsl(145, 58%, 55%)", icon: exercise},
    { color: "hsl(264, 64%, 52%)", icon: social},
    { color: "hsl(43, 84%, 65%)", icon: self_care}
  ])

  const [time, setTime] = useState("weekly");

  // <div className="box Work">
  //       <img className="icon" src={work} alt="icon"/>
  //       <div className="outer-box">
  //         <div className="inner-box">
  //           <div className="title">
  //             <div className="div">{data[0].title}</div>
  //             <img src={ellipsis} alt="dots" />
  //           </div>
  //           <div className="activity-time">{data[0].timeframes.weekly.current}hrs</div>
  //           <div className="last-week-activity">Last Week - {data[0].timeframes.weekly.previous}hrs</div>
  //         </div>
  //       </div>
  //     </div>
  
  const [data] = useState(json_data);
  
  useEffect(() => {
    // console.log(data);
  });

  return (
    <div className="container">
      <div className="box Profile">
        <div className="outer-profile">
          <div className="inner-profile">
            <img src={profile_picture} alt="Profile Picture" />
            <div>
              <div className="report">Report for</div>
              <div className="name">Jeremy Robson</div>
            </div>
          </div>
        </div>
        <div className="outer-profile-footer">
          <div className="inner-profile-footer">
            <div className={`time ${time === "daily" ? "active" : ""}`} onClick={() => setTime("daily")}>Daily</div>
            <div className={`time ${time === "weekly" ? "active" : ""}`} onClick={() => setTime("weekly")}>Weekly</div>
            <div className={`time ${time === "monthly" ? "active" : ""}`} onClick={() => setTime("monthly")}>Monthly</div>
          </div>
        </div>
      </div>
      {data.map((number, index) => (
      <div key={index} className="box" style={{backgroundColor: `${properties[index].color}`}}>
        <img className="icon" src={properties[index].icon} alt="icon"/>
        <div className="outer-box">
          <div className="inner-box">
            <div className="title">
              <div className="title-name">{data[index].title}</div>
              <img src={ellipsis} alt="dots" />
            </div>
            <div className="activity-duration">
              <div className="activity-time">{time === "weekly" ? data[index].timeframes.weekly.current : time === "daily" ? data[index].timeframes.daily.current : data[index].timeframes.monthly.current}hrs</div>
              <div className="last-week-activity">{time === "weekly" ? "Last Week" : time === "daily" ? "Yesterday" : "Last Month"} - {time === "weekly" ? data[index].timeframes.weekly.previous : time === "daily" ? data[index].timeframes.daily.previous : data[index].timeframes.monthly.previous}hrs</div>
            </div>
          </div>
        </div>
      </div>))}      
      
    </div>
  )
}

export default Home;