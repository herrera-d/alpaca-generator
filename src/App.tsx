import { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import AlpacaViewer, {
    AlpacaConfigurationOption,
    TargetType,
} from './components/alpacaViewer/AlpacaViewer'
import CustomizationControls from './components/Customization'
import {
    ALPACA_CUSTOMIZATION_OPTIONS,
    CustomizationOption,
} from './const/buttons'
import { AlpacaInitialState } from './const/defaultStates'

const MainContent = styled('div')`
    text-align: center;
    @media (min-width: 820px) {
        display: grid;
        grid-template-columns: 36% minmax(380px, 1070px);
        grid-template-rows: 1fr;
        grid-gap: 30px;
        text-align: left;
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

const generateRandomIndex = (arrayLength: number): number =>
    Math.floor(Math.random() * arrayLength)

const getRandomAlpaca = () =>
    ALPACA_CUSTOMIZATION_OPTIONS.map((item) => {
        const { customizationOptions, target } = item as {
            customizationOptions: CustomizationOption[]
            target: TargetType
        }

        return {
            selectedTarget: target,
            selectedCustomization:
                customizationOptions[
                    generateRandomIndex(customizationOptions.length)
                ],
        }
    })

function App() {
    const [alpacaParts, setAlpacaParts] =
        useState<AlpacaConfigurationOption[]>(AlpacaInitialState)

    const makeRandomizedAlpaca = (): void => {
        const randomAlpaca = getRandomAlpaca()
        setAlpacaParts(randomAlpaca)
    }

    const updatePart = (
        selectedType: TargetType,
        selectedSubType: CustomizationOption
    ) => {
        let newAlpacaConfiguration = alpacaParts.map((item) => {
            if (item.selectedTarget === selectedType) {
                item.selectedCustomization = selectedSubType
                return item
            }
            return item
        }) as AlpacaConfigurationOption[]

        setAlpacaParts(newAlpacaConfiguration)
    }
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default App
