from fastapi import APIRouter

router = APIRouter()

@router.post("/predict")
def predict():
    return {
        "traffic_prediction": "Moderate",
        "pollution_prediction": "High"
    }