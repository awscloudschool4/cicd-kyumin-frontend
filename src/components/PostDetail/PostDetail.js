import React from "react";

function PostDetail({ title, content, writer, uploadTime, boardType }) {
  return (
    <div className="p-6 border rounded-lg border-gray-300">
      <p className="text-xl font-bold mb-4">{boardType}</p>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="text-right">
          <p className="text-sm">작성자: {writer}</p>
          <p className="text-sm">업로드 시간: {uploadTime}</p>
        </div>
      </div>
      <hr className="mb-4" />

      <p className="text-lg">{content}</p>
    </div>
  );
}

export default PostDetail;
