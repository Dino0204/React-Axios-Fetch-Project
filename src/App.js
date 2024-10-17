import axios from 'axios';
import './App.css';


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())   // 응답을 json으로 변경한 promise 반환 
// .then(json => {
//   console.log(`${json} ...fetch 데이터`)
// })

axios.get('https://jsonplaceholder.typicode.com/users/1')
.then(response => {
  console.log(response.data, `...axios 데이터`)
})




function App() {
  
  return (
    <div className="App">
      <h1>My - App</h1>
    </div>
  );
}

export default App;
