import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";


const Search = () => {
    
    const [starWarsData,setStarWarsData] = useState({})
    const [dropDownValues,setDropDownValues] = useState([])
    
    const [formInfo,setFormInfo] = useState({
        searchTerm:"people",
        idInput:"",
    })
    
    
    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }



    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response =>{
            setStarWarsData(response.data)
            setDropDownValues(Object.keys(response.data))
        })
        

    },[])

    const searchHandler = (e)=>{
        e.preventDefault()
        navigate(`/${formInfo.searchTerm}/${formInfo.idInput}`)
    }
    
    return (
        <div>
            <form onSubmit = {searchHandler}>
                <p>search for: <select name="searchTerm" id=""  onChange = {changeHandler} >
                    {dropDownValues.map((item,idx)=>{
                        return <option key = {idx} value={item}>{item}</option>
                    })}
                    
                   
                    </select></p>
                    
                    <p>Id: <input type="number" name="idInput" id="" onChange = {changeHandler}/></p>
                    <input type="submit" value="Search"/>

            </form>
        </div>
    );
};



export default Search;
