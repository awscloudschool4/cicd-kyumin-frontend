"use server";

const API_URL = process.env.API_URL;
export async function getPhotoList() {
  const res = await fetch(`${API_URL}/photo/api/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const photoList = await res.json();
  //console.log(photoList);
  return photoList.reverse();
}

export async function getJobList() {
  const res = await fetch(`${API_URL}/job/api/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jobList = await res.json();
  //console.log(jobList);
  return jobList.reverse();
}

export async function getNoteList() {
  const res = await fetch(`${API_URL}/note/api/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const noteList = await res.json();
  // console.log(noteList);
  return noteList.reverse();
}

export async function postNote(formData: FormData) {
  const category = formData.get("tag");
  let endpoint;

  switch (category) {
    case "class":
      endpoint = "/photo/api/";
      break;
    case "note":
      endpoint = "/note/api/";
      break;
    case "job":
      endpoint = "/job/api/";
      break;
    default:
      console.log("Invalid category");
      return;
  }
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      body: formData,
    });

    const responseData = await response.text();
    console.log(`post note: 등록완료`);
    return "글쓰기 등록 완료";
  } catch (error) {
    console.error("Error:", error);
    return "글쓰기 등록에 실패했습니다.";
  }
}

export async function getPhotoDateList(searchDate: string) {
  console.log(searchDate);
  const res = await fetch(`${API_URL}/photo/api/${searchDate}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const photoList = await res.json();
  if (photoList) return photoList.reverse();
  else return [];
}

export async function getSearchResult(searchTerm: string) {
  try {
    const response = await fetch(
      `${API_URL}/job/api/AllSearch/?search=${encodeURIComponent(searchTerm)}`
    );
    const data = await response.json();
    //console.log(`search result ${data}`);
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
}

export async function getImage(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    // throw new Error("Failed to fetch image");
    return "no image";
  }
  const buffer = await res.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const mimeType = res.headers.get("content-type") || "image/jpeg";
  //console.log(`data:${mimeType};base64,${base64}`);
  return `data:${mimeType};base64,${base64}`;
}
