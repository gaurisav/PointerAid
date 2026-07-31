from pydantic import BaseModel, ConfigDict, Field


class SubjectBase(BaseModel):
    name: str = Field(min_length=1)
    credits: int = Field(default=3, ge=1, le=10)
    current: float = Field(default=0.0, ge=0, le=100)
    target: float = Field(default=0.0, ge=0, le=100)


class SubjectCreate(SubjectBase):
    pass


class SubjectUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1)
    credits: int | None = Field(default=None, ge=1, le=10)
    current: float | None = Field(default=None, ge=0, le=100)
    target: float | None = Field(default=None, ge=0, le=100)


class SubjectOut(SubjectBase):
    model_config = ConfigDict(from_attributes=True)

    id: int

