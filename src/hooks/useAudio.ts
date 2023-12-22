import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseAudioType = {
  playing: boolean;
  toggleSound: () => void;
  setPlaying: Dispatch<SetStateAction<boolean>>;
};

const useAudio = (url): UseAudioType => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  // TODO: Missing sounds:
  // - casteling
  // - check

  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { playing, toggleSound, setPlaying };
};

export default useAudio;
