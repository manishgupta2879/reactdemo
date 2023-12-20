import React from 'react';
import { Circles, ProgressBar } from  'react-loader-spinner';

const Loader = () => {
  return (
      <Circles
      height="100vh"
      width="100"
      color="#38bdf8"
      ariaLabel="audio-loading"
      wrapperStyle={{margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  )
}

export default Loader;