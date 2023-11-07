import Dropdown from "./ui/Dropdown"

const items = [
  { title: "All Vtubers" },
  { title: "Independents" },
  { title: "Hololive" },
  { title: "Nijisanji" },
]

function Header() {

  return (
    <div className="Header flex px-4 py-1 bg-sky-500">
      here be header
      <Dropdown>
        <div className="rounded bg-slate-900 py-1 w-max">
          <ul>
            {items.map((item) => (<li className="hover:bg-slate-500 py-1 px-4 ">{item.title}</li>))}
          </ul>
        </div>
      </Dropdown>
    </div>
  )
}

export default Header
