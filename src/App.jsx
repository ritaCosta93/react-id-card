import { UserProfile } from "./components/UserProfile";

export default function App() {

    const users = [{
        id:1,
        details:[{
            username:"Bob The Builder",
            age:32,
            email:"bobthebuilder@randomemail.com", 
        }],
        favoriteFoods:[
            {id:1,name:"Sushi"},
            {id:2,name:"Pizza"},
            {id:3,name:"Mediterranean Food"}
        ]
    },
]

  return (
    <div id="app">
        <UserProfile users={users}/>
    </div>
  )
}
