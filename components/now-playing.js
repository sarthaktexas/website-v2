import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import Link from 'next/link'

export default function NowPlaying () {
  const { data } = useSWR('/api/now-playing', fetcher);
  return (
    <div className="flex mb-4 flex-row flex-start border border-white rounded p-2 w-300px">
      <div id="album cover">
        <img
          alt="Spotify album cover"
          height="60px"
          width="60px"
          className="rounded"
          src={data?.albumImageUrl || '/placeholder.jpg'}
        />
      </div>
      <div className="justify-center flex flex-start flex-col mx-3">
        <Link href={data?.songUrl || ''}>
          <p className="text-white text-opacity-75 font-bold max-w-screen whitespace-no-wrap overflow-hidden overflow-ellipsis">
            {data ? data.title : 'Not Playing'}
          </p>
        </Link>
        <p className="text-white text-opacity-50 mb-4 max-w-screen whitespace-no-wrap overflow-hidden overflow-ellipsis">
          {data ? data.artist : 'Spotify'}
        </p>
      </div>
      <i className="ri-spotify-fill ml-auto mt-1" style={{ color: 'white' }} />
    </div>
  )
}