import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack, HStack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import PropTypes from "prop-types";

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
              <Field label="Notes" orientation="vertical" width={''}>
                <Textarea name="notes" />
              </Field>
              <Field label="Contact Name:" orientation="vertical">
                <Input name="1" />
              </Field>
              <Field label="Contact Number:" orientation="vertical">
                <Input name="2" />
              </Field>
              <Field label="Access Hours:" orientation="vertical">
                <Input name="3" />
              </Field>
              <Field label="Problem/Request Description:" orientation="vertical">
                <Textarea name="4" />
              </Field>
              <Field label="Customer description of issue:" orientation="vertical">
                <Textarea name="6" />
              </Field>
              <Field label="IP or hostname of the remote host they are connecting to:" orientation="vertical">
                <Input name="7" />
              </Field>
              <Field label="Is this a newly setup VPN? Has it ever worked?" orientation="vertical">
                <Textarea name="8" />
              </Field>
              <Field label="Are there any specific associated error messages?" orientation="vertical">
                <Textarea name="9" />
              </Field>
              <Field label="TCP MSS and MTU clamp in place or left to auto:" orientation="vertical">
                <Input name="10" />
              </Field>
              <HStack>
                <Field label="What is the actual expected service speed (If Speed Related)?" orientation="vertical">
                  <Input name="11" />
                </Field>
              </HStack>
              <Checkbox name="12">
                Does the graphing indicate saturation (If Speed Related)?
              </Checkbox>
              <Field label="What is the set MTU on ACD CPE? Tried 1500?" orientation="vertical">
                <Input name="13" />
              </Field>
              <Checkbox name="5">TRF Policy Approval</Checkbox>
              <Checkbox name="14">
                Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?
              </Checkbox>
              <Checkbox name="15">
                Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?
              </Checkbox>
              <Checkbox name="16">
                Is there detectable packet loss to a specific destination hosts?
              </Checkbox>
              <Checkbox name="17">
                If Firewalled on ACD side (Edgerouters/Mikrotik) is the customers usable allowed through firewall?
              </Checkbox>
              <Checkbox name="18">
                Are pings clean to the ACD modem/router/switch?
              </Checkbox>
              <Checkbox name="19">
                Can the customer device be pinged? (If Yes, are the results clean?)
              </Checkbox>
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
