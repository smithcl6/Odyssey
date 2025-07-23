import Modal from '@mui/material/Modal';

/**
 * Allows users to view/inspect images with a larger view port.
 * Relies on parent component to keep track of state.
 * @param inspectedImage read only string that links to image source
 * @param setInspectedImage used for updating state of inspectedImage
 * @returns an enlarged image as a Modal.
 */
function InspectedImage({
    inspectedImage,
    setInspectedImage,
}: {
    inspectedImage: string;
    setInspectedImage: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <Modal
            open={inspectedImage.length > 0}
            onClose={() => setInspectedImage('')}
        >
            <img
                className='absolute top-1/2 left-1/2 w-[90vw] -translate-1/2'
                src={inspectedImage}
            />
        </Modal>
    );
}

export default InspectedImage;
