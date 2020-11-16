import Image from 'next/image'

export default function Signature() {
  return (
      <>
        <Image
              src="/fullsignature.svg"
              alt="Full signature of the creator"
              width={400}
              height={100}
            />
    </>
  )
}