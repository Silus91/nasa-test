import React, { useState,useContext,useEffect } from "react";
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useNavigate } from 'react-router-dom';
import { FETCH_DATA,LOADING_UI,STOP_LOADING_UI } from "../../types/types";
import { StoreContext } from "../../context/StoreContext";
import { loadingAction } from '../../actions/loaderHelper';
import M from "materialize-css";
import mapApi from '../../helpers/mapApi';

const Home = () => {

  const { dispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  const [state, setState] = useState({
    api: "",
    message:"",
  });

  useEffect(() => {
    M.AutoInit();
  }, []);

  let todayDate = new Date().toISOString().slice(0, 10);
  let sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${sevenDaysAgo}&=${todayDate}&api_key=${state.api}`;

  async function sendApiRequest () {
    const response = await fetch(url);
    const data = await response.json();
    if (response.status !== 200) {
      dispatch({ type:STOP_LOADING_UI})
      return setState({ ...state, message: "API KEY is wrong, please try again"})
    } else {
      setState({ ...state, message: ""})
      const mapData = await mapApi(data);
      loadingAction(dispatch, async () => {
        dispatch({ type: FETCH_DATA, payload: mapData });
      })
      return navigate('/display');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type:LOADING_UI})
    sendApiRequest();
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return(
    <div className='container'>
      <div className="center-align">
        <div className="card">
          <div className='card-header'> 
            <h2 className="header">NASA API</h2>
            Hhx2SH25TTzX5z1IhTqIUtaVYbzr1AKWeC6KpGqu
          </div>
        <div className="card-stacked">
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <TextInput
                type='text'
                name='api'
                className='validate'
                value={state.api}
                onChange={handleChange}
                htmlFor='NASA API'
                label='NASA API'
              />
              <Button
                text='submit'
                type='submit'
                className={
                  !state.api ? "btn disabled"
                    : "btn teal darken-2 z-depth-2"
                }
              />
            </form>
            <p className="red-text">{state.message}</p>
          </div>
          </div>
        </div>
      </div>
    </div>   
  )
}


export default Home;