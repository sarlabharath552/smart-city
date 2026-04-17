import { useEffect, useState } from "react";

const useWebSocket = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      setData(parsed);
    };

    socket.onerror = (err) => console.error(err);

    return () => socket.close();
  }, [url]);

  return data;
};

export default useWebSocket;