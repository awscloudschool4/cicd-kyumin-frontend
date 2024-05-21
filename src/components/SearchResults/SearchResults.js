import React from 'react';
import PostItem from '../PostItem/PostItem';
import { useRouter } from "next/navigation";  // 수정: next/navigation 에서 next/router로 변경

const SearchResults = ({ results }) => {
    const router = useRouter();

    const handlePostClick = (item) => {
        let path = "";
        switch(item.tag) {
            case "job":
                path = `../job/${item.index}`;  // 'job' 태그에 대한 라우트
                break;
            case "note":
                path = `../note/${item.index}`;  // 'note' 태그에 대한 라우트
                break;
        }
        router.push(path);
    };

    return (
        <div>
            {results.map(item => (
                <PostItem
                    key={item.index}
                    index={item.index}
                    title={item.title}
                    writer={item.writer}
                    date={item.date}
                    content={item.content}
                    image={item.image}
                    onClick={() => handlePostClick(item)}
                />
            ))}
        </div>
    );
};

export default SearchResults;
