"use client";
import React from "react";
import JobCardFullSection from "@/components/subPage/JobCardFullSection";
import Title from "@/components/Title";
import { Card, Button } from "@nextui-org/react";
import PostModal from "@/components/postModal/PostModal";

const page = () => {
  return (
    <div className=" max-w-screen-lg flex flex-col gap-3 mb-10">
      <Card
        className="px-20 py-10 mt-4 mx-10 gap-4 items- justify-center"
        shadow="sm"
      >
        <div className="flex flex-row justify-between items-center">
          <Title text="자격증/취업" />

          <PostModal postType="job" />
        </div>
        <JobCardFullSection />
      </Card>
    </div>
  );
};

export default page;
