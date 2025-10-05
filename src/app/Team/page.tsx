import React from "react";

const personImage = "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";

const MentorCard: React.FC = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-32 h-32 rounded-full shadow-xl overflow-hidden flex items-center justify-center">
      <img
        src={personImage}
        alt="Shubham Sharma"
        className="w-32 h-32 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-semibold text-xl text-center">
      Shubham Sharma
    </div>
    <div className="text-gray-600 font-medium text-center">Mentor</div>
  </div>
);

const DeveloperCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-lg">
    <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
      <img
        src={personImage}
        alt={name}
        className="w-24 h-24 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-medium text-center mt-1">{name}</div>
  </div>
);

const MainContentWriterCard: React.FC = () => (
  <div className="flex flex-col items-center ml-5 bg-transparent p-3 rounded-full shadow-lg">
    <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
      <img
        src={personImage}
        alt="Ojas"
        className="w-20 h-20 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 font-medium text-center mt-1">Ojas</div>
  </div>
);

const ContentWriterCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex flex-col items-center bg-transparent p-2 rounded-full shadow-md">
    <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
      <img
        src={personImage}
        alt={name}
        className="w-16 h-16 object-cover rounded-full border-4 border-white"
      />
    </div>
    <div className="text-gray-700 text-sm text-center mt-1">{name}</div>
  </div>
);

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 p-6 py-12 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 relative mx-2">
      <MentorCard />

      {/* Developers section */}
      <div className="flex items-center gap-4">
        <div className="text-gray-700 font-semibold text-lg rotate-180 mr-5 [writing-mode:vertical-lr]">
          Developers
        </div>
        <div className="flex gap-6">
          <DeveloperCard name="Vibhor" />
          <DeveloperCard name="Hemant" />
          <DeveloperCard name="Samarth" />
        </div>
      </div>

      {/* Main content writer */}
      <div className="flex items-center gap-4">
        <div className="text-gray-700 font-semibold text-lg rotate-180 [writing-mode:vertical-lr]">
          Main Content Writer
        </div>
        <MainContentWriterCard />
      </div>

      {/* Content writers */}
      <div className="flex items-center gap-4">
        <div className="text-gray-700 font-semibold text-lg rotate-180 [writing-mode:vertical-lr]">
          Content Writers
        </div>
        <div className="flex gap-4">
          <ContentWriterCard name="Reyhan" />
          <ContentWriterCard name="Nachiket" />
          <ContentWriterCard name="Daksh" />
          <ContentWriterCard name="Shiven" />
        </div>
      </div>
    </div>
  );
};

export default Team;