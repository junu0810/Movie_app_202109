import React from 'react';
import axios from 'axios';
import { findDOMNode } from 'react-dom';
import PropTypes  from 'prop-types';
import Movie from './Movie'


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies =async() =>{ 
    const {
      data:{
        data:{movies}
      }
      }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      this.setState({movies ,isLoading:false})
  }

componentDidMount() {
    this.getMovies();
}
 
render() {
    const { isLoading,movies} = this.state;
    return <section class='container'>
      {isLoading ? 
      <div class ="loader">
        <span classs="loader__text">Loading...</span>
      </div> 
      :(
        <div class='movies'>
             {movies.map(function (movie) {
              <Movie key = {movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.poster}/>
    })}
        </div>
      )

    }</section>;
  }
}
export default App;








// const foodILike = [
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 5.5
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.7
//   }
// ];
// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         // <Food key={dish.id} name={dish.name} picture={dish.image} />
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }
