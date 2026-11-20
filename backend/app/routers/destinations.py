
from fastapi import APIRouter, HTTPException, Query
from app.data.destinations import DESTINATIONS

router = APIRouter(
    prefix="/destinations",
    tags=["Destinations"]
)


@router.get("/")
def get_destinations(
    category: str | None = Query(default=None)
):
    if category:
        filtered = [
            destination
            for destination in DESTINATIONS
            if destination["category"].lower() == category.lower()
        ]
        return {
            "total": len(filtered),
            "destinations": filtered
        }

    return {
        "total": len(DESTINATIONS),
        "destinations": DESTINATIONS
    }


@router.get("/{destination_id}")
def get_destination(destination_id: int):
    for destination in DESTINATIONS:
        if destination["id"] == destination_id:
            return destination

    raise HTTPException(
        status_code=404,
        detail="Destination not found"
    )
