import { useContext, useRef, useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';
import TrophyGallery from '/src/assets/trophy-gallery.mp3';
import ZeldaFileSelect from '/src/assets/zelda-file-select.mp3';
import MarioBubblaineUnderwater from '/src/assets/mario-bubblaine-underwater.mp3';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

interface Music {
    theme: string;
    filePath: string;
}

/**
 * Responsible for playing music depending on the user's chosen theme.
 * @returns play/pause button of theme music.
 */
function AudioManager() {
    const themeContext: Theme = useContext(ThemeContext);
    const [autoPlay, setAutoPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const musicList: Music[] = [
        {
            theme: 'dark',
            filePath: TrophyGallery,
        },
        {
            theme: 'zelda',
            filePath: ZeldaFileSelect,
        },
        {
            theme: 'mario',
            filePath: MarioBubblaineUnderwater,
        },
    ];

    const audioSource: string =
        musicList.find((item) => item.theme === themeContext.theme)?.filePath ??
        musicList[0].theme;

    /**
     * @returns Appropriate icon depending on if music is playing or not.
     */
    function MusicIcon() {
        if (audioRef.current?.paused === false) {
            return <MusicNoteIcon className='text-4xl' />;
        } else {
            return <MusicOffIcon className='text-4xl' />;
        }
    }

    /**
     * Using the audio reference, toggles play and pause state of music player.
     */
    function handleMusicState() {
        if (audioRef.current?.paused) {
            audioRef.current.play();
        } else {
            audioRef.current?.pause();
        }
    }

    return (
        <>
            <button
                className='rounded-r-2xl bg-gray-800 p-2 hover:bg-gray-700'
                onClick={handleMusicState}
            >
                <MusicIcon />
            </button>
            <audio
                ref={audioRef}
                autoPlay={autoPlay}
                src={audioSource}
                loop
                onPlay={() => setAutoPlay(true)}
                onPause={() => setAutoPlay(false)}
            ></audio>
        </>
    );
}

export default AudioManager;
