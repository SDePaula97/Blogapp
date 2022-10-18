const React = require('react');
const NavBar = require('../components/Navbar')
class HomePage extends React.Component {
  render() 
  {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
       <NavBar />
        <h1>Culturewave</h1> 
        <img src="images/blog-background2.avif" style={styles.headerImg} />
          <p>
           A space where we can share ideas and thoughts about the current state of our world.
          </p>
         <section className="margin-section">
          <h1>Bio</h1>
          <div style={styles.intro}>
            <img src="/images/ImageProfile.png" style={styles.me} />
            <div>
              <h2>Developer</h2>
              <p>
                Hello! I am an aspring fullstack web developer currently living in Atlanta, GA.
                I grew up traveling a lot which has inspired me to live a nomadic lifestyle. 
                Me and my partner have a naughty French Bulldog named Pickles!
                Some of my favorite things are : gourmet cheese, coffee roasting and peruvian dark chocolate.
                I love traveling, hiking, and eating good food.
              </p>
            </div>
          </div>
        </section>

        <section className="margin-section">
          <div>
            <h1>Featured Blog</h1>
            <div>
            <a href="https://www.nytimes.com/2022/10/13/business/economy/high-inflation.html">Inflation Is Unrelenting, Bad News for the Fed and White House</a>
              <p>
              Inflation rose quickly in September and a key measure accelerated to the fastest pace since 1982, underlining the persistence of price increases.
              </p>
              <span>Author: Jeanna Smialek</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  headerImg: { width: "100%", height: "300px", objectFit: "fill" },
  me: {
    width: "250px",
    height: "200px",
    borderRadius: "60%",
    objectFit: "fill",
    marginRight: "5px",
  },
  intro: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
  },
};

module.exports = HomePage;



