"use client";

import { useState } from "react";
import ScheduleCard from "../Components/Schedule_Card";
import CalenderCard from "../Components/CalenderCard";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<"OCT 16" | "OCT 17" | "OCT 18">(
    "OCT 16"
  );

  return (
    <div>
     <div className="w-full p-6 pb-10">
        <div className="mb-6 flex flex-col items-center justify-center space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">

          </label>
          <div>
            <CalenderCard
              selectedDay={selectedDay}
              onSelectDay={(day: "OCT 16" | "OCT 17" | "OCT 18") => setSelectedDay(day)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* ...existing ScheduleCard rendering logic... */}
      
      </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <>
            {selectedDay === "OCT 16" && (
              <>
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Breakfast"
                  desc="Students have breakfast in school before the start of the day"
                  location="CDH"
                  startTime="09:00"
                  endTime="09:25"
                  coverImage="data:image/jpeg;base64,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"
                  numberOfPeople={130}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
               
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Exhibitions"
                  desc="Exhibitions by all the Departements of School"
                  location="Various Locations"
                  startTime="10:30"
                  endTime="13:30"
                  coverImage="./Photos/founder-science-exhibition.jpg"
                  numberOfPeople={135}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Lunch"
                  desc="Lunch for all Students, Parents, Old Boys and Guests"
                  location="CDH"
                  startTime="13:00"
                  endTime="14:00"
                  numberOfPeople={114}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Interhouse Athletics"
                  desc="Finals of the Interhouse Athletics Competition, 2025"
                  location="Main Field"
                  startTime="15:00"
                  endTime="17:00"
                  numberOfPeople={106}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Walk for the Batch of 1955"
                  desc="Walk for the Batch of 1955 (30m walk) & 90m Run for Fun (1 of 2 Races) by age categories (2 Old Boys, Masters and Parents)"
                  location="Main Field"
                  startTime="TBC"
                  endTime="TBC"
                  
                  numberOfPeople={127}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="At Home"
                  desc="At Home Tea for the parents with Housemasters, Tutors and Dames"
                  location="Respective House of the Ward"
                  startTime="17:00"
                  endTime="18:00"
                  
                  numberOfPeople={124}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Music recital"
                  desc="Music performance for D, C, B and A Forms and invited schools and guests"
                  location="Rose Bowl"
                  startTime="18:30"
                  endTime="19:10"
                  
                  numberOfPeople={139}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Departure"
                  desc="Parents, Old Boys and Guests depart"
                  location="Main Gate"
                  startTime="19:50"
                  endTime="18:00"
                  
                  numberOfPeople={142}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Dinner"
                  desc="Dinner for the Entire School"
                  location="CDH"
                  startTime="20:00"
                  endTime="20:25"
                  numberOfPeople={146}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
              </>
            )}
            {selectedDay === "OCT 17" && (
              <>
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Breakfast"
                  desc="Students have breakfast in school before the start of the day"
                  location="CDH"
                  startTime="09:00"
                  endTime="09:25"
                  
                  numberOfPeople={145}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and Old Boys are allowed to enter the school"
                  location="Main Gate"
                  startTime="09:30"
                  endTime="20:20"
                  
                  numberOfPeople={148}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="R.L. Holdsworth"
                  desc="R.L Holdsworth Cricket Match (20 Overs) betweem the Old Boys and the School Team"
                  location="Main Field"
                  startTime="10:30"
                  endTime="14:00"
                  
                  numberOfPeople={134}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Old Boys Sports"
                  desc="Old Boys play sports like Hockey, Basketball, Soccer/Futsal, Tennis, Padel, Sqaush and Swimming"
                  location="Main Field, Basketball, Squash and Tennis Courts, Swimming Pool"
                  startTime="TBC"
                  endTime="TBC"
                  
                  numberOfPeople={143}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="DSOBS Interaction"
                  desc="Members from DSOBS interact with Parents B, A and S Froms"
                  location="Kilachand Library"
                  startTime="11:00"
                  endTime="12:30"
                  
                  numberOfPeople={123}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Lunch"
                  desc="Lunch & Refreshments at the Food stalls for Students, Staff, Parents and Old Boys"
                  location="Stalls outside CDH and Old Basketball Courts"
                  startTime="11:00"
                  endTime="18:00"
                  
                  numberOfPeople={132}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Hindi Street Play"
                  desc="Students perform a Street Play in Hindi"
                  location="Near CDH/Pavillion"
                  startTime="12:00 & 1:00"
                  endTime="12:15 & 13:15"
                  
                  numberOfPeople={169}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Headmaster's Lunch"
                  desc="Lunch for Silver Jubilee class of 2000 along with class of 1985, 1990, 1995, 200, & 2010"
                  location="Headmaster's Lawn"
                  startTime="12:30"
                  endTime="14:30"
                  
                  numberOfPeople={157}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Prize Giving"
                  desc="Distribution of the Holdworth's Cricket Trophy"
                  location="Main Field"
                  startTime="14:30"
                  endTime="14:45"
                  
                  numberOfPeople={152}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Tug of War"
                  desc="Tug of War between Old Boys & Parents, Masters & Parents, Finale"
                  location="Main Field"
                  startTime="15:15"
                  endTime="15:30"
                  
                  numberOfPeople={158}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Band"
                  desc="Western Band Performance"
                  location="Near Auditorium Steps/CDH"
                  startTime="15:30"
                  endTime="16:30"
                  
                  numberOfPeople={158}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Sand Art"
                  desc="Sand Art"
                  location="BML Munjal Auditorium"
                  startTime="16:15"
                  endTime="16:45"
                  
                  numberOfPeople={166}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Chandbagh Debates"
                  desc="Debate between School Team and Old Boys"
                  location="BML Munjal Auditorium"
                  startTime="17:00"
                  endTime="18:30"
                  
                  numberOfPeople={163}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Musical Pagent"
                  desc="A trilingual-English, Hindi and Dosco Lingo-pagen showing the life of a student before, during and after school"
                  location="Rose Bowl"
                  startTime="18:45"
                  endTime="20:15"
                  
                  numberOfPeople={120}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Departure"
                  desc="Parents and Old Boys depart"
                  location="Main Gate"
                  startTime="20:20"
                  endTime="20:30"
                  
                  numberOfPeople={145}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Dinner"
                  desc="Dinner for the school"
                  location="CDH"
                  startTime="20:30"
                  endTime="20:55"
                  
                  numberOfPeople={135}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Headmaster's Dinner"
                  desc="Dinner for Diamond Jubilee Class of 1965 and Golden Jubilee Class of 1975 along with Class of 1960, Class of 1970 and Class of 1980"
                  location="Headmaster's Lawn"
                  startTime="20:30"
                  endTime="21:30"
                  
                  numberOfPeople={137}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
              </>
            )}

            {selectedDay === "OCT 18" && (
              <>
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Breakfast"
                  desc="Breakfast for Students and Staff"
                  location="CDH"
                  startTime="09:00"
                  endTime="09:25"
                  
                  numberOfPeople={127}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and Old Boys enter the school"
                  location="Main Gate"
                  startTime="09:30"
                  endTime="16:30"
                  
                  numberOfPeople={168}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Jaipur House Pagal Gymkhana"
                  desc="Fun activities and competitions organized by Jaipur House"
                  location="Skinners"
                  startTime="10:30"
                  endTime="15:00"
                  
                  numberOfPeople={144}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="DSOBS Annual General Meeting"
                  desc="Meeting of DSOBS Members"
                  location="Kilachand Library"
                  startTime="11:00"
                  endTime="12:30"
                  
                  numberOfPeople={139}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Headmaster's Lunch"
                  desc="Lunch for Chief Guest, Board of Governors, IPSS Members, Donors, Invited Guests & Class of 1955"
                  location="HM’s Garden"
                  startTime="12:30"
                  endTime="14:30"
                  
                  numberOfPeople={163}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Lunch for All"
                  desc="Lunch for all at Jaipur House Pagal Gymkhana"
                  location="Skinners"
                  startTime="13:00"
                  endTime="14:00"
                  
                  numberOfPeople={178}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Light Tea for IPSS Members"
                  desc="Tea for IPSS Members"
                  location="Kilachand Library Garden"
                  startTime="14:45"
                  endTime="15:00"
                  
                  numberOfPeople={125}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="IPSS Meeting"
                  desc="Meeting of IPSS Members"
                  location="Kilachand Library"
                  startTime="15:00"
                  endTime="16:45"
                  
                  numberOfPeople={174}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Interaction"
                  desc="Chief Guest interacts with senior students and faculty"
                  location="Art & Media Centre"
                  startTime="15:00"
                  endTime="15:45"
                  
                  numberOfPeople={145}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Weekly Interaction"
                  desc="Chief Guest spends time with the Weekly Team"
                  location="Art & Media Centre"
                  startTime="15:45"
                  endTime="16:15"
                  
                  numberOfPeople={179}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Photograph"
                  desc="Photograph session with Chief Guest"
                  location="Guru’s Lawn (Near Main Building)"
                  startTime="16:20"
                  endTime="16:40"
                  
                  numberOfPeople={173}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Tea for IPSS Members"
                  desc="Evening Tea for IPSS Members"
                  location="Kilachand Library Garden"
                  startTime="16:45"
                  endTime="17:15"
                  
                  numberOfPeople={175}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Founder’s Day Speeches & Programme"
                  desc="Founder’s Day main function and programme"
                  location="Rose Bowl"
                  startTime="18:00"
                  endTime="20:00"
                  
                  numberOfPeople={156}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Closing Song & Visual Display"
                  desc="Closing song ‘We Did Start the Fire’ with boys’ dance, drone/visual display"
                  location="Rose Bowl"
                  startTime="20:00"
                  endTime="20:20"
                  
                  numberOfPeople={142}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Founder’s Day Music Programme"
                  desc="Music Performance as part of Founder’s Day celebrations"
                  location="Rose Bowl"
                  startTime="20:20"
                  endTime="21:00"
                  
                  numberOfPeople={156}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Departure"
                  desc="Chief Guest departs from campus"
                  location="HM’s Residence"
                  startTime="21:15"
                  endTime="21:30"
                  
                  numberOfPeople={143}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Students Departure"
                  desc="Students leave with parents after Housemaster’s permission"
                  location="Campus"
                  startTime="21:15"
                  endTime="21:30"
                  
                  numberOfPeople={134}
                  avatars={[
                    "./Avatars/m1.jpg",
                    "./Avatars/m2.jpg",
                    "./Avatars/m3.jpg",
                  ]}
                />
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
