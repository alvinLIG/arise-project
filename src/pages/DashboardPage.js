import React from 'react'

import MyImage from '@assets/dog.png';

const DashboardPage = () => {
  return (
    <div>
        <div>Welcome to my-webpack-react-starter!</div>
        <img src={MyImage} />
    </div>
  )
}

export default DashboardPage