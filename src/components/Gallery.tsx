import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import photosList from '../data/photos.json';

interface ImageRect {
    top: number;
    left: number;
    width: number;
    height: number;
}

interface ImageItem {
    id: number;
    src: string;
    caption: string;
    spanClass: string;
}

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [initialRect, setInitialRect] = useState<ImageRect | null>(null);

    const images: ImageItem[] = photosList.map((src, i) => {
        let spanClass = "col-span-1 row-span-1";
        if (i % 9 === 0) spanClass = "col-span-2 row-span-2";
        else if (i % 5 === 0) spanClass = "col-span-2 row-span-1";
        else if (i % 7 === 0) spanClass = "col-span-1 row-span-2";

        // Extracting filename for caption
        const filename = src.split('/').pop() || `Image ${i}`;

        return {
            id: i,
            src,
            caption: `Observation Study No. ${i + 101} — ${filename}`,
            spanClass
        };
    });

    const openLightbox = (e: React.MouseEvent<HTMLDivElement>, img: ImageItem) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setInitialRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        });
        setSelectedImage(img);
        setIsClosing(false);
        setIsAnimating(false);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        });
    };

    const closeLightbox = () => {
        setIsClosing(true);
        setIsAnimating(false);
        setTimeout(() => {
            setSelectedImage(null);
            setInitialRect(null);
            setIsClosing(false);
        }, 500);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.gallery-img');
        for (const el of elements) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 md:gap-4 grid-flow-dense">
                {images.map((img) => (
                    <div
                        key={img.id}
                        onClick={(e) => openLightbox(e, img)}
                        className={`gallery-img group relative cursor-crosshair overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out ${img.spanClass}`}
                    >
                        <img
                            src={img.src}
                            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            loading="lazy"
                            alt={`Gallery ${img.id}`}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm transition-opacity duration-500 ${isAnimating && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    <img
                        src={selectedImage.src}
                        className="fixed transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[105]"
                        style={{
                            top: isAnimating && !isClosing ? '50%' : `${initialRect?.top}px`,
                            left: isAnimating && !isClosing ? '50%' : `${initialRect?.left}px`,
                            width: isAnimating && !isClosing ? '90vw' : `${initialRect?.width}px`,
                            height: isAnimating && !isClosing ? '85vh' : `${initialRect?.height}px`,
                            transform: isAnimating && !isClosing ? 'translate(-50%, -50%)' : 'translate(0, 0)',
                            objectFit: isAnimating && !isClosing ? 'contain' : 'cover'
                        }}
                        alt="Fullscreen view"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div
                        className="absolute left-1/2 bg-white/90 backdrop-blur-md p-6 flex justify-between items-center shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[110] max-w-2xl"
                        style={{
                            bottom: '3rem',
                            transform: isAnimating && !isClosing ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, 20px) scale(0.9)',
                            opacity: isAnimating && !isClosing ? 1 : 0,
                            width: isAnimating && !isClosing ? '90%' : '50%'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b59410]">Archival Entry</span>
                            <p className="text-sm font-serif italic text-[#1a1a1a] truncate pr-4">{selectedImage.caption}</p>
                        </div>
                        <ChevronRight size={18} className="text-[#b59410] flex-shrink-0" />
                    </div>
                </div>
            )}
        </div>
    );
};
