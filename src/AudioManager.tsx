import { useContext, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface Music {
    theme: string;
    filePath: string;
}

function AudioManager() {
    const themeContext: Theme = useContext(ThemeContext);
    const [autoPlay, setAutoPlay] = useState(false);
    const musicList: Music[] = [
        {
            theme: 'dark',
            filePath: '/src/assets/trophy-gallery.mp3'
        },
        {
            theme: 'zelda',
            filePath: '/src/assets/zelda-file-select.mp3'
        },
        {
            theme: 'mario',
            filePath: '/src/assets/mario-bubblaine-underwater.mp3'
        }
    ];

    const audioSource: string = musicList.find(item => item.theme === themeContext.theme)?.filePath ?? musicList[0].theme;

    return (
        <audio autoPlay={autoPlay} controls loop src={audioSource} onPlay={() => setAutoPlay(true)} onPause={() => setAutoPlay(false)}></audio>
    );
}

export default AudioManager;