from fastapi import APIRouter
from app.auth.auth import create_token

router = APIRouter()

@router.post("/login")
def login():
    return {"token": create_token({"user": "admin"})}