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
`

