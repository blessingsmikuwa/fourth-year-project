import React from "react";

const requests = [
  {
    id: 1,
    title: "Upload: Form 2 History Notes",
    from: "T. Banda, Blantyre Secondary",
    type: "Upload",
    date: "Mar 13",
    actions: ["approve", "reject"],
  },
  {
    id: 2,
    title: "New teacher registration: F. Ngwira",
    from: "Kamuzu Academy",
    type: "Registration",
    date: "Mar 13",
    actions: ["approve", "reject"],
  },
  {
    id: 3,
    title: "New school: Mzuzu Girls Secondary",
    from: "School Administrator",
    type: "School",
    date: "Mar 12",
    actions: ["approve", "reject"],
  },
  {
    id: 4,
    title: "Broken link reported on Chemistry PDF",
    from: "Grace Chikwanda (student)",
    type: "Issue",
    date: "Mar 11",
    actions: ["resolve"],
  },
  {
    id: 5,
    title: "Delete request: Outdated physics PDF",
    from: "J. Mkandawire, St. Patrick's",
    type: "Delete",
    date: "Mar 10",
    actions: ["confirm", "dismiss"],
  },
];

const getTypeStyle = (type) => {
  switch (type) {
    case "Upload":
      return "bg-orange-500/20 text-orange-400";
    case "Registration":
      return "bg-blue-500/20 text-blue-400";
    case "School":
      return "bg-green-500/20 text-green-400";
    case "Issue":
      return "bg-red-500/20 text-red-400";
    case "Delete":
      return "bg-red-500/20 text-red-400";
    default:
      return "bg-gray-500/20 text-gray-400";
  }
};

const ActionButton = ({ type }) => {
  const base = "px-4 py-1.5 rounded-lg text-sm font-medium";

  switch (type) {
    case "approve":
      return <button className={'${base} bg-[#22C55E] text-white'}>Approve</button>;
    case "reject":
      return <button className={'${base} bg-[#EF4444] text-white'}>Reject</button>;
    case "resolve":
      return <button className={'${base} bg-[#374151] text-[#9CA3F]'}>Resolve</button>;
    case "confirm":
      return <button className={'${base} bg-[#22C55E] text-white'}>Confirm</button>;
    case "dismiss":
      return <button className={'${base} bg-[#374151] text-[#9CA3AF]'}>Dismiss</button>;
    default:
      return null;
  }
};

export default function RequestsPage() {
  return (
    <div className="bg-[#0B1220] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Requests</h1>
          <p className="text-gray-400 text-sm">Pending approvals</p>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search resources, users..."
            className="bg-[#111827] text-sm px-4 py-2 rounded-lg outline-none w-64"
          />

          <button className="bg-green-500 px-4 py-2 rounded-lg font-medium">
            + Add Resource
          </button>

          <div className="bg-[#111827] p-2 rounded-lg">🔔</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#111827] rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Pending Requests & Approvals</h2>
          <span className="text-gray-400 text-sm">5 items need attention</span>
        </div>

        <div className="grid grid-cols-5 text-gray-400 text-sm border-b border-gray-700 pb-2 mb-4">
          <span>REQUEST</span>
          <span>FROM</span>
          <span>TYPE</span>
          <span>DATE</span>
          <span>ACTION</span>
        </div>

        {requests.map((req) => (
          <div
            key={req.id}
            className="grid grid-cols-[2fr_1.5fr_1fr_0.5fr_1.5fr] items-center py-4 border-b border-gray-800"
          >
            <div>{req.title}</div>
            <div className="text-gray-300">{req.from}</div>

            <div>
              <span className={'px-3 py-1 rounded-lg text-xs ${getTypeStyle(req.type)}'}>
                {req.type}
              </span>
            </div>

            <div className="text-gray-300">{req.date}</div>
 <div className="flex gap-2">
              {req.actions.map((action, index) => (
                <ActionButton key={index} type={action} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}