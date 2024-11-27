import React from "react"
import { Page } from "./Page"

export const Book = () => {
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
      <div className='flex justify-center gap-2 w-full h-full items-center'>
        <Page image={image} tags={tags} className='hidden lg:block' />
        <Page image={image} tags={tags} className='block' />
      </div>
    </>
  )
}
