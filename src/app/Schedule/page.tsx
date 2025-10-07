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

        <div className="flex flex-col items-center justify-center  space-y-6">
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
                  coverImage="https://static.toiimg.com/photo/60132641.cms?imgsize=312455"
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
                  coverImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpImaE8oO6M4LGlyfAr0AEOiNjJpjEMxcFQ&s"
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
                  coverImage="/iha.png"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2023/05/3-1-1024x1024.jpg"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2023/10/29-1024x1024.jpg"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2019/01/BF1A0255-min-1024x683.jpg"
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
                  coverImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Main_Gate%2C_The_Doon_School.jpg/960px-Main_Gate%2C_The_Doon_School.jpg"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2023/01/dddddddddd.jpg"
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
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and Old Boys are allowed to enter the school"
                  location="Main Gate"
                  startTime="09:30"
                  endTime="20:20"
                  coverImage="https://www.doonschool.com/wp-content/uploads/2018/05/about-doon-2.jpg"
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
                  coverImage="/Rlhf.png"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2015/04/hockey-apr15.jpg"
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
                  coverImage="https://play-lh.googleusercontent.com/TElIAeRk86fXpdR3Ao82GNHnnTz6aM0XV0jL9NE8QFo_fJzprwRGen-7Go72VCZEKok=w526-h296-rw"
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
                  coverImage="https://londonbitestours.com/wp-content/uploads/2024/05/IMG_2157.jpg"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2023/10/14-1024x1024.jpg"
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
                  eventName="Prize Giving"
                  desc="Distribution of the Holdworth's Cricket Trophy"
                  location="Main Field"
                  startTime="14:30"
                  endTime="14:45"
                  coverImage="/rp.png"
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
                  coverImage="https://thinkingpathwayz.weebly.com/uploads/1/0/4/4/104440805/tug-of-war-kidspot_orig.jpg"
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
                  coverImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBIQDxIVFRUVFRUVFRYVFRUVFhYXGBUXFhUVFxUYHSggGBolGxUXITEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OGxAQGy0lHyUvLTYyLS0tLS0tLTIrLS0tLS0tLy0tLSstLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALIBGgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABAMGAgUHAQj/xABCEAACAQIDBQYDBQYFAgcAAAABAgADEQQSIQUGMUFRBxNhcYGRIjKhFCNSscFCYnKCotEzQ5Lw8VPhFSRzo7Kzwv/EABsBAAIDAQEBAAAAAAAAAAAAAAACAQMEBQYH/8QAKxEAAgICAQMDAwMFAAAAAAAAAAECEQMSIQQxQRNRYRQi8AUycSOBobHB/9oADAMBAAIRAxEAPwC1sJEwjDCQPNWM+VaETSNpm0jczbAjQxJmBaDGRlpoQamRaeXmF4XjWTqZ5oXmF4Xk2NqZ3heYT0QsnUyntoCZgSLHUTG0MszAmQEjYZRI8sMslCz3JDYbQhyQyRjJDJDYbQXyTEpGsk8KQ2GUBXJPMkZyTErDYlQFikxKRkpMGSRsPqJVFkDrHaqyB1kWXRiKOsiYRl1kTiQ2XxQs4kLRlxIXEUuihZxIakYcSCpFZogK1YvGasWMrZrh2OwOIu8aqCLVJkxnkHEXeQOZNUMXqGbYC6kbGRloMZGWl6I1Ms0LyO8LybGUSS89zSK8yBk2TqSgz2YAzMSLGUSVZIBI0kqiK2OomQWZBZ6omYEix1A8CzILMlWSZYuwygR5J7kkoWe5ZGwyiQ5J4UjGSYta4F9TwHM9bDnDYdQIMkwKRnLMSkLDUVKTBljTLI2WFjaiNVYu6x6qsWqLDYdRE3WQMI26yBxCy5IVYSBxGqgi7iFlsULOIvUjTiLVBFL4oUqxaM1YtFZqgdkqiKVI3WiVWZMZ5fUVqGLVDNfvTvBSwdMPUBYsbIg4seevIeM0e7u+lPF1O5amabkEr8WYNYXYXsLG2voZpjkinTfJfHoc0sbyqP2ryWV2kRMHMiLTSjLqZ5oZpFmnt4xKiTAz0SIGZgwsZRJlMlWQKZMsVsZRJ0kyCRJJkiNjqJIJKomCCSlgASxAA1JOgA6kxWyxRMgJIFmNEggEXsRfUEH2Ook6rF2G1MQsHsAWYgAC5J0AHUk8JKFnIO2Pb9RsQMCjEU0VWqAaZ3b4hm6gCxA6nwEryZNVZq6XpXnyaLg6dsva2GxOb7NWSplNmyMCR6dOh4Gcl3s2Xjq+2qtKiT3hs9Mq+XJTyqoa4N00489b21lM2dtKth6gq4eo1NwCMymxseIPUeE7PuPi8DigdpNZcUlJaeJZ2KqCFCh9Tl+JUGsz7+rUWdb6b6JvJHlNV/f5+CiJvftfAVO6xRZrcUrre45lag1PmCROlbpb1UMejGmClRADUpnW1+BVuDDTz8JzbtH3zXHMtGgPuKbZgzLZnbUZhfVVsdBoevSWzsf2EaWHfFuCDXsEB/6ak/Fbxa/oo6ycU2p6p2g6vDjeD1JxUZfBeisjZY0yyJlmqziaiNVYtUWPVFiriNY6iJVFkDiOVFiziFjpCjiLuI44iziFlkUJuItUEcqCK1IWXRQlWi0ZrRYxTTE7JXiFYzYYia2uZkxnnNTnXa1hyaNCoAfhdlJA0GYC1zy1WUXdYP8AbcP3fzd4P9P7f9OadQ342phqeGq0qzAtUQhaY1Yn9lrDgAQDc9JybZOPbD1krIAShvY8CCCGHhcExctKaZ6f9O3l0jhXvXzZ2h2kRaVnC784V9KgemfEZh7rr9JvqOIV1DowZTwINwZ0YZIy7M87l6TLi/fFonzQBkV57mlllOpMDJFMgUyRTCxlEYUydIsknpxWxlEbpydJBSjFOVtjqIttPbOHwwBr1At/lUAsx1too1t4xrD0Wch6wtzSnxC9Gf8AE/0HK/E0vatGnidtUKJ4UkBfXiVBqAe5X6zoaCVbWzXPGscY13aszQSI1qi8aJYfuOh08Q5X9ZVMb2i4aliTQ7t2RXyPVBFgQbMQvFgDf20l5S2hGsja+wSwyx05LuaXam8+HwyB64qoLhdaT8T0Nsp4cjK1vbunS2xTpY7BVQr5CozKQtQKTZW5owa4vaWffdqK7PxJxChlyHKDzqHSnb97NYjyiXZWzNsyjm5PVUeQqN+pMrlzwzTi/pw9WHDTr4OEbd2JXwdY0MSmVwAwsQQym4DKRxGh9ogtVgCoJAa2YAmxtqLjnLj2u4/vdqVVHCiqUh6DM39TkekpcyPhnoMUnKClLu0bbdbYzYzF0sMt7M3xn8KDV29hp4kDnPpKjhlpotNBlVFCqBwAAsB7T5+7OdtDCbQpVHNqb3pVD0V+B8gwUnwBn0UwmjDSTOT+qbOcU+wuyyJxGWWROJfZy6Eaoi1RY7VWLVBJTGSEagmq25tBcPQeu4uFGg6kmyj3M3NQTlPaVts1K32VPkpG7fvOR/8AkG3mTFyZNY2aulwerkS8eSu4vb+KqVO8as4N7gKxVV8Ao0l33Q202JpMtXWpTtdvxKb2J8dDOazonZ7hMuGeof8AMfTyXT8y0z4ZS3Or1kILF2/g39QRWrHKgilabTlJCNaKmNVoqYF8TsuJlc3lxpo4avWHFKbFf4rfD9bSx4uUHtRxOTZ9QXsajog/1ZiPZTMadROR02PfLGPyjjeIrvUZnqMWZjdmJuSfEyKEJnPZBNxu9t18M/4qbfMl/wCpeh/OahWsb9Jbtubrad7hhxGZqfTS5yf2/wCJZjUv3R8GfqJ4qWPL2kXLCYpKiLUQ3VhcGTXnOt3N4jh/uqovSueA+JST9R4S90MZTdO8R1KaksDoLcb9J0sWZTXyeb6rop4Z9uPDHAw5njw/tI//ABGkBcMDo9iCMt0tmUv8oOvAmU/e3bqHuxh3RmVs1wubKQNCrHTrNLszZ+Kxr2DEre7M3yKTxIHDN4CU5Ooe2sVZpw/pqeP1MjpHTdi7WpYlM1JrkWzLzUkXsTwPmOk29KaPZWBoYOjlU2Uau7cSfxMeQ+gm4wtdGXOrKV45gQRbzlqbr7u5jyQjs3jvXwQbR3gw+GYLXLAkXFqbkHyYCxMywu9+Ab/PA/iV1/Max1Fp1aYuFqIwvqAysDwPQyr7z7pULUzhqLCpUqBLI9lGhJbI1+AB4EcJXJy8GjDjwy+2Vplcr7Wr0ca2OpAWqFmQsMylG0Cmx0YCwIvcETbt2m4qwy0aIPMnOb+QuLTPE9mtcX7qujDoysn5XlZ3g2DVwbpTrmmWZSwyMTZb2F7gWuQfYyh2jpxWDLXZsQxlfvKlSpa2d2ew1AzMWsCfOWBd/Noqi06dRaaqiIuWmtwEAAN2vqba/pKzLX2e7ujF1nd07xKGQtTuFzls2UEk6L8Bv10HWKXZFBRuS7EODwe09q1B8T1RexdzlopbyGUHwUXna92tjLhMLSwytmyA5mtbMxJZjbkLk6dJqNunaP2WomFo0MOAh+M1/wDDQC5yqtPKDYW1NheObAr7RNCj3iYar8C/eriH+PQfEVFEgE87HjGTOfmlLJDikvY4Dv4jLtPGhuPf1D6E3H0Imhlw7WcO6bWxBcAFxTeykka01HEgX1U8pVK2HdMudSMyhluLXU8GHUcfaZn3O1idwj/CIp3rst3uXF0BhapP2iimp/6lMEKHv+IXAPvz04LLt2Q7TFDaaK5AWsjUSTYWJsy6+LIB6xoSplXV4lkxP3XY72wkTiMMsicTTZ5+hKoItUEdcTXbUxS0aNWs3CmjOf5QTb6SbGUW+ChdoG91TC1Bh8OAHK5mci+UG4UKOul7nwnKajliWYkkkkk8STqSY3tjadTE1nr1rZ3IvYWAsLAAchYRKZZycmehwYVigku/kJZt1t6Dhx3NUZqVyQR8yX4+Y8P+JWYRYycXaHnCM1UjsiVVdVdDdWAIPUEXEWrRPdKtnwVL93Mp9GNvpae7V2pRo/4jgH8I1b2E3xktbZx3jam4owrxQzUV9t4io2WjQIB1BYG9uvQTIUsbzqU/b/tBZE+xd6LXdpHe8XOZdr1InCU2HBawv6owB/31nTMZKjvjs0YnC1aRYLpmDHgpXUE+HEHzmaricfo5qGaMn7nDqlu5TQaPUFwNTohAJ58T7xeTtW+77r9/Ne/ha1pBKD1iCdXw2LV6S1bgKVDXOgGmt+lpyib7YezqmJTI1UinTPyjU666Dh6y/p5uLpK7MXX4I5IJydJf9Jd6KmFquPs92qk2bILq3928RIqO7mNyaCwa10zhT4Flvb9Zb9nbNo0RakgB5sdWPmY+Gmj6fZ3L/Bg+vcIqGNWl5kafdbYBw+Z6uVnPCwvkGoNmPUHWWWioAsAAOgFhFlMYpmXRgoqkYsuSeWW0hynNHt/Y2HbIFplalV1QGnoNTdmdRoQFueE3VMxfZlVa1apVBBFMminOxFjUb1Nh5L4xZ88DYW4PZeAwFHGYVAi5cTSQaAfd1go4ADVX6cpsNk7QSqDjKn3SC6U+9ISwB+8Y3NrlhbjwTxla3r3pq0aj4ekqj4BdySWGYcgOBHjeU3FY8vRoULWWkH53zM7Fix6aWHoespcq4NkOnlkW0uL8/nB2OnvPgL2+1Uf9YA9+E5ZvptMYjG1aim6KRTQjgVTS4PME5j6zRwiOVmrD00cTtBOodiK640/+gP8A7f7zl82ew9v4rBlzhamQuFD/AAq18t8vzA/iPvFLM0HODij6MxmCp1qb0aq5kcZWU3Fx00mg2dj8PhsXT2YGtkpnuVAZjkcqQjWGhXK3xHiLXNwZVtxt8do46o+FNWgrhDUWo1AtcKQGXKtRR+0Dfw4TDbGy9q1Nq4dPtVM1UQslVaQRKY1ZlKkkm9lB46P0vCzDHA43GT/Pc0fb1gSuNw9flUo5R/FTc3+lRYttDY6192sLjLfeYV6iX4lqTV2GU+TOCOmvWbvtF2RtGtssYnGVVdqNS5prh+7ZLk06hL5viW+XULYgA8Jsux6muK2PiMJWsU7yrTtzCVEVr/6mYg+Era+5mxZNMMXf7WcMjuxaVN8TQSr/AIbVaavrb4C4Da8tL6yPaWBqUK1ShVFnpuyMPEG2nUcwYtKzf3R9bsJC4iG6mPbEYDC13+Z6SFvFrWJ9SDNi80pnnJRabQpUEpPau9VdnP3fAugqHnkJ/Vso9ZeagieMw6VEanUUMrAhlYXBHQiS+VQ+KWs1L2PmEzyWDfrZtDDY6pQw1wqhSQTfKzLmKgnUixHGV+ZWqPQRkpJNBCEc2Tg++rJRvbOcoPQ2Nr+F4A3XJstgYiuyHD066UELFmZmCsSQBYcz8vK3nMN1qObFC4DZQ7G+vgD7kRh9ysYDb7u3XPp+V/pN1u9sJ8MXaoyksABluba3OpA8JdCEm1aM2TJBRdNcmwrxQxuvFDNqOejsuNlH7Q3YbPxGTjZQfIuob6Xl4xsrG38IK1CrRP7aMvkSND72mRco5fTtRnFv3R8/wklaiyMyOLMpIIPIjQiTbLwve1qdL8TAHy4t9AZno9a2krFZvdz8VkxGQ8HUj1GoP0PvHt4t3adOl3lAH4fnBJN16+krWErFKiuOKsCOmh5+Etp45KyjaHUYnr5OngzMGU7Y+2C1exBscwABuSTkABPDQLe/hLapm+GRTVo4mbp3idMZQxmmYmhi+19pCggYnLfnpwBUEDxsxI/hkykkrK4Y3KWqNlj6zBAlM2eociHpf5n/AJQCfQTHdzBUgalRFFxUemp55Ey07e6TXbsY04m+JcAZR3YA4A2DVG15n4R5CO7GxWTAd8fw1avqWZv1lN3yaHjcIuHngpG8GJ7zFVn6uQPJfhH0E18POEos6iVKghCECQhCWbcLds47E2Kq1KnlNYM7UyVbMBlKgnNoTbThxF4ESairY52WbZo4XGM2IKIj02HeMxGW2oAA0bN0I5C0vO72ObFbQoYonKrNiwmQlqbrTo4enmBdAxGbMeXDw1T383Lw1HBKuBoIKj16SAnM1R85KhVdj8OpBPKwMg7My1tm/FmBO0BYgjJbITrfUE5eWmYwMs3GcXNfnDOlbZ2euIw9bDv8tVGQ8rZhYH3nAOzHbdfA7TGGIBWtVXD1ULAAMHyhwT+0pJ87kdJ9GGaWpups81/tJwtI1cwfPlF8wNw1uGa4ve14jXNlODMoRlCStM4d20YI09rVGtYVadOoPH4chPukok+ku1HdhMbgnYAd9QVqlJuBsBd6ZPRgPcCfNsSSpnS6XIp418H0P2RV82yKAJvkaqv/ALjMB/VLa85z2FYwNg8RR5062f0qIAPrTM6O8tj2OX1MayyF6kXeMPKT2nbxNhMLkpG1WvdFINiigfG4trfUAfxX5RroTHBzkoo5l2lbQoV8e7UNcoFN25Oy3BI8BoL88sqs9lg3c3QxOMU1KeVKYuM73AYjkoAJOvE8B9Jn5bO6tccab4RXpu9yxfHUNObf/Bprdo4KpQqtRqrldTYj8iDzB43jG72K7rFUKh4BwD5H4SfYwjwwnzF17HW60QrR+tEK06COKjX14oY3XihjFh0XdnbrYvBUsRU+Zs4bh+y7KOAAvYDkPITzFVZzrAbQbZWJbDVCWw1U5kbmvLN+QYeAPhLJtPaoWk1VSGCrn01uo1NvS9pkxmbN01TuP7X2KX2lIor02AALIcxAFzZrAnrENy1XvmdjqBlX+JgT6fCje8T3k2uMVW7wAhQoUA8eJJ4ec3e6eBVKYrn53uB4Le2nnaRBbZODqyXp9NrLvVFhruLa2sdNed9LfWc+25s/uapUfKdV8unpwm8rYhzjRRVvu7h2Ww42zHXiNQD6w3sS9FW/Cw+oP/aW5anFv2Kemi8U0vEvxC25tEXqVCNQAo9bk/kJaaFYMqsOBAIlJ3ZxmStlJ+F9PC/7J/T1j+z37rGujnR82XpdiGGn09IYsijFE9Rhc5yfxaLHjdr0aNhUaxPIAk262HKL7w00xODZ6dny/GhHh839N9PCUra1YvXqsfxEegNh+UsG5FbSshOnwkDlrmB99PaR6u8nHwD6ZYorInyh/dPHqMBXUaNTFQnxzLdW/T0mw2ftJGwiYZkKse7ogMNH+8VXseoFyRxlCoVGp1HpK2jE02/eAbx8peNl4mjV+0Ibd2XFRb6WuLZgeRupN/GRjlaobNiUW5e7s929uvRVqRoMVNWqKYU/EouGNweIAy+M0m0thVaNFazshVmyrYm5+axtbgQt/UTZbQ2wQ9IF84pF2WpxzEoVUG2hYE6keE128e3O8KYZbZKZsv8AKMoNxxvr6BephKkGJZOEamRYitlEK9YKPHkIsiZjmfnwH++Urk/CNMY+WOU2uLzqHYiLPjHPC1BR53qk/p7zl6FRoLeUuHZ/vGuEaslUgU2CuW5hgwQC3O+ceVvOMijPFuDSOo7/AApthlq1auSnQZqrAMys7Ck60kVl1BNRl4dJWNj7fo0K+yaSIO4pUWoviB8NM1nRO9INrNaoqgte16nHSUPtA3tqYuqqJcUFAZAQRnJ/zCD7Dwv1MtG7O1TVpYP7Sq92tDEUrMBZqS06KsWHS6v6SLt0VLC4Y1t+cM7L34nhricpwO8VfDo9BAaiilUqUCxJanlBIoOT/iEDJzuM1jwi3ZtvRXrLWWqSUQU8pYksGyKpGYnUHIW8Ced9J80Zn071cvY6bvFtChTwmIfE60hSfvAOLKRlKjxN7es+VKlrnKCBc2ubm3K5HEztnaTtgjZ1ZVaxconoWBI9lM4jK8nc3dDCoN/J2nsLwwXC4mseL1QnpTQH86h9pb8bvPQWp9nzL35qJTWkT8TBmW72/CFYt/KZQuz3efDUtn92z5DQztUvzDOWDLb5uIFuNx4iVnD720X2scfiFcKoIpKoBIsMil9ehY6c7SbpIqlheTJNtdvxHdWqifPvaNtz7XjqhU3p0vuqfSy/M3q19elp03au9FP7DVxVBwwyHIf3z8Kgg8CGI0nEMNQLsQLmys5/hVSzH2BhkfgbosVNyZa9xNzvtZNavmWgpsLaGqw4qDyUcyPIeHW6dJKaLTpqFVRZVAsAByAlO7OtrtUoOhFkplFTUn9gAj6A28fGWlq3SWY0krKOqySeRxfgpXabsTvKYxdMfFTGVx1S+jeak+x8JzGW1t8sQuIqd+Lo3wVaTagWsKgUX04MvkdbzRbf2f8AZ8Q9EHMAQVP7rAMt/GxEpk03aOhgUoLWR1HZtc1MPRqNxamjNbqVF5Xht/8A8z9nqKFJYLfkPhJ487nLbwMb3DxtM4ECoyr3dRkuzAA5vjXj5kW/di+827eGbKaDLTquRksTkc8AumiEmwEu3dJoxpQWSUZL+B2tSMVNE9Itu/vBmcYXGDJUByBjpdhplccm8eBlt/8ADfCXRypooy3idSKCdojH0u6q2Wsl2QjgevvzHrNXhNsMmGrYdr6iy35XNnH6zV4bENTdXXipv/cTLF1VaoXAsCbkeJ+Ye95k38+TqrElx4/0yTaNAI4ToiX8SRc/nN9gNuUadKnTJJIUXsNAeJ/2Jp9uVleoHU8UUnwOuntaa6TvpJ6kuCyRWw9S2m6VXqqAWYn5gTYE8puMdjhWwbPbW4BHQ5h+n5ysxqjjStJ6VgQ5BvzFrf2kRyNJoJ4k2mlyqF0YggjiDceke2ltQ1shKhWW/wAQPH05azXwiW6oscU3ZlUcsSx4kknzPGbRdqBMOtOjdHJ+8YcT0sZqYQUmuxEop9zNBcm56m/pf3J/ObrZFWnRpitVs2YkBCLkAH5l5cetuE0YtY9eX6z1nJtfkLDy4yYyrkJR2VFp2ltajXQEEjKrWBFiGJW3hawM0ddFZRUptdh862IIHJh1HXppEg2hHWNbIP39PS+tiPAgg+ljHc3N0ytY1jXAuWzNrzIkuOFmFukxx1LJUdRwDEDyvp9JE7k6mJ7os70wp8RbqI9itQbHVbE9emnvE6Tga2ueXST0ay5jUf0Uc7ixBbkOsE+KBrmyGmpdlW+pIUX4DgBLns8Ll7t6jBaJPxBvgZDY2BPy8Bw6SpbKqKtamzcM35iwPuZud56pACg6Px8cv/I9pZjpRcinNcpqJZjtek3dmiykU2sQOSsCDp52ms2DihhcXWw66JUsyeBte3sSP5ZUME7B1ym1yF9yJuNvE02oVCbuBqRzykEH6mMp2tvYr9FRel9zab47YWthqahhcuGK3BK2VrggcCCbSlxvaqKK1TKQRmJuPHUj04RSVTdyNGKChGkMYyjkYLYg5VLA8QSL2/I+F7coY2jkcgAgWBW/NSNG9ZAzEm5N/OS4jEs+XMflUIPIcIo/Jsxi2Gzu65NiCfRaa3HvaY7IrClRxNb9pk7hPOpfOfRQfea+riSyJTsAEzcOZY3JPjoB6TZUMOhfB0SRlfK7+LO1ivnZQvvJEaSTOgbtUEwuERSQNO8qEmwzMATc9ALD0m0wO0qVYE0qiuAbHKQbeco+/wBjGC0qI0DXZvG2ijy4/TpNRuVjGp4ymAdKl0YdbjT62lznq9TnfTvJjeVvl2x7tGwQTFLVHCqtz/Evwn6ZZVqjltSf92t68Je+0usmShT/AG7s3ktrfU/lKjRq0jhzTJZHDFwfmSppYKRxUjWx4am/Iyqa+5mzpZN4otiOY2tc2ve3K/W0Z2fdqtJCxUZ1F72y5mAJHSZ7MOHuwxIqZSpytTIzK3EHKdGHI+cSvENHfgvna3s1KWIo1EFjUQ5vEoQAfOxA9Ilhu0HFIipZWyqFueJsLXPjK7tja1bFVO9rtmayr4AAAAAcuF/MmWHA7l1KlKnUCv8AGitoy2+JQenjJvngzxxxhjjHLzRUIQhINIQhCABCEIAEIQgAQhCABCEIAEmw+JdL5DYkWvz9DykMIAZO5JJJJJ4k8ZjCEACEIQA9Yg8Bbh/zGsdj2qhA41UEX63ty9IpCTZFLueq1jcRjH416rBntoLC3Djf9YtCFsKV2EIQkEhCEIAEypuVIYaEEEeY1ExhAB/bG1XxLh6gAIXKAt7cSefnF8BiO7q06hF8jq9uF8rA2v6SCEmyFFJUuw9tjalTE1TVqWvYAAcAo4Ae8UquCbquUaaXJ5a6nqdfWYQkAkkqQQhCBIR2ntfEqAq16oAAAAqMAANAAL6CJQgFBCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAHsIQkkBCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAGeQhIJCEIQAIQhAAhCEACEIQAIQhAD/9k="
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
                  coverImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/71/d9/9a/beach-sand-sculptures.jpg?w=1200&h=1200&s=1"
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
                  coverImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDpAMYqYQHVy_z1_7H3ofRJ1LUH4hptT22A&s"
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
                  coverImage="https://i0.wp.com/ishootshows.com/wp-content/uploads/2013/07/Screen-Shot-2013-07-07-at-5.21.40-PM.jpg?fit=435%2C405&ssl=1"
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
                  coverImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Main_Gate%2C_The_Doon_School.jpg/960px-Main_Gate%2C_The_Doon_School.jpg"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2023/01/dddddddddd.jpg"
                  numberOfPeople={135}
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
                  eventName="Parents and Old Boys Enter"
                  desc="Parents and Old Boys enter the school"
                  location="Main Gate"
                  startTime="09:30"
                  endTime="16:30"
                  coverImage="https://www.doonschool.com/wp-content/uploads/2018/05/about-doon-2.jpg"
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
                  coverImage="https://www.doonschool.com/wp-content/uploads/2024/04/JH_TH_logo_png4.png"
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
                  eventName="Lunch for All"
                  desc="Lunch for all at Jaipur House Pagal Gymkhana"
                  location="Skinners"
                  startTime="13:00"
                  endTime="14:00"
                  coverImage="https://static.toiimg.com/photo/47782089.cms"
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
                  eventName="Chief Guest Interaction"
                  desc="Chief Guest interacts with senior students and faculty"
                  location="Art & Media Centre"
                  startTime="15:00"
                  endTime="15:45"
                  coverImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCVzfhveaxVORgRYyktxJlQ9AODeqtnf4Og&s"
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
                  eventName="Founder’s Day Programme"
                  desc="Founder’s Day main function and programme"
                  location="Rose Bowl"
                  startTime="18:00"
                  endTime="20:00"
                  coverImage="https://www.doonschool.com/wp-content/uploads/2016/10/founders_speeches.jpg"
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
                  eventName="Founders Music Production"
                  desc="Music Performance as part of Founder’s Day celebrations"
                  location="Rose Bowl"
                  startTime="20:20"
                  endTime="21:00"
                  coverImage="https://www.doonschool.com/wp-content/uploads/2024/10/464193763_539644192148610_4505489439754893471_n-1024x1024.jpg"
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
                  eventName="Students Departure"
                  desc="Students leave with parents after Housemaster’s permission"
                  location="Campus"
                  startTime="21:15"
                  endTime="21:30"
                  coverImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Main_Gate%2C_The_Doon_School.jpg/960px-Main_Gate%2C_The_Doon_School.jpg"
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
