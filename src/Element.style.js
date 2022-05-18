import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: #3BB77E;
    color: #fff;
    padding: 0 20px;
    border-radius: ${(props) => props.radius};
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify};
`