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

export const Page2 = ({ image, tags, className }: Props) => {
  console.log(image, tags)
  const tag = tags[0]
  const obj = {
    left: tag.position.left * 100,
    width: tag.position.width * 100,
    top: tag.position.top * 100,
    height: tag.position.height * 100,
  }

  console.log(obj)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Evita que el clic se propague al contenedor del flipbook
    console.log("Tag clicked");
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url("/images/page9.jpg")` }}
        className={`relative bg-red-200 h-[100%] w-[100%] ${className}`}
      >
        <Image className='object-fill' src={image} alt='page' layout='fill' unoptimized />
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
                className={`whitespace-nowrap text-[11px] text-white font-bold text-center hover:cursor-pointer hover:scale-150`}
                onClick={handleClick}
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
