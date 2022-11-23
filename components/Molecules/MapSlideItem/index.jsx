import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const ItemCard = styled.div`
display: flex;
justify-content: center;
margin: 3% 0 3% 0;
`
const ImageContainer = styled.div`
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 15px;
min-width: 10vw;
min-height: 15vh;
margin-right: 5%;
@media (max-width: 767px) {
    width: 30vw;
    height: 15vh;
}
`;

const FbInfo = styled.div`
width: 20vw;
display: flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 767px) {
    width: 40vw;
}
`
const FoodBankNameLink = styled.p`
color: black;
:hover {
    color: #108928;
}
`;

export default function MapSlideItem({ fb }) {

    return (
        <div>
            <ItemCard>
                <ImageContainer src={fb.foodBank_Image} ></ImageContainer>
                <FbInfo>
                    <FoodBankNameLink>
                        <Link href={`/foodBank/${fb.objectID}`}>
                            <a>{fb.program_name}</a>
                        </Link>
                    </FoodBankNameLink>
                    <div>
                        <b>2 miles away</b>
                        <p>{fb.location_address}</p>
                    </div>
                </FbInfo>

            </ItemCard>
        </div>
    )
}