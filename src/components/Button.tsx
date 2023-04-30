import styled, { keyframes } from 'styled-components'
import { CustomizationOption } from '../const/buttons'
import { TargetType } from './alpacaViewer/AlpacaViewer'
import { handleClickProps } from './CustomizationButtons'

interface StyledButtonProps {
    key: number
}

const disapairAnimation = keyframes`
    0% { 
        transform: scale(1);
    }
    50% { 
        transform: scale(0.5);
    }
    100% { 
        transform: scale(0);
    }
`

const StyledButton = styled('button')<StyledButtonProps>`
    margin: 5px;
    &.selected {
        border: 1px solid white;
    }
    &.fadeOut {
        animation: ${disapairAnimation} 2s;
    }
`

const Button = ({
    id,
    buttonName,
    className,
    onClick,
    isVisible,
}: {
    buttonName: CustomizationOption | TargetType
    className?: string | undefined
    onClick: (buttonselectedType: handleClickProps) => void
    id: number
    isVisible?: boolean
}) => {
    if (isVisible) {
        return (
            <StyledButton
                key={id}
                className={className}
                onClick={() => onClick(buttonName as handleClickProps)}
            >
                {buttonName}
            </StyledButton>
        )
    }
    return <></>
}

export default Button
