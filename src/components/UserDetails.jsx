export function UserDetails({ details }) {
    const userDetails =  details.map((user,idx) => (
        <section>
        <p><strong>Username:</strong> {user.username}</p>
         <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </section> 
      ))
  return (
    <div id="user-details" key={userDetails.idx} >
      {userDetails}
    </div>
  );
}
