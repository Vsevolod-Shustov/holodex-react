import { useAtom } from "jotai"
import Dropdown from "./ui/Dropdown"
import { queryOrg } from "./Home"

const items = [
  { title: "All Vtubers", value: "All" },
  { title: "Independents", value: "Independents" },
  { title: "Hololive", value: "Hololive" },
  { title: "Nijisanji", value: "Nijisanji" },
]



function Header() {
  const [org, setOrg] = useAtom(queryOrg)
  return (
    <div className="Header flex px-4 py-1 bg-sky-500">
      <Dropdown title={org} closeOnInsideClick={true}>
        <div className="rounded bg-slate-900 py-1 w-max">
          <ul>
            {items.map((item) => (
              <li className="hover:bg-slate-500 py-1 px-4 cursor-pointer"
                onClick={() => { console.log(item.value); setOrg(item.value) }}
              >
                {item.title}
              </li>))}
          </ul>
        </div>
      </Dropdown>
    </div>
  )
}

export default Header
