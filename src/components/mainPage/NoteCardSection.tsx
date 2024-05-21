import React, { useState } from "react";
import { getNoteList } from "../action";
import useSWR from "swr";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  useDisclosure,
} from "@nextui-org/react";

import NoteModal from "../bigModal/NoteModal";
import { INote } from "@/utils/DataType";
import { FormatDate } from "@/utils/FormatDate";
import ImageComponent from "../ServerImage";

const NoteCardSection = () => {
  const [selectedNote, setSelectedNote] = useState<INote | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    data: noteList,
    error,
    isLoading,
  } = useSWR("getNoteList", getNoteList);
  if (isLoading) return <p>이미지를 가져오는 중입니다! 잠시만 기다려주세요</p>;
  if (error) return <p>서버와의 연결을 실패했습니다.</p>;

  const handleCardClick = (note: INote) => {
    setSelectedNote(note);
    onOpen();
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {noteList.slice(0, 3).map((note: INote) => (
          <Card
            key={note.index}
            className="p-4 border-3 border-blue-400 hover:shadow-xl hover:border-purple-500"
            shadow="none"
            isPressable
            onPress={() => handleCardClick(note)}
          >
            <CardHeader>
              <p className=" font-bold">{note.title}</p>
            </CardHeader>
            <CardBody>
              <ImageComponent
                src={note.image}
                width={500}
                height={250}
                alt="사진"
              />
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-col gap-2">
              <p>{note.writer}</p>
              <p>{FormatDate(note.date)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedNote && (
        <NoteModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          data={selectedNote}
        />
      )}
    </div>
  );
};

export default NoteCardSection;
