import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { useMemo } from 'react';


const BrandScroll = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    fetch("./brand.json", { cache: "no-cache" }).then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res.json();
    })
      .then((data) => {
        if (!ignore) setBrands(Array.isArray(data) ? data : []);
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
    if (!TARGET || brands.length === 0) return brands;
    const repeat = Math.ceil(TARGET / brands.length);
    return Array(repeat).fill(brands).flat().slice(0, TARGET);
  }, [brands]);

  const settings = {
    arrows: true,
    infinite: items.length > 6, // loop only if enough slides
    autoplay: true,
    autoplaySpeed: 2000,
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
  if (error) return <div className="text-danger py-4">Failed to load brands: {error}</div>;
  if (!items.length) return <div className="py-4">No brands found.</div>;

  return (
    <div className="container-fluid py-5 brandscroll">
      <div className="container">
        <h5 className="heading">Welcome! Let’s Sugar Up!</h5>
        <div className="scrollingBrands text-center">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={`${item.id ?? index}-${index}`} style={{ padding: "0 8px" }}>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    margin: "0 auto 8px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #ffb6cf",
                    background: "#fff",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p className="text-center fw-bold" style={{ fontSize: 12, margin: 0 }}>
                  {item.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default BrandScroll;