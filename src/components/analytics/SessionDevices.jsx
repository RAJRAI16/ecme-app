import { Monitor, Smartphone, Tablet } from "lucide-react";

export default function SessionDevices() {
  const data = [
    {
      label: "Desktop",
      value: 42.1,
      color: "#3b82f6",
      icon: Monitor,
    },
    {
      label: "Mobile",
      value: 33.7,
      color: "#fdba74",
      icon: Smartphone,
    },
    {
      label: "Tablet",
      value: 19.6,
      color: "#7dd3fc",
      icon: Tablet,
    },
  ];

  const radius = 80;
  const stroke = 18;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-5 sm:p-6 flex flex-col items-center h-full w-full">
      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-6 w-full text-left">
        Session devices
      </h3>

      {/* PIE / DONUT */}
      <div className="w-full flex justify-center mb-6">
        <svg
          viewBox="0 0 220 220"
          className="w-44 h-44 sm:w-[220px] sm:h-[220px]"
        >
          <g transform="translate(110 110)">
            {data.map((item, i) => {
              const dash =
                (item.value / 100) * circumference;
              const dashArray = `${dash} ${
                circumference - dash
              }`;

              const circle = (
                <circle
                  key={i}
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={stroke}
                  strokeDasharray={dashArray}
                  strokeDashoffset={-offset}
                  strokeLinecap="butt"
                />
              );

              offset += dash;
              return circle;
            })}
          </g>
        </svg>
      </div>

      {/* LEGEND */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full text-center">
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="
                flex flex-col items-center gap-2
                transition
                hover:scale-105
                cursor-pointer
              "
            >
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${item.color}22` }}
              >
                <Icon size={22} color={item.color} />
              </div>

              <p className="text-sm text-gray-400 truncate">
                {item.label}
              </p>

              <p className="text-lg font-semibold">
                {item.value}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
