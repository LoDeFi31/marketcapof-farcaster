'use client';

import { POPULAR_COMPARISONS } from '@/lib/api';

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Comparaisons populaires</h3>
      <div className="space-y-2">
        {POPULAR_COMPARISONS.map((comparison, index) => (
          <div
            key={`${comparison.assetA}-${comparison.assetB}`}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm">
              {index + 1}
            </div>
            <div className="flex-1">
              <span className="font-medium text-gray-900 uppercase">{comparison.assetA}</span>
              <span className="text-gray-500 mx-2">→</span>
              <span className="font-medium text-gray-900 uppercase">{comparison.assetB}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
