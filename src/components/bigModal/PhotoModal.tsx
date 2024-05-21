"use client";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image,
  ModalFooter,
} from "@nextui-org/react";

import { FormatDate } from "@/utils/FormatDate";
import { IPhoto } from "@/utils/DataType";

import ImageComponent from "../ServerImage";

interface IOpen {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onOpen: () => void;
  data: IPhoto;
}

const PhotoModal = ({ isOpen, onOpenChange, data, onOpen }: IOpen) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
      <ModalContent>
        <ModalHeader>{FormatDate(data.date)}</ModalHeader>
        <ModalBody className="flex items-center justify-center">
          <ImageComponent src={data.image} width={500} alt="사진" />
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end mt-4">
            <Button
              color="danger"
              variant="light"
              onClick={() => onOpenChange(false)}
            >
              닫기
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhotoModal;
