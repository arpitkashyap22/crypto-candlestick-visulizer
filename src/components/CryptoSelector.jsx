import React, { useState, useEffect } from 'react';

const CryptoSelector = ({ selectedCoin, setSelectedCoin, selectedInterval, setSelectedInterval, coins }) => {
  const [currentCoin, setCurrentCoin] = useState(selectedCoin);
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);

  // Sync the parent state when the internal state changes
  useEffect(() => {
    setSelectedCoin(currentCoin);
  }, [currentCoin, setSelectedCoin]);

  useEffect(() => {
    setSelectedInterval(currentInterval);
  }, [currentInterval, setSelectedInterval]);

  return (
    <div className="m-2 flex flex-row justify-center">
      <div>
        <Dropdown
          label="Select Cryptocurrency"
          options={coins}
          selected={currentCoin}
          onChange={setCurrentCoin}
        />
      </div>
      <div className="ml-4">
        <Dropdown
          label="Select Time Interval"
          options={[
            { label: '1 Minute', value: '1m' },
            { label: '3 Minutes', value: '3m' },
            { label: '5 Minutes', value: '5m' }
          ]}
          selected={currentInterval}
          onChange={setCurrentInterval}
        />
      </div>
    </div>
  );
}

const Dropdown = ({ options, selected, onChange, label }) => {
  return (
    <div className="mb-4 rounded-md">
      <label className="block text-lg font-medium mb-2">{label}</label>
      <select
        className="border p-2 rounded-sm w-full max-w-sm mx-auto"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CryptoSelector;
