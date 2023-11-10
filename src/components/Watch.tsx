import { useParams } from "react-router-dom"

function Watch() {
  const { id } = useParams()
  return (
    <div className="video relative w-full" style={{ height: "calc(100vh - 36px)" }}>
      <iframe className="absolute w-full h-full" width="1280" height="720" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Watch
