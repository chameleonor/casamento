"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { MusicNotes, MusicNotesSimple } from "@phosphor-icons/react";

const VIDEO_ID = "5HLFBl7aa1A";

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        elementId: string,
        options: Record<string, unknown>
      ) => YTPlayer;
    };
  }
}

export default function MusicPlayer() {
  const playerRef = useRef<YTPlayer | null>(null);
  const unmutedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    function unmuteOnFirstInteraction() {
      if (unmutedRef.current || !playerRef.current?.unMute) return;
      unmutedRef.current = true;
      playerRef.current.unMute();
    }

    function createPlayer() {
      // Guards against React dev-mode double-invoking this effect: a second
      // `new YT.Player(id, ...)` call on an id already replaced by an
      // iframe returns a broken instance missing methods like unMute.
      const container = document.getElementById("yt-music-player");
      if (!container || container.childElementCount > 0) return;

      playerRef.current = new window.YT!.Player("yt-music-player", {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            setReady(true);
            e.target.playVideo();
            setPlaying(true);
          },
        },
      });
    }

    if (window.YT?.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    // Browsers block unmuted autoplay; unmute as soon as the visitor
    // interacts with the page at all, not just the toggle button.
    const events: (keyof WindowEventMap)[] = ["click", "keydown", "touchstart"];
    events.forEach((ev) => window.addEventListener(ev, unmuteOnFirstInteraction));
    return () => {
      events.forEach((ev) => window.removeEventListener(ev, unmuteOnFirstInteraction));
    };
  }, []);

  function toggle() {
    if (!playerRef.current?.unMute) return;
    unmutedRef.current = true;
    playerRef.current.unMute();
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setPlaying((p) => !p);
  }

  return (
    <>
      <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />
      <div className="fixed -bottom-full -left-full w-px h-px overflow-hidden" aria-hidden>
        <div id="yt-music-player" />
      </div>
      <button
        type="button"
        onClick={toggle}
        disabled={!ready}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-brown text-cream flex items-center justify-center shadow-lg hover:bg-rose-dark transition-colors disabled:opacity-50"
      >
        {playing ? (
          <MusicNotes size={20} weight="fill" className="animate-pulse" />
        ) : (
          <MusicNotesSimple size={20} weight="regular" />
        )}
      </button>
    </>
  );
}
