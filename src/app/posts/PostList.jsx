async function getPosts() {
  const res = await fetch("http://localhost:4000/posts");
  return res.json();
}
export default async function PostList() {
  const posts = await getPosts();
  return (
    <div className={`w-full flex space-x-4 my-8 ml-10`}>
      {posts.map((post) => (
        <>
          <div
            key={post.id}
            className={`max-w-sm rounded overflow-hidden shadow-lg w-80 flex-1 py-10 bg-sky-600`}
          >
            <h3 className={`text-gray-700 text-base text-sky-100 text-center`}>{post.title}</h3>
            <p className={`text-gray-700 text-base py-10 text-sky-100 text-center`}> {post.content}</p>
          </div>
        </>
      ))}
    </div>
  );
}
