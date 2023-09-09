async function getPost(id) {
  const res = await fetch("http://localhost:4000/posts/" + id);
  return res.json();
}
export default async function PostDetails({ params }) {
  const post = await getPost(params.id);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
