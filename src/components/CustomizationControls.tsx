import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { UpdatePartProps } from '../App'
import { ALPACA_CUSTOMIZATION_OPTIONS } from '../const/alpaca'
import {
    TARGET_NAMES,
    backgroundColors,
    BackgroundColor,
} from '../const/buttons'

import {
    BackgroundColorCSSValue,
    CustomizationOption,
    TargetType,
} from '../types'

type handleClickProps = CustomizationOption & TargetType

type CustomizationControlsProps = (
    selectedType: TargetType,
    selectedSubType?: CustomizationOption
) => void

const StyledButton = styled('button')`
    margin: 5px;
    &.selected {
        border: 1px solid white;
    }
`

const BackgroundButton = styled('button')<{ color: BackgroundColor }>`
    margin: 6px;
    height: 38px;
    border-radius: 80%;
    background-color: ${(props) => (props.color ? `#${props.color}` : '')};

    &.selected {
        border: 1px solid white;
    }
`
const SelectOptionBtnsContainer = styled('div')`
    position: relative;
`
const RenderButtons = (
    buttons: TargetType[] | CustomizationOption[],
    config: {
        callback: (buttonselectedType: handleClickProps) => void
    },
    selectedTarget?: TargetType
) => {
    return buttons.map((value: CustomizationOption | TargetType) => {
        if (backgroundColors.includes(value as BackgroundColor)) {
            const backgroundColor = value as BackgroundColor
            return (
                <BackgroundButton
                    color={backgroundColor}
                    onClick={() => config.callback(value as handleClickProps)}
                    z-index="0"
                />
            )
        }
        return (
            <StyledButton
                className={`${value === selectedTarget ? 'selected' : ''}`}
                onClick={() => config.callback(value as handleClickProps)}
            >
                {value}
            </StyledButton>
        )
    })
}

const CustomizationControls = ({
    updatePart,
}: {
    updatePart: ({
        selectedTarget,
        selectedCustomization,
    }: UpdatePartProps) => void
}) => {
    const [selectedTarget, setSelectedTarget] = useState<TargetType>('hair')

    const getCustomizeOptionsBtns = (selectedType: TargetType) => {
        return ALPACA_CUSTOMIZATION_OPTIONS.find(
            (option) => option.target === selectedType
        )?.customizationOptions as CustomizationOption[]
    }

    const handleButtonClick = (
        selectedCustomization: CustomizationOption
    ): void => updatePart({ selectedTarget, selectedCustomization })

    const handleSelect = (selectedOption: TargetType) =>
        setSelectedTarget(selectedOption)

    return (
        <>
            <h2>Select what you want to customize</h2>

            {RenderButtons(
                TARGET_NAMES,
                {
                    callback: handleSelect,
                },
                selectedTarget
            )}
            <h2>Select customization option</h2>
            <SelectOptionBtnsContainer>
                {RenderButtons(getCustomizeOptionsBtns(selectedTarget), {
                    callback: handleButtonClick,
                })}
            </SelectOptionBtnsContainer>
        </>
    )
}

export default CustomizationControls
