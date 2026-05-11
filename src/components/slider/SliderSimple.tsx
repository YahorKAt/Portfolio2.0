// components/slider/SliderSimple.tsx
import { type ReactNode } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { useSlider } from "./useSlider"
import { StyledDots, StyledDot } from "./SliderDots"

type SliderSimpleProps = {
    items: ReactNode[]
}

export const SliderSimple: React.FC<SliderSimpleProps> = ({ items }) => {
    const { active, setActive, next, prev, handleTouchStart, handleTouchEnd } = useSlider(items.length)

    return (
        <StyledWrapper>
            <StyledScene
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <StyledTrack $active={active} $total={items.length}>
                    <AnimatePresence>
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <StyledCard>{item}</StyledCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </StyledTrack>
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