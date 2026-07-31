from sqlalchemy import Column, Float, Integer

from database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    current_cgpa = Column(Float, default=0.0)
    target_cgpa = Column(Float, default=10.0)
    completed_credits = Column(Integer, default=0)
    semester_credits = Column(Integer, default=0)

