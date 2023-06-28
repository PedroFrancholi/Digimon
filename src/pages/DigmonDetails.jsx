import axios from 'axios';
import './DigmonDetails.css'
import imgDigmon from '../images/DigmonImage.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DigmonDetails = () => {
    const [digmonDetails,setDigmonDetails] = useState([]);
    let {id} = useParams([]);

    const fetchDigmonDetails = () =>{
    try{
        const {data}= axios.get(`https://digimon-api.vercel.app/api/digimon:${id}`)
        setDigmonDetails(data);
    }catch(error){
        console.error(error)
    }
}

    useEffect(()=>{
        fetchDigmonDetails();
    })


const renderDigmonDetails = () =>{
        return (
            <body>
                <div>
                    {digmonDetails.map(data =>(
                        <div>
                            <h4>{data.name}</h4>
                            <h4>{data.level}</h4>
                            <img scr={data.img} alt='Digmon Images'/>
                        </div>
                    ))}
                </div>
            </body>
        );
    }
    return(
        <header>
            <div className='headerContainer'>
                <img className='logoHeaderContainer' src={imgDigmon} alt='Digmon logo'/>
                <h3 className='textHeaderDetailContainer'>Information about your Digimon selected: </h3>
                {renderDigmonDetails()}
            </div>
        </header>
    )
}
export default DigmonDetails;