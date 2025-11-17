import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vehicle from "../images/Rectangle.webp";
import { useFavorites } from "../Components/FavoritesContext";   // ⬅️ NEW

const RestaurantList = () => {
 const sliderRef = useRef(null); // <-- REF to control slider

 const [restaurants, setRestaurants] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

 const { isFavorite, toggleFavorite } = useFavorites(); // ⬅️ NEW

 useEffect(() => {
  let ignore = false;
  setLoading(true);
  fetch("./restaurantlist.json", { cache: "no-cache" })
   .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
   })
   .then((data) => {
    if (!ignore) setRestaurants(Array.isArray(data) ? data : []);
   })
   .catch((err) => {
    if (!ignore) setError(err.message || "Failed to fetch");
   })
   .finally(() => {
    if (!ignore) setLoading(false);
   });
  return () => { ignore = true; };
 }, []);

 const settings = {
  dots: false,
  infinite: restaurants.length > 4,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
   { breakpoint: 1200, settings: { slidesToShow: 3 } },
   { breakpoint: 992, settings: { slidesToShow: 2 } },
   { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
 };

 const sliderKey = restaurants.length;

 if (loading) return <div className="rs-loading">Loading restaurants…</div>;
 if (error) return <div className="rs-error">Failed to load restaurants: {error}</div>;
 if (!restaurants.length) return <div className="rs-empty">No restaurants found.</div>;

 return (
  <div className="container-fluid restaurantList">
   <div className="container py-5 p-0" style={{ overflow: "hidden" }}>
    {/* header: use simple buttons wired to sliderRef */}
    <div className="d-flex justify-content-between align-items-center mb-3 px-3 slider-header">
     <h4 className='fw-bold mb-0'>Top Restaurants Near You</h4>

     <div className="d-flex align-items-center">
      <button
       type="button"
       className="btn header-arrow prev-btn"
       onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
       aria-label="Previous">
       <i className="fa-solid fa-circle-chevron-left"></i>
      </button>

      <button
       type="button"
       className="btn header-arrow next-btn"
       onClick={() => sliderRef.current && sliderRef.current.slickNext()}
       aria-label="Next">
       <i className="fa-solid fa-circle-chevron-right"></i>
      </button>
     </div>
    </div>

    {/* Slider with ref */}
    <Slider ref={sliderRef} key={sliderKey} {...settings} >
     {restaurants.map((r) => {
      const liked = isFavorite(r.id); // ⬅️ check if liked

      return (
       <div key={r.id} className="px-2 restaurantList">
        <div className="card w-100 h-100 border-0 shadow-sm" >
         <div className="position-relative restaurant-image-wrapper">
          <img src={r.img} className="img-fluid w-100 restaurant-thumbnail" alt={r.title} />
          {r.isClosed && (
           <div className="closed-overlay">
            <h5 className='text-white'>Closed</h5>
            <div className="d-grid gap-2">
             <button
              type="button"
              name="preorder"
              id="preorder"
              className="btn fs-6"
             >
              PREORDER FOR LATER
             </button>
            </div>
           </div>
          )}

          {/* ❤️ LIKE ICON */}
          <i
           className={`fa-heart like-icon p-2 ${liked ? "fa-solid liked" : "fa-regular"}`}
           onClick={() => toggleFavorite(r)}
          />
         </div>

         {r.logo && (
          <img
           src={r.logo}
           alt="logo of restaurant"
           className="position-absolute logoIcon"
          />
         )}

         <div className="row p-1 pb-3">
          <div className="pt-5 col-9 p-0 px-3">
           <h5 className="fw-bold mb-1">{r.title}</h5>
           <p className="mb-2 text-black fw-bold text-wrap">Chinese, Mongolian, Noodles, Soup</p>

           <div className="d-flex small fw-bold mb-0 text-black mb-2">
            <p className="me-1 m-0 text-nowrap text-center">{r.time}</p>
            <p className="me-1 m-0 text-nowrap">{r.distance}</p>
            <p className="d-flex m-0 align-items-center">
             <img src={vehicle} className='img-fluid w-25' alt="vehicle" />
             <span className="ms-1">{r.kd}</span>
            </p>
           </div>

           <button type="button" className="btn btn-secondary border-0 w-100">
            40% off on orders above KD 4.00
           </button>
          </div>

          <div className="col-3 mt-5 rating p-0">
           <h6 className='fw-bolder'><i className="fa-solid fa-star" /> {r.rating}</h6>
          </div>
         </div>
        </div>
       </div>
      );
     })}
    </Slider>
   </div>
  </div>
 );
};

export default RestaurantList;
