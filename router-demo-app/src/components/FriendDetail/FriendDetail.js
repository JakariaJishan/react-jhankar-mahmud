import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return (
        <div>
            <h3>this is friend details page {friendId}</h3>
            <h3>{details?.name}</h3>
            <h3>{details?.phone}</h3>
        </div>
    );
};

export default FriendDetail;