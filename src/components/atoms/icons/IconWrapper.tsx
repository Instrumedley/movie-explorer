import React from 'react';

interface IconWrapperProps {
    type: 'svg' | 'png';
    src: string;
    alt?: string;
    className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ type, src, alt, className }) => {
    switch (type) {
        case 'svg':
            return <img src={require(`${src}`).default} alt={alt} className={className} width={25} height={25}/>;
        case 'png':
            return <img src={src} alt={alt} className={className} width={25} height={25}/>;
        default:
            return null;
    }
};
