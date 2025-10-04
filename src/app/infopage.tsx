"use client";
import React, { useState } from "react";

interface Images {
  name: string;
  
  description: string;
  
  image: string;
}

const houses: Images[] = [
{
  "name": "Foot House",
  "description": "Foot House – The First Stop for Every Dosco 'Foot House isn't a permanent house like Jaipur, Kashmir, Oberoi, Tata, or Hyderabad. It's a holding house, where every new boy starts his journey at Doon before moving into his main house. Named after Arthur E. Foot, the school’s first Headmaster (1935–48), Foot House is where we all learn the ropes of Dosco life — from folding our bedsheets to finding our way around campus.\nThe faculty and staff here are legends in their own right. Our Housemaster, Ms. Ruchi Sahni, makes sure everyone settles in smoothly, while Mr. Keshav Bhatt, the Assistant Housemaster, guides us through daily routines. And of course, our Dame, Ms. Kanchan Shukla, keeps the house running like clockwork — she somehow knows everything, from who forgot their shoes to who’s sneaking an extra snack!\nFun Fact: Foot House is built on land that was once part of the Imperial Forest Research Institute (IFRI), established in 1906. Before Doon School took over the Chandbagh estate in 1935, IFRI operated from this very site, making our dorms and common rooms part of a rich history in forestry research.",
  "image": "/Screenshot 2025-10-03 at 20.17.46.png"
},
{

  "name": "Martyn House",
  "description": "Martyn House at Doon School is named after John A.K. Martyn, the school's second headmaster. It serves as a holding house for 40 students who are in the D-Form, the school's seventh grade. Every year, a new group of 40 boys moves into Martyn House, which plays a crucial role in helping them transition into boarding school life. The house provides an environment where students can make friends with peers their own age, get accustomed to the school's routines, and gradually adjust to living away from home.\nThe staff in charge of Martyn House consists of a dedicated team committed to the students' well-being and development. The Housemaster, Mr. Samik Das, along with Assistant Housemaster Mr. Rajat Sabharwal and Dame Ms. Gurjeet Kaur Dhaliwal, oversee the daily running of the house. Additionally, several tutors including Mr. Inderjit Singh, Ms. Rageshree Das Gupta, Mr. Vratik Upadhyay, Ms. Vaishali Gairola, and Dr. Anshu Dhar Jayal contribute their support to ensure a nurturing environment for the boys.",
  "image": "/Screenshot 2025-10-03 at 20.19.17.png"
},
  {
  "name": "Hyderabad House",
  "description": "Hyderabad House is the oldest house at The Doon School, holding the distinction of being the first House, established with Mr. JAK Martyn as its pioneering Housemaster. This 'House of Nizams' has a rich legacy of achievements in sports, the arts, and education, including producing one of the school's headmasters. Hyderabad House was named to honor the city of Hyderabad and its ruler, the Nizam, in recognition of the large donation.\nPersonal development is a big part of the house system: leadership, teamwork, values of humility and service, not just competition.\nHouse Master: Mr. Sudhir Thapa (SRT)\nAssistant House Master: Mr. Harshal Gunwant (HGT)\nDame: Meenakshi Tripathi\nTutors: Apart from them, the tutors assist in not just academics but pastoral care and house life as well.",
  "image": "/Screenshot 2025-10-03 at 20.19.29.png"
},

  {
  "name": "Jaipur House",
  "description": "Jaipur House – The House of Eagles\nEstablished in 1936 as Thomas House, Jaipur House is one of the oldest and most distinguished houses at The Doon School. In 1937, the house moved into its current building, and 49 boys were inducted under the leadership of the first Housemaster, Mr. C.L. Howell-Thomas. The house was later renamed Jaipur House, reflecting its deep connection with the royal family of Jaipur, who were significant patrons of The Doon School.\nThe house is renowned for its strong traditions and has produced many notable alumni. The first Housemaster was Mr. C.L. Howell-Thomas. The house is named after the Maharaja of Jaipur, who made a significant donation to the school, symbolizing the strong ties between the house and the royal family.\nHousemaster: Mr. Pratyush Vaishnava\nAssistant Housemaster: Mr. Parvinder Kumar\nDame: Ms. Durgesh Kumari\nJaipur House is known for its rich traditions, strong academic performance, and active participation in various school activities. The house's emblem, featuring an eagle, symbolizes strength, vision, and leadership.\nFun Fact: The house is named after the Maharaja of Jaipur, who made a significant donation to the school, symbolizing the strong ties between the house and the royal family.",
  "image": "/Screenshot 2025-10-03 at 20.19.40.png"
},
  {
  "name": "Kashmir House",
  "description": "Kashmir House – The House of Gentlemen\nKashmir House, established in 1937 as Gibson House, is one of the oldest and most distinguished houses at The Doon School. In 1938, the house was renamed Kashmir House following a generous donation from Maharaja Hari Singh of Kashmir for its construction. Situated next to Hyderabad House along one flank of the Main Field, it boasts a rich history and a legacy of producing some of the most accomplished Doscos.\nHousemaster: Mr. Manish Kant Pant (M.Sc., B.Ed.)\nAssistant Housemaster: Mr. Satya Shrava Sharma\nDame: Ms. Ria Chakraborty\nKashmir House is renowned for its discipline, camaraderie, and a strong sense of tradition. The house's emblem, the chinar leaf, symbolizes resilience and the rich cultural heritage of Kashmir. Known as the 'House of Gentlemen,' it has consistently upheld high standards in academics, sports, and co-curricular activities.\nFun Fact: In 2003, the two separate entities, Kashmir-A and Kashmir-B, were unified to form a single cohesive unit, strengthening the house's community spirit.",
  "image": "/Screenshot 2025-10-03 at 20.19.03.png"
},
  {
  "name": "Oberoi House",
  "description": "Oberoi House – The House of Swans\nOberoi House is the newest among the senior houses. It was established in 1991, joining the original four houses of the school. Its creation initially met with some resistance (mainly concerns about rebalancing inter-house games and competitions), but over time Oberoi has become deeply integrated into the school’s culture.\nBy 2015, Oberoi House celebrated its 25th anniversary / Silver Jubilee — a milestone that highlighted its increasing heritage and contribution.\nHouse Master: Mr. Vishal Mohla (VSM)\nAssistant House Master: Dr. Ankur Joshi (ARJ)\nDame: Ms. Sarabjeet Kaur\nTutors: A group of faculty (8 or so) who assist in pastoral care, mentorship, and everyday house life.",
  "image": "/Screenshot 2025-10-03 at 20.18.54.png"
},
  {
  "name": "Tata House",
  "description": "Tata House is one of the oldest and most respected houses at Doon. Its motto, 'True as Steel,' reflects its spirit. Living here feels like being part of a close-knit family where everyone supports one another while also pushing you to do your best. The house has a strong reputation for discipline, hard work, and loyalty. Seniors guide juniors patiently. Life in Tata combines study, sport, and fun. In the mornings, the house buzzes with energy as everyone prepares for classes. In the evenings, the common room fills with laughter, debates, and stories. Tata boys are competitive in sports, debates, and cultural events, but they also celebrate each other’s successes. The house has its traditions, including special dinners, house songs, and late-night discussions, which foster a sense of belonging. Living here teaches responsibility, teamwork, and lifelong friendships, making Tata not just a house but a home for all.",
  "image": "/Screenshot 2025-10-03 at 20.18.22.png"
},
];

const App: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<Images | null>(null);

  if (!selectedImages) {
    return (
      <div className="mt-[750px] p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
  {houses.map((c) => (
    <button
      key={c.name}
      onClick={() => setSelectedImages(c)}
      className="flex items-center rounded-2xl border border-gray-500 overflow-hidden bg-white shadow-sm hover:shadow-md transition w-full"
    >

      <img
        src={c.image}
        alt={c.name}
        className="h-[100px] w-[180px] object-contain bg-gray-100 p-2"
      />
  
      <div className="flex-1 text-left px-4">
        <h2 className="text-lg font-bold text-gray-900">{c.name}</h2>
      </div>
    </button>
  ))}
</div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <img
          src={selectedImages.image}
          alt={selectedImages.name}
          className="mt-100 h-50 w-50- object-cover"
        />
      </div>
      <div className="w-full bg-white rounded-t-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">{selectedImages.name}</h1>
        <p className="mb-6 text-gray-700">{selectedImages.description}</p>
        <div className="flex gap-4 mb-4">
          
        </div>
        <button
          onClick={() => setSelectedImages(null)}
          className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          ← Back to Houses
        </button>
      </div>
    </div>
  );
};

export default App;
