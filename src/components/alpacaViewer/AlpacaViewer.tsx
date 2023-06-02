import { ReactElement, useRef } from 'react'
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
    @media (max-width: 460px) {
        position: relative;
        width: 100%;
    }
    @media (min-width: 820px) {
        position: relative;
        width: 100%;
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
    @media (max-width: 820px) {
        width: 100%;
    }
`

const Wrapper = styled.div`
    position: sticky;
    width: 100%;

    top: 0px;
    max-width: 474px;
    @media (max-width: 820px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
