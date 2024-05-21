"use client";
import React, { FormEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { format } from "date-fns";
import { postNote } from "../action";
import { useRouter } from "next/navigation";

interface IPost {
  postType: string;
}

const categoryData = [
  { label: "화면 공유", type: "class" },
  { label: "자격증/취업", type: "job" },
  { label: "필기 공유", type: "note" },
];
const PostModal = ({ postType }: IPost) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [category, setCategory] = useState(postType);
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const router = useRouter();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFile(e.target.files?.[0]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //console.log(category);
    const formData = new FormData(e.currentTarget);
    if (category !== "class") {
      formData.append("title", title);
      formData.append("writer", writer);
      formData.append("content", content);
    }
    formData.append("tag", category);
    if (file) formData.append("image", file);

    const response = await postNote(formData);
    router.push("/");
    alert(response);
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">
        글 작성하기
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {format(new Date(), "yyyy.MM.dd")}
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody className="flex flex-col gap-4 w-full">
                  <Select
                    label="카테고리 선택"
                    labelPlacement="outside"
                    isRequired
                    onChange={(e) => setCategory(e.target.value)}
                    size="lg"
                    selectedKeys={[category]}
                  >
                    {categoryData.map((cd) => (
                      <SelectItem key={cd.type} value={cd.type}>
                        {cd.label}
                      </SelectItem>
                    ))}
                  </Select>
                  {category !== "class" ? (
                    <>
                      <Textarea
                        label="제목"
                        labelPlacement="outside"
                        isRequired
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        size="lg"
                        fullWidth
                        minRows={1}
                      />
                      <Textarea
                        label="작성자"
                        labelPlacement="outside"
                        isRequired
                        value={writer}
                        onChange={(e) => setWriter(e.target.value)}
                        size="lg"
                        fullWidth
                        minRows={1}
                      />
                      <Textarea
                        label="본문"
                        labelPlacement="outside"
                        isRequired
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        size="lg"
                        fullWidth
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <p>이미지 추가</p>
                  <input type="file" onChange={handleFileChange} required />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    닫기
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    등록
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
