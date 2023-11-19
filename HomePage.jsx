import React from 'react';
import Header from './Header';
import MainMenu from './MainMenu';
import Product from './Product';
import Footer from './Footer';

function HomePage() {
  
  return (
<>
  {/* Header  */}
  <Header/>
  {/* End header area */}
  {/* End site branding area */}
  <MainMenu/>
  {/* End mainmenu area */}
  <div className="product-big-title-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="product-bit-title text-center">
            <h2>Shop</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* List product */}
  <div className="single-product-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  </div>
  {/* Footer area */}
 <Footer/>
  {/* Latest jQuery form server */}
  {/* Bootstrap JS form CDN */}
  {/* jQuery sticky menu */}
  {/* jQuery easing */}
  {/* Main Script */}
  </>

)
}

export default HomePage