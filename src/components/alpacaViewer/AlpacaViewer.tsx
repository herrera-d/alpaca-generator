import { ReactElement, useRef, useState } from 'react'
import styled from 'styled-components'

import ViewerButtons from './ViewerButtons'
import { CustomizationOption } from '../../const/buttons'

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
    selectedCustomization: CustomizationOption
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
    width: 100%;
    height: 100%;
    object-fit: cover;
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
}) => `./assets/${selectedTarget}/${selectedCustomization}.png`

const renderAlpaca = (alpacaPortraitParts: AlpacaConfigurationOption[]) => {
    const upperLayerItems = ['eyes', 'mouth', 'accessories']

    const renderBackground = (
        selectedTarget: TargetType,
        selectedCustomization: CustomizationOption
    ) => (
        <Item
            src={`./assets/${selectedTarget}/${selectedCustomization}.png`}
            zIndex="0"
        />
    )

    return alpacaPortraitParts.map((item, index) => {
        const { selectedTarget, selectedCustomization } = item
        const zIndexValue = upperLayerItems.includes(selectedTarget) ? '2' : '1'

        if (selectedTarget === 'backgrounds') {
            renderBackground(selectedTarget, selectedCustomization)
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
