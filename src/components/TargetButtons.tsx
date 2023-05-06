import { useEffect, useState } from 'react'

import { TargetType } from './alpacaViewer/AlpacaViewer'
import Button from './Button'

type ButtonListType =
    | {
          id: number
          name: TargetType
          isVisible: boolean
      }[]
    | undefined

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

const hideButtonsNotSelected = (buttonNameList: ButtonListType, id: number) =>
    buttonNameList?.map((item) => {
        if (item.id !== id) {
            return {
                ...item,
                isVisible: false,
            }
        }
        return item
    })

const resetVisibilityState = (buttonList: ButtonListType) =>
    buttonList?.map((item) => {
        return {
            ...item,
            isVisible: true,
        }
    })

const RenderButtonList = ({
    buttonList,
    handleClick,
    targetToCustomize,
}: {
    buttonList: ButtonListType
    handleClick: (buttonName: TargetType | undefined, id: number) => void
    targetToCustomize: TargetType | undefined
}) => (
    <>
        {buttonList &&
            buttonList.map(({ id, name, isVisible }) => {
                const configuration = {
                    id,
                    buttonName: name,
                    className: targetToCustomize && !isVisible ? 'fadeOut' : '',
                    onClick: (buttonName: TargetType) =>
                        handleClick(buttonName, id),
                    isVisible,
                }
                return <Button {...configuration} />
            })}
    </>
)

const SelectTargetButtons = ({
    buttonNameList,
    isMobile,
    setTargetToCustomizeCustomize,
    targetToCustomize,
}: {
    buttonNameList: TargetType[]
    isMobile: boolean
    setTargetToCustomizeCustomize: (buttonName: TargetType | undefined) => void
    targetToCustomize: TargetType | undefined
}) => {
    const [buttonList, setButtonList] = useState<ButtonListType>()
    const isSelectingCustomizatoin = buttonList?.some(
        ({ isVisible }) => isVisible === false
    )

    useEffect(() => {
        setButtonList(makeButtonList(buttonNameList))
    }, [buttonNameList])

    const handleClick = (buttonName: TargetType | undefined, id: number) => {
        setTargetToCustomizeCustomize(buttonName)
        if (isMobile) {
            setButtonList(hideButtonsNotSelected(buttonList, id))
        }
    }

    const handleBack = (buttonList: ButtonListType) => {
        setTargetToCustomizeCustomize(undefined)
        setButtonList(resetVisibilityState(buttonList))
    }

    return (
        <div>
            <h2>Select what you want to customize</h2>
            <RenderButtonList
                buttonList={buttonList}
                handleClick={handleClick}
                targetToCustomize={targetToCustomize}
            />
            {isMobile && isSelectingCustomizatoin && (
                <button onClick={() => handleBack(buttonList)}>Back</button>
            )}
        </div>
    )
}

export default SelectTargetButtons
