import React from 'react';

interface FilterProps {
  developers: string[];
  selectedDeveloper: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ developers, selectedDeveloper, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="filter">
      <select id="developer" value={selectedDeveloper} onChange={handleChange}>
        <option value="">Select a developer...</option>
        {developers.map(dev => (
          <option key={dev} value={dev}>{dev}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
