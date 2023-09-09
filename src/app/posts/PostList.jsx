async function getPosts() {
  const res = await fetch("http://localhost:4000/posts");
  return res.json();
}
export default async function PostList() {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
