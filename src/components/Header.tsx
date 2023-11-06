import Dropdown from "./ui/Dropdown"

const items = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
  { title: "a" },
  { title: "Lorem ipsum dolor sit amet" },
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
