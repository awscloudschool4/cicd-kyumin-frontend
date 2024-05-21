"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Title from "../components/Title/Title";
import PostItem from "../components/PostItem/PostItem"
import ClassPostItem from "../components/ClassPostItem/ClassPostItem";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

function ClassPage() {
  const [classPosts, setClassPosts] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  //사진 api 호출  
  const fetchPhotosByDate = (date) => {
    const formattedDate = date.replaceAll("/", "-");
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/photo/api/${formattedDate}`)
      .then((response) => response.json())
      .then((data) => {
        setClassPosts(
          data.map((item) => ({
            ...item,
            images: [item["이미지"]],
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/photo/api`)
      .then((response) => response.json())
      .then((data) => {
        setClassPosts(
          data.slice(0, 3).map((item) => ({
            ...item,
            images: [item["이미지"]],
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchPhotosByDate(selectedDate);
    }
  }, [selectedDate]);
  //자격증/취업 api 호출
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/job/api`;
    console.log("API URL:", apiUrl); // 로그를 찍어서 실제 URL 확인
    fetch(apiUrl) // Ensure this URL is correct for your setup
      .then((response) => response.json())
      .then((data) => {
        const firstThreeJobs = data.slice(0, 3); // 데이터에서 최초 3개만 추출
        setJobs(firstThreeJobs);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePostClick = (index) => {
    // Assuming `id` is unique and correctly identifies each job
    router.push(`job/${index}`);
  };
  //note api 호출
  const [notes, setNotes] = useState([]);
  const router1 = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/note/api`)
      .then((response) => response.json())
      .then((data) => {
        const firstThreeNotes = data.slice(0, 3); // 데이터에서 최초 3개만 추출
        setNotes(firstThreeNotes);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Adjusted to use index for routing
  const handleNoteClick = (index) => {
    router1.push(`/note/${index}`);
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto px-4">
        <div className="m-4">
          <div className="flex justify-between items-center mb-4">
            <Title text="화면 공유" />
            <div>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {classPosts.map((post) => (
              <ClassPostItem
                key={post.id}
                date={post.date}
                images={post.images}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/class">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <FiArrowRight className="mr-2" /> 이동하기
              </button >
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Title text="취업 / 자격증" />
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
          <div className="flex justify-end">
            <Link href="/job">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <FiArrowRight className="mr-2" /> 이동하기
              </button >
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Title text="필기 공유" />
          </div>
          {notes.map((note) => (
            <PostItem
              key={note.id}
              index={note.index} // Passed index as a prop
              title={note.title}
              writer={note.writer}
              date={note.date}
              content={note.content}
              image={note.image}
              onClick={() => handleNoteClick(note.index)} // Modified to pass index
            />
          ))}
          <div className="flex justify-end">
            <Link href="/note">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <FiArrowRight className="mr-2" /> 이동하기
              </button >
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClassPage;
