import React from "react";

const UserData=({users})=>{
    return (
        <>
            {
                users.map((currUser)=>{
                    // const {id,firstName,lastName,email,age}=currUser;
                    const {id,name,email}=currUser;
                    const {city}=currUser.address;
                    console.log("This is userdata component.");
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            {/* <td>{firstName}</td>
                            <td>{lastName}</td> */}
                            <td>{email}</td>
                            <td>{city}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default UserData;