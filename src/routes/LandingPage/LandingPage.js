import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'


export default class LandingPage extends Component {

  render() {
      return (
        <main role="main" className="LandingPage">
          <section id="Geordie">
            <h1>Geordie Connell</h1>
            <p>Hi, I'm Geordie! My real name is George Washington Connell but there were so many Georges in my family
                so my parents gave me a nickname.
            </p>
          </section>
    
          <section className='AboutMe'>
            <h2>About Me:</h2>
            <p>I am currently in a student in the Engineering Immersion Boot Camp at Thinkful. I love programming because I love the
            incredible feeling when my code comes to life on screen. The ever-expanding number libraries and systems to learn
            satisfies my constant desire to continue learning.</p>
            <br />
            <p>I have a BS in Statistics from Lehigh University and have previous experiences in the financial services industry working
                in client relations and sales. If you're looking for an articulate analytical mind, 
                <a href="mailto:geordie.connell@gmail.com"> send me an email!</a>
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
            <a href="https://thinkful-ei-armadillo.github.io/quiz-GP/" target="blank">
                <img src={require("./Sports_Trivia_Results.png.PNG")} alt="Michael Strahan in his Hall of Fame Jacket" />
            </a>
            <br />
            <h3>Sports Trivia Quiz</h3>
            <p>If you couldn’t tell from my bio, I’m a big sports fan. With that fandom, comes a lot of random knowledge so we decided
            to put some of it to good use! We used JQuery to render each of our questions and answers as well as a conditional
            results screen that loads different statuses depending on your score. The app has eight questions in its question bank
            and will randomly select five for the user to answer.</p>
            <p>Can you reach Hall of Fame status like Michael Strahan? Try the quiz for yourself!</p>
            <p><b>Built Using:</b> HTML5, CSS, JQuery</p>
            <a href="https://thinkful-ei-armadillo.github.io/quiz-GP/" target="blank"><button>Live App</button></a>
            <a href="https://github.com/thinkful-ei-armadillo/quiz-GP" target="blank"><button>Repo</button></a>
        </section>
    
        <section id="Contact">
            <h2>Contact Info:</h2>
            <p>Email: <a href="mailto:geordie.connell@gmail.com">geordie.connell@gmail.com</a></p>
            <p>Github: <a href="https://github.com/geordo9">@geordo9</a></p>
            <p><a href="https://www.linkedin.com/in/geordie-connell-62854b5b/">LinkedIn Profile</a></p>
        </section>
        </main>
      );
  }
}