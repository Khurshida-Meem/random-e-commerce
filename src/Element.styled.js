import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 10px 20px;
    border-radius: ${(props) => props.radius};
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover,
  &:focus,
  &:active {
    background-color: var(--color-button-hover);
  }
`;

export const ButtonSecondary = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius};
    outline: none;
    border: none;
    font-size: ${(props) => props.font};
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--color-yellow);
  }
` 

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify};
`;

export const CardCustom = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 16px;
  transition: 0.3s;
  margin: 20px 20px 20px 0;

  &:hover
  {
    border: 1px solid var(--color-primary);
    box-shadow: 5px 5px 15px rgb(0 0 0 / 5%);
    
  }
`;

