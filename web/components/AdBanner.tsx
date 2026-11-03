import React from 'react';

interface AdBannerProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'vertical';
  label?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  slotId = "default-slot", 
  format = "horizontal",
  label = "Advertisement" 
}) => {
  return (
    <div className="w-full my-6 flex flex-col items-center justify-center">
      <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{label}</span>
      <div className={`w-full max-w-4xl border border-dashed border-slate-800 bg-slate-900/50 rounded-xl flex flex-col items-center justify-center p-4 text-center transition-all hover:border-cyan-500/30 ${
        format === 'horizontal' ? 'min-h-[100px]' : 'min-h-[250px]'
      }`}>
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          <span>Google AdSense Slot ({slotId})</span>
        </div>
        <p className="text-[11px] text-slate-600 mt-1">High-CTR Ad will render automatically once approved by AdSense</p>
      </div>
    </div>
  );
};
