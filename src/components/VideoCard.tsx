import { useMemo } from "react"

export default function VideoCard(props: any) {
    const channelImg = useMemo(() => props.video.channel.photo.replace("=s800", "=s50"), [props.video.channel.photo])

    return(
        <div className="relative">
            <a
            href={`https://youtu.be/${props.video.id}`}
            target="_blank"    
            >
                <img
                className="rounded"
                src={`http://img.youtube.com/vi/${props.video.id}/maxresdefault.jpg`}
                ></img>
                <img
                className="absolute top-2 left-2 rounded-full"
                src={channelImg}
                ></img>
            </a>
            
        </div>
    )
}