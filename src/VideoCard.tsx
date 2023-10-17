export default function VideoCard(props: any) {

    return(
        <div>
            <img src={`http://img.youtube.com/vi/${props.video.id}/maxresdefault.jpg`}></img>
        </div>
    )
}