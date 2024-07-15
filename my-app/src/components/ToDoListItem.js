import styled from "styled-components";

const Item = styled.li`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 1rem;
    background: ${props => props.index % 2 === 0 ? '#f8f9fa' : '#f1f3f5'};
    &:nth-child(even) {
        background: #f8f9fa;
    }
    &:nth-child(odd) {
        background: #e9ecef;
    }
`

const Text = styled.span`
    flex: 1;
    margin-left: 0.5rem;
    color: ${props => props.checked ? '#adb5bd' : '#495057'};
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`
const CheckBox = styled.input.attrs({type:'checkbox'})`
    cursor : pointer;
`

const RemoveButton = styled.button`
    margin-left: 0.5rem;
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background: #ff8787;
    }
`

const ToDoListItem = ({todo,onRemove,onToggle,index}) => {
    const {id,text,checked} = todo;

    return(
        <Item index={index}>
            <CheckBox checked={checked} onChange={()=>onToggle(id)}/>
            <Text checked={checked}>{text}</Text>
            <RemoveButton onClick={()=>onRemove(id)}삭제></RemoveButton>
        </Item>
    )
}

export default ToDoListItem