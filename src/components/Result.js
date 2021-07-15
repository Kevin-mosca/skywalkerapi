import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Result = (props) => {
    const [apiData,setApiData] = useState({})
    const [error, setError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.searchTerm}/${props.id}/`)
            .then(response =>{
                console.log("logging response:",response)
                setApiData(response.data)
            })
            .catch(error => setError(true))


    },[props.searchTerm,props.id])
    
    return (
        
        <div>
            
            <h1>Here are the results from your search:</h1>
                <p> Searched for : {props.searchTerm}</p>
                <p>id number: {props.id}</p>
            {
                error ? 
                <>
                <h1>These are not the droids you're looking for</h1>
                <img src="https://i.guim.co.uk/img/media/2a972658cdd83bc82044778124e71123b8dfe98e/0_0_1770_1062/master/1770.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=71ada8c2952bab20f0fc1a4ef9144c07" alt="Obi-Wan-Kenobi"/>
                </> :
                 
                props.searchTerm === "planets"?
            
                <>
                <h2>{apiData.name}</h2>
                <p>Climate: {apiData.climate}</p>
                <p>Terrain:{apiData.terrain}</p>
                <p>Gravity:{apiData.gravity}</p>
                <p>Population:{apiData.population}</p>
                
                </>:null
                }    
                {
                props.searchTerm === "people"?
                
                <>
                <h2>{apiData.name}</h2>
                <p>Height:{apiData.eye_color}</p>
                <p>Mass:{apiData.mass}</p>
                <p>Hair Color:{apiData.hair_color}</p>
                <p>Skin Color:{apiData.skin_color}</p>
                </>:null

                }
                {
                props.searchTerm ==="films"?
                
                <>
                <h2>{apiData.title}</h2>
                <p>episode:{apiData.episode_id}</p>
                <p>Director:{apiData.director}</p>
                <p>Producer:{apiData.producer}</p>
                <p>Release Date: {apiData.release_date}</p>
                </>:null

                }
                {
                props.searchTerm === "starships"?
                
                <>
                <h2>{apiData.name}</h2>
                <p>Model:{apiData.model}</p>
                <p>Class:{apiData.starship_class}</p>
                <p>Manufacturer:{apiData.manufacturer}</p>
                <p>Cost:{apiData.cost_in_credits}</p>
                <p>Size: {apiData.length}</p>
                <p>Max Speed: {apiData.max_atmosphering_speed}</p>
                </>:null

                }
                {
                props.searchTerm === "vehicles"?
                
                <>
                <h2>{apiData.name}</h2>
                <p>Model:{apiData.model}</p>
                <p>Class:{apiData.vehicle_class}</p>
                <p>Manufacturer:{apiData.manufacturer}</p>
                <p>Cost:{apiData.cost_in_credits}</p>
                <p>Size: {apiData.length}</p>
                <p>Max Speed: {apiData.max_atmosphering_speed}</p>
                </>:null

                }
                {
                props.searchTerm === "species"?
                
                <>
                <h2>{apiData.name}</h2>
                <p>Classification:{apiData.classification}</p>
                <p>Designation:{apiData.designation}</p>
                <p>Average Height:{apiData.average_height}</p>
                <p>Average Lifespan:{apiData.average_lifespan}</p>
                <p>Hair color: {apiData.hair_colors}</p>
                <p>Home Planet: {apiData.max_homeworld}</p>
                </>:null

            }
        </div>
    );
};



export default Result;