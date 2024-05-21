"use client";
import React, { useState } from "react";
import Title from "@/components/Title";
import { Card, Button, Link } from "@nextui-org/react";
import { today } from "@internationalized/date";
import { FiArrowRight } from "react-icons/fi";
import JobCardSection from "@/components/mainPage/JobCardSection";
import PhotoCardSection from "@/components/mainPage/PhotoCardSection";
import NoteCardSection from "@/components/mainPage/NoteCardSection";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(today("Asia/Seoul"));
  return (
    <div className=" max-w-screen-lg flex flex-col gap-3 mb-10">
      <Card
        className="px-20 py-10 mt-4 mx-10 gap-4 items- justify-center"
        shadow="sm"
      >
        <div className="flex flex-row justify-between items-center">
          <Title text="사진 공유" />
          <Link href="/class">
            <Button color="primary">
              <FiArrowRight /> <p>이동하기</p>
            </Button>
          </Link>
        </div>
        <PhotoCardSection />
      </Card>
      <Card className="px-20 py-10 mt-4 mx-10" shadow="sm">
        <div className="flex flex-row justify-between items-center">
          <Title text="취업/자격증 정보 공유" />
          <Link href="/job">
            <Button color="primary">
              <FiArrowRight /> <p>이동하기</p>
            </Button>
          </Link>
        </div>
        <JobCardSection />
      </Card>
      <Card className="px-20 py-10 mt-4 mx-10" shadow="sm">
        <div className="flex flex-row justify-between items-center">
          <Title text="수업 노트 공유" />

          <Link href="/note">
            <Button color="primary">
              <FiArrowRight /> <p>이동하기</p>
            </Button>
          </Link>
        </div>
        <NoteCardSection />
      </Card>
    </div>
  );
}
