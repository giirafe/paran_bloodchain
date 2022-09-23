

function logout() {
    const out = () => {
        console.log('out')
    }

    return (
        <button type="button" onClick={out}>
            로그아웃
        </button>
    )
}

export default logout;