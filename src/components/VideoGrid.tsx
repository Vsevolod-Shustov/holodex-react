import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

type Video = {
  id: string,
  title: string,
  type:string,
  topic_id: string,
  published_at: string,
  available_at: string,
  duration: number,
  status: string,
  channel: object
}

const HOLODEX_API_KEY = import.meta.env.VITE_HOLODEX_API_KEY

async function getLive() {
  try {
    const response = await fetch("https://holodex.net/api/v2/videos?status=live&max_upcoming_hours=24&org=Hololive", {
      headers: {
        "X-APIKEY": HOLODEX_API_KEY
      }
    });
    const live = await response.json();
    //console.log(live);
    return live;
  } catch (error) {
    console.log(error)
  }
}

export default function VideoGrid() {
    const [videos, setVideos] = useState<Array<Video>>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLive()
            setVideos(data)
            //buildVideoGrid(videos)
            //console.log(data)
        }

        fetchData()
      },[])
    
    useEffect(() => {}, [])

    return (
    <>
        {videos?.map((video) => <VideoCard key={video.id} video={video}></VideoCard>)}
    </>
    )
}