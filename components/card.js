import Link from 'next/link'

export default function Card(props) {
  return (
    <div className={`w-${props.width} mr-4 mb-4 inline-block h-48`}>
      <Link href={props.href || ""}>
        <div className="transform hover:scale-110 transition duration-500 bg-pink-500">
          <img
            src={props.imgsrc}
            alt={props.description}
            className={`z-0 rounded object-cover h-48 w-full`}
          />
          <h1 className="z-10 -mt-24 pl-10 mb-12 font-sans text-white font-bold text-3xl">
            {props.title}
          </h1>
        </div>
      </Link>
    </div>
  )
}