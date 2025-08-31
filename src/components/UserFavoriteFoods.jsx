export  function UserFavoriteFoods({food}) {
    
    const foodsList = food.map(food => <li key={food.id}>{food.name}</li>)
  return (
    <div id="user-favorite-foods">
        <strong>Favorite Foods</strong>
        <ul>
            {foodsList}
        </ul>
    </div>
  )
}
