import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Home = () => {
    const items = [
        {
          img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff2%2F8f%2Ff28f5d221960526b51303be4520de0b73350705c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
          label: "Shirt",
        },
        {
          img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffa%2Fef%2Ffaefbc14e35813780fa95c2316ba827b4ae0e502.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D",
          label: "Jeans",
        },
        {
          img: "https://image.hm.com/assets/hm/65/20/6520df038df4805711026ebbeb92dc00b9f27725.jpg",
          label: "T-Shirt",
        },
        {
          img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F09%2F6e092754c5365b3df5d601181a8e75dd4b8b3937.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
          label: "sort",
        },
        {
          img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F14%2F4914459ff34cb7f405d46a9ccd9d09b2ed0b9b38.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_clothing_jumperssweatshirt_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
          label: "Hoodies",
        },
        {
          img: "https://image.hm.com/assets/hm/8b/ec/8bec26ebf3fe24a161fae0a7fc7cc001fcf224d0.jpg?imwidth=1260",
          label: "Glasses",
        },
         {
          img: "https://crepdogcrew.com/cdn/shop/files/AirJordan1LowBlackWhite.jpg?v=1734627761&width=2048",
          label: "Shoes",
        }
      ];
  return (
    <div>

     <div className="">
     <video loop muted autoplay className='image mt-1'>
  <source src="https://cdn.sanity.io/files/qa41whrn/staging/1969b0242904bafb41e28fddb14b1fb805438766.mp4" />
</video>
      {/* <img src="https://cloudfront-us-east-1.images.arcpublishing.com/tgam/53IMM2DSVZGKJIF65XCTNSSEJI.jpg" className='image' alt="" /> */}
        </div>
      <div className="d-flex justify-content-between col-10 m-auto mt-5">  
      {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.img} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="col-10 m-auto mt-5 d-flex justify-content-between">
      <h1 className='' >NEW  </h1>
      <i class="bi bi-chevron-right fs-1"></i>
      </div>
      <div className=" col-10 mt-2 d-flex justify-content-between m-auto" style={{overflowY:"hidden"}}>  
      </div>
   
      <div className="">
      <div className="col-10 m-auto mt-5 d-flex justify-content-between">
        <div className='d-flex'><img src="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png" className='col-1' alt="" /> 
      <h1 className='mb-0 mt-3'> NEW Year Colleaction:</h1>
      </div>
      <i class="bi bi-chevron-right fs-1"></i>
      </div>
      <div className=" col-10 mt-5 d-flex justify-content-between m-auto">  
        <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff2%2F8f%2Ff28f5d221960526b51303be4520de0b73350705c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://image.hm.com/assets/hm/a5/18/a5188df1d81ecc7988749d929ee485f7263d2bbb.jpg?imwidth=2160"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffa%2Fef%2Ffaefbc14e35813780fa95c2316ba827b4ae0e502.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fb0%2F46b0d1e6ac96634e74bff2ff4d3c6189beaa48e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
      </div>
      </div>
      <div className="mt-5  pt-3 pb-3">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f79598208931437.66f6a0ddc75b1.png" alt="" className='poster' />
      </div>
      <div className="">
      <div className="col-10 m-auto mt-5 d-flex justify-content-between">      
      <h1 className='mb-0 mt-3'> Bestsellers</h1>
      <i class="bi bi-chevron-right fs-1"></i>
      </div>
      <div className=" col-10 mt-5 d-flex justify-content-between m-auto">  
        <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff2%2F8f%2Ff28f5d221960526b51303be4520de0b73350705c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://image.hm.com/assets/hm/a5/18/a5188df1d81ecc7988749d929ee485f7263d2bbb.jpg?imwidth=2160"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffa%2Fef%2Ffaefbc14e35813780fa95c2316ba827b4ae0e502.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fb0%2F46b0d1e6ac96634e74bff2ff4d3c6189beaa48e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
      </div>
      </div>
      <div className="col-10 m-auto mt-5 mb-5 ">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/62692a214462447.675886acd7763.jpg" alt="" className='poster2' />
      </div>
      <div className="">
      <div className="col-10 m-auto mt-5 d-flex justify-content-between">      
      <h1 className='mb-0  mt-3'> Popular categories</h1>
   
      </div>
      <div className=" col-10 mt-5 d-flex justify-content-between m-auto">  
        <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff2%2F8f%2Ff28f5d221960526b51303be4520de0b73350705c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://image.hm.com/assets/hm/a5/18/a5188df1d81ecc7988749d929ee485f7263d2bbb.jpg?imwidth=2160"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffa%2Fef%2Ffaefbc14e35813780fa95c2316ba827b4ae0e502.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
    <div className="product-card col-3">
      <div className="image-container">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fb0%2F46b0d1e6ac96634e74bff2ff4d3c6189beaa48e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt="Button Down Dress"
          className="product-image"
        />
        <i className="bi bi-heart favorite-icon"></i> {/* Heart icon */}
      </div>
      <div className=" d-flex justify-content-between mt-2 col-11 m-auto ">
        <p className="fs-5">Button Down Dress</p>
        <p className="product-price  ">50$</p>
      </div>
    </div>
      </div>
      </div>
      <footer className="footer col-10 m-auto mt-5 ">
       <div className="footer-top mt-5 pt-5">
        <h5>Online store of clothing and shoes</h5>
        <p className='mt-3 color'>
          The official website of the Russian clothing and footwear brand Clyra
          offers a catalog of fashionable models for every season, taste, and
          budget: from light dresses and business suits to voluminous winter
          down jackets, clothing for sports and active recreation. To make your
          purchase not only pleasant, but also profitable, buy stylish items in
          the online store with free shipping.
        </p>
      </div>
      <div className="d-flex justify-content-between">
      <div className="footer-sections d-flex justify-content-between col-6">
        <div className="footer-column">
          <h5>Shop</h5>
          <ul className='p-0' style={{listStyle:"none"}}>
            <li><Link className='color' style={{textDecoration:"none"}}>Cloth</Link></li>
            <li> <Link className='color' style={{textDecoration:"none"}}>Shoes</Link></li>
            <li><Link className='color' style={{textDecoration:"none"}}>Accessories</Link></li>
            <li><Link className='color' style={{textDecoration:"none"}}>New items</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>For buyers</h5>
          <ul className='p-0' style={{listStyle:"none"}}>
            <li> <Link className='color' style={{textDecoration:"none"}}>Delivery</Link> </li>
            <li> <Link className='color' style={{textDecoration:"none"}}>Return Policy</Link> </li>
            <li><Link className='color' style={{textDecoration:"none"}}>Gift card</Link> </li>
            <li><Link className='color' style={{textDecoration:"none"}}>Loyalty program</Link>  </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>About the company</h5>
          <ul className='p-0 ' style={{listStyle:"none"}}>
            <li><Link className='color' style={{textDecoration:"none"}}>About Us</Link>  </li>
            <li><Link className='color' style={{textDecoration:"none"}}>Reviews</Link></li>
            <li><Link className='color' style={{textDecoration:"none"}}>Contacts</Link></li>
            <li><Link className='color' style={{textDecoration:"none"}}>Stores</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-5 ">
        <input type="email" className='fs-bold fs-5 col-10 pb-2' style={{border:"none", outline:"none", borderBottom:"2px solid "}} placeholder='Enter your email...' />
       <Link className='d-block mt-3 fs-5 bg-dark text-white col-10 text-center' style={{textDecoration:"none", padding:"10px", borderRadius:'15px'}}>Subscribe to our news</Link>
       <p className='mt-3'>
            By clicking the “subscribe” button, you consent to the advertising
            newsletter and the processing of personal data in accordance with
            the rules.
          </p>
          <Link className='d-block mt-3 fs-5  text-dark col-10  d-flex' style={{textDecoration:"none", padding:"10px", borderRadius:'15px',backgroundColor:"#F4F4F5"}}> <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Store-512.png" className='col-2' style={{objectFit:"cover"}} alt="" /> <p className='col-7 ms-4 '> Download our app to keep up with the latest news</p></Link>
      </div>
      </div>
     <div className="">
        <hr />
        <div className=" d-flex justify-content-between">
        <ul className="d-flex col-4 justify-content-between m-0 p-0" style={{listStyle:"none"}}>
          <li><Link  className='color' style={{textDecoration:"none"}}>Privacy Policy</Link></li>
          <li><Link  className='color' style={{textDecoration:"none"}}>Public offer</Link></li>
          <li><Link  className='color' style={{textDecoration:"none"}}>User Agreement</Link></li>
          <li><Link  className='color' style={{textDecoration:"none"}}>Site map</Link></li>
        </ul>
        <Link className='color' style={{textDecoration:"none"}}>Your City</Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
        <p>© 2024 Clyra. All rights reserved.</p>
        <ul className="d-flex col-3 justify-content-between" style={{listStyle:"none"}}>
          <li><Link  className='color' style={{textDecoration:"none"}}>Instagram</Link></li>
          <li><Link  className='color' style={{textDecoration:"none"}}>Facebook</Link></li>
          <li><Link  className='color' style={{textDecoration:"none"}}>YouTube</Link></li>
          <li><Link  className='color' style={{textDecoration:"none"}}>TikTok</Link></li>
        </ul>
        </div>
     </div>
    </footer>
      </div>

  )
}

export default Home
