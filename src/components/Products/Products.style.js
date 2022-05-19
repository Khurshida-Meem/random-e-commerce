import styled from 'styled-components';


export const CategoryButton = styled.button`
    border: none;
    outline: none;
    font-size: 18px;
    margin-left: 10px;
    background-color: unset;
    cursor: pointer;
    color: var(--color-text);
    transition: 0.3s;

    &:hover,
    &:focus,
    &:active {
      color: var(--color-primary);
    }

`;