import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const GreenBigBtn = styled.button`
    display:flex;
    background-color: #108928;
    border: none;
    color: white;
    border-radius: 10px;
    width: 80%;
    height: 50px;
    font-size: large;
    margin: 8% auto;
    box-shadow: 0px 6px 10px #979494;
    justify-content: center;
    align-items: center;
`;

const GreenSmallBtn = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #108928;
    border: none;
    color: white;
    border-radius: 5px;
    width: 110px;
    height: 30px;
    font-size: small;
    box-shadow: 0px 6px 10px #979494;
    margin: 5% auto;
    
`;


export default function GetDirectionGreenBtn({ address, onMap }) {

    return (
        <div>
            {onMap ?

                <GreenSmallBtn>
                    <Link href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}>
                        Get Directions
                    </Link>
                </GreenSmallBtn >

                :
                <GreenBigBtn>
                    <Link href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}>
                        Get Directions
                    </Link>
                </GreenBigBtn>
            }
        </div>
    )
}