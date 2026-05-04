import {useState, useRef, type ReactNode} from "react";
import styled from "styled-components";
import * as React from "react";
import {media} from "../styles/Theme.tsx";


type SliderProps = {
    items: ReactNode[];
    cardWidth?: number;
    sceneHeight?: number;
}

export const Slider:React.FC<SliderProps> = ({ items, cardWidth = 280, sceneHeight = 520}: SliderProps) => {
    const [active, setActive] = useState(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const prev = () => setActive(i => (i - 1 + items.length) % items.length);
    const next = () => setActive(i => (i + 1) % items.length);

    const getPosition = (index: number) => {
        const diff = index - active;
        const total = items.length;
        return ((diff + Math.floor(total / 2) + total) % total) - Math.floor(total / 2);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev();
        }
    };

    return (
        <StyledWrapper>
            {/* 3D слайдер — планшет */}
            <StyledScene3D
                $height={sceneHeight}
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    if (e.clientX > rect.left + rect.width / 2) {
                        next();
                    } else {
                        prev();
                    }
                }}
            >
                {items.map((item, index) => {
                    const pos = getPosition(index);
                    const isActive = pos === 0;
                    const isVisible = Math.abs(pos) <= 2;

                    return (
                        <StyledCard3D
                            key={index}
                            $pos={pos}
                            $isActive={isActive}
                            $isVisible={isVisible}
                            $width={cardWidth}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isActive) setActive(index);
                            }}
                        >
                            {item}
                        </StyledCard3D>
                    );
                })}
            </StyledScene3D>

            {/* Простой слайдер — мобилка */}
            <StyledSceneMobile
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <StyledTrack $active={active} $total={items.length}>
                    {items.map((item, index) => (
                        <StyledCardMobile key={index}>
                            {item}
                        </StyledCardMobile>
                    ))}
                </StyledTrack>
            </StyledSceneMobile>

            <StyledDots aria-label="Slider navigation">
                {items.map((_, index) => (
                    <StyledDot
                        key={index}
                        $active={index === active}
                        onClick={() => setActive(index)}
                        aria-label={`Slide ${index + 1}`}
                        aria-current={index === active ? "true" : undefined}
                    />
                ))}
            </StyledDots>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    overflow: hidden;
`

const StyledScene3D = styled.div<{ $height: number }>`
    position: relative;
    width: 100%;
    height: ${({ $height }) => $height}px;
    perspective: 1200px;
    cursor: pointer;
    display: block;

    @media ${media.mobile} {
        display: none;
    }
`

const StyledCard3D = styled.div<{ $pos: number; $isActive: boolean; $isVisible: boolean; $width: number }>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({ $width }) => $width}px;

    transform: ${({ $pos }) => `
        translate(-50%, -50%)
        translateX(${$pos * 120}px)
        translateZ(${$pos === 0 ? 0 : -Math.abs($pos) * 80}px)
        rotateY(${$pos * -25}deg)
        scale(${$pos === 0 ? 1 : 1 - Math.abs($pos) * 0.12})
    `};

    opacity: ${({ $pos, $isVisible }) => {
        if (!$isVisible) return 0;
        if ($pos === 0) return 1;
        return 1 - Math.abs($pos) * 0.3;
    }};
    z-index: ${({ $pos }) => 10 - Math.abs($pos)};
    pointer-events: ${({ $isVisible }) => $isVisible ? "auto" : "none"};
    transition: transform 0.5s ease, opacity 0.5s ease;
    cursor: ${({ $isActive }) => $isActive ? "default" : "pointer"};
`

const StyledSceneMobile = styled.div`
    display: none;
    width: 100%;
    overflow: hidden;

    @media ${media.mobile} {
        display: block;
    }
`

const StyledTrack = styled.div<{ $active: number; $total: number }>`
    display: flex;
    width: ${({ $total }) => $total * 100}%;
    transform: translateX(${({ $active, $total }) => ($active / $total) * -100}%);
    transition: transform 0.4s ease;
`

const StyledCardMobile = styled.div`
    flex: 1;
    padding: 0 8px;
`

const StyledDots = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const StyledDot = styled.button<{ $active: boolean }>`
    width: ${({ $active }) => $active ? "24px" : "8px"};
    height: 8px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    transition: width 0.3s ease, background 0.3s ease;
    background: ${({ $active }) =>
    $active ? ({theme}) => theme.colors.text_primary : ({theme}) => theme.colors.border_color};
 
`