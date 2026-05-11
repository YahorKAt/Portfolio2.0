import {type ReactNode} from "react"
import styled from "styled-components"
import {AnimatePresence, motion} from "framer-motion"
import {useSlider} from "./useSlider"
import {StyledDots, StyledDot} from "./SliderDots"

type SliderSimpleProps = {
    items: ReactNode[]
}

export const SliderSimple: React.FC<SliderSimpleProps> = ({items}) => {
    const {active, setActive, handleTouchStart, handleTouchEnd} = useSlider(items.length)

    return (
        <StyledWrapper
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <StyledTrack $active={active} $total={items.length}>
                <AnimatePresence>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <StyledCard>{item}</StyledCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </StyledTrack>
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
    justify-content: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    gap: 16px;
`

const StyledTrack = styled.div<{ $active: number; $total: number }>`
    display: flex;
    width: ${({$total}) => $total * 100}%;
    transform: translateX(${({$active, $total}) => ($active / $total) * -100}%);
    transition: transform 0.4s ease;
`

const StyledCard = styled.div`
    flex: 1;
    padding: 0 8px;
`