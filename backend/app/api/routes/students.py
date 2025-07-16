from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session
from typing import List
import uuid

from app.core.db import engine
from app.models import Student, StudentCreate, StudentUpdate, CourseWithDetails
from app.crud import create_student, get_student, get_students, update_student, delete_student, get_student_courses

router = APIRouter()

def get_session():
    with Session(engine) as session:
        yield session

@router.post("/students/", response_model=Student, tags=["student"])
def create_student_api(student: StudentCreate, session: Session = Depends(get_session)):
    return create_student(session, student)

@router.get("/students/", response_model=List[Student], tags=["student"])
def list_students(skip: int = 0, limit: int = 100, session: Session = Depends(get_session)):
    return get_students(session, skip=skip, limit=limit)

@router.get("/students/{student_id}", response_model=Student, tags=["student"])
def get_student_api(student_id: uuid.UUID, session: Session = Depends(get_session)):
    student = get_student(session, student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

@router.put("/students/{student_id}", response_model=Student, tags=["student"])
def update_student_api(student_id: uuid.UUID, student_in: StudentUpdate, session: Session = Depends(get_session)):
    student = update_student(session, student_id, student_in)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

@router.delete("/students/{student_id}", response_model=bool, tags=["student"])
def delete_student_api(student_id: uuid.UUID, session: Session = Depends(get_session)):
    return delete_student(session, student_id)

@router.get("/students/{student_id}/courses/", response_model=List[CourseWithDetails], tags=["student"])
def get_student_courses_api(
    student_id: uuid.UUID,
    status: str | None = None,
    skip: int = 0,
    limit: int = 100,
    session: Session = Depends(get_session)
):
    """
    获取学生参加的课程列表，支持按课程状态筛选
    
    - **student_id**: 学生ID
    - **status**: 课程状态筛选（可选）：not_started, in_progress, completed, cancelled
    - **skip**: 跳过的记录数（分页用）
    - **limit**: 返回的最大记录数（分页用）
    """
    # 验证学生是否存在
    student = get_student(session, student_id)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="学生不存在"
        )
    
    # 获取学生课程列表
    courses = get_student_courses(session, student_id, status, skip, limit)
    return courses 