import * as React from "react"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-expand-lg intro-bg text-soft"
      >
        <div className="d-flex justify-content-between flex-wrap flex-row">
          <Link to="/1">1</Link>
          <Link to="/2">2</Link>
          <Link to="/3">3</Link>
          <Link to="/4">4</Link>
          <Link to="/5">5</Link>
          <Link to="/6">6</Link>
          <Link to="/7">7</Link>
          <Link to="/8">8</Link>
          <Link to="/9">9</Link>
          <Link to="/10">10</Link>
          <Link to="/11">11</Link>
          <Link to="/12">12</Link>
          <Link to="/13">13</Link>
          <Link to="/14">14</Link>
          <Link to="/15">15</Link>
          <Link to="/16">16</Link>
          <Link to="/17">17</Link>
          <Link to="/18">18</Link>
          <Link to="/19">19</Link>
          <Link to="/20">20</Link>
          <Link to="/21">21</Link>
          <Link to="/22">22</Link>
          <Link to="/23">23</Link>
          <Link to="/24">24</Link>
          <Link to="/25">25</Link>
          <Link to="/26">26</Link>
          <Link to="/27">27</Link>
          <Link to="/28">28</Link>
          <Link to="/29">29</Link>
          <Link to="/30">30</Link>
          <Link to="/31">31</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
