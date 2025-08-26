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
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
                <ScheduleCard
                day="THU"
                date="16"
                eventName="Parents and Old Boys Enter"
                desc="Parents and OldBoys are allowed to enter the school"
                location="Main Gate"
                startTime="10:00"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Exhibitions"
                desc="Exhibitions by all the Departements of School"
                location="Main Building Classrooms, Science Block, Art School and Music School"
                startTime="10:30"
                endTime="13:30"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Lunch"
                desc="Lunch for all Students, Parents, Old Boys and Guests"
                location="CDH"
                startTime="13:00"
                endTime="14:00"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Interhouse Athletics"
                desc="Finals of the Interhouse Athletics Competition, 2025"
                location="Main Field"
                startTime="15:00"
                endTime="17:00"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Walk for the Batch of 1955 (30m walk) & 90m Run for Fun (1 of 2 Races) by age categories (2 Old Boys, Masters and Parents)"
                desc="Fun activities for Parents and Old Boys"
                location="Main Field"
                startTime="TBC"
                endTime="TBC"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="At Home"
                desc="At Home Tea for the parents with Housemasters, Tutors and Dames"
                location="Respective House of the Ward"
                startTime="17:00"
                endTime="18:00"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Music recital"
                desc="Music performance for D, C, B and A Forms and invited schools and guests"
                location="Rose Bowl"
                startTime="18:30"
                endTime="19:10"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Departure"
                desc="Parents, Old Boys and Guests depart"
                location="Main Gate"
                startTime="19:50"
                endTime="18:00"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              <ScheduleCard
                day="THU"
                date="16"
                eventName="Dinner"
                desc="Dinner for the Entire School"
                location="CDH"
                startTime="20:00"
                endTime="20:25"
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
              
            </>
          )}

          {selectedDay === "Day 2" && (
            <>
              <ScheduleCard
                day="FRI"
                date="17"
                eventName="At Home"
                desc="At Home Tea for the parents with Housemasters, Tutors and Dames"
                location="Respective House of the Ward"
                startTime="17:00"
                endTime="18:00"
                gradientFrom="purple-500"
                gradientTo="pink-500"
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
                gradientFrom="blue-500"
                gradientTo="cyan-400"
              />
              <ScheduleCard
                day="SUN"
                date="8"
                eventName="Closing Ceremony"
                desc="Awards and Farewell"
                location="Auditorium"
                gradientFrom="indigo-500"
                gradientTo="purple-500"
                status="accepted"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
