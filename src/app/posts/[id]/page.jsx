async function getPost(id) {
  const res = await fetch("http://localhost:4000/posts/" + id);
  return res.json();
}
export default async function PostDetails({ params }) {
  const post = await getPost(params.id);
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg  my-8  py-10 bg-sky-600 mx-auto `}
    >
      <h1 className={`text-gray-700 text-base text-sky-100 text-center`}>
        {post.title}
      </h1>
      <p className={`text-gray-700 text-base py-10 text-sky-100 text-center`}>
        {post.content}
      </p>
    </div>
  );
}