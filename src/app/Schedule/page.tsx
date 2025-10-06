"use client";

import { useState } from "react";
import ScheduleCard from "../Components/Schedule_Card";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<"Day 1" | "Day 2" | "Day 3">("Day 1");

  return (
    <div>
      <div className="w-full p-6 pb-34">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Day
          </label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value as "Day 1" | "Day 2" | "Day 3")}
            className="w-full border border-gray-300 rounded-xl p-3 bg-white shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
          >
            <option>Day 1</option>
            <option>Day 2</option>
            <option>Day 3</option>
          </select>
        </div>

        <div className="space-y-6">
          <>
            {selectedDay === "Day 1" && (
              <>
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Breakfast"
                  desc="Students have breakfast in school before the start of the day"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="CDH"
                  startTime="09:00"
                  endTime="09:25"
                  gradient="purplePink"
                  numberOfPeople={130}
                />
                  <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and OldBoys are allowed to enter the school"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Gate"
                  startTime="10:00"
                  endTime="19:50"
                  gradient="blueCyan"
                  numberOfPeople={122}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Exhibitions"
                  desc="Exhibitions by all the Departements of School"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Building Classrooms, Science Block, Art School and Music School"
                  startTime="10:30"
                  endTime="13:30"
                  gradient="indigoPurple"
                  numberOfPeople={135}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Lunch"
                  desc="Lunch for all Students, Parents, Old Boys and Guests"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="CDH"
                  startTime="13:00"
                  endTime="14:00"
                  gradient="greenTeal"
                  numberOfPeople={114}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Interhouse Athletics"
                  desc="Finals of the Interhouse Athletics Competition, 2025"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Field"
                  startTime="15:00"
                  endTime="17:00"
                  gradient="orangeRed"
                  numberOfPeople={106}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Walk for the Batch of 1955 (30m walk) & 90m Run for Fun (1 of 2 Races) by age categories (2 Old Boys, Masters and Parents)"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  desc="Fun activities for Parents and Old Boys"
                  location="Main Field"
                  startTime="TBC"
                  endTime="TBC"
                  gradient="purplePink"
                  numberOfPeople={127}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="At Home"
                  desc="At Home Tea for the parents with Housemasters, Tutors and Dames"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Respective House of the Ward"
                  startTime="17:00"
                  endTime="18:00"
                  gradient="blueCyan"
                  numberOfPeople={124}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Music recital"
                  desc="Music performance for D, C, B and A Forms and invited schools and guests"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Rose Bowl"
                  startTime="18:30"
                  endTime="19:10"
                  gradient="indigoPurple"
                  numberOfPeople={139}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Departure"
                  desc="Parents, Old Boys and Guests depart"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Gate"
                  startTime="19:50"
                  endTime="18:00"
                  gradient="greenTeal"
                  numberOfPeople={142}
                />
                <ScheduleCard
                  day="THU"
                  date="16"
                  eventName="Dinner"
                  desc="Dinner for the Entire School"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="CDH"
                  startTime="20:00"
                  endTime="20:25"
                  gradient="orangeRed"
                  numberOfPeople={146}
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
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="CDH"
                  startTime="09:00"
                  endTime="09:25"
                  gradient="purplePink"
                  numberOfPeople={145}
                />
                  <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and Old Boys are allowed to enter the school"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Gate"
                  startTime="09:30"
                  endTime="20:20"
                  gradient="blueCyan"
                  numberOfPeople={148}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="R.L. Holdsworth"
                  desc="R.L Holdsworth Cricket Match (20 Overs) betweem the Old Boys and the School Team"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Field"
                  startTime="10:30"
                  endTime="14:00"
                  gradient="indigoPurple"
                  numberOfPeople={134}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Old Boys Sports"
                  desc="Old Boys play sports like Hockey, Basketball, Soccer/Futsal, Tennis, Padel, Sqaush and Swimming"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Field, Basketball, Squash and Tennis Courts, Swimming Pool"
                  startTime="TBC"
                  endTime="TBC"
                  gradient="greenTeal"
                  numberOfPeople={143}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="DSOBS Interaction"
                  desc="Members from DSOBS interact with Parents B, A and S Froms"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Kilachand Library"
                  startTime="11:00"
                  endTime="12:30"
                  gradient="orangeRed"
                  numberOfPeople={123}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Lunch"
                  desc="Lunch & Refreshments at the Food stalls for Students, Staff, Parents and Old Boys"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Stalls outside CDH and Old Basketball Courts"
                  startTime="11:00"
                  endTime="18:00"
                  gradient="purplePink"
                  numberOfPeople={132}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Hindi Street Play"
                  desc="Students perform a Street Play in Hindi"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Near CDH/Pavillion"
                  startTime="12:00 & 1:00"
                  endTime="12:15 & 13:15"
                  gradient="blueCyan"
                  numberOfPeople={169}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Headmaster's Lunch"
                  desc="Lunch for Silver Jubilee class of 2000 along with class of 1985, 1990, 1995, 200, & 2010"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Headmaster's Lawn"
                  startTime="12:30"
                  endTime="14:30"
                  gradient="indigoPurple"
                  numberOfPeople={157}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Prize Giving"
                  desc="Distribution of the Holdworth's Cricket Trophy"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Field"
                  startTime="14:30"
                  endTime="14:45"
                  gradient="greenTeal"
                  numberOfPeople={152}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Tug of War"
                  desc="Tug of War between Old Boys & Parents, Masters & Parents, Finale"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Field"
                  startTime="15:15"
                  endTime="15:30"
                  gradient="orangeRed"
                  numberOfPeople={158}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Band"
                  desc="Western Band Performance"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Near Auditorium Steps/CDH"
                  startTime="15:30"
                  endTime="16:30"
                  gradient="purplePink"
                  numberOfPeople={158}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Sand Art"
                  desc="Sand Art"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="BML Munjal Auditorium"
                  startTime="16:15"
                  endTime="16:45"
                  gradient="blueCyan"
                  numberOfPeople={166}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Chandbagh Debates"
                  desc="Debate between School Team and Old Boys"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="BML Munjal Auditorium"
                  startTime="17:00"
                  endTime="18:30"
                  gradient="indigoPurple"
                  numberOfPeople={163}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Musical Pagent"
                  desc="A trilingual-English, Hindi and Dosco Lingo-pagen showing the life of a student before, during and after school"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Rose Bowl"
                  startTime="18:45"
                  endTime="20:15"
                  gradient="greenTeal"
                  numberOfPeople={120}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Departure"
                  desc="Parents and Old Boys depart"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Gate"
                  startTime="20:20"
                  endTime="20:30"
                  gradient="orangeRed"
                  numberOfPeople={145}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Dinner"
                  desc="Dinner for the school"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="CDH"
                  startTime="20:30"
                  endTime="20:55"
                  gradient="purplePink"
                  numberOfPeople={135}
                />
                <ScheduleCard
                  day="FRI"
                  date="17"
                  eventName="Headmaster's Dinner"
                  desc="Dinner for Diamond Jubilee Class of 1965 and Golden Jubilee Class of 1975 along with Class of 1960, Class of 1970 and Class of 1980"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Headmaster's Lawn"
                  startTime="20:30"
                  endTime="21:30"
                  gradient="blueCyan"
                  numberOfPeople={137}
                />              
              </>
            )}

            {selectedDay === "Day 3" && (
              <>
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Breakfast"
                  desc="Breakfast for Students and Staff"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="CDH"
                  startTime="09:00"
                  endTime="09:25"
                  gradient="purplePink"
                  numberOfPeople={127}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and Old Boys enter the school"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Main Gate"
                  startTime="09:30"
                  endTime="16:30"
                  gradient="blueCyan"
                  numberOfPeople={168}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Jaipur House Pagal Gymkhana"
                  desc="Fun activities and competitions organized by Jaipur House"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Skinners"
                  startTime="10:30"
                  endTime="15:00"
                  gradient="indigoPurple"
                  numberOfPeople={144}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="DSOBS Annual General Meeting"
                  desc="Meeting of DSOBS Members"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Kilachand Library"
                  startTime="11:00"
                  endTime="12:30"
                  gradient="greenTeal"
                  numberOfPeople={139}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Headmaster's Lunch"
                  desc="Lunch for Chief Guest, Board of Governors, IPSS Members, Donors, Invited Guests & Class of 1955"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="HM’s Garden"
                  startTime="12:30"
                  endTime="14:30"
                  gradient="orangeRed"
                  numberOfPeople={163}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Lunch for All"
                  desc="Lunch for all at Jaipur House Pagal Gymkhana"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Skinners"
                  startTime="13:00"
                  endTime="14:00"
                  gradient="purplePink"
                  numberOfPeople={178}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Light Tea for IPSS Members"
                  desc="Tea for IPSS Members"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Kilachand Library Garden"
                  startTime="14:45"
                  endTime="15:00"
                  gradient="blueCyan"
                  numberOfPeople={125}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="IPSS Meeting"
                  desc="Meeting of IPSS Members"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Kilachand Library"
                  startTime="15:00"
                  endTime="16:45"
                  gradient="indigoPurple"
                  numberOfPeople={174}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Interaction"
                  desc="Chief Guest interacts with senior students and faculty"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Art & Media Centre"
                  startTime="15:00"
                  endTime="15:45"
                  gradient="greenTeal"
                  numberOfPeople={145}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Weekly Interaction"
                  desc="Chief Guest spends time with the Weekly Team"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Art & Media Centre"
                  startTime="15:45"
                  endTime="16:15"
                  gradient="orangeRed"
                  numberOfPeople={179}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Photograph"
                  desc="Photograph session with Chief Guest"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Guru’s Lawn (Near Main Building)"
                  startTime="16:20"
                  endTime="16:40"
                  gradient="purplePink"
                  numberOfPeople={173}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Tea for IPSS Members"
                  desc="Evening Tea for IPSS Members"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Kilachand Library Garden"
                  startTime="16:45"
                  endTime="17:15"
                  gradient="blueCyan"
                  numberOfPeople={175}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Founder’s Day Speeches & Programme"
                  desc="Founder’s Day main function and programme"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Rose Bowl"
                  startTime="18:00"
                  endTime="20:00"
                  gradient="indigoPurple"
                  numberOfPeople={156}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Closing Song & Visual Display"
                  desc="Closing song ‘We Did Start the Fire’ with boys’ dance, drone/visual display"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Rose Bowl"
                  startTime="20:00"
                  endTime="20:20"
                  gradient="greenTeal"
                  numberOfPeople={142}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Founder’s Day Music Programme"
                  desc="Music Performance as part of Founder’s Day celebrations"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Rose Bowl"
                  startTime="20:20"
                  endTime="21:00"
                  gradient="orangeRed"
                  numberOfPeople={156}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Chief Guest Departure"
                  desc="Chief Guest departs from campus"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="HM’s Residence"
                  startTime="21:15"
                  endTime="21:30"
                  gradient="purplePink"
                  numberOfPeople={143}
                />
                <ScheduleCard
                  day="SAT"
                  date="18"
                  eventName="Students Departure"
                  desc="Students leave with parents after Housemaster’s permission"
                  detail="The event promises to be an engaging and memorable experience, bringing together participants from 
                  diverse backgrounds to celebrate creativity, collaboration, and innovation. Attendees will have the chance to 
                  interact with inspiring individuals, explore new ideas, and enjoy a vibrant atmosphere filled with energy and 
                  enthusiasm. From exciting performances to thought-provoking discussions, every moment has been carefully curated 
                  to leave a lasting impression and create meaningful connections that extend well beyond the event itself."
                  location="Campus"
                  startTime="21:15"
                  endTime="21:30"
                  gradient="blueCyan"
                  numberOfPeople={134}
                />
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}