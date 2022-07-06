import React, { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LineChart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';
import { StoreContext } from "../../context/StoreContext";

 const Display = () => {
  const navigate = useNavigate();

  const { store } = useContext(StoreContext);  
  const [data, setData] = useState(store.data);

  useEffect(() => {
    if(!data.length) {
      navigate('/');
    }
    return () => {
    }
  }, [data]);

  return (
    <div>
        <LineChart apiData={data}/>
        <Table apiData={data}/>
    </div>
  )
}

export default Display;
