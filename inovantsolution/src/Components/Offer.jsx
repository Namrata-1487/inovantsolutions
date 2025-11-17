import React from 'react'
import Slider from 'react-slick'

const Offer = () => {
  const offerlist = [
    {
      img: "/images/Cheesecake.webp",
      logo: "/images/Cheesecake.webp",
      alt: "logo",
      offer: 25,
      position: "left"
    },
    {
      img: "/images/Cheesecake.webp",
      logo: "/images/Cheesecake.webp",
      alt: "logo",
      offer: 25,
      position: "left"
    },
    {
      img: "/images/Cheesecake.webp",
      logo: "/images/Cheesecake.webp",
      alt: "logo",
      offer: 25,
      position: "left"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (

    <>
      <div className="container-fluid py-5 p-0">
          <Slider {...settings} className='container'>
            {offerlist.map((offer) => (
              <div className="card">
                <img class="card-img-top" src={offer.img} alt={offer.alt} />
                {/* logo */}
                <img src={offer.logo} alt={offer.alt} />
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

    </>)
}

export default Offer