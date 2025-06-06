import { useState } from 'react';

export default function FlagToggle(className?: any) {
    const [language, setLanguage] = useState<'en' | 'fr'>('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`h-6 w-6 overflow-hidden rounded-sm ${className}`}
            title={language === 'en' ? 'Switch to French' : 'Switch to English'}
        >
            {language === 'en' ? (
                <USFlag />
            ) : (
                <FranceFlag />
            )}
        </button>
    );
}

function USFlag() {
    return (
        <svg viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <rect width="7410" height="3900" fill="#b22234" />
            <g fill="#fff">
                {[...Array(6)].map((_, i) => (
                    <rect key={i} y={i * 600 + 300} width="7410" height="300" />
                ))}
            </g>
            <rect width="2964" height="2100" fill="#3c3b6e" />
            <g fill="#fff">
                {Array.from({ length: 9 }).map((_, row) =>
                    Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => {
                        const x = 247 + col * 494 + (row % 2 === 0 ? 0 : 247);
                        const y = 210 + row * 233;
                        return (
                            <polygon
                                key={`${row}-${col}`}
                                points={generateStarPoints(x, y, 122, 51)}
                            />
                        );
                    })
                )}
            </g>
        </svg>
    );
}

function FranceFlag() {
    return (
        <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <rect width="1" height="2" x="0" fill="#0055a4" />
            <rect width="1" height="2" x="1" fill="#fff" />
            <rect width="1" height="2" x="2" fill="#ef4135" />
        </svg>
    );
}

function generateStarPoints(cx: number, cy: number, outer: number, inner: number): string {
    const points = [];
    for (let i = 0; i < 10; i++) {
        const angle = Math.PI / 5 * i;
        const r = i % 2 === 0 ? outer : inner;
        const x = cx + r * Math.sin(angle);
        const y = cy - r * Math.cos(angle);
        points.push(`${x},${y}`);
    }
    return points.join(' ');
}
