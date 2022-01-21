import React from 'react';
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
            
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-a.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online for Technology Delivery'
                backgroundImg='model-b.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Z'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-c.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-a.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panel'
                description='Money-back guarantee'
                backgroundImg='sol.png'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Proof Costs Less Than a New Roof Plus Solar Panels'
                backgroundImg='fumigate.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg='acc.jpg'
                leftBtnText='Shop Now'
               
            />
        </Container>
    );
}
    
export default Home;

const Container = styled.div`
    height: 100vh;
`
