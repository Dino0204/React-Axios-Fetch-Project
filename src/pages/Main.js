import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'
import axios from 'axios'

function Main() {

  const [name,setName] = useState("김준혁")
  const [cnt,setCnt] = useState(0)
  
  const upCnt = () =>{
    setCnt(cnt + 1)
  }


  useEffect(() => {
    const LoadingAxios = async () => {
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        console.log(res)
      }catch(error){
        console.log(error)
      }
      LoadingAxios()
    }
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.container_card}>
        <header className={styles.container_card_header}>
          <span className={styles.line}>웹사이트</span>
          <span className={styles.line}>전화번호</span>
        </header>
        <main className={styles.container_card_main}>
          <span className={styles.line}>{name}</span>
          <span className={styles.line}>이메일</span>
          <button onClick={upCnt}>{cnt}</button>
        </main>
      </div>
    </div>
  )
}

export default Main
