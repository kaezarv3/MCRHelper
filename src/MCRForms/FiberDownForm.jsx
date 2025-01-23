import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react"; 
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import PropTypes from 'prop-types'; 


const FiberDownForm = ({resetSelection}) => {
    const handleCopyToClipboard = () => {
        const message = `
Notes: 
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0].value}
Contact Number: ${document.getElementsByName('number')[0].value}
Access Hours: ${document.getElementsByName('Access Hours')[0].value}
Problem/Request Description: ${document.getElementsByName('Problem')[0].value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
Power To ACD Equipment Verified:${document.getElementsByName('Power To ACD Equipment Verified:')[0]?.checked ? 'Yes' : 'No'}
Physical Connections To ACD Equipment Verified (Fiber jumper is secure and not damaged/tightly coiled or bent): ${document.getElementsByName('Physical Connections To ACD Equipment Verified (Fiber jumper is secure and not damaged/tightly coiled or bent)')[0]?.checked ? 'Yes' : 'No'}
Verify Interface/Port Operational Status: ${document.getElementsByName('Verify Interface/Port Operational Status:')[0]?.checked ? 'Yes' : 'No'}
Verify Interface/Port Administrative Status: ${document.getElementsByName('Verify Interface/Port Administrative Status:')[0]?.checked ? 'Yes' : 'No'}
Are interface errors actively building? ${document.getElementsByName('Are interface errors actively building?')[0]?.checked ? 'Yes' : 'No'}
Are there recent CO log events? 
(If yes, does the terminating device uptime indicate power loss?) ${document.getElementsByName('Are there recent CO log events? (If yes, does the terminating device uptime indicate power loss?)')[0]?.checked ? 'Yes' : 'No'}
        `;
    
        navigator.clipboard.writeText(message)
          .then(() => alert('Message copied to clipboard!'))
          .catch(err => console.error('Failed to copy text: ', err));
      };

  return (
    <AbsoluteCenter>
        <Stack>
    <Box maxW="xl" padding='1.2rem'>
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
        <Field label="Access Hours" orientation="horizontal">
            <Input name="Access Hours"/>
        </Field>
        <Field label="Problem/Request Description" orientation="horizontal" >
            <Textarea name="Problem"/>
        </Field>
        <Checkbox>TRF Policy Approval</Checkbox>
        <Checkbox>Power To ACD Equipment Verified:</Checkbox>
        <Checkbox>Physical Connections To ACD Equipment Verified (Fiber jumper is secure and not damaged/tightly coiled or bent):</Checkbox>
        <Checkbox>Verify Interface/Port Operational Status:</Checkbox>
        <Checkbox>Verify Interface/Port Administrative Status:</Checkbox>
        <Checkbox>Are interface errors actively building?</Checkbox>
        <Checkbox>Are there recent CO log events?</Checkbox>
        <Checkbox>(If yes, does the terminating device uptime indicate power loss?)</Checkbox>
      </Fieldset.Content>
    </Fieldset.Root>
    </Box>
    <Button onClick={resetSelection}>
        Back to Selection
    </Button>
    <Button onClick={handleCopyToClipboard}>
          Copy to Clipboard
    </Button>
    </Stack>
    </AbsoluteCenter>
  )
}
FiberDownForm.propTypes = {
    resetSelection: PropTypes.func.isRequired,
  };
  


export default FiberDownForm; 