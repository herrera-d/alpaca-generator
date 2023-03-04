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
`

const ViewerButtons = ({
    alpacaContainerRef,
    randomizerCallback,
}: {
    alpacaContainerRef: React.MutableRefObject<null>
    randomizerCallback: () => void
}): JSX.Element => (
    <ButtonsContainer>
        <ViewerButton
            onClick={() => exportAsImage(alpacaContainerRef.current, 'test')}
        >
            EXPORT
        </ViewerButton>
        <ViewerButton
            onClick={() => {
                randomizerCallback()
            }}
        >
            RANDOMIZE
        </ViewerButton>
    </ButtonsContainer>
)

export default ViewerButtons
