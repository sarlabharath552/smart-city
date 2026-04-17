from fastapi import FastAPI, WebSocket
from app.api import weather, pollution
from app.websocket.manager import ConnectionManager
from app.api import weather, pollution, predict


app = FastAPI()

manager = ConnectionManager()

# include APIs
app.include_router(weather.router)
app.include_router(pollution.router)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, lat: float, lon: float):
    await manager.connect(websocket)
    await manager.send_data(websocket, lat, lon)

@app.get("/")
def home():
    return {"message": "Smart City Backend Running 🚀"}


app.include_router(predict.router, prefix="/api")
