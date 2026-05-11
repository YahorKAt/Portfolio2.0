import {type ReactNode} from "react"
import styled from "styled-components"
import {AnimatePresence, motion} from "framer-motion"
import {useSlider} from "./useSlider"
import {StyledDots, StyledDot} from "./SliderDots"

type Slider3DProps = {
    items: ReactNode[]
    cardWidth?: number
    sceneHeight?: number
}

export const Slider3D: React.FC<Slider3DProps> = ({items, cardWidth = 280, sceneHeight = 520}) => {
    const {active, setActive, prev, next} = useSlider(items.length)

    const getPosition = (index: number) => {
        const diff = index - active
        const total = items.length
        return ((diff + Math.floor(total / 2) + total) % total) - Math.floor(total / 2)
    }

    return (
        <StyledWrapper>
            <StyledScene
                $height={sceneHeight}
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    if (e.clientX > rect.left + rect.width / 2) next(); else prev()
                }}
            >
                <AnimatePresence>
                    {items.map((item, index) => {
                        const pos = getPosition(index)
                        const isActive = pos === 0
                        const isVisible = Math.abs(pos) <= 2

                        return (
                            <motion.div
                                key={index}
                                layout
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                <StyledCard
                                    $pos={pos}
                                    $isActive={isActive}
                                    $isVisible={isVisible}
                                    $width={cardWidth}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        if (!isActive) setActive(index)
                                    }}
                                >
                                    {item}
                                </StyledCard>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </StyledScene>

            <StyledDots>
                {items.map((_, index) => (
                    <StyledDot
                        key={index}
                        $active={index === active}
                        onClick={() => setActive(index)}
                    />
                ))}
            </StyledDots>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    overflow: hidden;
`

const StyledScene = styled.div<{ $height: number }>`
    position: relative;
    width: 100%;
    height: ${({$height}) => $height}px;
    perspective: 1200px;
    cursor: pointer;
`

const StyledCard = styled.div<{ $pos: number; $isActive: boolean; $isVisible: boolean; $width: number }>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({$width}) => $width}px;

    transform: ${({$pos}) => `
        translate(-50%, -50%)
        translateX(${$pos * 120}px)
        translateZ(${$pos === 0 ? 0 : -Math.abs($pos) * 80}px)
        rotateY(${$pos * -25}deg)
        scale(${$pos === 0 ? 1 : 1 - Math.abs($pos) * 0.12})
    `};

    opacity: ${({$pos, $isVisible}) => {
        if (!$isVisible) return 0;
        if ($pos === 0) return 1;
        return 1 - Math.abs($pos) * 0.3;
    }};
    z-index: ${({$pos}) => 10 - Math.abs($pos)};
    pointer-events: ${({$isVisible}) => $isVisible ? "auto" : "none"};
    transition: transform 0.5s ease, opacity 0.5s ease;
    cursor: ${({$isActive}) => $isActive ? "default" : "pointer"};
`