import Link from "next/link";

async function getPosts() {
  const host = "http://localhost:4000";
  const res = await fetch(process.env.URL + "/posts");
  return res.json();
}

export default async function PostList() {
  const posts = await getPosts();
  return (
    <>
      <h1 className={`w-full flex space-x-4 my-8  justify-center text-3xl`}>
        All Posts
      </h1>
      <div className={`w-full flex space-x-4 my-8  justify-center`}>
        {posts.map((post: any) => (
          <>
            <Link href={`/posts/${post.id}`}>
              <div
                key={post.id}
                className={`max-w-sm rounded overflow-hidden shadow-lg w-80 flex-1 py-10 bg-sky-600`}
              >
                <h3
                  className={`text-gray-700 text-base text-sky-100 text-center`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-gray-700 text-base py-10 text-sky-100 text-center`}
                >
                  {" "}
                  {post.content}
                </p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
