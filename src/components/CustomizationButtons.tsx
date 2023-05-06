import { CustomizationOption } from '../const/buttons'
import Button from './Button'

import { TargetType } from './alpacaViewer/AlpacaViewer'

export type handleClickProps = CustomizationOption & TargetType

const CustomizationButtons = ({
    buttons,
    handleCustomization,
    targetToCustomize,
}: {
    buttons: CustomizationOption[] | undefined
    callback: (buttonselectedType: handleClickProps) => void
    handleCustomization: (selectedOption: CustomizationOption) => void
    targetToCustomize: TargetType | undefined

    selectedTarget?: TargetType
}) => {
    {
        return (
            <>
                targetToCustomize && (
                <div>
                    <h2>Select a customization option</h2>
                    {targetToCustomize &&
                        buttons?.map((button) => {
                            return (
                                <Button
                                    id={Math.random()}
                                    buttonName={button}
                                    className={
                                        selectedOption === button
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={handleCustomization}
                                    isVisible={true}
                                />
                            )
                        })}
                </div>
                )
            </>
        )
    }
}

export default CustomizationButtons
