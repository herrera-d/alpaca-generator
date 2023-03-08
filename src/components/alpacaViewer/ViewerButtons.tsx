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
    display: flex;
    justify-content: space-around;
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
