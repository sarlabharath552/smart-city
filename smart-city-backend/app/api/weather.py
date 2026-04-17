from fastapi import APIRouter
from app.services.fetch_service import get_weather

router = APIRouter()

@router.get("/weather")
def weather(lat: float, lon: float):
    return get_weather(lat, lon)