 // components/common/InstructionsList.tsx
import React from 'react';

interface InstructionItem {
  text: string;
  completed?: boolean;
}

interface InstructionsListProps {
  title: string;
  instructions: InstructionItem[];
  className?: string;
}

export const InstructionsList: React.FC<InstructionsListProps> = ({
  title,
  instructions,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl p-6 ${className}`}>
      <h4 className="font-semibold text-gray-800 mb-4">{title}</h4>
      <div className="space-y-3 text-sm text-gray-600">
        {instructions.map((instruction, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-3 ${
              instruction.completed ? 'bg-green-500' : 'bg-green-500'
            }`}></div>
            <span>{instruction.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
