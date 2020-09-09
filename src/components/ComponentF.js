import React ,{useState,useEffect,useContext} from 'react'
import {UserContext,LanguageContext} from '../App'

function ComponentF() {

  const user = useContext(UserContext)
  const language = useContext(LanguageContext)
  return (
    <>
      コンポF
      <div>{user.name}:{language}</div>
      {/* <UserContext.Consumer>
        {
          user => {
            return (
              <LanguageContext.Consumer>
                {
                  language => {
                    return <div>{user.name}:{language}</div>
                  }
                }
              </LanguageContext.Consumer>
            )
          }
        }
      </UserContext.Consumer> */}
    </>
  )
}

export default ComponentF