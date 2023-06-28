import axios from 'axios';
import './DigmonDetails.css'
import imgDigmon from '../images/DigmonImage.png'
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DigmonDetails = () => {
    const navigate = useNavigate();
    const [digmonDetails,setDigmonDetails] = useState([]);
    let {id} = useParams([]);

    const fetchDigmonDetails = useCallback(async () =>{
    try{
        const {data}= await axios.get(`https://digimon-api.vercel.app/api/digimon`)
            setDigmonDetails(data)
    }catch(error){
        console.error(error)
    }
},[])

    //Tentativa de selecionar o Digmon recebido por parametro
    // const filterDigmonDetail = () =>{
    //     return(
    //     digmonDetails.find(data =>{
    //         return data.name === id;
    //     })
    // ),[]}

    // console.log(filterDigmonDetail)

    useEffect(()=>{
        fetchDigmonDetails();
        // filterDigmonDetail();
    })
    
    const onClickGoToHome = () =>{
        navigate('/')
    }

    const onClickComeBack = () =>{
        navigate(-1)
    }

const renderDigmonDetails = () =>{
        return (
            <body className='bodyDetailsContainer'>
                <div className='mainDetailsContainer'>
                    {/* {filterDigmonDetail.map(data =>(
                        <div className='contentDetailsContainer'>
                            <h4>{data.name}</h4>
                            <h4>{data.level}</h4>
                            <img className='imgDetailsContainer' src={data.img} alt=''/>
                        </div>
                    ))} */}
                {digmonDetails.map(data => (
                        <div className='contentDetailsContainer'>
                            <h4>{data.name}</h4>
                            <h4>{data.level}</h4>
                            <img className='imgDetailsContainer' src={data.img} alt=''/>
                        </div>
                        ))}
                </div>
            </body>
        );
    }
    return(
        <header>
            <div className='headerDetailsContainer'>
                <img onClick={onClickGoToHome} className='logoHeaderDetailsContainer' src={imgDigmon} alt='Digmon logo'/>
                <h3 className='textHeaderDetailContainer'>Information about your Digimon selected:</h3>
                <div className='divButtonsContainer'>
                    <button className='buttonHomeDetailsContainer' onClick={onClickGoToHome}>Home</button>
                    <button className='buttonReturnDetailsContainer' onClick={onClickComeBack}>Return</button>
                </div>
                {renderDigmonDetails()}
            </div>
        </header>
    )
}
export default DigmonDetails;