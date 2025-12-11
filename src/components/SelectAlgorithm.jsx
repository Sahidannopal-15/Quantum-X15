import React from "react";
import { Hash, Check } from "lucide-react";

const algorithms = [
  { id: "SHA-256", label: "SHA-256", description: "256-bit hash" },
  { id: "SHA-384", label: "SHA-384", description: "384-bit hash" },
  { id: "SHA-512", label: "SHA-512", description: "512-bit hash" },
];

export default function SelectAlgorithm({ algorithm, setAlgorithm }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
          <Hash className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Choose Hash Algorithm</h4>
          <p className="text-sm text-gray-400">Select the hash function for your files</p>
        </div>
      </div>

      {/* Algorithm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {algorithms.map((algo) => (
          <label
            key={algo.id}
            className={`
              relative group cursor-pointer
              p-5 rounded-xl border-2 transition-all duration-300
              ${algorithm === algo.id
                ? "border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-lg shadow-purple-500/30"
                : "border-gray-700 bg-gray-900/50 hover:border-purple-400/50 hover:bg-gray-900/70"
              }
            `}
          >
            {/* Radio Input (Hidden) */}
            <input
              type="radio"
              name="algo"
              value={algo.id}
              checked={algorithm === algo.id}
              onChange={() => setAlgorithm(algo.id)}
              className="sr-only"
            />

            {/* Content */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h5 className={`font-bold text-lg ${
                    algorithm === algo.id ? "text-white" : "text-gray-300"
                  }`}>
                    {algo.label}
                  </h5>
                </div>
                <p className={`text-sm ${
                  algorithm === algo.id ? "text-purple-200" : "text-gray-500"
                }`}>
                  {algo.description}
                </p>
              </div>

              {/* Check Icon */}
              <div className={`
                flex items-center justify-center w-6 h-6 rounded-full
                transition-all duration-300
                ${algorithm === algo.id
                  ? "bg-purple-500 scale-100"
                  : "bg-gray-700 scale-0 group-hover:scale-100"
                }
              `}>
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Glow Effect on Selected */}
            {algorithm === algo.id && (
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-30" />
            )}
          </label>
        ))}
      </div>
    </div>
  );
}