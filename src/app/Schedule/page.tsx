"use client";

import { useState } from "react";
import ScheduleCard from "../Components/Schedule_Card";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  return (
    <div>
      <div className="w-full p-4">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Day
          </label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 bg-white shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
          >
            <option>Day 1</option>
            <option>Day 2</option>
            <option>Day 3</option>
          </select>
        </div>

        <div className="space-y-6">
          {selectedDay === "Day 1" && (
            <>
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Breakfast"
                desc="Students have breakfast in school before the start of the day"
                location="CDH"
                startTime="09:00"
                endTime="09:25"
                gradient="purplePink"
              />
                <ScheduleCard
                day="THU"
                date="16"
                eventName="Parents and Old Boys Enter"
                desc="Parents and OldBoys are allowed to enter the school"
                location="Main Gate"
                startTime="10:00"
                endTime="19:50"
                gradient="blueCyan"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Exhibitions"
                desc="Exhibitions by all the Departements of School"
                location="Main Building Classrooms, Science Block, Art School and Music School"
                startTime="10:30"
                endTime="13:30"
                gradient="indigoPurple"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Lunch"
                desc="Lunch for all Students, Parents, Old Boys and Guests"
                location="CDH"
                startTime="13:00"
                endTime="14:00"
                gradient="greenTeal"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Interhouse Athletics"
                desc="Finals of the Interhouse Athletics Competition, 2025"
                location="Main Field"
                startTime="15:00"
                endTime="17:00"
                gradient="orangeRed"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Walk for the Batch of 1955 (30m walk) & 90m Run for Fun (1 of 2 Races) by age categories (2 Old Boys, Masters and Parents)"
                desc="Fun activities for Parents and Old Boys"
                location="Main Field"
                startTime="TBC"
                endTime="TBC"
                gradient="purplePink"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="At Home"
                desc="At Home Tea for the parents with Housemasters, Tutors and Dames"
                location="Respective House of the Ward"
                startTime="17:00"
                endTime="18:00"
                gradient="blueCyan"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Music recital"
                desc="Music performance for D, C, B and A Forms and invited schools and guests"
                location="Rose Bowl"
                startTime="18:30"
                endTime="19:10"
                gradient="indigoPurple"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Departure"
                desc="Parents, Old Boys and Guests depart"
                location="Main Gate"
                startTime="19:50"
                endTime="18:00"
                gradient="greenTeal"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Dinner"
                desc="Dinner for the Entire School"
                location="CDH"
                startTime="20:00"
                endTime="20:25"
                gradient="orangeRed"
              />
              
            </>
          )}

          {selectedDay === "Day 2" && (
            <>
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Breakfast"
                desc="Students have breakfast in school before the start of the day"
                location="CDH"
                startTime="09:00"
                endTime="09:25"
                gradient="purplePink"
              />
                <ScheduleCard
                day="FRI"
                date="17"
                eventName="Parents and Old Boys Enter"
                desc="Parents and Old Boys are allowed to enter the school"
                location="Main Gate"
                startTime="09:30"
                endTime="20:20"
                gradient="blueCyan"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="R.L. Holdsworth"
                desc="R.L Holdsworth Cricket Match (20 Overs) betweem the Old Boys and the School Team"
                location="Main Field"
                startTime="10:30"
                endTime="14:00"
                gradient="indigoPurple"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Old Boys Sports"
                desc="Old Boys play sports like Hockey, Basketball, Soccer/Futsal, Tennis, Padel, Sqaush and Swimming"
                location="Main Field, Basketball, Squash and Tennis Courts, Swimming Pool"
                startTime="TBC"
                endTime="TBC"
                gradient="greenTeal"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="DSOBS Interaction"
                desc="Members from DSOBS interact with Parents B, A and S Froms"
                location="Kilachand Library"
                startTime="11:00"
                endTime="12:30"
                gradient="orangeRed"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Lunch"
                desc="Lunch & Refreshments at the Food stalls for Students, Staff, Parents and Old Boys"
                location="Stalls outside CDH and Old Basketball Courts"
                startTime="11:00"
                endTime="18:00"
                gradient="purplePink"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Hindi Street Play"
                desc="Students perform a Street Play in Hindi"
                location="Near CDH/Pavillion"
                startTime="12:00 & 1:00"
                endTime="12:15 & 13:15"
                gradient="blueCyan"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Headmaster's Lunch"
                desc="Lunch for Silver Jubilee class of 2000 along with class of 1985, 1990, 1995, 200, & 2010"
                location="Headmaster's Lawn"
                startTime="12:30"
                endTime="14:30"
                gradient="indigoPurple"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Prize Giving"
                desc="Distribution of the Holdworth's Cricket Trophy"
                location="Main Field"
                startTime="14:30"
                endTime="14:45"
                gradient="greenTeal"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Tug of War"
                desc="Tug of War between Old Boys & Parents, Masters & Parents, Finale"
                location="Main Field"
                startTime="15:15"
                endTime="15:30"
                gradient="orangeRed"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Band"
                desc="Western Band Performance"
                location="Near Auditorium Steps/CDH"
                startTime="15:30"
                endTime="16:30"
                gradient="blueCyan"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Sand Art"
                desc="Sand Art"
                location="BML Munjal Auditorium"
                startTime="16:15"
                endTime="16:45"
                gradient="indigoPurple"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Chandbagh Debates"
                desc="Debate between School Team and Old Boys"
                location="BML Munjal Auditorium"
                startTime="17:00"
                endTime="18:30"
                gradient="greenTeal"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Musical Pagent"
                desc="A trilingual-English, Hindi and Dosco Lingo-pagen showing the life of a student before, during and after school"
                location="Rose Bowl"
                startTime="18:45"
                endTime="20:15"
                gradient="orangeRed"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Departure"
                desc="Parents and Old Boys depart"
                location="Main Gate"
                startTime="20:20"
                endTime="20:30"
                gradient="greenTeal"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Dinner"
                desc="Dinner for the school"
                location="CDH"
                startTime="20:30"
                endTime="20:55"
                gradient="indigoPurple"
              />
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="Headmaster's Dinner"
                desc="Dinner for Diamond Jubilee Class of 1965 and Golden Jubilee Class of 1975 along with Class of 1960, Class of 1970 and Class of 1980"
                location="Headmaster's Lawn"
                startTime="20:30"
                endTime="21:30"
                gradient="orangeRed"
              />              
            </>
          )}

          {selectedDay === "Day 3" && (
            <>
              <ScheduleCard
                day="SUN"
                date="8"
                eventName="Final Presentations"
                desc="Hackathon team project demos"
                location="Main Stage"
                gradient=""
              />
              <ScheduleCard
                day="SUN"
                date="8"
                eventName="Closing Ceremony"
                desc="Awards and Farewell"
                location="Auditorium"
                gradient=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
