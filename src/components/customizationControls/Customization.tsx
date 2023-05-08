import { useEffect, useState } from 'react'
import 'animate.css'
import styled from 'styled-components'
import {
    ALPACA_CUSTOMIZATION_OPTIONS,
    TARGET_NAMES as ButtonNames,
    CustomizationOption,
} from '../../const/buttons'
import {
    AlpacaConfigurationOption,
    TargetType,
} from '../alpacaViewer/AlpacaViewer'

import SelectTargetButtons from './TargetButtons'
import CustomizationButtons from './CustomizationButtons'
import {
    addEventListeners,
    checkIfMobile,
    removeEventListeners,
} from '../../helpers/componentsHelpers'

type CustomizationControlsProps = (
    selectedType: TargetType,
    selectedSubType: CustomizationOption
) => void

interface ButtonBacgkroundColor {
    color: string
}

const CustomControlsWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

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

const Customization = ({
    updatePart,
    alpacaParts,
}: {
    updatePart: CustomizationControlsProps
    alpacaParts: AlpacaConfigurationOption[]
}) => {
    const [targetToCustomize, setTargetToCustomizeCustomize] = useState<
        TargetType | undefined
    >(undefined)
    const [selectedOption, setSelectedOption] =
        useState<CustomizationOption>('default')
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

    useEffect(() => {
        addEventListeners(checkIfMobile, setIsMobile)
        return () => removeEventListeners(checkIfMobile, setIsMobile)
    }, [])

    return (
        <CustomControlsWrapper>
            <SelectTargetButtons
                buttonNameList={ButtonNames}
                isMobile={isMobile}
                setTargetToCustomizeCustomize={handleSelectPart}
                targetToCustomize={targetToCustomize}
            />

            <CustomizationButtons
                buttons={customizationButtons}
                callback={handleButtonClick}
                handleCustomization={handleCustomization}
                targetToCustomize={targetToCustomize}
                alpacaParts={alpacaParts}
            />
        </CustomControlsWrapper>
    )
}

export default Customization
