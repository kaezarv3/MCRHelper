import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const T1DownBouncingForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('Access Hours')[0]?.value}
Problem/Request Description: ${document.getElementsByName('Problem')[0]?.value}
Circuit ID: ${document.getElementsByName('Circuit ID')[0]?.value}
Circuit Address: ${document.getElementsByName('Circuit Address')[0]?.value}
Circuit CFA (Cable x Pair): ${document.getElementsByName('Circuit CFA')[0]?.value}
Power To ACD Equipment Verified: ${document.getElementsByName('Power Verified')[0]?.checked ? 'Yes' : 'No'}
Physical Connections To ACD Equipment Verified: ${document.getElementsByName('Physical Connections Verified')[0]?.checked ? 'Yes' : 'No'}
What is the result of the LS NIU MUX test? ${document.getElementsByName('LS NIU MUX Test')[0]?.value}
What is the result of the LS CSU MUX test? ${document.getElementsByName('LS CSU MUX Test')[0]?.value}
What is the result of the EBTA test? ${document.getElementsByName('EBTA Test')[0]?.value}
    `;

    navigator.clipboard.writeText(message)
      .then(() => alert("Message copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <AbsoluteCenter minWidth="85%">
      <Stack width="100%">
        <Box width="100%" borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
          <Fieldset.Root size="sm" invalid>
            <Fieldset.Content>
              <SmallField label="Contact Name:" name="name" />
              <SmallField label="Contact Number:" name="number" />
              <SmallField label="Access Hours:" name="Access Hours" />
              <BigField label="Problem/Request Description:" name="Problem" />
              <SmallField label="Circuit ID:" name="Circuit ID" />
              <SmallField label="Circuit Address:" name="Circuit Address" />
              <SmallField label="Circuit CFA (Cable x Pair):" name="Circuit CFA" />
              <CustomCheckbox name="Power Verified" text="Power To ACD Equipment Verified" />
              <CustomCheckbox name="Physical Connections Verified" text="Physical Connections To ACD Equipment Verified" />
              <BigField label="What is the result of the LS NIU MUX test?" name="LS NIU MUX Test" />
              <BigField label="What is the result of the LS CSU MUX test? (Only applies if NIU test was clean with sync)" name="LS CSU MUX Test" />
              <BigField label="What is the result of the EBTA test? (Only necessary if NIU MUX test is not available)" name="EBTA Test" />
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

T1DownBouncingForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default T1DownBouncingForm;
