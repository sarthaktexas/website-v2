export default function InlineProfile(props) {
    const image = `https://avatars.githubusercontent.com/${props.username}`;
    return (
        <>
            <img
                src={image}
                className="inline rounded-full w-6 h-6 mr-1"
            />
            <p className="inline inherit">{props.name}</p>
        </>
    )
}