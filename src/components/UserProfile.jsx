import { UserDetails } from "./UserDetails";
import { UserFavoriteFoods } from "./UserFavoriteFoods";

export function UserProfile({users}) {
    
    const user = users.map((user) => 
        <div key={user.id}>
            <UserDetails details={user.details} />   
            <UserFavoriteFoods food={user.favoriteFoods} /> 
        </div>
    )
  return (
    <div id="user-profile">
        {user}
    </div>
  )
}


