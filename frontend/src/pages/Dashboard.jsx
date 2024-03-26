import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";


export default function Dashboard() {
  return (
    <div className="">
      <Appbar/>
      <div className="m-8 ">
          <Balance value={"10000"}/>
          <Users/>
      </div>
    </div>
  )
}
