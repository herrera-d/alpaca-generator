import React, { useEffect, useState } from 'react'
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
import {
    addEventListeners,
    checkIfMobile,
    generateRandomIndex,
    removeEventListeners,
} from './helpers/componentsHelpers'

const MainContent = styled('div')`
    text-align: center;
    margin: 0px auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1080px) {
        display: grid;
        width: 90vw;
        max-width: 1226px;
        grid-template-columns: 36% minmax(380px, 1070px);
        grid-template-rows: min-content;
        grid-gap: 30px;
    }

    @media (max-width: 400px) {
        width: 100vw;
        padding-bottom: 20px;
        display: flex;
        align-items: start;
        gap: 20px;
    }
`

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
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const makeRandomizedAlpaca = (): void => {
        const randomAlpaca = getRandomAlpaca()
        setAlpacaParts(randomAlpaca)
    }

    const updatePart = (
        selectedType: TargetType,
        selectedSubType: CustomizationOption
    ) => {
        const newAlpacaConfiguration = alpacaParts.map((item) => {
            if (item.selectedTarget === selectedType) {
                item.selectedCustomization = selectedSubType
                return item
            }

            return item
        }) as AlpacaConfigurationOption[]

        setAlpacaParts(newAlpacaConfiguration)
    }

    useEffect(() => {
        addEventListeners(checkIfMobile, setIsMobile)
        return () => removeEventListeners(checkIfMobile, setIsMobile)
    }, [isMobile])

    return (
        <MainContent>
            <AlpacaViewer
                itemsToRender={alpacaParts}
                randomizerCallback={makeRandomizedAlpaca}
            />

            <CustomizationControls
                updatePart={updatePart}
                alpacaParts={alpacaParts}
                isMobile={isMobile}
            />
        </MainContent>
    )
}

export default App
