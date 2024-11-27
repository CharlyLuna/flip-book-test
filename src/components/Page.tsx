import Image from "next/image"

interface Props {
  image: string
  tags: Tag[]
  className: string
}

interface Tag {
  position: Position
  text: string
}

interface Position {
  width: number
  height: number
  left: number
  top: number
}

export const Page = ({ image, tags, className }: Props) => {
  console.log(image, tags)
  const tag = tags[0]
  const obj = {
    left: tag.position.left * 100,
    width: tag.position.width * 100,
    top: tag.position.top * 100,
    height: tag.position.height * 100,
  }

  console.log(obj)

  return (
    <>
      <div
        style={{ backgroundImage: `url("/images/page9.jpg")` }}
        className={`relative bg-red-200 h-[75vh] sm:h-[95vh] md:w-[70%] w-full 2xl:w-[40%] ${className}`}
      >
        <Image className='object-fill' src={image} alt='page' layout='fill' />
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              style={{
                left: `${tag.position.left * 100}%`,
                width: `${tag.position.width * 100 + 0.1}%`,
                top: `${tag.position.top * 100}%`,
                height: `${tag.position.height * 100 + 0.2}%`,
              }}
              className={`absolute bg-red-500`}
            >
              <h3
                className={`whitespace-nowrap text-[11px] text-white font-bold text-center`}
              >
                {tag.text}
              </h3>
            </div>
          )
        })}
      </div>
    </>
  )
}
