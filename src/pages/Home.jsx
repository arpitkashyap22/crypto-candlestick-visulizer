import React, { useEffect, useRef, useState } from 'react';
import CryptoSelector from '../components/CryptoSelector';
import ChartComponent from '../components/ChartComponent';
import { connectWebSocket } from '../services/WebSocketService';

const coins = [
  { label: 'ETH/USDT', value: 'ethusdt' },
  { label: 'BNB/USDT', value: 'bnbusdt' },
  { label: 'DOT/USDT', value: 'dotusdt' }
];

const intervals = [
  { label: '1 Minute', value: '1m' },
  { label: '3 Minutes', value: '3m' },
  { label: '5 Minutes', value: '5m' }
];

const Home = () => {
  const [selectedCoin, setSelectedCoin] = useState('ethusdt');
  const [selectedInterval, setSelectedInterval] = useState('1m');
  const [chartData, setChartData] = useState({});
  const ws = useRef(null);

  // Load historical data from localStorage
  const loadSavedData = (coin, interval) => {
    const savedData = localStorage.getItem(`${coin}_${interval}`);
    if (savedData) {
      setChartData((prev) => ({
        ...prev,
        [coin]: JSON.parse(savedData)
      }));
    }
  };

  // Establish WebSocket connection and load initial data
  useEffect(() => {
    loadSavedData(selectedCoin, selectedInterval);

    ws.current = connectWebSocket(selectedCoin, selectedInterval, (newCandle) => {
      setChartData((prev) => {
        const updatedData = [...(prev[selectedCoin] || []), newCandle].slice(-500);  // Keep last 500 candles
        localStorage.setItem(`${selectedCoin}_${selectedInterval}`, JSON.stringify(updatedData));  // Save to localStorage
        return { ...prev, [selectedCoin]: updatedData };
      });
    });

    return () => {
      if (ws.current) ws.current.close();  // Close WebSocket when component unmounts or coin/interval changes
    };
  }, [selectedCoin, selectedInterval]);

  return (
    <div>
      <CryptoSelector 
  coins={coins} 
  selectedCoin={selectedCoin} 
  setSelectedCoin={setSelectedCoin} 
  intervals={intervals} 
  selectedInterval={selectedInterval} 
  setSelectedInterval={setSelectedInterval} 
/>

      <div>
        <ChartComponent data={chartData[selectedCoin] || []} />
      </div>
    </div>
  );
};

export default Home;
