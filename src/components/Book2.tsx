"use client"

import { Page2 } from "./Page2"
import HTMLFlipBook from 'react-pageflip';

export const Book2 = () => {

  const image = "/images/page9.jpg"
  const tags = [
    {
      text: "497-46",
      position: {
        width: 0.0712890625,
        height: 0.011923076584935188,
        left: 0.587890625,
        top: 0.6065865159034729,
      },
    },
    {
      text: "811-06",
      position: {
        width: 0.064453125,
        height: 0.011923076584935188,
        left: 0.6279296278953552,
        top: 0.8837980031967163,
      },
    },
    {
      text: "405-62",
      position: {
        width: 0.0751953125,
        height: 0.014158654026687145,
        left: 0.1865234375,
        top: 0.9277644157409668,
      },
    },
    {
      text: "405-63",
      position: {
        width: 0.07421875,
        height: 0.014158654026687145,
        left: 0.6171875,
        top: 0.9277644157409668,
      },
    },
  ]

  return (
    <>
      <div className="flex justify-center items-center border-2 border-red-400 h-screen overflow-hidden">
        <HTMLFlipBook width={300} height={500}>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={"https://cklass.com/cdn/shop/files/Dama_a063c674-b74b-4de7-90ee-453376e3525d_large.jpg?v=1720798425"} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={image} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={image} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={image} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={image} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={image} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={image} tags={tags} className='block' /></div>
          <div className="flex justify-center w-full h-full items-center"><Page2 image={"https://cklass.com/cdn/shop/files/Dama_a063c674-b74b-4de7-90ee-453376e3525d_large.jpg?v=1720798425"} tags={tags} className='block' /></div>
        </HTMLFlipBook>
      </div>
    </>
  )
}
