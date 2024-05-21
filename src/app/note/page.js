"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Title from "../../components/Title/Title";
import PostItem from "../../components/PostItem/PostItem";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import { useRouter } from "next/navigation"; // Corrected import statement


function NotePage() {
  const [notes, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/note/api`)
      .then((response) => response.json())
      .then(setJobs)
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Adjusted to use index for routing
  const handlePostClick = (index) => {
    router.push(`/note/${index}`);
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto px-4">
        <div className="m-4">
    
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
              onClick={() => handlePostClick(note.index)} // Modified to pass index
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotePage;
