import React, { useContext, useEffect } from 'react';
import { AppContext } from './context';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ListRow from './ListRow';

const List = props => {
  // const [data, setData] = useState([]);
  // const [showLoading, setShowLoading] = useState(true);
  const { movies, setMovies, showLoading, setShowLoading } = useContext(AppContext);

  const apiUrl = "http://localhost:5000/api/movies";

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios(apiUrl);
      setMovies(result.data);      
      console.log(result.data);
      setShowLoading(false);
    }
    fetchMovies();
  }, []); 




  // const deleteMovie = () => {
  //   setShowLoading(true);
  //   axios.delete('http://localhost:3000/api/movies/' + data._id)
  //           .then((res) => {
  //               console.log('Student successfully deleted!')
  //           }).catch((error) => {
  //               console.log(error)
  //           })
  // };


  // const showDetail = (id) => {
  //   props.history.push({
  //     pathname: '/show/' + id
  //   });
  // }
  return (
    <div>
    {showLoading && <span className="sr-only">Loading...</span>}    
      <div>
        {movies.map((res, i) => {
          return <ListRow obj={res} key={i} />;
          // <div key={idx}><Link to={`/admin/movies/edit/${item._id}`}>{item.title}</Link><Link onClick={deleteMovie}>Delete</Link></div>
        })}
    </div>
    </div>         

  );
}

export default withRouter(List);