from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from routers import students, subjects

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="PointerAid API",
    description="Backend API for the PointerAid CGPA forecasting application.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(students.router, prefix="/api/students", tags=["students"])
app.include_router(subjects.router, prefix="/api/subjects", tags=["subjects"])


@app.get("/")
def root():
    return {"message": "PointerAid API is running", "docs": "/docs"}

