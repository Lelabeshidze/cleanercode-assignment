"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// async function getPosts() {
//   const host = "http://localhost:4000";
//   const res = await fetch(process.env.NEXT_PUBLIC_URL + "/posts");
//   return res.json();
// }

export default function PostList() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_URL + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No post data</p>;
  // const posts = await getPosts();
  return (
    <>
      <h1 className={`w-full flex space-x-4 my-8  justify-center text-3xl`}>
        All Posts
      </h1>
      <div className={`w-full flex space-x-4 my-8  justify-center`}>
        {(data as unknown as any[]).map((post: any) => (
          <div key={post!.id}>
            <Link href={`/posts/${post!.id}`}>
              <div
                className={`max-w-sm rounded overflow-hidden shadow-lg w-80 flex-1 py-10 bg-sky-600`}
              >
                <h3
                  className={`text-gray-700 text-base text-sky-100 text-center`}
                >
                  {post!.title}
                </h3>
                <p
                  className={`text-gray-700 text-base py-10 text-sky-100 text-center`}
                >
                  {" "}
                  {post.content}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
