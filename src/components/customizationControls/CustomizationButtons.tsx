import { CustomizationOption } from '../../const/buttons'
import Button from '../Button'

import {
    AlpacaConfigurationOption,
    TargetType,
} from '../alpacaViewer/AlpacaViewer'

export type handleClickProps = CustomizationOption & TargetType

const getSelectedOption = (
    targetToCustomize: TargetType,
    alpacaParts: AlpacaConfigurationOption[]
) =>
    alpacaParts
        .map((item: AlpacaConfigurationOption) => {
            if (targetToCustomize === item.selectedTarget) {
                return item.selectedCustomization
            }
        })
        .filter(Boolean)

const CustomizationButtons = ({
    buttons,
    handleCustomization,
    targetToCustomize,
    alpacaParts,
}: {
    buttons: CustomizationOption[] | undefined
    callback: (buttonselectedType: handleClickProps) => void
    handleCustomization: (selectedOption: CustomizationOption) => void
    targetToCustomize: TargetType | undefined
    alpacaParts: AlpacaConfigurationOption[]
    selectedTarget?: TargetType
}) => {
    {
        return (
            <>
                <div>
                    {targetToCustomize &&
                        buttons?.map((button) => {
                            return (
                                <Button
                                    key={window.crypto.randomUUID()}
                                    id={Math.random()}
                                    className={
                                        button ===
                                        getSelectedOption(
                                            targetToCustomize,
                                            alpacaParts
                                        )[0]
                                            ? 'selected'
                                            : ''
                                    }
                                    buttonName={button}
                                    onClick={handleCustomization}
                                />
                            )
                        })}
                </div>
            </>
        )
    }
}

export default CustomizationButtons
