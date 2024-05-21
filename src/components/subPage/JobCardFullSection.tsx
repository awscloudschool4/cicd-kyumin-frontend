import React, { useState } from "react";
import { getJobList } from "../action";
import useSWR from "swr";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  useDisclosure,
} from "@nextui-org/react";
import { FormatDate } from "@/utils/FormatDate";
import { IJob } from "@/utils/DataType";
import JobModal from "../bigModal/JobModal";
import ImageComponent from "../ServerImage";

const JobCardFullSection = () => {
  const [selectedJob, setSelectedJob] = useState<IJob | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: jobList, error, isLoading } = useSWR("getJobList", getJobList);
  if (isLoading) return <p>이미지를 가져오는 중입니다! 잠시만 기다려주세요</p>;
  if (error) return <p>서버와의 연결을 실패했습니다.</p>;

  const handleCardClick = (job: IJob) => {
    setSelectedJob(job);
    onOpen();
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {jobList.map((job: IJob) => (
          <Card
            key={job.index}
            className="p-4 border-3 border-blue-400 hover:shadow-xl hover:border-purple-500"
            shadow="none"
            isPressable
            onPress={() => handleCardClick(job)}
          >
            <CardHeader>
              <p className=" font-bold">{job.title}</p>
            </CardHeader>
            <CardBody>
              <ImageComponent
                src={job.image}
                width={500}
                height={250}
                alt="사진"
              />
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-col gap-2">
              <p>{job.writer}</p>
              <p>{FormatDate(job.date)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedJob && (
        <JobModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          data={selectedJob}
        />
      )}
    </div>
  );
};

export default JobCardFullSection;
