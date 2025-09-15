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

  function exportCSV() {
    const headers = [
      "title",
      "risk_level",
      "risk_description",
      "police_contact",
      "latitude",
      "longitude",
    ];
    const rows = [headers.join(",")];
    for (const r of filtered) {
      const row = headers.map((h) => {
        const val = r[h];
        if (typeof val === "string" && (val.includes(",") || val.includes('"')))
          return '"' + val.replace(/"/g, '""') + '"';
        return val;
      });
      rows.push(row.join(","));
    }

    const blob = new Blob([rows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sensitive_areas_export.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className=" block lg:hidden min-h-screen bg-white px-6 py-10">
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

        <div className="flex flex-col md:flex-row items-start justify-start gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, description or police contact..."
            className="flex-1 px-4 py-2 rounded-lg ring-1 ring-slate-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <div className="flex gap-4 items-center">
            <Select
              value={String(minRisk)}
              onValueChange={(val) => setMinRisk(Number(val))}
            >
              <SelectTrigger className="w-[150px] rounded-xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition text-gray-700">
                <SelectValue placeholder="Select Risk" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-md">
                <SelectItem value="0">All Risks</SelectItem>
                <SelectItem value="3">3+ Risk</SelectItem>
                <SelectItem value="4">4+ Risk</SelectItem>
                <SelectItem value="4.5">4.5+ Risk</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
              <SelectTrigger className="w-[150px] rounded-xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition text-gray-700">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-md">
                <SelectItem value="risk_desc">Risk High → Low</SelectItem>
                <SelectItem value="risk_asc">Risk Low → High</SelectItem>
                <SelectItem value="title_asc">Title A → Z</SelectItem>
                <SelectItem value="title_desc">Title Z → A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((d, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-lg">{d.title}</h2>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ring-1 ${riskColor(
                    d.risk_level
                  )}`}
                >
                  Risk {d.risk_level.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{d.risk_description}</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-medium">Police:</span>{" "}
                  {d.police_contact}
                </p>
                <p>
                  <span className="font-medium">Lat:</span> {d.latitude},{" "}
                  <span className="font-medium">Lng:</span> {d.longitude}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
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

          <section className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3 w-full md:w-2/3">
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search title, description or police contact..."
                  className="flex-1 px-4 py-2 rounded-lg ring-1 ring-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />

                <Select
                  value={String(minRisk)}
                  onValueChange={(val) => setMinRisk(Number(val))}
                >
                  <SelectTrigger className="w-[180px] rounded-xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition text-gray-700">
                    <SelectValue placeholder="Select Risk" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-md">
                    <SelectItem value="0">All Risks</SelectItem>
                    <SelectItem value="3">3+ Risk</SelectItem>
                    <SelectItem value="4">4+ Risk</SelectItem>
                    <SelectItem value="4.5">4.5+ Risk</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
                  <SelectTrigger className="w-[200px] rounded-xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition text-gray-700">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-md">
                    <SelectItem value="risk_desc">Risk High → Low</SelectItem>
                    <SelectItem value="risk_asc">Risk Low → High</SelectItem>
                    <SelectItem value="title_asc">Title A → Z</SelectItem>
                    <SelectItem value="title_desc">Title Z → A</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-sm text-slate-600">Min risk</label>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.25}
                  value={minRisk}
                  onChange={(e) => {
                    setMinRisk(Number(e.target.value));
                    setPage(1);
                  }}
                />
                <div className="px-3 py-1 rounded-lg bg-slate-50 ring-1 ring-slate-100 text-sm">
                  {minRisk.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead className="bg-white sticky top-0">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="py-3 pr-4">Title</th>
                    <th className="py-3 pr-4">Risk</th>
                    <th className="py-3 pr-4">Description</th>
                    <th className="py-3 pr-4">Police Contact</th>
                    <th className="py-3 pr-4">Lat, Long</th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-8 text-center text-slate-400"
                      >
                        No results found.
                      </td>
                    </tr>
                  )}

                  {pageItems.map((r, idx) => (
                    <tr
                      key={idx}
                      className={`align-top ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <td className="py-4 pr-4 align-top w-1/4">
                        <div className="font-medium">{r.title}</div>
                        <div className="text-xs text-slate-400 mt-1">
                          {r.risk_description}
                        </div>
                      </td>
                      <td className="py-4 pr-4 w-28 align-top">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ring-1 ${riskColor(
                            r.risk_level
                          )}`}
                        >
                          <div className="font-semibold">
                            {r.risk_level.toFixed(2)}
                          </div>
                          <div className="text-[11px] uppercase">/5</div>
                        </div>
                      </td>
                      <td className="py-4 pr-4 align-top hidden md:table-cell">
                        {r.risk_description}
                      </td>
                      <td className="py-4 pr-4 align-top w-40">
                        <div className="text-sm font-medium">
                          {r.police_contact}
                        </div>
                        <div className="text-xs text-slate-400">
                          Call for immediate help
                        </div>
                      </td>
                      <td className="py-4 pr-4 align-top w-36">
                        <div className="text-sm">
                          {r.latitude.toFixed(4)}, {r.longitude.toFixed(4)}
                        </div>
                        <a
                          className="text-xs mt-1 inline-block text-amber-600 underline"
                          href={`https://www.google.com/maps/search/?api=1&query=${r.latitude},${r.longitude}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open in Maps
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
          </section>

          <footer className="mt-6 text-xs text-slate-400">
            <div>
              Verified dataset • Last updated: {new Date().toLocaleDateString()}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
