"use client"

import { Play, Quote } from "lucide-react"
import { useState, useRef } from "react"

export function GuestReviews() {
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
        <section id="reviews" className="py-24 bg-card relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm tracking-[0.3em] uppercase">Testimonials</span>
                    <h2 className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
                        What <span className="text-primary">Guests Say</span>
                    </h2>
                    <div className="w-24 h-px bg-primary mx-auto mb-8" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Video Review */}
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-primary/10 -z-10 rounded-xl group-hover:border-primary/30 transition-colors duration-500" />

                        <div className="relative aspect-[9/16] max-w-[320px] mx-auto bg-black/40 overflow-hidden shadow-2xl border border-primary/20 rounded-lg">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                onClick={togglePlay}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            >
                                <source src="/videos/reviews/customer-review.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] cursor-pointer group/play"
                                    onClick={togglePlay}
                                >
                                    <div className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center bg-background/40 group-hover/play:scale-110 group-hover/play:border-primary transition-all duration-300">
                                        <Play className="w-6 h-6 text-primary fill-primary/20" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Decorative Label */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border border-primary/30 px-6 py-2 rounded-full shadow-lg z-20">
                            <span className="text-primary text-xs font-sans font-bold tracking-widest uppercase flex items-center gap-2">
                                <Play className="w-3 h-3 fill-primary" /> Live Review
                            </span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="relative">
                            <Quote className="w-12 h-12 text-primary/20 absolute -top-6 -left-6 -z-10" />
                            <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                                "An unforgettable evening with the best service in town"
                            </h3>
                            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                                Hear directly from our community. We pride ourselves on creating
                                a welcoming atmosphere where every guest feels like royalty.
                                Whether it's for the flavors or the vibes, our guests keep coming back.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-primary/10">
                            <p className="text-foreground font-sans font-bold italic tracking-wide">
                                Join our community of happy guests today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
