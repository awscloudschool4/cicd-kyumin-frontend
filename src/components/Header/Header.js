import React from "react";
import { useRouter } from "next/navigation";  // useRouter 훅을 import

function Header() {
  const router = useRouter();  // useRouter 훅 사용

  // 클릭 이벤트 핸들러 정의
  const handleClick = () => {
    router.push('/');  // 홈페이지로 리디렉션
  };

  return (
    <div
      onClick={handleClick}  // div 요소에 클릭 이벤트 핸들러 추가
      className="
        text-center
        py-10 px-5
        w-full
        bg-gradient-to-l from-purple-300 to-pink-200
        rounded-lg
        shadow-2xl
        cursor-pointer  // 마우스 오버 시 포인터 모양 변경
      "
    >
      <h1
        className="
          text-6xl
          font-extrabold
          text-white
        "
      >
        AWESOME WIKI
      </h1>
    </div>
  );
}

export default Header;
