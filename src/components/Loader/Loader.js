import React, { Fragment, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Loader.css";

const Loader = () => {

  const { store } = useContext(StoreContext);

  return (
    <Fragment>
      {store.loading === true ? (
        <div className='loaderContainer'>
          <div className='preloader-wrapper big active'>
            <div className='spinner-layer spinner-green-only'>
              <div className='circle-clipper left'>
                <div className='circle'></div>
              </div>
              <div className='gap-patch'>
                <div className='circle'></div>
              </div>
              <div className='circle-clipper right'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Loader;
