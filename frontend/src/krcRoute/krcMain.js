import React from 'react';
import {useNavigate} from 'react-router-dom';

function KrcMain () {
    const navigate = useNavigate();

    const onClickMint = () => {
        navigate('/mint')
    }

    return (
        <div>
            krcMain
            <button onClick={onClickMint}>mint</button>
        </div>
    )
}

export default KrcMain;