import { useContext } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface Music {
    theme: string;
    filePath: string;
}

function AudioManager() {
    const themeContext: Theme = useContext(ThemeContext);
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
        <audio controls loop src={audioSource}></audio>
    );
}

export default AudioManager;