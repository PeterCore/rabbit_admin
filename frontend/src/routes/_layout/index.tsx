import {
  Box,
  Container,
  Text,
  Grid,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { StudentService } from "../../client";
import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();

  // 获取学生列表
  const { data: students = [], isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: () => StudentService.listStudents(),
  });

  const handleViewCourses = (studentId: string) => {
    navigate({ to: `/student-courses/${studentId}` });
  };

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl" truncate maxW="sm" mb={6}>
            Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
          </Text>
          <Text mb={8}>Welcome back, nice to see you again!</Text>

          {isLoading ? (
            <Text>加载中...</Text>
          ) : (
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              gap={6}
            >
              {students.map((student) => (
                <Box
                  key={student.id}
                  p={6}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="lg"
                  bg="white"
                  shadow="md"
                  _hover={{ shadow: "lg" }}
                >
                  <Box pb={2}>
                    <Heading size="md">{student.name}</Heading>
                  </Box>
                  <Box pt={0}>
                    <Flex direction="column" gap={3}>
                      <Text fontSize="sm" color="gray.600">
                        参加的课程
                      </Text>
                      <Button
                        size="sm"
                        colorScheme="blue"
                        variant="outline"
                        onClick={() => handleViewCourses(student.id || "")}
                      >
                        详情
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Grid>
          )}

          {!isLoading && students.length === 0 && (
            <Text textAlign="center" color="gray.500" py={8}>
              暂无学生数据
            </Text>
          )}
        </Box>
      </Container>
    </>
  );
}
