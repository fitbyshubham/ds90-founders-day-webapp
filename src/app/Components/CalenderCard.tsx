interface CalenderCardProps {
  selectedDay: "OCT 16" | "OCT 17" | "OCT 18";
  onSelectDay: (day: "OCT 16" | "OCT 17" | "OCT 18") => void;
}

export default function CalenderCard({ selectedDay, onSelectDay }: CalenderCardProps) {
  return (
    <div className="flex space-x-4">
      {["OCT 16", "OCT 17", "OCT 18"].map((day) => {
        const [month, date] = day.split(" ");
        return (
          <button
            key={day}
            onClick={() => onSelectDay(day as "OCT 16" | "OCT 17" | "OCT 18")}
            className={`w-19 h-19 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-200 border-2
              ${selectedDay === day
                ? "bg-blue-500 text-white border-blue-700 scale-105"
                : "bg-white text-blue-900 border-gray-200 hover:bg-pink-100"}`}
          >
            <span className="text-4xl font-extrabold mb-1">{date}</span>
            <span className="text-xs font-semibold tracking-wide">{month}</span>
          </button>
        );
      })}
    </div>
  );
}