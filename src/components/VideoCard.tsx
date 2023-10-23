import { useMemo } from "react"

export default function VideoCard(props: any) {
    const channelImg = useMemo(() => props.video.channel.photo.replace("=s800", "=s48"), [props.video.channel.photo])

    return(
        <div
        className="video-card relative">
            <a
            className="block"
            href={`https://youtu.be/${props.video.id}`}
            target="_blank"
            >
                <div
                className="video-thumbnail relative">
                    <img
                    className="rounded"
                    src={`http://img.youtube.com/vi/${props.video.id}/maxresdefault.jpg`}
                    ></img>
                    <div
                    className="video-topic absolute top-1 left-1 rounded-sm bg-black bg-opacity-75 text-white text-sm px-1 py-px">
                        {props.video.topic_id}
                    </div>
                </div>

                <a
                className="video-text flex"
                href={`https://youtu.be/${props.video.id}`}
                target="_blank">
                    <div className="flex-none p-2">
                        <img
                        className="rounded-full w-12 h-12"
                        src={channelImg}
                        ></img>
                    </div>
                    <div>
                        <div>
                            {props.video.title}
                        </div>
                        <div>
                            <a
                            className="text-blue-400"
                            target="_blank"
                            href={`https://www.youtube.com/channel/${props.video.channel.id}`}>
                                {props.video.channel.english_name}
                            </a>
                        </div>
                    </div>
                    
                </a>
            </a>
            
        </div>
    )
}