import { useState, useRef } from "react"

export const useSlider = (total: number) => {
    const [active, setActive] = useState(0)
    const touchStartX = useRef<number>(0)
    const touchEndX = useRef<number>(0)

    const safeActive = Math.min(active, total - 1)
    const prev = () => setActive(i => (i - 1 + total) % total)
    const next = () => setActive(i => (i + 1) % total)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX.current
        if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev()
        }
    }

    return { active: safeActive, setActive, prev, next, handleTouchStart, handleTouchEnd }
}