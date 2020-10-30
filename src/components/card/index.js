import React, { useState, useContext, createContext } from "react";
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Item,
    Entities,
    Image,
} from "./styles/card"

export const FeatureContext = createContext();

export default function Card ({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
        )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature ? (

        <Feature 
        {...restProps}
        src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>

        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src="images/icons/close.png" alt="close" />
            </FeatureClose>
        </Content>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
            <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}</Maturity>
            <FeatureText fontWeight="bold">
                {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
            </FeatureText>
        </Group>

        </Feature>

        ) : null;
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext) //Just passing props down from createContex()

    return <Item 
        onClick={() => {
            setItemFeature(item); //this is an object with data from Firebase
            setShowFeature(true); //setting show feature visible basically
        }}
        {...restProps}
        >
            {children}
        </Item>
}

Card.Image = function CardImage({ ...restProps }) { //only props or src, no need for children
    return <Image {...restProps } />
}