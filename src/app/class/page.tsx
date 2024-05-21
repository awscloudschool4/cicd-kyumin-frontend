"use client";
import React, { useState } from "react";
import PhotoCardFullSection from "@/components/subPage/PhotoCardFullSection";
import Title from "@/components/Title";
import { Card, Input } from "@nextui-org/react";
import PostModal from "@/components/postModal/PostModal";
import PhotoDateFullSection from "@/components/subPage/PhotoDateFullSection";

const page = () => {
  const [searchDate, setSearchDate] = useState("");

  return (
    <div className=" max-w-screen-lg flex flex-col gap-3 mb-10">
      <Card
        className="px-20 py-10 mt-4 mx-10 gap-4 items- justify-center"
        shadow="sm"
      >
        <div className="flex flex-row justify-between items-center">
          <Title text="사진 공유" />
          <div>
            <Input
              type="date"
              labelPlacement="outside-left"
              label="날짜별 보기"
              onChange={(e) => setSearchDate(e.target.value)}
            />
          </div>

          <PostModal postType="class" />
        </div>
        {searchDate === "" ? (
          <PhotoCardFullSection />
        ) : (
          <PhotoDateFullSection searchDate={searchDate} />
        )}
      </Card>
    </div>
  );
};

export default page;
