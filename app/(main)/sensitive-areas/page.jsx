"use client";

import React, { useMemo, useState } from "react";
import { Download } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DATA = [
  {
    title: "Area surrounded by dense forest",
    risk_level: 4.0,
    risk_description:
      "High risk of wild animal encounters and limited network connectivity.",
    police_contact: "+91-9876543210",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    title: "Tourist spot near cliff edge",
    risk_level: 4.5,
    risk_description:
      "Steep cliffs with no protective barriers, danger of falling.",
    police_contact: "+91-9123456780",
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    title: "Area surrounded by river",
    risk_level: 3.75,
    risk_description:
      "Seasonal flooding risk and strong currents make it unsafe for swimming.",
    police_contact: "+91-9988776655",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    title: "Remote mountain pass",
    risk_level: 4.8,
    risk_description:
      "Unstable weather conditions, frequent landslides, and poor accessibility.",
    police_contact: "+91-9112233445",
    latitude: 32.7266,
    longitude: 74.857,
  },
  {
    title: "Crowded urban market area",
    risk_level: 2.5,
    risk_description: "Pickpocketing and petty theft reported frequently.",
    police_contact: "+91-9001122334",
    latitude: 19.076,
    longitude: 72.8777,
  },
];

function riskColor(level) {
  if (level >= 4.5) return "bg-red-100 text-red-800 ring-red-200";
  if (level >= 4.0) return "bg-red-50 text-red-700 ring-red-100";
  if (level >= 3.0) return "bg-yellow-50 text-amber-700 ring-amber-100";
  return "bg-green-50 text-green-700 ring-green-100";
}

export default function PremiumSensitiveAreasPage() {
  const [query, setQuery] = useState("");
  const [minRisk, setMinRisk] = useState(0);
  const [sortBy, setSortBy] = useState("risk_desc");
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = DATA.filter((d) => d.risk_level >= minRisk);
    if (q) {
      items = items.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.risk_description.toLowerCase().includes(q) ||
          d.police_contact.includes(q)
      );
    }

    if (sortBy === "risk_desc")
      items.sort((a, b) => b.risk_level - a.risk_level);
    if (sortBy === "risk_asc")
      items.sort((a, b) => a.risk_level - b.risk_level);
    if (sortBy === "title_asc")
      items.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "title_desc")
      items.sort((a, b) => b.title.localeCompare(a.title));

    return items;
  }, [query, minRisk, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const exportCSV = () => {
    // Convert data to CSV format
    const headers = ["Title", "Risk Level", "Description", "Police Contact", "Latitude", "Longitude"];
    const csvRows = [headers.join(",")];
    
    for (const item of filtered) {
      const values = [
        `"${item.title.replace(/"/g, '""')}"`,
        item.risk_level,
        `"${item.risk_description.replace(/"/g, '""')}"`,
        item.police_contact,
        item.latitude,
        item.longitude
      ];
      csvRows.push(values.join(","));
    }
    
    const csvString = csvRows.join("\n");
    
    // Create a blob and download
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "sensitive-areas.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="block lg:hidden min-h-screen bg-white px-6 py-10">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl text-black font-semibold">
              Sensitive Areas
            </h1>
            <p className="text-sm text-slate-500">curated & verified entries</p>
          </div>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 text-black px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-sm transition"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </header>

        {/* Rest of the mobile view */}
        {/* ... */}
        
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded-lg disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded-lg disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div className="hidden lg:block min-h-screen bg-white text-slate-900 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Sensitive Areas</h1>
              <p className="text-sm text-slate-500">
                curated & verified entries
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 ring-1 ring-slate-100"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Export CSV</span>
              </button>
            </div>
          </header>

          {/* Rest of the desktop view */}
          {/* ... */}
          
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-slate-500">
              Showing {Math.min(filtered.length, (page - 1) * pageSize + 1)}–
              {Math.min(filtered.length, page * pageSize)} of{" "}
              {filtered.length} entries
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-2 rounded-lg ring-1 ring-slate-100 text-sm"
                disabled={page === 1}
              >
                Prev
              </button>
              <div className="text-sm text-slate-600 px-3 py-2">
                Page {page} / {totalPages}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-2 rounded-lg ring-1 ring-slate-100 text-sm"
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
