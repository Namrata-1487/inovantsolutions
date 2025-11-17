import React from "react";
import logo from "../images/Zwara-Logo.webp";
import appstore from "../images/appstore.webp";
import googlestore from "../images/googleplay.webp";

const Footer = () => {
  const popular = ["Healthy", "Milk Shake", "Cheesecake", "Frozen Yoghurt", "Waffle", "Coffee", "Arabic Sweet"];
  const explore = ["Influencer", "Offers", "Newly Added", "Delivery", "Trends", "Ya Hala"];
  const customer = ["Orders", "Gifts", "Invite Friends", "Favourites", "Addresses", "My Loyalty", "Zwara Credits"];
  const help = ["About Us", "Faq’s", "How to Order", "Privacy Statement", "Terms of Use", "Data Deletion Policy", "Feedback"];

  return (
    <footer className="footer container-fluid text-white py-5">
      <div className="container row m-auto">
        <div className="col-7 d-flex p-0">
          <div className="col-3 p-0">
            <h6 className="text-uppercase fw-bold mb-3">Popular</h6>
            {popular.map((item) => (
              <p key={item} className="mb-2 fs-6 links">{item}</p>
            ))}
          </div>

          <div className="col-3 p-0">
            <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
            {explore.map((item) => (
              <p key={item} className="mb-2 fs-6 links">{item}</p>
            ))}
          </div>

          <div className="col-3 p-0">
            <h6 className="text-uppercase fw-bold mb-3">Customer Account</h6>
            {customer.map((item) => (
              <p key={item} className="mb-2 fs-6 links">{item}</p>
            ))}
          </div>

          <div className="col-3 p-0">
            <h6 className="text-uppercase fw-bold mb-3">Help & Support</h6>
            {help.map((item) => (
              <p key={item} className="mb-2 fs-6 links">{item}</p>
            ))}
          </div>
        </div>
        <div className="col-5 d-flex p-0">
          <div className="col-7 p-0">
            <h6 className="text-uppercase fw-bold mb-3">Contact Us</h6>
            <address className="mb-2">
              Whatsapp Us: +965 869878955<br />
              Call Us On: +965 869878955<br />
              Email: <a href="mailto:info@zwara.com" className="text-white">info@zwara.com</a><br />
              8:00 AM to 8:00 PM, 365 days
            </address>
            <p className="w-75">Should you encounter any bugs,
              delayed deliveries, or other
              problems on the website.</p>
          </div>
          <div className="col-5 p-0 ">

            <h6 className="text-uppercase fw-bold mb-3">Download the App</h6>
            <div className="d-block ">
              <a href="/" aria-label="Download on the App Store">
                <img src={appstore} alt="App Store" className="img img-fluid w-75 mb-3" />
              </a>
              <a href="/" aria-label="Get it on Google Play">
                <img src={googlestore} alt="Google Play" className="img img-fluid w-75" />
              </a>
            </div>
          </div>
        </div>


        <hr className="my-4" />

        <div className="row align-items-center p-0">
          <div className="col-auto col-md-8 d-flex align-items-center gap-3">
            <img src={logo} alt="Zwara logo" style={{ height: 36 }} />
            <small className="m-0">&copy;&nbsp;2025. All Rights Reserved.</small>
          </div>

          <div className="col-auto col-md-4 d-flex justify-content-md-end align-items-center gap-0 mt-3 mt-md-0">
            <span className="text-uppercase fw-bold">Follow us: &nbsp;</span>
            <div className="d-flex gap-2 social-icons">
              <a href="/" aria-label="Whatsapp" rel="noopener noreferrer" className="social-media-icon"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="/" aria-label="Twitter" rel="noopener noreferrer" className="social-media-icon"><i className="fa-brands fa-twitter"></i></a>
              <a href="/" aria-label="Facebook" rel="noopener noreferrer" className="social-media-icon"><i className="fa-brands fa-facebook"></i></a>
              <a href="/" aria-label="Instagram" rel="noopener noreferrer" className="social-media-icon"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
