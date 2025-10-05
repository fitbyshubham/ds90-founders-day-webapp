import React from "react";

const cardBackdrop = "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400";

const MentorCard: React.FC = () => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-30 h-30 mt-200 ml-16 rounded-full shadow-xl overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Shubham Sharma"
        className="w-30 h-30 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 ml-16 font-semibold text-xl text-center">
      Shubham Sharma
    </div>
    <div className="text-gray-600 ml-16 font-medium text-center">Mentor</div>
  </div>
);

const DeveloperCard1: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-lg">
    <div className={`w-26 h-26 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Vibhor"
        className="w-26 h-26 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-medium text-center mt-1">Vibhor</div>
  </div>
);

const DeveloperCard2: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-lg">
    <div className={`w-26 h-26 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Hemant"
        className="w-26 h-26 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-medium text-center mt-1">Hemant</div>
  </div>
);

const DeveloperCard3: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-lg">
    <div className={`w-26 h-26 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Samarth"
        className="w-26 h-26 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-medium text-center mt-1">Samarth</div>
  </div>
);

const MainContentWriterCard: React.FC = () => (
  <div className="flex flex-col items-center ml-5 bg-transparent p-3 rounded-full shadow-lg">
    <div className={`w-22 h-22 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Ojas"
        className="w-22 h-22 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-medium text-center mt-1">Ojas</div>
  </div>
);

const ContentWriterCard1: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-md">
    <div className={`w-18 h-18 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Reyhan"
        className="w-18 h-18 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 text-sm text-center mt-1">Reyhan</div>
  </div>
);

const ContentWriterCard2: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-md">
    <div className={`w-18 h-18 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Nachiket"
        className="w-18 h-18 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 text-sm text-center mt-1">Nachiket</div>
  </div>
);

const ContentWriterCard3: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-md">
    <div className={`w-18 h-18 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Daksh"
        className="w-18 h-18 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 text-sm text-center mt-1">Daksh</div>
  </div>
);

const ContentWriterCard4: React.FC = () => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-md">
    <div className={`w-18 h-18 rounded-full overflow-hidden ${cardBackdrop} flex items-center justify-center`}>
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="Shiven"
        className="w-18 h-18 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 text-sm text-center mt-1">Shiven</div>
  </div>
);

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center mr-[50] justify-center w-full h-[2300] gap-10 p-6 mt-[200] bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 relative">
      <MentorCard />

      <div className="flex items-center gap-4">
        <div className="text-gray-700 font-semibold text-lg rotate-180 mr-5 [writing-mode:vertical-lr]">
          Developers
        </div>
        <div className="flex gap-6">
          <DeveloperCard1 />
          <DeveloperCard2 />
          <DeveloperCard3 />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-gray-700 font-semibold text-lg rotate-180 [writing-mode:vertical-lr]">
          Main Content Writer
        </div>
        <MainContentWriterCard />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-gray-700 font-semibold text-lg rotate-180 [writing-mode:vertical-lr]">
          Content Writers
        </div>
        <div className="flex gap-4">
          <ContentWriterCard1 />
          <ContentWriterCard2 />
          <ContentWriterCard3 />
          <ContentWriterCard4 />
        </div>
      </div>
    </div>
  );
};

export default Team;
