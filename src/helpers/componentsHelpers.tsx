import { Dispatch, SetStateAction } from 'react'

export const addEventListeners: <T extends (...args: any[]) => void>(
    checkIfMobile: T,
    setIsMobile: Dispatch<SetStateAction<boolean>>
) => void = (checkIfMobile, setIsMobile): void => {
    window.addEventListener('load', () => checkIfMobile(setIsMobile))
    window.addEventListener('resize', () => checkIfMobile(setIsMobile))
}

export const removeEventListeners: <T extends (...args: any[]) => void>(
    checkIfMobile: T,
    setIsMobile: Dispatch<SetStateAction<boolean>>
) => void = (checkIfMobile, setIsMobile) => {
    window.removeEventListener('resize', () => checkIfMobile(setIsMobile))
    window.removeEventListener('load', () => checkIfMobile(setIsMobile))
}

export const checkIfMobile = (
    setIsMobile: Dispatch<SetStateAction<boolean>>
): void => {
    if (window.innerWidth <= 768) {
        return setIsMobile(true)
    }
    return setIsMobile(false)
}
