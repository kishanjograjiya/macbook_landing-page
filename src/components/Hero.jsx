import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MackBook Title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" muted autoPlay playsInline />

      <button>Buy</button>

      <p>From $1599 or $333/mo for 12 months</p>
    </section>
  );
};

export default Hero;
