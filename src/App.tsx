import './App.css';
import { Nav } from './components/Nav';
import { Banner } from './components/Banner';
import { Row } from './components/Row';
import { requests } from './tmdbRequests';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isMovie={false}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isMovie={false} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isMovie={true} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isMovie={true} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isMovie={true} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isMovie={true} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} isMovie={true} />
    </div>
  );
}

export default App;
