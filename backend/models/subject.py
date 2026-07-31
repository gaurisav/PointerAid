from sqlalchemy import Column, Float, Integer, String

from database import Base


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    credits = Column(Integer, default=3)
    current = Column(Float, default=0.0)
    target = Column(Float, default=0.0)

