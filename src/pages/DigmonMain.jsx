import { useCallback, useEffect, useState } from 'react';
import './DigmonMain.css'
import axios from 'axios';
import imgDigmon from '../images/DigmonImage.png'
import { Grid } from '@chakra-ui/react';

const DigmonMain = () => {
    const[dataDigmon,setDataDigmon] = useState([]);

    const fetchDigmonMain = useCallback(async ()=>{
        try{
            const {data} = await axios.get('https://digimon-api.vercel.app/api/digimon')
            setDataDigmon(data)
        }catch(error){
            console.error(error)
        }
    },[])

    const onClick = () =>{
        console.log(dataDigmon)
    }

    useEffect(()=>{
        fetchDigmonMain()
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
                            <button className='buttonMoreInfoContainer' onClick={onClick()}>More Info's</button>
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
                {/* <img className='logoHeaderContainer'return src="https://www.vhv.rs/dpng/d/509-5095436_digimon-png-file-digimon-adventure-png-transparent-png.png" alt="Logo"/> */}
                {renderDigmonMain()}
            </div>
        </header>
    )
}

export default DigmonMain;