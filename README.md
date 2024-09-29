# Binance Market Data WebSocket Project

## Overview
This project implements a WebSocket connection to Binance for retrieving real-time market data of cryptocurrencies. It includes features for selecting different cryptocurrencies (such as ETH/USDT, BNB/USDT, DOT/USDT) and allows users to view candlestick charts at 1-minute, 3-minute, and 5-minute intervals.

## Features
- Real-time market data updates from Binance WebSocket.
- Candlestick chart visualization with customizable time intervals (1-minute, 3-minute, 5-minute).
- Cryptocurrency selection (ETH/USDT, BNB/USDT, DOT/USDT) with seamless switching and data persistence.
- Clean and responsive user interface for intuitive data visualization.

## Installation
1. Clone the repository:
   ```
   git clone [https://github.com/arpitkashyap22/crypto-candlestick-visulizer]
   cd BinanceMarket-Data-WebSocketImplementation
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:5173` to view the application.

3. Select a cryptocurrency and time interval to view real-time market data and candlestick charts, and wait for date to load into the local storage to see more number of candlesticks.

## Technologies Used
- Node.js
- WebSocket (Socket.IO)
- React.js
- Charting Library (e.g., Chart.js)
- Tailwind CSS
