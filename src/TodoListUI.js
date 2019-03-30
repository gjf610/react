import React from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input placeholder='todo info!' 
            style={{width: '300px', marginRight: '10px'}}
            value={props.inputValue}
            onChange={props.handleInputChange}
          />
          <Button type='primary' 
            onClick={props.handleBtnClick}
          >提交</Button>
          <List bordered style={{width: '300px', marginTop: '10px'}}
            dataSource={props.list}
            renderItem={item =>
            <List.Item onClick={index=>
              props.handleDeleteItem(index)
              }>{item}
            </List.Item>}
          />
        </div>
      </div>
  )
}

// class TodoListUI extends Component {

//   render(){
//     return(
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <div>
//           <Input placeholder='todo info!' 
//             style={{width: '300px', marginRight: '10px'}}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type='primary' 
//             onClick={this.props.handleBtnClick}
//           >提交</Button>
//           <List bordered style={{width: '300px', marginTop: '10px'}}
//             dataSource={this.props.list}
//             renderItem={item => (
//               <List.Item onClick={index=>this.props.handleDeleteItem(index)}>{item}</List.Item>)}/>
//         </div>
//       </div>
//     )
//   }
// }

export default TodoListUI