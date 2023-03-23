import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import 'animate.css'
import styled from 'styled-components'
import {
    ALPACA_CUSTOMIZATION_OPTIONS,
    TARGET_NAMES as ButtonNames,
    CustomizationOption,
} from '../const/buttons'
import { TargetType } from './alpacaViewer/AlpacaViewer'

import SelectTargetButtons from './TargetButtons'
import CustomizationButtons from './CustomizationButtons'

type CustomizationControlsProps = (
    selectedType: TargetType,
    selectedSubType: CustomizationOption
) => void

interface ButtonBacgkroundColor {
    color: string
}

const BackgroundButton = styled('button')<ButtonBacgkroundColor>`
    margin: 6px;
    height: 38px;
    border-radius: 80%;
    background-color: ${(props) => (props.color ? props.color : '')};

    &.selected {
        border: 1px solid white;
    }
`

const getCustomizeOptionsBtns = (selectedType: TargetType) => {
    return ALPACA_CUSTOMIZATION_OPTIONS.find(
        (option) => option.target === selectedType
    )?.customizationOptions as CustomizationOption[]
}

const addEventListeners: <T extends (...args: any[]) => void>(
    checkIfMobile: T,
    setIsMobile: Dispatch<SetStateAction<boolean>>
) => void = (checkIfMobile, setIsMobile): void => {
    window.addEventListener('load', () => checkIfMobile(setIsMobile))
    window.addEventListener('resize', () => checkIfMobile(setIsMobile))
}

const removeEventListeners: <T extends (...args: any[]) => void>(
    checkIfMobile: T,
    setIsMobile: Dispatch<SetStateAction<boolean>>
) => void = (checkIfMobile, setIsMobile) => {
    window.removeEventListener('resize', () => checkIfMobile(setIsMobile))
    window.removeEventListener('load', () => checkIfMobile(setIsMobile))
}

const Customization = ({
    updatePart,
}: {
    updatePart: CustomizationControlsProps
}) => {
    const [targetToCustomize, setTargetToCustomizeCustomize] = useState<
        TargetType | undefined
    >(undefined)
    const [selectedOption, setSelectedOption] = useState<CustomizationOption>()
    const [customizationButtons, setCustomizationButtons] =
        useState<CustomizationOption[]>()
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleButtonClick = (): void => {
        if (targetToCustomize && selectedOption) {
            updatePart(targetToCustomize, selectedOption)
        }
    }

    const handleSelectPart = (part: TargetType | undefined) => {
        if (!part) {
            return setTargetToCustomizeCustomize(undefined)
        }
        setTargetToCustomizeCustomize(part)
        setCustomizationButtons(getCustomizeOptionsBtns(part))
    }

    const handleCustomization = (customization: CustomizationOption) => {
        setSelectedOption(customization)
        if (targetToCustomize) {
            updatePart(targetToCustomize, customization)
        }
    }

    const checkIfMobile = (
        setIsMobile: Dispatch<SetStateAction<boolean>>
    ): void => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
        }
    }

    useEffect(() => {
        addEventListeners(checkIfMobile, setIsMobile)
        return () => removeEventListeners(checkIfMobile, setIsMobile)
    }, [])

    return (
        <>
            <h2>Select what you want to customize</h2>

            <SelectTargetButtons
                buttonNameList={ButtonNames}
                isMobile={isMobile}
                setTargetToCustomizeCustomize={handleSelectPart}
                targetToCustomize={targetToCustomize}
            />

            <h2>Select a customization option</h2>
            <CustomizationButtons
                buttons={customizationButtons}
                callback={handleButtonClick}
                handleCustomization={handleCustomization}
                targetToCustomize={targetToCustomize}
            />
        </>
    )
}

export default Customization
