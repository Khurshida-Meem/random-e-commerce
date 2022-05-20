import React from 'react';
import { ButtonSecondary, Flex } from '../../../Element.styled';
import { BsArrowRightShort } from "react-icons/bs";


const LeftCompo = () => {
    return (
        <div style={{ padding: '30px' }} className='right-bg img-bg-small'>
        <h1 style={{ color: 'var(--color-text)', margin: '30px auto 20px auto' }}>Bring nature into your home</h1>
            <ButtonSecondary
                style={{marginTop: '20px'}}
                className='banner-button-container'
                padding='6px 14px'
                radius='3px'>
            <Flex>
                <span>Shop Now </span><BsArrowRightShort className='arrow' />
            </Flex>
        </ButtonSecondary>
    </div>
    );
};

export default LeftCompo;