from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models.student import Student
from schemas.student import StudentOut, StudentUpdate

router = APIRouter()


@router.get("/", response_model=StudentOut)
def get_student(db: Session = Depends(get_db)):
    student = db.query(Student).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student profile not found")
    return student


@router.put("/", response_model=StudentOut)
def update_student(payload: StudentUpdate, db: Session = Depends(get_db)):
    student = db.query(Student).first()
    if not student:
        student = Student(**payload.model_dump())
        db.add(student)
    else:
        for key, value in payload.model_dump().items():
            setattr(student, key, value)
    db.commit()
    db.refresh(student)
    return student

