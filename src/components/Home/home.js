import React from 'react';

const Home = (props) => {
    const { id, firstName, lastName, phoneNumber, address } = props;

    const textStyle = {
        color: 'white', // Set the text color to white
    };
    
    console.log(id, firstName, lastName, phoneNumber, address)
    return (
        <div>
            <h2 style={textStyle}>User Information</h2>
            <p style={textStyle}>ID: {id}</p>
            <p style={textStyle}>First Name: {firstName}</p>
            <p style={textStyle}>Last Name: {lastName}</p>
            <p style={textStyle}>Phone Number: {phoneNumber}</p>
            <p style={textStyle}>Address: {address}</p>
        </div>
    );
};

export default Home;
