import { useAtom } from "jotai"
import Dropdown from "./ui/Dropdown"
import { queryOrg } from "./Home"

const items = [
  { title: "All Vtubers", value: "All" },
  { title: "Independents", value: "Independents" },
  { title: "Hololive", value: "Hololive" },
  { title: "Phase Connect", value: "Phase Connect" },
]



function Header() {
  const [org, setOrg] = useAtom(queryOrg)
  return (
    <header className="flex h-[35px] px-4 py-1 bg-sky-500">
      <Dropdown title={org} closeOnInsideClick={true}>
        <div className="rounded bg-slate-900 py-1 w-max">
          <ul>
            {items.map((item) => (
              <li
                key={item.value}
                className="hover:bg-slate-500 py-1 px-4 cursor-pointer"
                onClick={() => { console.log(item.value); setOrg(item.value) }}
              >
                {item.title}
              </li>))}
          </ul>
        </div>
      </Dropdown>
    </header>
  )
}

export default Header
