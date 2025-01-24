import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const T1SlowSpeedsForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('Access Hours')[0]?.value}
Problem/Request Description: ${document.getElementsByName('Problem')[0]?.value}
Circuit ID: ${document.getElementsByName('Circuit ID')[0]?.value}
Circuit Address: ${document.getElementsByName('Circuit Address')[0]?.value}
Circuit CFA (Cable x Pair): ${document.getElementsByName('Circuit CFA')[0]?.value}
Are there any errors building on the assigned core interface? ${document.getElementsByName('Core Interface Errors')[0]?.value}
Are there any recent log events on the core device for the assigned interface? ${document.getElementsByName('Core Log Events')[0]?.value}
Does the graphing indicate saturation? ${document.getElementsByName('Saturation')[0]?.value}
What is the negotiated speed/duplex on the router's LAN port(s)? ${document.getElementsByName('Negotiated Speed')[0]?.value}
Were the speed tests to an ACD server speed test server? ${document.getElementsByName('ACD Speed Test')[0]?.checked ? 'Yes' : 'No'}
If speed test results are fine, what destinations experience the slow speeds? ${document.getElementsByName('Destinations')[0]?.value}
Are they connected via wireless or wired? ${document.getElementsByName('Connection Type')[0]?.value}
Are pings clean to the ACD modem/router/switch? ${document.getElementsByName('Ping Clean')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? ${document.getElementsByName('Device Pinged')[0]?.checked ? 'Yes' : 'No'} (If Yes, are the results clean? ${document.getElementsByName('Ping Results Clean')[0]?.checked ? 'Yes' : 'No'})
If the customer is not connected directly to the ACD modem/switch/router, perform a bypass test. Did results improve to expected speeds when bypassed? ${document.getElementsByName('Bypass Test Results')[0]?.checked ? 'Yes' : 'No'}
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
              <BigField label="Are there any errors building on the assigned core interface?" name="Core Interface Errors" />
              <BigField label="Are there any recent log events on the core device for the assigned interface? (If yes, does terminating device uptime indicate power loss?)" name="Core Log Events" />
              <BigField label="Does the graphing indicate saturation?" name="Saturation" />
              <SmallField label="What is the negotiated speed/duplex on the router's LAN port(s)?" name="Negotiated Speed" />
              <CustomCheckbox name="ACD Speed Test" text="Were the speed tests to an ACD server speed test server?" />
              <BigField label="If speed test results are fine, what destinations experience the slow speeds? (provide specific examples with traceroute if possible)" name="Destinations" />
              <BigField label="Are they connected via wireless or wired?" name="Connection Type" />
              <CustomCheckbox name="Ping Clean" text="Are pings clean to the ACD modem/router/switch?" />
              <CustomCheckbox name="Device Pinged" text="Can the customer device be pinged?" />
              <CustomCheckbox name="Ping Results Clean" text="(If Yes, are the results clean?)" />
              <CustomCheckbox name="Bypass Test Results" text="If the customer is not connected directly to the ACD modem/switch/router, perform a bypass test. Did results improve to expected speeds when bypassed?" />
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

T1SlowSpeedsForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default T1SlowSpeedsForm;
