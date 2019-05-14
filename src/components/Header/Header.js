import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  

  render() {
    
    return <>
      <nav className='Header' role='navigation'>
        <ul className='HeaderList'>
            <li>
                <Link to={'/'}>Geordie</Link>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
      </nav>
    </>
  }
}
