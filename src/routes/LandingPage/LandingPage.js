import React, { Component } from 'react'
import './LandingPage.css'


export default class LandingPage extends Component {

  render() {
      return (
        <main role="main" className="LandingPage">
          <section id="Geordie">
            <h1>Geordie Connell</h1>
            <p>Hi, I'm Geordie! My real name is George Washington Connell but there were so many Georges in my family
                so my parents gave me a nickname. I was born just outside of Philadelphia and currently reside
                in the Spring Garden neighborhood of Philadelphia.
            </p>
          </section>
    
          <section className='AboutMe'>
            <img src={require("./Linked.jpg")} alt="Geordie Connell headshot" />
            <h2>About Me:</h2>
            <p>I am currently a student in the Engineering Immersion Boot Camp at Thinkful. Programming has become a passion of mine because of the incredibly satisfying feeling when my code comes to life on screen. 
               The ever-expanding number libraries and systems to learn satisfy my constant desire to continue learning. Throughout the boot camp, we worked in groups to develop mobile-first web applications.
               The teams I was a part of would take advantage of Trello boards and pairing off to delegate certain to make sure we were always taking the proper steps forward each day.
               Being flexible to work on different aspects of the projects was paramount and being able to mix my creative methods with my teammates' was a preferable way to design our apps.
               Because of Thinkful, I have become proficient in a number of Javascript libraries including React.js, Node.js, Knex.js as well as PostgreSQL and many more!
            </p>
            <br />
            <p>I have a BS in Statistics from Lehigh University and have previous experiences in the financial services industry working
                in client relations and sales. If you are looking for an articulate, analytical mind, <a href="mailto:geordie.connell@gmail.com">send me an email!</a>
            </p>
            <br />
            <p>When I’m not programming, I’m using either playing, watching, or talking about sports. I play in a number of intermural sports leagues
            in Philadelphia as well as at least one round of golf on weekends. I also host a podcast called the Bullpen Cart 
            where my friends and I talk baseball, football, hockey, and plenty of other sports. Nothing makes me happier than 
            watching the Phillies at Citizens Bank Park on a warm summer night with a cold beer in my hands.
            </p>
          </section>
    
          <section id="Projects">
            <h2>Projects:</h2>
            <section className='MunchStats'>
              <a href="https://munchstats.now.sh/" target="blank">
                  <img src={"https://i.imgur.com/umZCpq9.png"} alt="A Munch Stats user's log page with today's activity" />
              </a>
              <br />
              <h3>Munch Stats</h3>
              <p>Munch Stats is a meal tracking app. What makes Munch Stats different is our approach to building meals within the app. 
                Using the Edamam API, you can build and track your meals ingredient by ingredient and save each meal for multiple trackings. 
                You can also set daily goals for calories, carbohydrates, fat, and/or protein and track how your daily consumption compares to your goals.
              </p>
              <p className='tagline'>Start tracking today!</p>
              <p><b>Built Using:</b> React.js, Node.js, Knex.js, PostgreSQL, Chart.js, Mocha.js, Chai.js, HTML5, CSS</p>
              <a href="https://munchstats.now.sh/" target="blank"><button>Live App</button></a>
              <a href="https://github.com/thinkful-ei-armadillo/munchstats-client" target="blank"><button>Repo</button></a>
            </section>
            <section className='SpacedRepitition'>
              <a href="https://ripetizione.now.sh/" target="blank">
                  <img src={require("./spaced_repitition_user_page.png")} alt="A Spaced Repitition user's page with Italian words" />
              </a>
              <br />
              <h3>Repetizione</h3>
              <p>Practice learning a language with the spaced repetition revision technique.</p>
              <p className='tagline'>Start practicing today!</p>
              <p><b>Built Using:</b> React.js, Node.js, Knex.js, PostgreSQL, Cypress.js, Mocha.js, Chai.js, HTML5, CSS</p>
              <a href="https://ripetizione.now.sh/" target="blank"><button>Live App</button></a>
              <a href="https://github.com/thinkful-ei-armadillo/spaced-repetition-client-zol-geordie" target="blank"><button>Repo</button></a>
            </section>
            <section className='CityShowdown'>
              <a href="https://city-showdown.geordieconnell.now.sh/" target="blank">
                  <img src={require("./showdown_page.PNG")} alt="A City Showdown user's showdown in the app" />
              </a>
              <br />
              <h3>City Showdown</h3>
              <p>Have you ever wanted to know how your favorite teams stack up against your friend's? City Showdown
                lets you compare your favorite baseball team's playoff series record against any of the other 29 Major League
                Baseball teams. NBA, NFL, and NHL are coming soon so that you can see your teams' aggregate record against
                your friends' squads!
              </p>
              <p className='tagline'>Are YOU ready for the showdown?</p>
              <p><b>Built Using:</b> React.js, Node.js, Knex.js, PostgreSQL, Mocha.js, Chai.js, HTML5, CSS</p>
              <a href="https://city-showdown.geordieconnell.now.sh/" target="blank"><button>Live App</button></a>
              <a href="https://github.com/geordo9/city-client" target="blank"><button>Repo</button></a>
            </section>
            <section className='SportsTrivia'>
              <a href="https://thinkful-ei-armadillo.github.io/quiz-GP/" target="blank">
                  <img src={require("./Sports_Trivia_Results.png.PNG")} alt="Michael Strahan in his Hall of Fame Jacket" />
              </a>
              <br />
              <h3>Sports Trivia Quiz</h3>
              <p>If you couldn’t tell from my bio, I’m a big sports fan. With that fandom, comes a lot of random knowledge so we decided
              to put some of it to good use! We used JQuery to render each of our questions and answers as well as a conditional
              results screen that loads different statuses depending on your score. The app has eight questions in its question bank
              and will randomly select five for the user to answer.</p>
              <p className='tagline'>Can you reach Hall of Fame status like Michael Strahan?</p>
              <p><b>Built Using:</b> HTML5, CSS, JQuery</p>
              <a href="https://thinkful-ei-armadillo.github.io/quiz-GP/" target="blank"><button>Live App</button></a>
              <a href="https://github.com/thinkful-ei-armadillo/quiz-GP" target="blank"><button>Repo</button></a>
            </section>
        </section>
    
        <footer id="Contact">
            <h2>Contact Geordie:</h2>
            <a href="mailto:geordie.connell@gmail.com" target="blank">
              <img src={require("./gmail.png")} alt="Gmail Logo" />
            </a>
            <a href="https://www.linkedin.com/in/geordie-connell-62854b5b/" target="blank">
              <img src={require("./linkedin.png")} alt="LinkedIn Logo" />
            </a>
            <a href="https://twitter.com/geordo9" target="blank">
              <img src={require("./twitter.png")} alt="Twitter Logo" />
            </a>
            <a href="https://github.com/geordo9" target="blank">
              <img src={require("./github.png")} alt="Git Hub Logo" />
            </a>
        </footer>
      </main>
    );
  }
}