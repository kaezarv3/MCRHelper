import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const RealChoiceTVForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Problem/Request Description (include channel numbers): ${document.getElementsByName('Problem')[0]?.value}
Can the problem be replicated via the support test account? ${document.getElementsByName('Replicated Problem')[0]?.checked ? 'Yes' : 'No'}
Can you locate the customer-owned device connected to ACD equipment? ${document.getElementsByName('Device Located')[0]?.checked ? 'Yes' : 'No'}
Has the customer rebooted their device? ${document.getElementsByName('Device Rebooted')[0]?.checked ? 'Yes' : 'No'}
    `;

    navigator.clipboard.writeText(message)
      .then(() => alert("Message copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <AbsoluteCenter minWidth="85%">
      <Stack width="100%">
        <Box width="100%" borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
          <Fieldset.Root size="lg" invalid>
            <Fieldset.Content>
              <SmallField label="Contact Name:" name="name" />
              <SmallField label="Contact Number:" name="number" />
              <BigField label="Problem/Request Description (include channel numbers):" name="Problem" />
              <CustomCheckbox name="Replicated Problem" text="Can the problem be replicated via the support test account? (If yes, work directly with RCTV to resolve)" />
              <CustomCheckbox name="Device Located" text="Can you locate the customer-owned device connected to ACD equipment? (Generally this will be an AirCube)" />
              <CustomCheckbox name="Device Rebooted" text="Has the customer rebooted their device? (this is usually a Roku)" />
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

RealChoiceTVForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default RealChoiceTVForm;
