import React from "react"
import { Container, Title, SubTitle } from "./styles/feature"

export function Feature ({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}

Feature.Title = function HeaderTitle({children, ...restProps}) {
    return ( <Title {...restProps}>{children}</Title>)
}

Feature.SubTitle = function HeaderSubTitle({children, ...restProps}) {
    return ( <SubTitle {...restProps}>{children}</SubTitle>)
}