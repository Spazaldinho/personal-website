import React from 'react';

interface WebringProps {
    isDarkMode?: boolean;
}

export default function Webring({ isDarkMode }: WebringProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="font-sans">
            <a href='https://queensu-webring.ca/#zparrihar.vercel.app?nav=prev' className="hover:opacity-100 opacity-60 transition-opacity">←</a>
            <a href='https://queensu-webring.ca/#zparrihar.vercel.app' target='_blank' rel="noreferrer" className="hover:opacity-100 opacity-80 transition-opacity">
                <img
                    src='https://queensu-webring.ca/assets/icons/cs/icon-black.png'
                    alt="Queen's Computing Webring"
                    style={{ width: '40px', height: 'auto', filter: isDarkMode ? 'invert(1)' : 'none' }}
                />
            </a>
            <a href='https://queensu-webring.ca/#zparrihar.vercel.app?nav=next' className="hover:opacity-100 opacity-60 transition-opacity">→</a>
        </div>
    );
}
