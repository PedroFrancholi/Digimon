import { useCallback, useEffect, useState } from 'react';
import './DigmonMain.css'
import axios from 'axios';
import imgDigmon from '../images/DigmonImage.png'
import { useNavigate } from 'react-router-dom';

const DigmonMain = () => {
    const navigate = useNavigate();
    const[dataDigmon,setDataDigmon] = useState([]);

    const fetchDigmonMain = useCallback(async ()=>{
        try{
            const {data} = await axios.get('https://digimon-api.vercel.app/api/digimon')
            setDataDigmon(data)
        }catch(error){
            console.error(error)
        }
    },[])

    const onClickButton = (id) =>{
        navigate(`/${id}`)
    }

    useEffect(()=>{
        fetchDigmonMain();
    })

    const renderDigmonMain = () =>{
        return (
            
            <body className='container'>
                <div className='mainDigmonContainer'>
                {/* <Grid templateColumns='repeat(6, 1fr)' gap={6}> */}
                        {dataDigmon.map(data => (
                        <div className='listDigmonContainer'>
                            <h4>{data.name}</h4>
                            {/* <img className='imageDigmonContainer' src={data.img}/> */}
                            <button className='buttonMoreInfoContainer' onClick={()=> onClickButton(data.name)}>More Info's</button>
                        </div>
                        ))}
                </div>
                {/* </Grid> */}
            </body>
        );
    }
    return(
        <header>
            <div className='headerContainer'>
                <img className='logoHeaderContainer' src={imgDigmon} alt='Digmon logo'/>
                <h3 className='textHeaderContainer'>Select one Digimon for more information: </h3>
                {renderDigmonMain()}
                
                
            </div>
        </header>
    )
}

export default DigmonMain;