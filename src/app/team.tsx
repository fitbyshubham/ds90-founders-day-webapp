import React from "react";

const Team: React.FC = () => {
  const mentor = { name: "Shubham Sharma", position: "Mentor", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" };
  const mediumTeam = [
    { name: "Vibhor", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
    { name: "Hemant", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
    { name: "Samarth", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
  ];
  const smallTeam = [
    { name: "Reyhan", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
    { name: "Nachiket", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
    { name: "Shiven", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
    { name: "Daksh", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" },
  ];
  const mPosition = "Developers";
  const sPosition = "Content Writers";

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-6 min-h-screen mt-180">
      <div className="flex flex-col items-center gap-2">
        <div className="w-40 h-40 rounded-2xl shadow-lg overflow-hidden">
          <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
        </div>
        <div className="text-gray-700 font-semibold text-xl text-center">{mentor.name}</div>
        <div className="text-gray-700 font-medium text-center">{mentor.position}</div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-3 gap-6 justify-center">
          {mediumTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-28 h-28 rounded-xl shadow-md overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-gray-700 font-medium text-center">{member.name}</div>
            </div>
          ))}
        </div>
        <div className="text-gray-700 font-semibold mt-2 text-center">{mPosition}</div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-4 gap-4 justify-center">
          {smallTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 rounded-lg shadow overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-gray-700 text-sm text-center">{member.name}</div>
            </div>
          ))}
        </div>
        <div className="text-gray-700 font-semibold mt-2 text-center">{sPosition}</div>
      </div>
    </div>
  );
};

export default Team;
