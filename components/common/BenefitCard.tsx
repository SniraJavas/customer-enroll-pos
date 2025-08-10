import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  iconColor = 'text-green-600',
  className = ''
}) => {
  const getIconBgColor = (iconColor: string) => {
    if (iconColor.includes('green')) return 'bg-green-100';
    if (iconColor.includes('blue')) return 'bg-blue-100';
    if (iconColor.includes('purple')) return 'bg-purple-100';
    return 'bg-gray-100';
  };

  return (
    <div className={`bg-white rounded-2xl p-4 shadow-md ${className}`}>
      <div className="flex items-center">
        <div className={`w-12 h-12 ${getIconBgColor(iconColor)} rounded-full flex items-center justify-center mr-4`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
