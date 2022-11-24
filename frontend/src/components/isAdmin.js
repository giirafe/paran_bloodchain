import React from 'react';
import BloodContract from './BloodContract';

const isAdmin = () => {
    //const depart = sessionStorage.getItem('depart')
      
    if (sessionStorage.getItem('walletInstance') === null){
        return false
    }
    else {
        /*
        if (sessionStorage.getItem('auth') !== depart && (sessionStorage.getItem('auth') === 'InquiryPage' || sessionStorage.getItem('auth') === 'krcHome')) {
            return false
        }*/
        return true
    }
}

export default isAdmin;