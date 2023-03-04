import { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import AlpacaViewer, {
    AlpacaConfigurationOption,
    TargetType,
} from './components/alpacaViewer/AlpacaViewer'
import CustomizationControls from './components/CustomizationControls'
import {
    ALPACA_CUSTOMIZATION_OPTIONS,
    CustomizationOption,
} from './const/buttons'

const MainContent = styled('div')`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 36% 2fr;
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
function App() {
    const AlpacaInitialState: AlpacaConfigurationOption[] = [
        {
            selectedTarget: 'hair',
            selectedCustomization: 'default',
        },
        {
            selectedTarget: 'eyes',
            selectedCustomization: 'default',
        },
        {
            selectedTarget: 'ears',
            selectedCustomization: 'tilt-backward',
        },
        {
            selectedTarget: 'leg',
            selectedCustomization: 'default',
        },
        {
            selectedTarget: 'mouth',
            selectedCustomization: 'default',
        },
        {
            selectedTarget: 'neck',
            selectedCustomization: 'default',
        },
        {
            selectedTarget: 'accessories',
        },
        {
            selectedTarget: 'backgrounds',
            selectedCustomization: '2A5CA7',
        },
        {
            selectedTarget: 'nose',
            selectedCustomization: '',
        },
    ]
    const [alpacaParts, setAlpacaParts] =
        useState<AlpacaConfigurationOption[]>(AlpacaInitialState)

    const makeRandomizedAlpaca = (): void => {
        const generateRandomIndex = (arrayLength: number): number =>
            Math.floor(Math.random() * arrayLength)

        const randomAlpaca = ALPACA_CUSTOMIZATION_OPTIONS.map((item) => {
            const { customizationOptions, target } = item as {
                customizationOptions: CustomizationOption[]
                target: TargetType
            }
            if (customizationOptions) {
                return {
                    selectedTarget: target,
                    selectedCustomization:
                        customizationOptions[
                            generateRandomIndex(customizationOptions.length)
                        ],
                }
            }
            return {
                selectedTarget: target,
            }
        })
        setAlpacaParts(randomAlpaca)
    }

    const updatePart = (
        selectedType: TargetType,
        selectedSubType?: CustomizationOption
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
