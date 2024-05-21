// components/PostItem.js
import React from "react";

function PostItem({ index, title, writer, date, content, image, onClick }) {
  const truncateContent = (text, maxLength = 50) => {
    // 글자 수 제한 변경
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div
      onClick={() => onClick(index)}
      className="cursor-pointer p-3 shadow-md border rounded-lg overflow-hidden bg-white my-2 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
      // 위의 className에 padding을 조정하고, 그림자를 줄였습니다.
    >
      <div className="flex justify-between items-center mb-2">
        {" "}
        {/* 여백 조정 */}
        <h2 className="text-lg font-semibold">{title}</h2>{" "}
        {/* 글자 크기와 두께 조정 */}
        <div className="flex items-center">
          <p className="font-medium mr-2 text-sm">{writer}</p>{" "}
          {/* 폰트 굵기와 여백 조정 */}
          <p className="text-sm">{date}</p>
        </div>
      </div>
      {image && (
        <img
          src={image}
          alt="Post image"
          className="w-full h-auto mb-2 max-h-36 object-cover"
          // 이미지의 여백을 줄이고, 최대 높이를 조정했습니다.
        />
      )}
      <p className="text-sm">{truncateContent(content)}</p>{" "}
      {/* 글자 크기 조정 */}
    </div>
  );
}

export default PostItem;
