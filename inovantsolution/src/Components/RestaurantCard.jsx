import React from "react";
import vehicle from "../images/Rectangle.webp";
import { useFavorites } from "../Components/FavoritesContext";

const RestaurantCard = ({ data }) => {
 const { isFavorite, toggleFavorite } = useFavorites();
 const liked = isFavorite(data.id);

 return (
  <div className="card w-100 h-100 border-0 shadow-sm">
   <div className="position-relative restaurant-image-wrapper">
    <img src={data.img} className="img-fluid w-100 restaurant-thumbnail" alt={data.title} />

    {data.isClosed && (
     <div className="closed-overlay">
      <h5 className="text-white">Closed</h5>
      <div className="d-grid gap-2">
       <button type="button" className="btn fs-6">
        PREORDER FOR LATER
       </button>
      </div>
     </div>
    )}

    {/* ❤️ Like icon */}
    <i
     className={`fa-heart like-icon p-2 ${liked ? "fa-solid liked" : "fa-regular"}`}
     onClick={() => toggleFavorite(data)}
    />
   </div>

   {data.logo && (
    <img src={data.logo} alt="restaurant logo" className="position-absolute logoIcon" />
   )}

   <div className="row p-1 pb-3">
    <div className="pt-5 col-9 p-0 px-3">
     <h5 className="fw-bold mb-1">{data.title}</h5>
     <p className="mb-2 text-black fw-bold text-wrap">
      Chinese, Mongolian, Noodles, Soup
     </p>

     <div className="d-flex small fw-bold mb-2 text-black">
      <span className="me-2">{data.time}</span>
      <span className="me-2">{data.distance}</span>
      <span className="d-flex align-items-center">
       <img src={vehicle} className="img-fluid w-25" alt="vehicle" />
       <span className="ms-1">{data.kd}</span>
      </span>
     </div>

     <button type="button" className="btn btn-secondary border-0 w-100">
      40% Off on Orders Above KD 4.00
     </button>
    </div>

    <div className="col-3 mt-5 rating p-0">
     <h6 className="fw-bolder">
      <i className="fa-solid fa-star" /> {data.rating}
     </h6>
    </div>
   </div>
  </div>
 );
};

export default RestaurantCard;
