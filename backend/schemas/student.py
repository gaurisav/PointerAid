from pydantic import BaseModel, ConfigDict, Field


class StudentBase(BaseModel):
    current_cgpa: float = Field(default=0.0, ge=0, le=10)
    target_cgpa: float = Field(default=10.0, ge=0, le=10)
    completed_credits: int = Field(default=0, ge=0)
    semester_credits: int = Field(default=0, ge=0)


class StudentUpdate(StudentBase):
    pass


class StudentOut(StudentBase):
    model_config = ConfigDict(from_attributes=True)

    id: int

