import styled from 'styled-components'
import exportAsImage from '../../helpers/saveImage.js'

const ViewerButton = styled.button`
    width: 50%;
    border-radius: 0px;
    &:hover {
        background: #0d4e74;
    }
`

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 820px) {
        width: 60%;
    }
    @media (max-width: 460px) {
        position: relative;
        width: 100%;
    }
`

const ViewerButtons = ({
    alpacaContainerRef,
    randomizerCallback,
}: {
    alpacaContainerRef: React.RefObject<HTMLDivElement>
    randomizerCallback: () => void
}): JSX.Element => {
    const handleClick = () => {
        if (alpacaContainerRef.current) {
            exportAsImage(alpacaContainerRef.current, 'test')
        }
    }

    return (
        <ButtonsContainer>
            <ViewerButton onClick={handleClick}>EXPORT</ViewerButton>
            <ViewerButton
                onClick={() => {
                    randomizerCallback()
                }}
            >
                RANDOMIZE
            </ViewerButton>
        </ButtonsContainer>
    )
}

export default ViewerButtons
