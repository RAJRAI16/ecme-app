import { Clock, CheckCircle, MessageSquare, Plus } from "lucide-react";

const ICON_MAP = {
  completed: CheckCircle,
  comment: MessageSquare,
  add: Plus,
};

export default function RecentActivity() {
  const activities = [
    {
      name: "Angelina Gotelli",
      action: "marked task as completed",
      type: "completed",
      time: "2h ago",
      unread: true,
    },
    {
      name: "Max Alexander",
      action: "commented on your post",
      type: "comment",
      time: "5h ago",
      unread: true,
    },
    {
      name: "Sophia Turner",
      action: "added a new task",
      type: "add",
      time: "1d ago",
      unread: false,
    },
    {
      name: "John Carter",
      action: "updated project schedule",
      type: "completed",
      time: "2d ago",
      unread: false,
    },
  ];

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 h-full flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent activity</h3>
        <button className="text-sm text-gray-400 hover:text-white transition">
          View all
        </button>
      </div>

      {/* LIST */}
      <ul className="space-y-4 overflow-y-auto pr-1">
        {activities.map((item, index) => {
          const Icon = ICON_MAP[item.type];

          return (
            <li
              key={index}
              className="flex items-start gap-3 group"
            >
              {/* ICON */}
              <div
                className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center
                  ${
                    item.unread
                      ? "bg-[#2a2a2a]"
                      : "bg-[#222]"
                  }
                `}
              >
                <Icon size={14} className="text-gray-300" />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <p className="text-sm leading-snug">
                  <span className="font-medium">{item.name}</span>{" "}
                  <span className="text-gray-400">{item.action}</span>
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <Clock size={12} />
                  <span>{item.time}</span>

                  {item.unread && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
