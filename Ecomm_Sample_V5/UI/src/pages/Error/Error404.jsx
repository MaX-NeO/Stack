import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const onLoad = () => {
      document.querySelector('.err_principal').className = "err_principal err_error_active";
    };
    window.addEventListener('load', onLoad);
    
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  const handleRoute = ()=>{
    navigate('/')
  }
  return (
    <>
      {/* <div className='err-wrapper'> */}
        <div className="err_principal">
          <div className="err_error">
            <h1>Oops !</h1>
            <p>The Page you're looking for isn't here.
            </p>
            <br/>
            <button onClick={handleRoute} className='err_route_btn shadow'> Home </button>
          </div>
          <div className="err_aura_1" />
          <div className="err_aura_2" />

        </div>
      {/* </div> */}
    </>
  )
}

export default Error404