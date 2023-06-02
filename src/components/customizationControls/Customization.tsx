import { useState } from 'react'
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

type CustomizationControlsProps = (
    selectedType: TargetType,
    selectedSubType: CustomizationOption
) => void

type ButtonListType =
    | {
          id: number
          name: TargetType
          isVisible: boolean
      }[]
    | undefined

const CustomControlsWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled('h1')`
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    margin-top: 2rem;
`

const BackButton = styled.button`
    font-size: 1.2rem;
    width: 50%;
    margin: 0 auto;
    margin-top: 2rem;
`

const getCustomizeOptionsBtns = (selectedType: TargetType) => {
    return ALPACA_CUSTOMIZATION_OPTIONS.find(
        (option) => option.target === selectedType
    )?.customizationOptions as CustomizationOption[]
}

const makeButtonList = (buttonNameList: TargetType[]): ButtonListType => {
    const buttonList = buttonNameList.map(
        (buttonName: TargetType, index: number) => {
            return {
                id: index,
                name: buttonName,
                isVisible: true,
            }
        }
    )
    return buttonList
}

const Customization = ({
    updatePart,
    alpacaParts,
}: {
    updatePart: CustomizationControlsProps
    alpacaParts: AlpacaConfigurationOption[]
    isMobile: boolean
}) => {
    const [targetToCustomize, setTargetToCustomizeCustomize] = useState<
        TargetType | undefined
    >(undefined)
    const [selectedOption, setSelectedOption] =
        useState<CustomizationOption>('default')
    const [customizationButtons, setCustomizationButtons] =
        useState<CustomizationOption[]>()

    const [hasSelectedTarget, setHasSelectedTarget] = useState<boolean>(false)

    const handleButtonClick = (): void => {
        if (targetToCustomize && selectedOption) {
            updatePart(targetToCustomize, selectedOption)
            setHasSelectedTarget(false)
        }
    }

    const handleSelectPart = (part: TargetType) => {
        setTargetToCustomizeCustomize(part)
        setCustomizationButtons(getCustomizeOptionsBtns(part))
        setHasSelectedTarget(false)
    }

    const handleCustomization = (customization: CustomizationOption) => {
        setSelectedOption(customization)
        if (targetToCustomize) {
            updatePart(targetToCustomize, customization)
        }
    }

    return (
        <CustomControlsWrapper>
            <Title>Customize the alpaca</Title>
            {hasSelectedTarget ||
                (!hasSelectedTarget && selectedOption && (
                    <SelectTargetButtons
                        buttonList={makeButtonList(ButtonNames)}
                        setTargetToCustomizeCustomize={handleSelectPart}
                        targetToCustomize={targetToCustomize}
                        setHasSelectedTarget={setHasSelectedTarget}
                    />
                ))}
            {hasSelectedTarget && (
                <>
                    <CustomizationButtons
                        buttons={customizationButtons}
                        callback={handleButtonClick}
                        handleCustomization={handleCustomization}
                        targetToCustomize={targetToCustomize}
                        alpacaParts={alpacaParts}
                    />
                    <BackButton onClick={() => setHasSelectedTarget(false)}>
                        Back
                    </BackButton>
                </>
            )}
        </CustomControlsWrapper>
    )
}

export default Customization
