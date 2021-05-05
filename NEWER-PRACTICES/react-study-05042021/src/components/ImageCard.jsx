import React from 'react';
import ImageProcessor from './ImageProcessor';

const ImageCard = () => {
  return (
    <>
      <ImageProcessor imageURL="https://picsum.photos/id/1/150/150" imageAlt="Random View 1" imageTitle="Random View 1" imageDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga!" imagePrice="$100" />
      <ImageProcessor imageURL="https://picsum.photos/id/1026/150/150" imageAlt="Random View 2" imageTitle="Random View 2" imageDescription="Ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga Lorem i!" imagePrice="$200" />
      <ImageProcessor imageURL="https://picsum.photos/id/1006/150/150" imageAlt="Random View 3" imageTitle="Random View 3" imageDescription="Dolor sit amet consectetur adipisicing elit. Nisi, fuga Lorem ipsum !" imagePrice="$300" />
    </>
  )
}

export default ImageCard;
