import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" placeholder="username" />
                
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" placeholder="password" />

                <button onClick={props.clickHandler}>Submit</button>
            </div>
        ) : (
            <div>
                <button onClick={props.clickHandler}>Login</button>
            </div>
        )}
    </div>
  )
}

export default NavBarChild