"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Title from "../../components/Title/Title";
import PostItem from "../../components/PostItem/PostItem";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/navigation"; // Corrected import statement

function JobPage() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/job/api`;
    console.log("API URL:", apiUrl); // 로그를 찍어서 실제 URL 확인
    fetch(apiUrl) // Ensure this URL is correct for your setup
      .then((response) => response.json())
      .then(setJobs)
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePostClick = (index) => {
    // Assuming `id` is unique and correctly identifies each job
    router.push(`job/${index}`);
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto px-4">
        <div className="m-4">
          <div className="flex justify-between items-center">
            <Title text="취업 / 자격증" />
            <Link href="/job/upload">
              {" "}
              <button className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
                글쓰기
              </button>
            </Link>
          </div>
          {jobs.map((job) => (
            <PostItem
              key={job.index}
              index={job.index}
              title={job.title}
              writer={job.writer}
              date={job.date}
              content={job.content}
              image={job.image}
              onClick={() => handlePostClick(job.index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobPage;
