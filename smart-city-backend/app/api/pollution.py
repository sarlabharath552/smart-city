from fastapi import APIRouter
from app.services.fetch_service import get_pollution

router = APIRouter()

@router.get("/pollution")
def pollution(lat: float, lon: float):
    return get_pollution(lat, lon)