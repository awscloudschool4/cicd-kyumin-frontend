"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import PostItem from "../../../components/PostItem/PostFullItem";

function NoteDetail() {
  const [post, setPosts] = useState([]);
  const path = usePathname();

  useEffect(() => {
    const pathSegments = path.split('/'); 
    const index = pathSegments[pathSegments.length - 1];
    const apiURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/note/api/${index}`;
    console.log(`Fetching data from: ${apiURL}`);
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto px-4">
        <div className="m-4">
          <div className="bg-white p-5 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            {/* Title with more emphasis */}
            <h1 className="text-2xl font-bold text-teal-600 mb-2">
              {post.title}
            </h1>

            <div className="flex justify-between items-center mb-5">
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm font-semibold text-gray-500">
                {post.writer}
              </p>
            </div>

            <p className="mb-6 text-gray-700 text-lg">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Job Detail"
                className="w-full h-auto rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NoteDetail;
