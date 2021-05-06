const data = [
  {
    imageURL:"https://picsum.photos/id/1/150/150",
    imageAlt:"Random View 1",
    imageTitle:"Random View 1",
    imageDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga!",
    imagePrice:"$100",
    imageID: function() {
      let date = new Date();
      date.getTime();
    }
  },
  {
    imageURL:"https://picsum.photos/id/2/150/150",
    imageAlt:"Random View 2",
    imageTitle:"Random View 2",
    imageDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga!",
    imagePrice:"$200",
    imageID: 222
  },
  {
    imageURL:"https://picsum.photos/id/1006/150/150",
    imageAlt:"Random View 3",
    imageTitle:"Random View 3",
    imageDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga!",
    imagePrice:"$300",
    imageID: 333
  }
]
export default data;
