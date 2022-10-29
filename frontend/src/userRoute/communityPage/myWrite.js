import React from 'react'

function MyWrite () {
    const myAddress = JSON.parse(sessionStorage.getItem('walletInstance')).address
    
    return (
        <div>
            {myAddress}
        </div>
    )
}

export default MyWrite;