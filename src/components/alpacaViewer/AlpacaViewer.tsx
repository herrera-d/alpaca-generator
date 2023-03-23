import { ReactElement, useRef, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
    AlpacaState,
    AlpacaStateOption,
    CustomizationOption,
    TargetType,
} from '../../types'

import ViewerButtons from './ViewerButtons'

type AlpacaViewerProps = {
    itemsToRender: AlpacaState
    randomizerCallback: () => void
}

interface AlpacaPartProps {
    zIndex?: string
}

const AlpacaViewerContainer = styled('div')`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`

const Item = styled.img<AlpacaPartProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    left: 0px;
    bottom: 0px;
    z-index: ${(props: AlpacaPartProps) => props.zIndex};
`

const Wrapper = styled.div`
    position: sticky;
    top: 0px;
`

const getItemImgPath = ({
    selectedCustomization,
    selectedTarget,
}: {
    selectedCustomization: CustomizationOption
    selectedTarget: TargetType
}) =>
    selectedCustomization
        ? `./assets/${selectedTarget}/${selectedCustomization}.png`
        : `./assets/${selectedTarget}/default.png`

const renderAlpaca = (alpacaPortraitParts: AlpacaState) => {
    const topLayerTargets = ['eyes', 'mouth', 'accessories']

    return alpacaPortraitParts.map(
        (item: AlpacaStateOption, index): ReactElement => {
            const { selectedTarget, selectedCustomization } = item
            const zIndexValue = topLayerTargets.includes(selectedTarget)
                ? '2'
                : '1'

            if (selectedTarget === 'backgrounds') {
                return (
                    <Item
                        src={`./assets/${item.selectedTarget}/${item.selectedCustomization}.png`}
                        zIndex="0"
                    />
                )
            }
            return (
                <Item
                    src={getItemImgPath({
                        selectedCustomization,
                        selectedTarget,
                    })}
                    zIndex={zIndexValue}
                    key={index}
                />
            )
        }
    )
}

const AlpacaViewer = ({
    itemsToRender,
    randomizerCallback,
}: AlpacaViewerProps): ReactElement => {
    const [randomizedAlpaca, setRandomizedAlpaca] =
        useState<AlpacaViewerProps>()
    const alpacaContainerRef = useRef<HTMLDivElement>(null)

    return (
        <Wrapper>
            <AlpacaViewerContainer ref={alpacaContainerRef}>
                {itemsToRender && renderAlpaca(itemsToRender)}
            </AlpacaViewerContainer>
            <ViewerButtons
                alpacaContainerRef={alpacaContainerRef}
                randomizerCallback={randomizerCallback}
            />
        </Wrapper>
    )
}

export default AlpacaViewer
