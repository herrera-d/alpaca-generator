import { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import AlpacaViewer from './components/alpacaViewer/AlpacaViewer'
import CustomizationControls from './components/CustomizationControls'
import {
    ALPACA_CUSTOMIZATION_OPTIONS,
    ALPACA_DEFAULT_STATE,
} from './const/alpaca'
import {
    AlpacaConfiguration,
    AlpacaState,
    CustomizationOption,
    TargetType,
} from './types'

const MainContent = styled('div')`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 36% minmax(380px, 1070px);
        grid-template-rows: 1fr;
        grid-gap: 30px;
    }

    @media (max-width: 980px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-gap: 30px;
    }
`

const Wrapper = styled('div')`
    @media (min-width: 768px) {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const CustomControlsWrapper = styled('div')``
const ViewerContainer = styled('div')`
    position: sticky;
    top: 0px;
    overflow-x: hidden;
    padding-bottom: 22px;
`

export interface UpdatePartProps {
    selectedTarget: TargetType
    selectedCustomization: CustomizationOption
}

function App() {
    const AlpacaInitialState: AlpacaState = ALPACA_DEFAULT_STATE
    const [alpacaParts, setAlpacaParts] =
        useState<AlpacaState>(AlpacaInitialState)

    const makeRandomizedAlpaca = (): void => {
        const generateRandomIndex = (arrayLength: number): number =>
            Math.floor(Math.random() * arrayLength)

        const randomAlpaca = ALPACA_CUSTOMIZATION_OPTIONS.map(
            (item: AlpacaConfiguration) => {
                const { target, customizationOptions } = item

                return {
                    selectedTarget: target,
                    selectedCustomization:
                        customizationOptions[
                            generateRandomIndex(customizationOptions.length)
                        ],
                }
            }
        ) as AlpacaState

        setAlpacaParts(randomAlpaca)
    }

    const updatePart = ({
        selectedTarget,
        selectedCustomization,
    }: UpdatePartProps): void => {
        let newAlpacaConfiguration = alpacaParts.map((item) => {
            if (item.selectedTarget === selectedTarget) {
                item.selectedCustomization = selectedCustomization
                return item
            }
            return item
        })

        setAlpacaParts(newAlpacaConfiguration)
    }
    return (
        <MainContent>
            <ViewerContainer>
                <AlpacaViewer
                    itemsToRender={alpacaParts}
                    randomizerCallback={makeRandomizedAlpaca}
                />
            </ViewerContainer>
            <CustomControlsWrapper>
                <CustomizationControls updatePart={updatePart} />
            </CustomControlsWrapper>
        </MainContent>
    )
}

export default App
