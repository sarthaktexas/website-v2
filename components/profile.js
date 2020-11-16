/**
 * Incomplete Component, do not use.
 */

import Image from 'next/image'

export default function Profile() {
    return (
        <>
            <Image
                src='/pfp.png'
                alt='Picture of Author'
                width={80}
                height={80}
                className="rounded-full h-16 w-16"
            />
            <div className="inline-block ml-2">
                <h1 className="text-white font-extrabold align-top text-3xl">Sarthak Mohanty</h1>
                <p className="text-white align-top text-2xl italic">yolo</p>
            </div>
        </>
    )
}