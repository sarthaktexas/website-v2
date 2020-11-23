import Link from 'next/link'

export default function Projects(props) {
    return (
        <>
            <Link href={props.href}>
                <div className="w-4/5 rounded p-4 md:px-4 md:py-2 flex flex-col flex-1 md:flex-row md:flex-2 hover:bg-white hover:bg-opacity-25 hover:shadow-lg">
                    <div>
                        <i className={`ri-${props.icon || 'grid-fill'} ml-2 md:ml-0 group-hover:shadow-lg`} style={{ fontSize: 60, color: 'white'}}/>
                    </div>
                    <div className="pointer-events-none text-white text-left ml-4">
                        <h1 className="inline-block w-auto font-bold text-xl md:mt-4">
                            {props.title}
                        </h1>
                        <p className="inline text-white text-opacity-50 font-bold text-xl">
                            {` ${props.description}`}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
}
