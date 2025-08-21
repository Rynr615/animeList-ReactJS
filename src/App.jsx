import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faFireFlameCurved, faThumbsUp, faList } from '@fortawesome/free-solid-svg-icons'
import { scrollFunction } from './js/main'
import { useEffect, useState } from 'react'
import { getNewAnime, getPopularAnime, getRecommendationAnime } from './js/api'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
    </>
  )
}

function Navbar() {
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    }
  }, []);

  return (
    <nav id='navbar' className='navbar'>
      <div className="navbarLeft">
        <a href="">Anime List</a>
      </div>
      <div className="navbarRight">
        <div className="navLinks">
          <li className="navLink">
            <a href="">Home</a>
          </li>
          <li className="navLink">
            <a href="">Anime</a>
          </li>
          <li className="navLink">
            <a href="">Manga</a>
          </li>
          <li className="navLink">
            <a className='loginBtn' href="">Login</a>
          </li>
          <li className="navLink">
            <a className='signUpBtn' href="">Sign Up</a>
          </li>
        </div>
      </div>
    </nav>
  )
}

function Body() {
  return (
    <>
    <div className="container">
      <SearchBar></SearchBar>
      <NewAnime></NewAnime>
      <PopularAnime></PopularAnime>
      <RecommendationAnime></RecommendationAnime>
    </div>
    </>
  )
}

function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <div className="searchInput">
          <input type="search" className='search' placeholder='Type anime or manga here ......' />
        </div>
        <div className="searchCategory">
          <a href="">
            <i>
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </i>
            Popular
          </a>
          <a href="">
            <i>
              <FontAwesomeIcon icon={faThumbsUp} />
            </i>
            Recommendations
          </a>
          <a href="">
            <i>
              <FontAwesomeIcon icon={faList} />
            </i>
            Genre
          </a>
        </div>
      </div>
    </>
  )
}

function NewAnime() {

  const [newAnime, setNewAnime] = useState([]);

  useEffect(() => {
    getNewAnime().then((result) => {
      setNewAnime(result);
    })
  }, [])

  return (
    <>
      <div className="anime">
        <div className="titleSection">
          <h2>New Anime</h2>
        </div>
        <div className="animeWrapper">
          <NewAnimeList newAnime={newAnime} />
        </div>
        <div className="seeMore">
          <a href="" className="seeMoreBtn">See More</a>
        </div>
      </div>
    </>
  )
}

function NewAnimeList({newAnime}) {

  return newAnime.map((anime, i) => {
    return (
        <div key={i} className="boxWrapper">
        <div className="titleSection">
          <h4>
            <a id="animeTitle" href="">
              {anime.title}
            </a>
          </h4>
        </div>
        <div className="thumbnailAnime">
          <a href="">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
          </a>
        </div>
      </div>
      )
  })
}

function PopularAnime() {
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    getPopularAnime().then((result) => {
      setPopularAnime(result);
    })
  }, [])

  return (
    <>
      <div className="anime">
        <div className="titleSection">
          <h2>Popular Anime</h2>
        </div>
        <div className="animeWrapper">
          <PopularAnimeList popularAnime={popularAnime} />
        </div>
        <div className="seeMore">
          <a href="" className="seeMoreBtn">See More</a>
        </div>
      </div>
    </>
  )
}

function PopularAnimeList({popularAnime}) {
  return popularAnime.map((anime, i) => {
    return (
        <div key={i} className="boxWrapper">
        <div className="titleSection">
          <h4>
            <a id="animeTitle" href="">
              {anime.title}
            </a>
          </h4>
        </div>
        <div className="thumbnailAnime">
          <a href="">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
          </a>
        </div>
      </div>
      )
  })
}

function RecommendationAnime() {
  const [RecommendationAnime, setRecommendationAnime] = useState([]);

  useEffect(() => {
    getRecommendationAnime().then((result) => {
      setRecommendationAnime(result);
    })
  }, [])

  console.log(RecommendationAnime)
}

export default App
