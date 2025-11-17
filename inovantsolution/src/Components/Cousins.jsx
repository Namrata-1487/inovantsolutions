import React,{useMemo,useEffect,useState} from 'react'
import Slider from "react-slick";
import Allcousins from "../images/All Cousins.webp"
import { Link } from "react-router-dom";

const Cousins = () => {
 const [cousins, setCousins] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

 useEffect(() => {
  let ignore = false;
  fetch("./cousinList.json", { cache: "no-cache" }).then((res) => {
   if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
   }
   return res.json();
  })
   .then((data) => {
    if (!ignore) setCousins(Array.isArray(data) ? data : []);
   })
   .catch((err) => {
    if (!ignore) setError(err.message);
   }).finally(() => {
    if (!ignore) setLoading(false);
   });
  return () => { ignore = true; };
 }, []);

 const TARGET = 17; // change to 0 if you DON'T want padding
 const items = useMemo(() => {
  if (!TARGET || cousins.length === 0) return cousins;
  const repeat = Math.ceil(TARGET / cousins.length);
  return Array(repeat).fill(cousins).flat().slice(0, TARGET);
 }, [cousins]);

 const settings = {
  arrows: true,
  infinite: items.length > 6, // loop only if enough slides
  autoplay: true,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  speed: 450,
  slidesToShow: Math.min(11, items.length), // good UX; change to 17 if you truly want all 17 visible
  slidesToScroll: 1,
  responsive: [
   { breakpoint: 1200, settings: { slidesToShow: Math.min(6, items.length) } },
   { breakpoint: 992, settings: { slidesToShow: Math.min(4, items.length) } },
   { breakpoint: 768, settings: { slidesToShow: Math.min(3, items.length) } },
   { breakpoint: 576, settings: { slidesToShow: Math.min(2, items.length), slidesToScroll: 1 } },
  ],
 };

 if (loading) return <div className="text-center py-4">Loading…</div>;
 if (error) return <div className="text-danger py-4">Failed to load cousins: {error}</div>;
 if (!items.length) return <div className="py-4">No cousins found.</div>;

 return (
  <>
   <div className="container-fluid">
    < div className="container p-0 d-flex cousinList justify-content-center align-items-center">
     <div style={{ padding: "0 8px" }} className='col-1'>
      <Link
       to='/all-cousins'
       style={{ textDecoration: "none", color: "inherit" }}
      >
       <div
        style={{
         width: 90,
         height: 90,
         margin: "0 auto 8px",
         overflow: "hidden",
         border: "none",
         background: "#fff",
         display: "grid",
         placeItems: "center",
        }}
       >
        <img
         src={Allcousins}
         alt="all cousins"
         loading="lazy"
         style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
       </div>
       <p className="text-center fw-bold" style={{ fontSize: 12, margin: 0 }}>
        All Cousins
       </p>
      </Link>
     </div>
     <div className="col-11">
      <Slider {...settings} >

       {items.map((item, index) => (
        <div key={`${item.id ?? index}-${index}`} style={{ padding: "0 8px" }}>
         <div
          style={{
           width: 90,
           height: 90,
           margin: "0 auto 8px",
           overflow: "hidden",
           border: "none",
           background: "#fff",
           display: "grid",
           placeItems: "center",
          }}
         >
          <img
           src={item.src}
           alt={item.title}
           loading="lazy"
           style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
         </div>
         <p className="text-center fw-bold" style={{ fontSize: 12, margin: 0 }}>
          {item.title}
         </p>
        </div>
       ))}
      </Slider>
     </div>
    </div>
   </div >
  </>
 )
}

export default Cousins