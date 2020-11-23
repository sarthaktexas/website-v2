import Link from 'next/link'

export default function Track(track) {
    return (
        <div className="flex flex-row align-baseline border-b-1 border-white border-opacity-15 p-2 max-w-600px w-full">
            <h2 className="text-sm font-bold text-white text-opacity-50">
                {track.ranking}
            </h2>
            <div className="flex flex-col ml-3 gap-0 -mt-1">
                <Link href={track.songUrl}>
                    <h2 className="font-bold text-white text-2xl max-w-600px whitespace-no-wrap overflow-hidden overflow-ellipsis">
                        {track.title}
                    </h2>
                </Link>
                <p className="sarthak-gradient mb-4 max-w-600px whitespace-no-wrap overflow-hidden overflow-ellipsis">
                    {track.artist}
                </p>
            </div>
        </div>
    );
};