import {Fieldset,Box,AbsoluteCenter,Button,Stack} from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallField";
import CustomCheckbox from "@/components/ui/CustomCheckbox";
  
const IPBXLinesForm = ({ resetSelection }) => {
const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName("name")[0]?.value}
Contact Number: ${document.getElementsByName("number")[0]?.value}
Access Hours: ${document.getElementsByName("Access Hours")[0]?.value}
Problem/Request Description: ${document.getElementsByName("Problem")[0]?.value}
TRF Policy Approval: ${document.getElementsByName("TRF Policy Approval")[0]?.checked ? "Yes" : "No"}
    `;

    navigator.clipboard
    .writeText(message)
    .then(() => alert("Message copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
};

return (
    <AbsoluteCenter minWidth="85%">
    <Stack width="100%">
        <Box
        width="100%"
        borderWidth="1px"
        padding="1.2rem"
        maxH="80vh"
        overflowY="auto"
        >
        <Fieldset.Root size="lg" invalid>
            <Fieldset.Content>
                <SmallField label="Contact Name:" name="name" />
                <SmallField label="Contact Number:" name="number" />
                <SmallField label="Access Hours:" name="Access Hours" />
                <BigField label="Problem/Request Description:" name="Problem" />
                <CustomCheckbox text='TRF Policy Approval' name="TRF Policy Approval"/>
            </Fieldset.Content>
        </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
    </Stack>
    </AbsoluteCenter>
);
};

IPBXLinesForm.propTypes = {
resetSelection: PropTypes.func.isRequired,
};

export default IPBXLinesForm;