import React, {useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Inner, Overlay, Close } from "./styles/player";

export const PlayerContext = createContext(); //Context provides a way to pass data through the component tree without having to pass props down manually at every level.

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ src, ...restProps}) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>, 
        document.body //this tells the DOM element where to go, in this case over the whole body
    ) : null;
}

Player.Button = function PlayerButton({...restProps}) {
    const { showPlayer, setShowPlayer} = useContext(PlayerContext)

    return (
        <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...restProps}>
            Play
        </Button>
        )
}