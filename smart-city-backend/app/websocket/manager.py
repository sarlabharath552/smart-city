from fastapi import WebSocket
import asyncio
from app.services.fetch_service import get_weather, get_pollution
from app.services.prediction_service import predict_aqi

aqi_history = []

class ConnectionManager:
    async def connect(self, websocket: WebSocket):
        await websocket.accept()

    async def send_data(self, websocket: WebSocket, lat, lon):
        global aqi_history

        while True:
            weather = get_weather(lat, lon)
            pollution = get_pollution(lat, lon)

            aqi = pollution["list"][0]["main"]["aqi"]
            aqi_history.append(aqi)

            if len(aqi_history) > 20:
                aqi_history.pop(0)

            predictions = predict_aqi(aqi_history)

            await websocket.send_json({
                "weather": weather,
                "pollution": pollution,
                "predictions": predictions
            })

            await asyncio.sleep(5)