import { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import AlpacaViewer, {
    AlpacaConfigurationOption,
    TargetType,
} from './components/alpacaViewer/AlpacaViewer'
import CustomizationControls from './components/customizationControls/Customization'
import {
    ALPACA_CUSTOMIZATION_OPTIONS,
    CustomizationOption,
} from './const/buttons'
import { AlpacaInitialState } from './const/defaultStates'

const MainContent = styled('div')`
    text-align: center;
    margin: 0px auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 858px) {
        display: grid;
        width: 80vw;
        max-width: 1226px;
        grid-template-columns: 36% minmax(380px, 1070px);
        grid-template-rows: min-content;
        grid-gap: 30px;
    }

    @media (min-width: 400px) {
        width: 100vw;
    }
`

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
        <MainContent>
            <AlpacaViewer
                itemsToRender={alpacaParts}
                randomizerCallback={makeRandomizedAlpaca}
            />

            <CustomizationControls
                updatePart={updatePart}
                alpacaParts={alpacaParts}
            />
        </MainContent>
    )
}

export default App
