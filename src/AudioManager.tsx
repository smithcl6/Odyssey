import { useContext, useRef, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

interface Music {
    theme: string;
    filePath: string;
}

function AudioManager() {
    const themeContext: Theme = useContext(ThemeContext);
    const [autoPlay, setAutoPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
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

    function MusicIcon() {
        if (audioRef.current?.paused === false) {
            return <MusicNoteIcon className="text-4xl" />;
        } else {
            return <MusicOffIcon className="text-4xl" />;
        }
    }

    function handleMusicState() {
        if (audioRef.current?.paused) {
            audioRef.current.play();
        } else {
            audioRef.current?.pause();
        }
    }

    return (
        <>
            <button className="bg-gray-800 hover:bg-gray-700 rounded-r-2xl p-2" onClick={handleMusicState}>
                <MusicIcon />
            </button>
            <audio ref={audioRef} autoPlay={autoPlay} src={audioSource} loop onPlay={() => setAutoPlay(true)} onPause={() => setAutoPlay(false)}></audio>
        </>
    );
}

export default AudioManager;