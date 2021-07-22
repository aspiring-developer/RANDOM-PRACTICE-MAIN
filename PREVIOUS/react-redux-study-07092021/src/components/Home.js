import cartImage from '../shopping-cart-1.jpg';
const Home = () => {
  return (
    <div>
      <h1>Home component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src="https://picsum.photos/150/200" alt="Random" />
        </div>
        <div className='text-wrapper item'>
          <p>Item1 </p>
          <p>$1000</p>
        </div>
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
<div><img src={cartImage} alt="Random" width="100px"/></div>
      </div>
    </div>
  )
}

export default Home;
