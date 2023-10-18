export default function VideoCard(props: any) {

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
                src={`https://holodex.net/statics/channelImg/${props.video.channel.id}/50.png`}
                ></img>
            </a>
            
        </div>
    )
}