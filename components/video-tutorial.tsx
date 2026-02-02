"use client"

import { Play } from "lucide-react"
import { useState, useRef } from "react"

export function VideoTutorial() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm tracking-[0.3em] uppercase">Showcase</span>
                    <h2 className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
                        The <span className="text-primary">Vibe</span>
                    </h2>
                    <div className="w-24 h-px bg-primary mx-auto mb-8" />
                    <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
                        A virtual tour of the Basha experience.
                    </p>
                </div>

                <div className="relative group max-w-5xl mx-auto">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 border border-primary/20 -z-10 group-hover:border-primary/40 transition-colors duration-500" />

                    <div className="relative aspect-video bg-black/40 overflow-hidden shadow-2xl border border-primary/30">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            onClick={togglePlay}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        >
                            <source src="/videos/tutorial.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Custom Play Overlay */}
                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer group/play"
                                onClick={togglePlay}
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center bg-background/20 group-hover/play:scale-110 group-hover/play:border-primary transition-all duration-300">
                                    <Play className="w-8 h-8 text-primary fill-primary/20 group-hover/play:fill-primary/40" />
                                </div>
                            </div>
                        )}

                        {/* Bottom Info Bar */}
                        <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                            <span className="text-primary text-xs tracking-widest uppercase">Basha Cafe Official Tutorial</span>
                            <h3 className="text-white text-xl font-serif mt-1">Discover the Lounge Experience</h3>
                        </div>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary -translate-x-4 -translate-y-4" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary translate-x-4 translate-y-4" />
                </div>
            </div>
        </section>
    )
}
