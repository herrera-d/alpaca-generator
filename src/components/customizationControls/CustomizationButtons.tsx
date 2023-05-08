import { CustomizationOption } from '../../const/buttons'
import Button from '../Button'

import {
    AlpacaConfigurationOption,
    TargetType,
} from '../alpacaViewer/AlpacaViewer'

export type handleClickProps = CustomizationOption & TargetType

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
    const getSelectedOption = (
        targetToCustomize: TargetType,
        alpacaParts: AlpacaConfigurationOption[]
    ) =>
        alpacaParts
            .map((item: AlpacaConfigurationOption) => {
                if (targetToCustomize === item.selectedTarget) {
                    console.log(
                        'targetToCustomize: ',
                        targetToCustomize,
                        'selectedCustomization: ',
                        item.selectedCustomization
                    )
                    return item.selectedCustomization
                }
            })
            .filter(Boolean)

    {
        return (
            <>
                {targetToCustomize && (
                    <div>
                        <h2>Customize</h2>
                        {targetToCustomize &&
                            buttons?.map((button) => {
                                return (
                                    <Button
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
                                        isVisible={true}
                                    />
                                )
                            })}
                    </div>
                )}
            </>
        )
    }
}

export default CustomizationButtons
