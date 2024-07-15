import { useState,useCallback } from "react";
import styled from "styled-components";


const TodoInsertWrapper = styled.div`
    display: flex;
`;

const Input = styled.input`
    background: #96C4E6;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.0;
    color: white;
    flex: 1;
    &::placeholder {
        color: #dee2e6;
    }
`;

const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
        background: #adb5bd;
    }
`;

const ToDoInsert = ({onInsert}) => {

    const [value,setValue] = useState('');

    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback((e)=>{
        onInsert(value);
        setValue(''); // value 값 초기화

        e.preventDefault();
    },[onInsert,value]);

    return(
        <form onSubmit={onSubmit}>
            <TodoInsertWrapper>
                <Input placeholder="할 일을 입력하세요." value={value} onChange={onChange}/>
                <Button type="submit">▶</Button>
            </TodoInsertWrapper>
        </form>
    )

}

export default ToDoInsert