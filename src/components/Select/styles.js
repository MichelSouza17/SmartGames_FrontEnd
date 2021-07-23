import styled from "styled-components";

export const Container = styled.div`
    min-width: 320px;
    width: auto;
    position: relative;
    margin-top: 10px;
    
    display: flex;
    flex-direction: column;
    gap: 5px;

    select{
        height: 27px;
        font-size: 17px;
        border-radius: 4px;
        opacity: 50%;
        margin-bottom: 10px;
    }
    label{
        /* font-weight: bold; */
    }
`;