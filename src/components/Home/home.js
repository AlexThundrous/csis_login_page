import React, { useState } from 'react';

const Home = (props) => {
    const { id, firstName, lastName, phoneNumber, address, loadUser } = props;
    const [isEditing, setIsEditing] = useState(false);

    // State variables to store updated values
    const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    const [updatedLastName, setUpdatedLastName] = useState(lastName);
    const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(phoneNumber);
    const [updatedAddress, setUpdatedAddress] = useState(address);

    const handleUpdate = () => {
        const updatedData = {
            id,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            phoneNumber: updatedPhoneNumber,
            address: updatedAddress,
        };
        handleSaveClick(updatedData);
        setIsEditing(false);
        //window.location.reload();
    };

    const handleSaveClick = async (updatedProfile) => {
        try {
            fetch(`https://pure-tundra-05251-98cfe92c5280.herokuapp.com/update/${updatedProfile.id}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: updatedProfile.id,
                    first_name: updatedProfile.firstName,
                    last_name: updatedProfile.lastName,
                    phoneNumber: updatedProfile.phoneNumber,
                    address: updatedProfile.address,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error updating profile:', error);
                });
        } catch (error) {
            console.error('Error updating profile image:', error);
        }
    };

    const handleLogout = () => {
        // Reload the page to log the user out
        window.location.reload();
    };


    return (
        <div className="flex flex-col h-screen justify-center items-center">
             <div className="mt-4 mb-4">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        <i className="fas fa-sign-out-alt mr-2"></i> Logout
                    </button>
                </div>    
            <div className="bg-neutral-800 text-white p-4 rounded shadow-lg flex flex-col items-center">
                <h2 className="text-2xl mb-4">User Information</h2>
                <p>
                    <span className="font-semibold">ID:</span> {id}
                </p>
                {isEditing ? (
                    <>  
                        <div className="mt-4">
                            First Name:
                            <input
                                type="text"
                                value={updatedFirstName}
                                onChange={(e) => setUpdatedFirstName(e.target.value)}
                                className="bg-black text-white rounded mb-2 p-2"
                            />
                        </div>
                        <div className="mt-4">
                            Last Name:
                            <input
                                type="text"
                                value={updatedLastName}
                                onChange={(e) => setUpdatedLastName(e.target.value)}
                                className="bg-black text-white rounded mb-2 p-2"
                            />
                        </div>
                        <div className="mt-4">
                            Phone Number:
                            <input
                                type="text"
                                value={updatedPhoneNumber}
                                onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
                                className="bg-black text-white rounded mb-2 p-2"
                            />
                        </div>
                        <div className="mt-4">
                            Address:
                            <input
                                type="text"
                                value={updatedAddress}
                                onChange={(e) => setUpdatedAddress(e.target.value)}
                                className="bg-black text-white rounded mb-2 p-2"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <p className="mt-4">
                            <span className="font-semibold">First Name:</span> {updatedFirstName}
                        </p>
                        <p className="mt-4">
                            <span className="font-semibold">Last Name:</span> {updatedLastName}
                        </p>
                        <p className="mt-4">
                            <span className="font-semibold">Phone Number:</span> {updatedPhoneNumber}
                        </p>
                        <p className="mt-4">
                            <span className="font-semibold">Address:</span> {updatedAddress}
                        </p>
                    </>
                )}
                {isEditing ? (
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        <i className="fas fa-save mr-2"></i> Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        <i className="fas fa-edit mr-2"></i> Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
