import { ReactElement, useRef, useState } from 'react'
import styled from 'styled-components'

import ViewerButtons from './ViewerButtons'

interface AlpacaPartProps {
    zIndex?: string
}

export type TargetType =
    | 'hair'
    | 'eyes'
    | 'ears'
    | 'leg'
    | 'mouth'
    | 'neck'
    | 'nose'
    | 'accessories'
    | 'backgrounds'

export interface AlpacaConfigurationOption {
    selectedTarget: TargetType
    selectedCustomization?: string
}

export type AlpacaViewerProps = {
    itemsToRender: AlpacaConfigurationOption[]
    randomizerCallback: () => void
}

interface AlpacaPartProps {
    zIndex?: string
}

const AlpacaViewerContainer = styled('div')`
    position: relative;
    width: 100%;
    min-height: 386px;
    @media (min-width: 768px) {
        position: relative;
    }
`

const Item = styled.img<AlpacaPartProps>`
    position: absolute;
    height: 100%;
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
    selectedCustomization?: string
    selectedTarget: TargetType
}) =>
    selectedCustomization
        ? `assets/${selectedTarget}/${selectedCustomization}.png`
        : `assets/${selectedTarget}/${selectedTarget}.png`

const renderAlpaca = (alpacaPortraitParts: AlpacaConfigurationOption[]) => {
    const upperLayerItems = ['eyes', 'mouth', 'accessories']

    return alpacaPortraitParts.map((item, index) => {
        const { selectedTarget, selectedCustomization } = item
        const zIndexValue = upperLayerItems.includes(selectedTarget) ? '2' : '1'
        const isSelectedTargetAccesories = selectedTarget === 'accessories'

        if (selectedTarget === 'backgrounds') {
            return (
                <Item
                    src={`assets/${item.selectedTarget}/${item.selectedCustomization}.png`}
                    zIndex="0"
                />
            )
        }
        if (
            (isSelectedTargetAccesories && selectedCustomization) ||
            !isSelectedTargetAccesories
        ) {
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
    })
}

const AlpacaViewer = ({
    itemsToRender,
    randomizerCallback,
}: AlpacaViewerProps): ReactElement => {
    const [randomizedAlpaca, setRandomizedAlpaca] = useState<
        AlpacaViewerProps | undefined
    >()
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
