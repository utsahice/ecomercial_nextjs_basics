export default async function user({ params }) {
  const { uname } = await params
  return <div class="text-center text-4xl ">My Name is : {uname}</div>
}