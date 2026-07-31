"""Grade and CGPA calculation helpers for the backend."""


def marks_to_grade(marks: float) -> str:
    if marks >= 90:
        return "O"
    if marks >= 80:
        return "A+"
    if marks >= 70:
        return "A"
    if marks >= 60:
        return "B+"
    if marks >= 50:
        return "B"
    if marks >= 45:
        return "C"
    if marks >= 40:
        return "P"
    return "F"


def marks_to_grade_point(marks: float) -> int:
    if marks >= 90:
        return 10
    if marks >= 80:
        return 9
    if marks >= 70:
        return 8
    if marks >= 60:
        return 7
    if marks >= 50:
        return 6
    if marks >= 45:
        return 5
    if marks >= 40:
        return 4
    return 0


def calculate_sgpa(subjects: list) -> float | None:
    if not subjects:
        return None

    total_credits = sum(int(s.get("credits") or 0) for s in subjects)
    total_points = sum(
        marks_to_grade_point(float(s.get("current") or 0)) * int(s.get("credits") or 0)
        for s in subjects
    )

    if total_credits == 0:
        return None

    return round(total_points / total_credits, 2)


def calculate_required_sgpa(
    current_cgpa: float,
    target_cgpa: float,
    completed_credits: int,
    semester_credits: int,
) -> float | None:
    if semester_credits <= 0:
        return None

    total_credits = completed_credits + semester_credits
    required = (
        target_cgpa * total_credits - current_cgpa * completed_credits
    ) / semester_credits
    return round(required, 2)

