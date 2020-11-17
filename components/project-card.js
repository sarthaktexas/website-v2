import Link from 'next/link'

export default function Projects(props) {
    return (
        <>
            <Link href={props.href} className={`flex flex-wrap -m-4 hover:bg-${ props.color } hover:text-white`}>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className={`border border-${ props.color } p-6 rounded-lg`}>
                        <div className="text-white text-3xl">
                            <i className={`ri-${ props.icon } fill-current h-6 w-6`} />
                        </div>
                        <h2 className={`text-3xl font-extrabold text-${ props.color } mb-2`}>{ props.title }</h2>
                        <p className="text-white max-w-3/4">{ props.description }</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
