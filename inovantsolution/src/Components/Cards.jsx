import React from 'react'

const Cards = () => {
 const cardData = [
  {
   id: 1,
   title: "Offers",
   desc: "offers",
   src: "/images/offer.webp"
  },
  {
   id: 2,
   title: "Newly Added",
   desc: "Newly Added",
   src: "/images/Newly Added.webp"
  },
  {
   id: 3,
   title: "Delivery",
   desc: "Delivery",
   src: "/images/Delivery.webp"
  },
  {
   id: 4,
   title: "Trends",
   desc: "trends",
   src: "/images/Trends.webp"
  },
  {
   id: 5,
   title: "Gifts",
   desc: "Gifts",
   src: "/images/gifts.webp"
  },
  {
   id: 6,
   title: "Catering",
   desc: "Catering",
   src: "/images/Catering.webp"
  }
 ];

 return (
  <>
   <div className="container-fluid">

    <div className="m-auto container cardList py-5">
     <div className="row">

      {cardData.map((item) => (
       <div key={item.id} className="col-6 px-2 p-0 col-md-4 col-lg-2 d-flex">
        <div className="card border-0 w-100 h-100 text-center">

         <div className="row h-100 w-auto m-0 justify-content-around align-items-center">
          <div className="col-6 p-0">
           <h6 className="card-title fw-bold text-uppercase m-0">
            {item.title}
           </h6>
          </div>
          <div className="col-6 d-flex justify-content-end p-0">
           <img
            className="img-fluid pt-3"
            src={item.src}
            alt={item.desc}
           />
          </div>
         </div>

        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 )
}

export default Cards