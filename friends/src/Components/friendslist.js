import React, {useState, useEffect } from "react";
import FriendsCard from "./friendsCards";
import { axiosWithAuth } from "../Utils/axiosWithAuth.js"


const FriendList = ({friend, setFriend, newFriend}) => {

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res.data)
                setFriend(res.data)
            })
            .catch(error => console.log(error))
    }, [newFriend])




    return (
        <>
        {friend.map(friend => {
            return <FriendsCard key = {friend.id} friend = {friend} />
        })}
        </>

    )
}

export default FriendList;