import { TargetType } from '../alpacaViewer/AlpacaViewer'
import Button from '../Button'

type ButtonListType =
    | {
          id: number
          name: TargetType
          isVisible: boolean
      }[]
    | undefined

const RenderButtonList = ({
    buttonList,
    handleClick,
    selectedButton,
}: {
    buttonList: ButtonListType
    handleClick: (buttonName: TargetType, id: number) => void
    selectedButton: TargetType | undefined
}) => (
    <>
        {buttonList &&
            buttonList.map(({ id, name }) => {
                const configuration = {
                    id,
                    buttonName: name,
                    className: name === selectedButton ? 'selected' : '',
                    onClick: (buttonName: TargetType) =>
                        handleClick(buttonName, id),
                }
                return (
                    <Button
                        key={window.crypto.randomUUID()}
                        {...configuration}
                    />
                )
            })}
    </>
)

const SelectTargetButtons = ({
    buttonList,
    setTargetToCustomizeCustomize,
    targetToCustomize,
    setHasSelectedTarget,
}: {
    buttonList: ButtonListType
    setTargetToCustomizeCustomize: (buttonName: TargetType) => void
    targetToCustomize: TargetType | undefined
    setHasSelectedTarget: (value: boolean) => void
}) => {
    const handleClick = (buttonName: TargetType) => {
        setTargetToCustomizeCustomize(buttonName)
        setHasSelectedTarget(true)
    }

    return (
        <div>
            {buttonList && (
                <>
                    <RenderButtonList
                        buttonList={buttonList}
                        handleClick={handleClick}
                        selectedButton={targetToCustomize}
                    />
                </>
            )}
        </div>
    )
}

export default SelectTargetButtons
