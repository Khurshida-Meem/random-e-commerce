import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius};
    outline: none;
    border: none;
    font-size: ${(props) => props.fSize};
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
    margin-top: ${(props) => props.marginTop};
    box-shadow: 2px 2px 4px gray;

    &:hover {
    background-color: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverColor};
    margin-top: ${(props) => props.mt};
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
    box-shadow: 2px 2px 4px gray;

    &:hover {
      background-color: var(--color-yellow);
  }
`;

// export const CartButton = styled.button`
//   background-color: var(--color-light);
//   padding: 6px 20px 6px 20px;
//   border-radius: 4px;
//   border: none;
//   outline: none;
//   color: var(--color-primary);
//   font-size: 14px;
//   font-weight: 700;
//   cursor: pointer;
// `;

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
  min-height: ${(props) => props.height};
  max-width: ${(props) => props.width};

  &:hover
  {
    border: 1px solid var(--color-primary);
    box-shadow: 5px 5px 15px rgb(0 0 0 / 5%);
    
  }
`;

export const FooterCompo = styled.div`
color: var(--color-text);

&:hover{
  color: var(--color-primary);
}
`

