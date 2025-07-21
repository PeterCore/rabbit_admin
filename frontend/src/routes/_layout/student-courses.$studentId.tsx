import React from "react";
import {
  Box,
  Container,
  Text,
  Table,
  Heading,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StudentService } from "../../client";
import { FaArrowLeft } from "react-icons/fa";

export const Route = createFileRoute("/_layout/student-courses/$studentId")({
  component: StudentCoursesPage,
});

function StudentCoursesPage() {
  const { studentId } = Route.useParams();
  const navigate = useNavigate();

  // 获取学生信息
  const { data: student } = useQuery({
    queryKey: ["student", studentId],
    queryFn: () => StudentService.getStudentApi({ studentId }),
  });

  // 获取学生课程列表
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["student-courses", studentId],
    queryFn: () => StudentService.getStudentCoursesApi({ studentId }),
  });

  const handleBack = () => {
    navigate({ to: "/" });
  };

  // 状态映射
  const getStatusBadge = (status: string) => {
    const statusMap = {
      not_started: { color: "gray", text: "未开始" },
      in_progress: { color: "blue", text: "进行中" },
      completed: { color: "green", text: "完成" },
      cancelled: { color: "red", text: "取消" },
    };
    const statusInfo = statusMap[status as keyof typeof statusMap] || {
      color: "gray",
      text: "未知",
    };
    return <Badge colorScheme={statusInfo.color}>{statusInfo.text}</Badge>;
  };

  // 格式化时间
  const formatDateTime = (dateTimeStr: string) => {
    const date = new Date(dateTimeStr);
    return date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Container maxW="full">
      <Flex align="center" pt={12} pb={6} gap={4}>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          leftIcon={<FaArrowLeft />}
        >
          返回
        </Button>
        <Heading size="lg">{student?.name || "学生"} 的课程</Heading>
      </Flex>

      {isLoading ? (
        <Text>加载中...</Text>
      ) : (
        <>
          <Table.Root size={{ base: "sm", md: "md" }}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>老师/学科</Table.ColumnHeader>
                <Table.ColumnHeader>开始时间</Table.ColumnHeader>
                <Table.ColumnHeader>结束时间</Table.ColumnHeader>
                <Table.ColumnHeader>上课地址</Table.ColumnHeader>
                <Table.ColumnHeader>课程状态</Table.ColumnHeader>
                <Table.ColumnHeader>备注</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {courses.map((course) => (
                <Table.Row key={course.id}>
                  <Table.Cell>
                    {course.teacher_name} - {course.subject_name}
                  </Table.Cell>
                  <Table.Cell>{formatDateTime(course.start_time)}</Table.Cell>
                  <Table.Cell>{formatDateTime(course.end_time)}</Table.Cell>
                  <Table.Cell>{course.address}</Table.Cell>
                  <Table.Cell>{getStatusBadge(course.status)}</Table.Cell>
                  <Table.Cell>{course.remark || "-"}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

          {courses.length === 0 && (
            <Box textAlign="center" color="gray.500" py={8}>
              该学生暂无参加的课程
            </Box>
          )}
        </>
      )}
    </Container>
  );
}
