export const connectWebSocket = (symbol, interval, onMessage, onError, onClose) => {
    const socketUrl = `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`;
  
    let ws = new WebSocket(socketUrl);
  
    ws.onopen = () => {
      console.log(`Connected to WebSocket for ${symbol}@${interval}`);
    };
  
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      const candleStick = message.k;  // Candlestick data
      onMessage(candleStick);
    };
  
    ws.onerror = (error) => {
      console.error(`WebSocket error for ${symbol}@${interval}:`, error);
      if (onError) onError(error);
    };
  
    ws.onclose = (event) => {
      console.log(`WebSocket closed for ${symbol}@${interval}`, event);
      if (onClose) onClose(event);
      setTimeout(() => {
        ws = connectWebSocket(symbol, interval, onMessage, onError, onClose);  // Reconnect logic
      }, 5000);  // Reconnect after 5 seconds
    };
  
    return ws;
  };
  