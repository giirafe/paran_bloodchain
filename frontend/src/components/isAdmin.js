import React from 'react';

const isAdmin = () => {
    if (sessionStorage.getItem('walletInstance') === null){
        return false
    }
    else {
        return true
    }
}

export default isAdmin;