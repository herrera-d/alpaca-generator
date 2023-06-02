import styled from 'styled-components'
import { CustomizationOption } from '../const/buttons'
import { TargetType } from './alpacaViewer/AlpacaViewer'
import { handleClickProps } from './customizationControls/CustomizationButtons'

interface StyledButtonProps {
    key: number
}

const StyledButton = styled('button')<StyledButtonProps>`
    margin: 8px;
    font-size: 1.2rem;
    &.selected {
        border: 1px solid white;
    }
`

const Button = ({
    id,
    buttonName,
    className,
    onClick,
}: {
    buttonName: CustomizationOption | TargetType
    className?: string | undefined
    onClick: (buttonselectedType: handleClickProps) => void
    id: number
}) => {
    return (
        <StyledButton
            key={id}
            className={className}
            onClick={() => onClick(buttonName as handleClickProps)}
        >
            {buttonName}
        </StyledButton>
    )

    return <></>
}

export default Button
