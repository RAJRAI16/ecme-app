import { useState } from "react";
import { Rocket, Leaf, Settings, X, Calendar } from "lucide-react";

const ICONS = {
  Promotional: Settings,
  Seasonal: Leaf,
  Launch: Rocket,
};

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Sale",
      type: "Promotional",
      status: "Completed",
      budget: 20000,
      conversion: 50,
      start: "2025-12-14",
      end: "2025-12-27",
      active: false,
    },
    {
      id: 2,
      name: "Back-to-School Promo",
      type: "Seasonal",
      status: "Active",
      budget: 15000,
      conversion: 35,
      start: "2025-12-19",
      end: "2025-12-28",
      active: true,
    },
    {
      id: 3,
      name: "New Product Launch",
      type: "Seasonal",
      status: "Active",
      budget: 30000,
      conversion: 60,
      start: "2025-12-22",
      end: "2025-12-30",
      active: true,
    },
  ]);

  const [open, setOpen] = useState(false);

  const toggleActive = (id) => {
    setCampaigns((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              active: !c.active,
              status: c.active ? "Paused" : "Active",
            }
          : c
      )
    );
  };

  const addCampaign = (data) => {
    setCampaigns((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
        status: "Active",
        active: true,
      },
    ]);
    setOpen(false);
  };

  return (
    <>
      {/* ================= TABLE ================= */}
      <div className="bg-[#1c1c1c] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Campaigns</h3>
          <button
            onClick={() => setOpen(true)}
            className="bg-[#2a2a2a] px-4 py-2 rounded-lg hover:bg-[#333] transition"
          >
            Create campaign
          </button>
        </div>

        {/* TABLE SCROLL (MAX 5 ROWS) */}
        <div className="overflow-y-auto max-h-[360px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[900px]">
              <thead className="text-gray-400 border-b border-gray-700 sticky top-0 bg-[#1c1c1c]">
                <tr>
                  <th />
                  <th className="text-left py-3">Campaign</th>
                  <th>Status</th>
                  <th>Budget</th>
                  <th>Conversions</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>

              <tbody>
                {campaigns.map((c) => {
                  const Icon = ICONS[c.type];
                  return (
                    <tr
                      key={c.id}
                      className="border-b border-gray-800 last:border-0"
                    >
                      <td className="py-4">
                        <button
                          onClick={() => toggleActive(c.id)}
                          className={`w-12 h-6 rounded-full relative transition ${
                            c.active ? "bg-blue-500" : "bg-gray-600"
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition ${
                              c.active ? "translate-x-6" : ""
                            }`}
                          />
                        </button>
                      </td>

                      <td className="py-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#2a2a2a] flex items-center justify-center">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-gray-400 text-xs">{c.type}</p>
                        </div>
                      </td>

                      <td>
                        <span className="bg-[#2a2a2a] px-3 py-1 rounded-full text-xs">
                          {c.status}
                        </span>
                      </td>

                      <td>${c.budget.toLocaleString()}</td>
                      <td>{c.conversion}%</td>
                      <td>{c.start}</td>
                      <td>{c.end}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <NewCampaignModal
            onClose={() => setOpen(false)}
            onSubmit={addCampaign}
          />
        </>
      )}
    </>
  );
}

/* ================= MODAL ================= */

function NewCampaignModal({ onClose, onSubmit }) {
  const [type, setType] = useState("Launch");
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [budget, setBudget] = useState("");
  const [conversion, setConversion] = useState("");

  const submit = () => {
    if (!name || !start || !end || !budget || !conversion) return;
    onSubmit({
      name,
      type,
      start,
      end,
      budget: Number(budget),
      conversion: Number(conversion),
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="bg-[#1c1c1c] w-full max-w-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">New campaign</h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* TYPE */}
        <p className="text-sm text-gray-400 mb-2">Type</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {["Promotional", "Seasonal", "Launch"].map((t) => {
            const Icon = ICONS[t];
            return (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`border rounded-xl py-4 flex flex-col items-center gap-2 transition ${
                  type === t
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-700 hover:border-gray-500"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm">{t}</span>
              </button>
            );
          })}
        </div>

        {/* INPUTS */}
        <Input label="Campaign name" value={name} onChange={setName} />
        <div className="grid grid-cols-2 gap-4">
          <DateInput label="Start date" value={start} onChange={setStart} />
          <DateInput label="End date" value={end} onChange={setEnd} />
        </div>
        <Input label="Budget" value={budget} onChange={setBudget} prefix="$" />
        <Input
          label="Conversion (%)"
          value={conversion}
          onChange={setConversion}
        />

        <button
          onClick={submit}
          className="mt-6 w-full bg-blue-600 py-3 rounded-lg font-medium hover:bg-blue-500 transition"
        >
          Create campaign
        </button>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, prefix }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <div className="flex items-center bg-[#2a2a2a] rounded-lg px-3">
        {prefix && <span className="text-gray-400 mr-1">{prefix}</span>}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent py-3 outline-none text-sm"
        />
      </div>
    </div>
  );
}

function DateInput({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <div className="flex items-center bg-[#2a2a2a] rounded-lg px-3">
        <Calendar size={16} className="text-gray-400 mr-2" />
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent py-3 outline-none text-sm"
        />
      </div>
    </div>
  );
}
