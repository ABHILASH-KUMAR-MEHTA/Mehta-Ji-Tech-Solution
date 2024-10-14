import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Abhilash Technical</h1>
              <p>
                Are you to take your business to the next level with
                cutting-edge IT solution? Look no furthur! At the Thapa
                Technical, we specialize in providing innovation IT services and
                solution tailord to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn now</button>
                </a>
              </div>
            </div>
            <div className="home-image">
              <img
                className="register"
                src="/images/register.png"
                alt=""
                width={700}
                height={700}
              />
            </div>
          </div>
        </section>
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>registered comapanies</p>
            </div>
            <div className="div1">
              <h2>10,000+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <h2>500+</h2>
              <p>We Knows All Developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>service</p>
            </div>
          </div>
        </section>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="home-image">
              <img
                className="register"
                src="/images/image.png"
                alt=""
                width={700}
                height={700}
              />
            </div>
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Abhilash Technical</h1>
              <p>
                Are you to take your business to the next level with
                cutting-edge IT solution? Look no furthur! At the Thapa
                Technical, we specialize in providing innovation IT services and
                solution tailord to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn now</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
