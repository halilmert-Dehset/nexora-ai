'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react';

export const CryptoCalculator = () => {
  const [entryPrice, setEntryPrice] = useState('65000');
  const [exitPrice, setExitPrice] = useState('72000');
  const [investment, setInvestment] = useState('1000');
  const [leverage, setLeverage] = useState('1');
  const [positionType, setPositionType] = useState<'long' | 'short'>('long');

  const entry = parseFloat(entryPrice) || 0;
  const exit = parseFloat(exitPrice) || 0;
  const invest = parseFloat(investment) || 0;
  const lev = parseFloat(leverage) || 1;

  let profitUsd = 0;
  let roiPct = 0;

  if (entry > 0 && exit > 0 && invest > 0) {
    if (positionType === 'long') {
      const priceChangePct = (exit - entry) / entry;
      roiPct = priceChangePct * lev * 100;
      profitUsd = invest * (roiPct / 100);
    } else {
      const priceChangePct = (entry - exit) / entry;
      roiPct = priceChangePct * lev * 100;
      profitUsd = invest * (roiPct / 100);
    }
  }

  const totalValue = invest + profitUsd;
  const isProfit = profitUsd >= 0;

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Crypto Profit & Leverage Calculator</h2>
          <p className="text-xs text-slate-400">Calculate net ROI, liquidation estimates, and spot/futures profit</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPositionType('long')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            positionType === 'long' 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/10' 
              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
          }`}
        >
          LONG (Buy)
        </button>
        <button
          onClick={() => setPositionType('short')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            positionType === 'short' 
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-lg shadow-rose-500/10' 
              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
          }`}
        >
          SHORT (Sell)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Entry Price ($)</label>
          <input
            type="number"
            value={entryPrice}
            onChange={(e) => setEntryPrice(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Exit Price ($)</label>
          <input
            type="number"
            value={exitPrice}
            onChange={(e) => setExitPrice(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Investment Amount ($)</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Leverage (1x = Spot)</label>
          <select
            value={leverage}
            onChange={(e) => setLeverage(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          >
            <option value="1">1x (Spot Trading)</option>
            <option value="2">2x Leverage</option>
            <option value="5">5x Leverage</option>
            <option value="10">10x Leverage</option>
            <option value="20">20x Leverage</option>
            <option value="50">50x Leverage</option>
          </select>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-2 gap-4">
        <div>
          <span className="text-[11px] text-slate-400 font-medium">Net Profit / Loss</span>
          <div className={`text-xl font-extrabold flex items-center gap-1 ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
            <DollarSign className="w-4 h-4" />
            {profitUsd > 0 ? `+${profitUsd.toFixed(2)}` : profitUsd.toFixed(2)}
          </div>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 font-medium">Return on Equity (ROE)</span>
          <div className={`text-xl font-extrabold flex items-center gap-1 ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
            <Percent className="w-4 h-4" />
            {roiPct > 0 ? `+${roiPct.toFixed(2)}%` : `${roiPct.toFixed(2)}%`}
          </div>
        </div>

        <div className="col-span-2 pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
          <span>Total Balance after trade:</span>
          <span className="font-bold text-white">${totalValue.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
