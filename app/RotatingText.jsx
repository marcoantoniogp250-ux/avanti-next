'use client';
import { useState, useEffect } from 'react';

const WORDS = ['MEI', 'famílias', 'empresas', 'você'];

export default function RotatingText() {
    const [index, setIndex] = useState(0);
    const [out, setOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setOut(true);
            setTimeout(() => {
                setIndex(i => (i + 1) % WORDS.length);
                setOut(false);
            }, 280);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`rotating-word ${out ? 'rotating-out' : 'rotating-in'}`}>
            {WORDS[index]}
        </span>
    );
}
