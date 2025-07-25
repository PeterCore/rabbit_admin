// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { CourseCreateCourseApiData, CourseCreateCourseApiResponse, CourseListCoursesData, CourseListCoursesResponse, CourseGetCourseApiData, CourseGetCourseApiResponse, CourseUpdateCourseApiData, CourseUpdateCourseApiResponse, CourseDeleteCourseApiData, CourseDeleteCourseApiResponse, ItemsReadItemsData, ItemsReadItemsResponse, ItemsCreateItemData, ItemsCreateItemResponse, ItemsReadItemData, ItemsReadItemResponse, ItemsUpdateItemData, ItemsUpdateItemResponse, ItemsDeleteItemData, ItemsDeleteItemResponse, LoginLoginAccessTokenData, LoginLoginAccessTokenResponse, LoginTestTokenResponse, LoginRecoverPasswordData, LoginRecoverPasswordResponse, LoginResetPasswordData, LoginResetPasswordResponse, LoginRecoverPasswordHtmlContentData, LoginRecoverPasswordHtmlContentResponse, PrivateCreateUserData, PrivateCreateUserResponse, RoleCreateRoleApiData, RoleCreateRoleApiResponse, RoleListRolesData, RoleListRolesResponse, RoleGetRoleApiData, RoleGetRoleApiResponse, RoleUpdateRoleApiData, RoleUpdateRoleApiResponse, RoleDeleteRoleApiData, RoleDeleteRoleApiResponse, ScheduleCreateScheduleApiData, ScheduleCreateScheduleApiResponse, ScheduleListSchedulesData, ScheduleListSchedulesResponse, ScheduleGetScheduleApiData, ScheduleGetScheduleApiResponse, ScheduleUpdateScheduleApiData, ScheduleUpdateScheduleApiResponse, ScheduleDeleteScheduleApiData, ScheduleDeleteScheduleApiResponse, StudentCreateStudentApiData, StudentCreateStudentApiResponse, StudentListStudentsData, StudentListStudentsResponse, StudentGetStudentApiData, StudentGetStudentApiResponse, StudentUpdateStudentApiData, StudentUpdateStudentApiResponse, StudentDeleteStudentApiData, StudentDeleteStudentApiResponse, StudentGetStudentCoursesApiData, StudentGetStudentCoursesApiResponse, SubjectCreateSubjectApiData, SubjectCreateSubjectApiResponse, SubjectListSubjectsData, SubjectListSubjectsResponse, SubjectGetSubjectApiData, SubjectGetSubjectApiResponse, SubjectUpdateSubjectApiData, SubjectUpdateSubjectApiResponse, SubjectDeleteSubjectApiData, SubjectDeleteSubjectApiResponse, TeacherCreateTeacherApiData, TeacherCreateTeacherApiResponse, TeacherListTeachersData, TeacherListTeachersResponse, TeacherGetTeacherApiData, TeacherGetTeacherApiResponse, TeacherUpdateTeacherApiData, TeacherUpdateTeacherApiResponse, TeacherDeleteTeacherApiData, TeacherDeleteTeacherApiResponse, UsersReadUsersData, UsersReadUsersResponse, UsersCreateUserData, UsersCreateUserResponse, UsersReadUserMeResponse, UsersDeleteUserMeResponse, UsersUpdateUserMeData, UsersUpdateUserMeResponse, UsersUpdatePasswordMeData, UsersUpdatePasswordMeResponse, UsersRegisterUserData, UsersRegisterUserResponse, UsersReadUserByIdData, UsersReadUserByIdResponse, UsersUpdateUserData, UsersUpdateUserResponse, UsersDeleteUserData, UsersDeleteUserResponse, UtilsTestEmailData, UtilsTestEmailResponse, UtilsHealthCheckResponse } from './types.gen';

export class CourseService {
    /**
     * Create Course Api
     * 创建新的课程安排
     * @param data The data for the request.
     * @param data.requestBody
     * @returns CourseWithDetails Successful Response
     * @throws ApiError
     */
    public static createCourseApi(data: CourseCreateCourseApiData): CancelablePromise<CourseCreateCourseApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/courses/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * List Courses
     * 获取课程安排列表
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns CourseWithDetails Successful Response
     * @throws ApiError
     */
    public static listCourses(data: CourseListCoursesData = {}): CancelablePromise<CourseListCoursesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/courses/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Course Api
     * 根据ID获取课程安排
     * @param data The data for the request.
     * @param data.courseId
     * @returns CourseWithDetails Successful Response
     * @throws ApiError
     */
    public static getCourseApi(data: CourseGetCourseApiData): CancelablePromise<CourseGetCourseApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/courses/{course_id}',
            path: {
                course_id: data.courseId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Course Api
     * 更新课程安排
     * @param data The data for the request.
     * @param data.courseId
     * @param data.requestBody
     * @returns CourseWithDetails Successful Response
     * @throws ApiError
     */
    public static updateCourseApi(data: CourseUpdateCourseApiData): CancelablePromise<CourseUpdateCourseApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/courses/{course_id}',
            path: {
                course_id: data.courseId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Course Api
     * 删除课程安排
     * @param data The data for the request.
     * @param data.courseId
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static deleteCourseApi(data: CourseDeleteCourseApiData): CancelablePromise<CourseDeleteCourseApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/courses/{course_id}',
            path: {
                course_id: data.courseId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class ItemsService {
    /**
     * Read Items
     * Retrieve items.
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns ItemsPublic Successful Response
     * @throws ApiError
     */
    public static readItems(data: ItemsReadItemsData = {}): CancelablePromise<ItemsReadItemsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/items/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Create Item
     * Create new item.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns ItemPublic Successful Response
     * @throws ApiError
     */
    public static createItem(data: ItemsCreateItemData): CancelablePromise<ItemsCreateItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/items/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Read Item
     * Get item by ID.
     * @param data The data for the request.
     * @param data.id
     * @returns ItemPublic Successful Response
     * @throws ApiError
     */
    public static readItem(data: ItemsReadItemData): CancelablePromise<ItemsReadItemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/items/{id}',
            path: {
                id: data.id
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Item
     * Update an item.
     * @param data The data for the request.
     * @param data.id
     * @param data.requestBody
     * @returns ItemPublic Successful Response
     * @throws ApiError
     */
    public static updateItem(data: ItemsUpdateItemData): CancelablePromise<ItemsUpdateItemResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/items/{id}',
            path: {
                id: data.id
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Item
     * Delete an item.
     * @param data The data for the request.
     * @param data.id
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static deleteItem(data: ItemsDeleteItemData): CancelablePromise<ItemsDeleteItemResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/items/{id}',
            path: {
                id: data.id
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class LoginService {
    /**
     * Login Access Token
     * OAuth2 compatible token login, get an access token for future requests
     * @param data The data for the request.
     * @param data.formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginAccessToken(data: LoginLoginAccessTokenData): CancelablePromise<LoginLoginAccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/login/access-token',
            formData: data.formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Test Token
     * Test access token
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static testToken(): CancelablePromise<LoginTestTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/login/test-token'
        });
    }
    
    /**
     * Recover Password
     * Password Recovery
     * @param data The data for the request.
     * @param data.email
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static recoverPassword(data: LoginRecoverPasswordData): CancelablePromise<LoginRecoverPasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/password-recovery/{email}',
            path: {
                email: data.email
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Reset Password
     * Reset password
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static resetPassword(data: LoginResetPasswordData): CancelablePromise<LoginResetPasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/reset-password/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Recover Password Html Content
     * HTML Content for Password Recovery
     * @param data The data for the request.
     * @param data.email
     * @returns string Successful Response
     * @throws ApiError
     */
    public static recoverPasswordHtmlContent(data: LoginRecoverPasswordHtmlContentData): CancelablePromise<LoginRecoverPasswordHtmlContentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/password-recovery-html-content/{email}',
            path: {
                email: data.email
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class PrivateService {
    /**
     * Create User
     * Create a new user.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static createUser(data: PrivateCreateUserData): CancelablePromise<PrivateCreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/private/users/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class RoleService {
    /**
     * Create Role Api
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Role Successful Response
     * @throws ApiError
     */
    public static createRoleApi(data: RoleCreateRoleApiData): CancelablePromise<RoleCreateRoleApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/roles/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * List Roles
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns Role Successful Response
     * @throws ApiError
     */
    public static listRoles(data: RoleListRolesData = {}): CancelablePromise<RoleListRolesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/roles/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Role Api
     * @param data The data for the request.
     * @param data.roleId
     * @returns Role Successful Response
     * @throws ApiError
     */
    public static getRoleApi(data: RoleGetRoleApiData): CancelablePromise<RoleGetRoleApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/roles/{role_id}',
            path: {
                role_id: data.roleId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Role Api
     * @param data The data for the request.
     * @param data.roleId
     * @param data.requestBody
     * @returns Role Successful Response
     * @throws ApiError
     */
    public static updateRoleApi(data: RoleUpdateRoleApiData): CancelablePromise<RoleUpdateRoleApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/roles/{role_id}',
            path: {
                role_id: data.roleId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Role Api
     * @param data The data for the request.
     * @param data.roleId
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static deleteRoleApi(data: RoleDeleteRoleApiData): CancelablePromise<RoleDeleteRoleApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/roles/{role_id}',
            path: {
                role_id: data.roleId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class ScheduleService {
    /**
     * Create Schedule Api
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Schedule Successful Response
     * @throws ApiError
     */
    public static createScheduleApi(data: ScheduleCreateScheduleApiData): CancelablePromise<ScheduleCreateScheduleApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schedules/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * List Schedules
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns ScheduleWithTeacher Successful Response
     * @throws ApiError
     */
    public static listSchedules(data: ScheduleListSchedulesData = {}): CancelablePromise<ScheduleListSchedulesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schedules/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Schedule Api
     * @param data The data for the request.
     * @param data.scheduleId
     * @returns Schedule Successful Response
     * @throws ApiError
     */
    public static getScheduleApi(data: ScheduleGetScheduleApiData): CancelablePromise<ScheduleGetScheduleApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schedules/{schedule_id}',
            path: {
                schedule_id: data.scheduleId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Schedule Api
     * @param data The data for the request.
     * @param data.scheduleId
     * @param data.requestBody
     * @returns Schedule Successful Response
     * @throws ApiError
     */
    public static updateScheduleApi(data: ScheduleUpdateScheduleApiData): CancelablePromise<ScheduleUpdateScheduleApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/schedules/{schedule_id}',
            path: {
                schedule_id: data.scheduleId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Schedule Api
     * @param data The data for the request.
     * @param data.scheduleId
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static deleteScheduleApi(data: ScheduleDeleteScheduleApiData): CancelablePromise<ScheduleDeleteScheduleApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/schedules/{schedule_id}',
            path: {
                schedule_id: data.scheduleId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class StudentService {
    /**
     * Create Student Api
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Student Successful Response
     * @throws ApiError
     */
    public static createStudentApi(data: StudentCreateStudentApiData): CancelablePromise<StudentCreateStudentApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/students/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * List Students
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns Student Successful Response
     * @throws ApiError
     */
    public static listStudents(data: StudentListStudentsData = {}): CancelablePromise<StudentListStudentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/students/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Student Api
     * @param data The data for the request.
     * @param data.studentId
     * @returns Student Successful Response
     * @throws ApiError
     */
    public static getStudentApi(data: StudentGetStudentApiData): CancelablePromise<StudentGetStudentApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/students/{student_id}',
            path: {
                student_id: data.studentId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Student Api
     * @param data The data for the request.
     * @param data.studentId
     * @param data.requestBody
     * @returns Student Successful Response
     * @throws ApiError
     */
    public static updateStudentApi(data: StudentUpdateStudentApiData): CancelablePromise<StudentUpdateStudentApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/students/{student_id}',
            path: {
                student_id: data.studentId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Student Api
     * @param data The data for the request.
     * @param data.studentId
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static deleteStudentApi(data: StudentDeleteStudentApiData): CancelablePromise<StudentDeleteStudentApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/students/{student_id}',
            path: {
                student_id: data.studentId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Student Courses Api
     * 获取学生参加的课程列表，支持按课程状态筛选
     *
     * - **student_id**: 学生ID
     * - **status**: 课程状态筛选（可选）：not_started, in_progress, completed, cancelled
     * - **skip**: 跳过的记录数（分页用）
     * - **limit**: 返回的最大记录数（分页用）
     * @param data The data for the request.
     * @param data.studentId
     * @param data.status
     * @param data.skip
     * @param data.limit
     * @returns CourseWithDetails Successful Response
     * @throws ApiError
     */
    public static getStudentCoursesApi(data: StudentGetStudentCoursesApiData): CancelablePromise<StudentGetStudentCoursesApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/students/{student_id}/courses/',
            path: {
                student_id: data.studentId
            },
            query: {
                status: data.status,
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class SubjectService {
    /**
     * Create Subject Api
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Subject Successful Response
     * @throws ApiError
     */
    public static createSubjectApi(data: SubjectCreateSubjectApiData): CancelablePromise<SubjectCreateSubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/subjects/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * List Subjects
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns Subject Successful Response
     * @throws ApiError
     */
    public static listSubjects(data: SubjectListSubjectsData = {}): CancelablePromise<SubjectListSubjectsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/subjects/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Subject Api
     * @param data The data for the request.
     * @param data.subjectId
     * @returns Subject Successful Response
     * @throws ApiError
     */
    public static getSubjectApi(data: SubjectGetSubjectApiData): CancelablePromise<SubjectGetSubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/subjects/{subject_id}',
            path: {
                subject_id: data.subjectId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Subject Api
     * @param data The data for the request.
     * @param data.subjectId
     * @param data.requestBody
     * @returns Subject Successful Response
     * @throws ApiError
     */
    public static updateSubjectApi(data: SubjectUpdateSubjectApiData): CancelablePromise<SubjectUpdateSubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/subjects/{subject_id}',
            path: {
                subject_id: data.subjectId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Subject Api
     * @param data The data for the request.
     * @param data.subjectId
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static deleteSubjectApi(data: SubjectDeleteSubjectApiData): CancelablePromise<SubjectDeleteSubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/subjects/{subject_id}',
            path: {
                subject_id: data.subjectId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class TeacherService {
    /**
     * Create Teacher Api
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Teacher Successful Response
     * @throws ApiError
     */
    public static createTeacherApi(data: TeacherCreateTeacherApiData): CancelablePromise<TeacherCreateTeacherApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/teachers/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * List Teachers
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns TeacherWithSubject Successful Response
     * @throws ApiError
     */
    public static listTeachers(data: TeacherListTeachersData = {}): CancelablePromise<TeacherListTeachersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teachers/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Get Teacher Api
     * @param data The data for the request.
     * @param data.teacherId
     * @returns Teacher Successful Response
     * @throws ApiError
     */
    public static getTeacherApi(data: TeacherGetTeacherApiData): CancelablePromise<TeacherGetTeacherApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teachers/{teacher_id}',
            path: {
                teacher_id: data.teacherId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Teacher Api
     * @param data The data for the request.
     * @param data.teacherId
     * @param data.requestBody
     * @returns Teacher Successful Response
     * @throws ApiError
     */
    public static updateTeacherApi(data: TeacherUpdateTeacherApiData): CancelablePromise<TeacherUpdateTeacherApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/teachers/{teacher_id}',
            path: {
                teacher_id: data.teacherId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete Teacher Api
     * @param data The data for the request.
     * @param data.teacherId
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static deleteTeacherApi(data: TeacherDeleteTeacherApiData): CancelablePromise<TeacherDeleteTeacherApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/teachers/{teacher_id}',
            path: {
                teacher_id: data.teacherId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class UsersService {
    /**
     * Read Users
     * Retrieve users.
     * @param data The data for the request.
     * @param data.skip
     * @param data.limit
     * @returns UsersPublic Successful Response
     * @throws ApiError
     */
    public static readUsers(data: UsersReadUsersData = {}): CancelablePromise<UsersReadUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/',
            query: {
                skip: data.skip,
                limit: data.limit
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Create User
     * Create new user.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static createUser(data: UsersCreateUserData): CancelablePromise<UsersCreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users/',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Read User Me
     * Get current user.
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static readUserMe(): CancelablePromise<UsersReadUserMeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/me'
        });
    }
    
    /**
     * Delete User Me
     * Delete own user.
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static deleteUserMe(): CancelablePromise<UsersDeleteUserMeResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/users/me'
        });
    }
    
    /**
     * Update User Me
     * Update own user.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static updateUserMe(data: UsersUpdateUserMeData): CancelablePromise<UsersUpdateUserMeResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/me',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update Password Me
     * Update own password.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static updatePasswordMe(data: UsersUpdatePasswordMeData): CancelablePromise<UsersUpdatePasswordMeResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/me/password',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Register User
     * Create new user without the need to be logged in.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static registerUser(data: UsersRegisterUserData): CancelablePromise<UsersRegisterUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users/signup',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Read User By Id
     * Get a specific user by id.
     * @param data The data for the request.
     * @param data.userId
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static readUserById(data: UsersReadUserByIdData): CancelablePromise<UsersReadUserByIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{user_id}',
            path: {
                user_id: data.userId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Update User
     * Update a user.
     * @param data The data for the request.
     * @param data.userId
     * @param data.requestBody
     * @returns UserPublic Successful Response
     * @throws ApiError
     */
    public static updateUser(data: UsersUpdateUserData): CancelablePromise<UsersUpdateUserResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/{user_id}',
            path: {
                user_id: data.userId
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Delete User
     * Delete a user.
     * @param data The data for the request.
     * @param data.userId
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static deleteUser(data: UsersDeleteUserData): CancelablePromise<UsersDeleteUserResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/users/{user_id}',
            path: {
                user_id: data.userId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
}

export class UtilsService {
    /**
     * Test Email
     * Test emails.
     * @param data The data for the request.
     * @param data.emailTo
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static testEmail(data: UtilsTestEmailData): CancelablePromise<UtilsTestEmailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/utils/test-email/',
            query: {
                email_to: data.emailTo
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
    
    /**
     * Health Check
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static healthCheck(): CancelablePromise<UtilsHealthCheckResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/utils/health-check/'
        });
    }
    
}