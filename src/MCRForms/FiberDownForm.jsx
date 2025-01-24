import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react"; 
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import PropTypes from 'prop-types'; 


const FiberDownForm = ({resetSelection}) => {
    const handleCopyToClipboard = () => {
        const message = `
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0].value}
Contact Number: ${document.getElementsByName('number')[0].value}
Access Hours: ${document.getElementsByName('Access Hours')[0].value}
Problem/Request Description: ${document.getElementsByName('Problem')[0].value}
TRF Policy Approval: ${document.getElementsByName('1')[0]?.checked ? 'Yes' : 'No'}
Power To ACD Equipment Verified:${document.getElementsByName('2')[0]?.checked ? 'Yes' : 'No'}
Physical Connections To ACD Equipment Verified (Fiber jumper is secure and not damaged/tightly coiled or bent): ${document.getElementsByName('3')[0]?.checked ? 'Yes' : 'No'}
Verify Interface/Port Operational Status: ${document.getElementsByName('4')[0]?.checked ? 'Yes' : 'No'}
Verify Interface/Port Administrative Status: ${document.getElementsByName('5')[0]?.checked ? 'Yes' : 'No'}
Are interface errors actively building? ${document.getElementsByName('6')[0]?.checked ? 'Yes' : 'No'}
Are there recent CO log events? ${document.getElementsByName('7')[0]?.checked ? 'Yes' : 'No'}
(If yes, does the terminating device uptime indicate power loss?) ${document.getElementsByName('8')[0]?.checked ? 'Yes' : 'No'}
        `;
    
        navigator.clipboard.writeText(message)
          .then(() => alert('Message copied to clipboard!'))
          .catch(err => console.error('Failed to copy text: ', err));
      };

  return (
    <AbsoluteCenter minWidth={'85%'}>
        <Stack width={'100%'}>
        <Box width='100%' borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
    <Fieldset.Root size="lg" invalid>
      <Fieldset.Content>
      <Field label="Notes" orientation="vertical">
          <Textarea name="notes" />
        </Field>
        <Field label="Contact Name:" orientation="vertical">
          <Input name="name" />
        </Field>
        <Field label="Contact Number:" orientation="vertical">
          <Input name="number" />
        </Field>
        <Field label="Access Hours" orientation="vertical">
            <Input name="Access Hours"/>
        </Field>
        <Field label="Problem/Request Description" orientation="vertical" >
            <Textarea name="Problem"/>
        </Field>
        <Checkbox name='1'>TRF Policy Approval</Checkbox>
        <Checkbox name='2'>Power To ACD Equipment Verified:</Checkbox>
        <Checkbox name='3'>Physical Connections To ACD Equipment Verified (Fiber jumper is secure and not damaged/tightly coiled or bent):</Checkbox>
        <Checkbox name='4'>Verify Interface/Port Operational Status:</Checkbox>
        <Checkbox name='5'>Verify Interface/Port Administrative Status:</Checkbox>
        <Checkbox name='6'>Are interface errors actively building?</Checkbox>
        <Checkbox name='7'>Are there recent CO log events?</Checkbox>
        <Checkbox name='8'>(If yes, does the terminating device uptime indicate power loss?)</Checkbox>
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