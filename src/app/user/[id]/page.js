export default async function UserPage({ params }) {
  const resolvedParams = await params; 
  const id = resolvedParams.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'no-store', 
  });
  const user = await res.json();

  return (
    <div className="text-center">
      <h4> User: {user.name}</h4>
      <p>Email: {user.email}</p>
    </div>
  );
}
