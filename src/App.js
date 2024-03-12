import './App.css';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import Modal_alarmBottom from './component/Modal_alarmBottom';

function App() {
  const [rowData, setRowData] =useState([
    {no : '1', title:'과연?' , sander:'홍길동', date :'20231111'},
    {no : '2', title:'과연?' , sander:'홍길동', date :'20231111'},
    {no : '3', title:'과연?' , sander:'홍길동', date :'20231111'}
    ]);
  const [columnDefs, setColumnDefs]= useState([
    {field:'no'},
    {field:'title'},
    {field:'sander'},
    {field:'date'}    
  ]);

  /*useEffect(()=>{
    axios({
        method:'GET',
        url:'notices'
    }).then(response => setRowData(response.data))
  })*/



  return (
  <div className='ag-theme-alpine'
     style={{height: 500}}>
    <Modal_alarmPage></Modal_alarmPage>
    <AgGridReact 
    rowData={rowData}
    columnDefs={columnDefs}/>
    <Modal_alarmBottom />
  </div>
  );
}
function Modal_alarmPage(){
  return(
    <div className="white-nav">
    <button>뒤로가기 고정</button> <h1> 보낸알림 = 알림보내기를 누를시 바껴야함 useState형식 사용해야함 </h1> <button>home고정</button> <button>알람고정</button> <button>사용자고정</button>
    </div>
  )
}

/*function Modal_alarmBottom(){
  return (
    <div className="bottom_button">
    <h4> <button> 받은 알림 조회  </button> <button> 알림보내기 = 누를시 버튼은 한개가 되고 큰 버튼창으로 변경 </button>  </h4>
    </div>

  )
}*/

export default App;