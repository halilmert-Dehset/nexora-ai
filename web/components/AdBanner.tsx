import React from 'react';

interface AdBannerProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'vertical';
  label?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  slotId = "default-slot", 
  format = "horizontal",
  label = "Sponsored" 
}) => {
  return (
    <div className="w-full my-6 flex flex-col items-center justify-center">
      <div 
        className={`w-full max-w-4xl rounded-xl flex flex-col items-center justify-center transition-all ${
          format === 'horizontal' ? 'min-h-[90px]' : 'min-h-[250px]'
        }`}
        data-ad-slot={slotId}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">{label}</span>
      </div>
    </div>
  );
};
