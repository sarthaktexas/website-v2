import Link from 'next/link'
import Slide from 'react-reveal/Slide'

export default function Track(track) {
    return (
        <Slide bottom cascade>
            <div className="flex flex-row align-baseline p-2 pb-0 max-w-full w-full">
                <h2 className="text-sm font-bold text-white text-opacity-50">
                    {track.ranking}
                </h2>
                <div className="flex flex-col ml-3 gap-0 -mt-1">
                    <Link href={track.songUrl}>
                        <h2 className="font-medium text-white text-2xl max-w-full whitespace-no-wrap overflow-hidden overflow-ellipsis">
                            {track.title}
                        </h2>
                    </Link>
                    <p className="sarthak-gradient mb-4 max-w-full whitespace-no-wrap overflow-hidden overflow-ellipsis">
                        {track.artist}
                    </p>
                </div>
        </div>
        </Slide>
    );
};