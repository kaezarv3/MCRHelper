import { Fieldset,  Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import SmallField from "@/components/ui/smallfield";
import BigField from "@/components/ui/bigField";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const ALLSERVICESVPNISSUESForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `

${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('1')[0].value}
Contact Number: ${document.getElementsByName('2')[0].value}
Access Hours: ${document.getElementsByName('3')[0].value}
Problem/Request Description: ${document.getElementsByName('4')[0].value}
TRF Policy Approval: ${document.getElementsByName('5')[0]?.checked ? 'Yes' : 'No'}
Customer description of issue: ${document.getElementsByName('6')[0]?.value}
IP or hostname of the remote host they are connecting to: ${document.getElementsByName('7')[0]?.value}
Is this a newly setup VPN? Has it ever worked? ${document.getElementsByName('8')[0]?.value}
Are there any specific associated error messages? ${document.getElementsByName('9')[0]?.value}
TCP MSS and MTU clamp in place or left to auto: ${document.getElementsByName('10')[0]?.value}
What is the actual expected service speed (If Speed Related)? ${document.getElementsByName('11')[0]?.value}
Does the graphing indicate saturation (If Speed Related)? ${document.getElementsByName('12')[0]?.checked ? 'Yes' : 'No'}
What is the set MTU on ACD CPE? Tried 1500? ${document.getElementsByName('13')[0]?.value}
Dropping packets to the CPE (Router/Switch/Modem) from closest core connection? ${document.getElementsByName('14')[0]?.checked ? 'Yes' : 'No'}
Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center? ${document.getElementsByName('15')[0]?.checked ? 'Yes' : 'No'}
Is there detectable packet loss to a specific destination host? ${document.getElementsByName('16')[0]?.checked ? 'Yes' : 'No'}
If Firewalled on ACD side (Edgerouters/Mikrotik) is the customers usable allowed through firewall? ${document.getElementsByName('17')[0]?.checked ? 'Yes' : 'No'}
Are pings clean to the ACD modem/router/switch? ${document.getElementsByName('18')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? (If Yes, are the results clean?) ${document.getElementsByName('19')[0]?.checked ? 'Yes' : 'No'}
`
    ;
    navigator.clipboard.writeText(message)
      .then(() => alert('Message copied to clipboard!'))
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  return (
    <AbsoluteCenter minWidth={'85%'}>
      <Stack width={'100%'}>
        <Box width='100%' borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
          <Fieldset.Root size="sm" invalid>
            <Fieldset.Content>
              <BigField label="Notes" name="notes"/>
              <SmallField label="Contact Name:" name="1"/>
              <SmallField label="Contact Number:" name="2"/>
              <SmallField label="Access Hours:" name="3"/>
              <BigField label="Problem/Request Description:" name="4"/>
              <BigField label="Customer description of issue:" name="6"/>
              <SmallField label="IP or hostname of the remote host they are connecting to:" name="7"/>
              <BigField label="Is this a newly setup VPN? Has it ever worked?" name="8"/>
              <BigField label="Are there any specific associated error messages?" name="9"/>
              <SmallField label="TCP MSS and MTU clamp in place or left to auto:" name="10"/>
              <SmallField label="What is the actual expected service speed (If Speed Related)?" name="11"/>
              <CustomCheckbox name="12" text="Does the graphing indicate saturation (If Speed Related)?"/>
              <SmallField label="What is the set MTU on ACD CPE? Tried 1500?" name="13"/>
              <CustomCheckbox name="5" text="TRF Policy Approval"/>
              <CustomCheckbox name="14" text="Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?"/>
              <CustomCheckbox name="15" text="Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?"/>
              <CustomCheckbox name="16" text="Is there detectable packet loss to a specific destination hosts?"/>
              <CustomCheckbox name="17" text="If Firewalled on ACD side (Edgerouters/Mikrotik) is the customers usable allowed through firewall?"/>
              <CustomCheckbox name="18" text="Are pings clean to the ACD modem/router/switch?"/>
              <CustomCheckbox name="19" text="Can the customer device be pinged? (If Yes, are the results clean?)"/>
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

ALLSERVICESVPNISSUESForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default ALLSERVICESVPNISSUESForm;
