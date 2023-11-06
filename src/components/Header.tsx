import Dropdown from "./ui/Dropdown"

function Header() {

  return (
    <div className="Header flex px-4 py-1 bg-sky-500">
      here be header
      <Dropdown>
        <div className="w-200 bg-sky-500">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </Dropdown>
    </div>
  )
}

export default Header
