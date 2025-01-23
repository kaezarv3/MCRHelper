import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import PropTypes from "prop-types";

const ALLSERVICESVPNISSUESForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Notes: 
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0].value}
Contact Number: ${document.getElementsByName('number')[0].value}
Access Hours: ${document.getElementsByName('Access Hours')[0].value}
Problem/Request Description: ${document.getElementsByName('Problem')[0].value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
Customer description of issue: ${document.getElementsByName('Customer description of issue?')[0]?.value}
IP or hostname of the remote host they are connecting to: ${document.getElementsByName('IP or hostname of the remote host they are connecting to?')[0]?.value}
Is this a newly setup VPN? Has it ever worked? ${document.getElementsByName('Is this a newly setup VPN? Has it ever worked?')[0]?.value}
Are there any specific associated error messages? ${document.getElementsByName('Are there any specific associated error messages?')[0]?.value}
TCP MSS and MTU clamp in place or left to auto: ${document.getElementsByName('TCP MSS and MTU clamp in place or left to auto?')[0]?.value}
What is the actual expected service speed (If Speed Related)? ${document.getElementsByName('What is the actual expected service speed (If Speed Related)?')[0]?.value}
Does the graphing indicate saturation (If Speed Related)? ${document.getElementsByName('Does the graphing indicate saturation (If Speed Related)?')[0]?.checked ? 'Yes' : 'No'}
What is the set MTU on ACD CPE? Tried 1500? ${document.getElementsByName('What is the set MTU on ACD CPE? Tried 1500?')[0]?.value}
Dropping packets to the CPE (Router/Switch/Modem) from closest core connection? ${document.getElementsByName('Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?')[0]?.checked ? 'Yes' : 'No'}
Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center? ${document.getElementsByName('Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?')[0]?.checked ? 'Yes' : 'No'}
Is there detectable packet loss to a specific destination host? ${document.getElementsByName('Is there detectable packet loss to a specific destination hosts?')[0]?.checked ? 'Yes' : 'No'}
Are pings clean to the ACD modem/router/switch? ${document.getElementsByName('Are pings clean to the ACD modem/router/switch?')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? (If Yes, are the results clean?) ${document.getElementsByName('Can the customer device be pinged? (If Yes, are the results clean?)')[0]?.checked ? 'Yes' : 'No'}
`
    ;

    navigator.clipboard.writeText(message)
      .then(() => alert('Message copied to clipboard!'))
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  return (
    <AbsoluteCenter>
      <Stack>
        <Box maxW="xl" borderWidth="1px" padding="1.2rem">
          <Fieldset.Root size="lg" invalid>
            <Fieldset.Content>
              <Field label="Notes" orientation="horizontal">
                <Textarea name="notes" />
              </Field>
              <Field label="Contact Name:" orientation="horizontal">
                <Input name="name" />
              </Field>
              <Field label="Contact Number:" orientation="horizontal">
                <Input name="number" />
              </Field>
              <Field label="Access Hours:" orientation="horizontal">
                <Input name="Access Hours" />
              </Field>
              <Field label="Problem/Request Description:" orientation="horizontal">
                <Textarea name="Problem" />
              </Field>
              <Checkbox name="TRF Policy Approval">TRF Policy Approval</Checkbox>
              <Field label="Customer description of issue:" orientation="horizontal">
                <Textarea name="Customer description of issue?" />
              </Field>
              <Field label="IP or hostname of the remote host they are connecting to:" orientation="horizontal">
                <Input name="IP or hostname of the remote host they are connecting to?" />
              </Field>
              <Field label="Is this a newly setup VPN? Has it ever worked?" orientation="horizontal">
                <Textarea name="Is this a newly setup VPN? Has it ever worked?" />
              </Field>
              <Field label="Are there any specific associated error messages?" orientation="horizontal">
                <Textarea name="Are there any specific associated error messages?" />
              </Field>
              <Field label="TCP MSS and MTU clamp in place or left to auto:" orientation="horizontal">
                <Input name="TCP MSS and MTU clamp in place or left to auto?" />
              </Field>
              <Field label="What is the actual expected service speed (If Speed Related)?" orientation="horizontal">
                <Input name="What is the actual expected service speed (If Speed Related)?" />
              </Field>
              <Checkbox name="Does the graphing indicate saturation (If Speed Related)?">
                Does the graphing indicate saturation (If Speed Related)?
              </Checkbox>
              <Field label="What is the set MTU on ACD CPE? Tried 1500?" orientation="horizontal">
                <Input name="What is the set MTU on ACD CPE? Tried 1500?" />
              </Field>
              <Checkbox name="Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?">
                Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?
              </Checkbox>
              <Checkbox name="Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?">
                Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?
              </Checkbox>
              <Checkbox name="Is there detectable packet loss to a specific destination hosts?">
                Is there detectable packet loss to a specific destination hosts?
              </Checkbox>
              <Checkbox name="If Firewalled on ACD side (Edgerouters/Mikrotik) is the customer's usable allowed through firewall?">
                If Firewalled on ACD side (Edgerouters/Mikrotik) is the customers usable allowed through firewall?
              </Checkbox>
              <Checkbox name="Are pings clean to the ACD modem/router/switch?">
                Are pings clean to the ACD modem/router/switch?
              </Checkbox>
              <Checkbox name="Can the customer device be pinged? (If Yes, are the results clean?)">
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
