"use client";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Divider,
} from "@nextui-org/react";

import { FormatDate } from "@/utils/FormatDate";
import ImageComponent from "../ServerImage";

interface SearchResult {
  index: number;
  reviews?: string[];
  tag: string;
  title: string;
  writer: string;
  content: string;
  date: string;
  image: string;
}

interface IOpen {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onOpen: () => void;
  data: SearchResult;
}

const SearchModal = ({ isOpen, onOpenChange, data, onOpen }: IOpen) => {
  //console.log(data);
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
      <ModalContent>
        <ModalHeader>{data.title}</ModalHeader>
        <ModalBody className="flex flex-col  gap-3">
          <div className="flex items-center justify-center">
            <ImageComponent src={data.image} width={500} alt="사진" />
          </div>
          <p>{data.content}</p>
          <Divider />
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-3">
              <p>
                <strong>작성자</strong> {data.writer}
              </p>
              <p>
                <strong>작성 날짜</strong> {FormatDate(data.date)}
              </p>
            </div>
            <Button
              color="danger"
              variant="light"
              onClick={() => onOpenChange(false)}
            >
              닫기
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
