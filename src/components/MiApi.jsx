import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const MiApi = ({ info }) => { 
  const [anime, setAnime] = useState([]); 
  const [filteredAnime, setFilteredAnime] = useState([]); 

  const url = 'https://api.jikan.moe/v4/anime'; 

  const apiData = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error('Hay un suuuuppppperrr error en la api');
      }
      const data = await resp.json();
      const api = data;
      setAnime(api.data); 
    } catch (error) {
      console.error({ message: error });
    }
  };

  useEffect(() => { 
    apiData();
  }, []);

  useEffect(() => { 
    if(info){ 
      const filtered = anime.filter((p) => p.title.toLowerCase().includes(info.toLowerCase()))  
      setFilteredAnime(filtered)  
    }else{  
      setFilteredAnime(anime) 
    }
  }
  , [anime, info])  


  return (
    <>
      <div className="container">
        <div className="row mt-4 justify-content-center">
          {filteredAnime.map((p) => ( 
            <div
              key={p.mal_id}
              className="col-md-4 mb-4"
            >
              <div className="card">
                <img
                  src={p.images.jpg.image_url}
                  className="card-img-top"
                  alt={p.title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title} </h5>
                  <p className="card-text"></p>
                  <p>
                    <strong>Estado:</strong> {p.status} <strong>Año: </strong>{' '}
                    {p.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiApi;
