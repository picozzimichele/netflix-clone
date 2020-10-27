import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {

    //We need series and films
    const { series } = useContent("series");
    const { films } = useContent("films");

    //We need slides

    const slides = selectionFilter({series, films});
    
    return <BrowseContainer slides={slides} />
}