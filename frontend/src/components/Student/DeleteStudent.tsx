import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StudentService } from "../../client";
import { Button, DialogTitle, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiTrash2 } from "react-icons/fi";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import useCustomToast from "../../hooks/useCustomToast";

export default function DeleteStudent({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { showSuccessToast, showErrorToast } = useCustomToast();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const deleteStudent = async (id: string) => {
    await StudentService.deleteStudentApi({ studentId: id });
  };

  const mutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      showSuccessToast("学生删除成功");
      setIsOpen(false);
    },
    onError: () => {
      showErrorToast("删除学生时发生错误");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });

  const onSubmit = async () => {
    mutation.mutate(id);
  };

  return (
    <DialogRoot
      size={{ base: "xs", md: "md" }}
      placement="center"
      role="alertdialog"
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" colorPalette="red">
          <FiTrash2 color="#dc2626" style={{ marginRight: 8 }} />
          <span style={{ color: "#dc2626", fontWeight: 600 }}>删除学生</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>删除学生</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Text mb={4}>确定要删除这个学生吗？此操作无法撤销。</Text>
          </DialogBody>
          <DialogFooter gap={2}>
            <DialogActionTrigger asChild>
              <Button
                variant="subtle"
                colorPalette="gray"
                disabled={isSubmitting}
              >
                取消
              </Button>
            </DialogActionTrigger>
            <Button
              variant="solid"
              colorPalette="red"
              type="submit"
              loading={isSubmitting}
            >
              删除
            </Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </form>
      </DialogContent>
    </DialogRoot>
  );
}
