import {Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack} from "@chakra-ui/react"; 
import PropTypes from 'prop-types'; 
import { Field } from "@/components/ui/field"
import CustomCheckbox from "@/components/ui/CustomCheckbox";
// import { List } from "@chakra-ui/react"

const FiberSlowSpeeds = ({resetSelection}) => {
    const handleCopyToClipboard = () => {
        const message = `
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0].value}
Contact Number: ${document.getElementsByName('number')[0].value}
Access Hours: ${document.getElementsByName('Access Hours')[0].value}
Problem/Request Description: ${document.getElementsByName('Problem')[0].value}
TRF Policy Approval: ${document.getElementsByName('1')[0]?.checked ? 'Yes' : 'No'}
Are interface errors actively building?: ${document.getElementsByName('2')[0]?.checked ? 'Yes' : 'No'}
Does the graphing indicate saturation?: ${document.getElementsByName('3')[0]?.checked ? 'Yes' : 'No'}
What is the negotiated speed/duplex on the router/modem's LAN port(s)?: ${document.getElementsByName('0')[0]?.value}
Were the speed tests to an ACD server speed test server?: ${document.getElementsByName('4')[0]?.checked ? 'Yes' : 'No'}
If speed test results are fine, what destinations experience the slow speeds?: ${document.getElementsByName('11')[0]?.value}
Verified customer CPU is not maxing out during test?: ${document.getElementsByName('5')[0]?.checked ? 'Yes' : 'No'}
Are they connected via wireless or wired?: ${document.getElementsByName('10')[0]?.value}
Are pings clean to the ACD modem/router/switch?: ${document.getElementsByName('6')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged?: ${document.getElementsByName('7')[0]?.checked ? 'Yes' : 'No'}
If the customer is not connected directly to the ACD modem/switch/router, perform a bypass test. Did results improve to expected speeds when bypassed?: ${document.getElementsByName('8')[0]?.checked ? 'Yes' : 'No'}
Try Iperf (if supported by the terminating ACD device)?: ${document.getElementsByName('9')[0]?.checked ? 'Yes' : 'No'}
        `;

        navigator.clipboard.writeText(message)
            .then(() => alert('Message copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <AbsoluteCenter minWidth={'85%'}>
        <Stack width={'100%'}>
          <Box width='100%' borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
                    <Fieldset.Root size="sm" invalid>
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
                            <Field label="Problem/Request Description" orientation="vertical">
                                <Textarea name="Problem"/>
                            </Field>
                            <CustomCheckbox name="1" text="TRF Policy Approval"/>
                            <CustomCheckbox name='2' text="Are interface errors actively building?"/>
                            <CustomCheckbox name="3" text="Does the graphing indicate saturation?"/>
                            <Field label="Negotiated speed/duplex" orientation="vertical">
                                <Input name="0" />
                            </Field>
                            <CustomCheckbox name="4" text="Were the speed tests to an ACD server speed test server?"/>
                            <Field label="If speed test results are fine, what destinations experience the slow speeds?:" orientation="vertical">
                                <Textarea name="11"/>
                            </Field>
                            <CustomCheckbox name="5" text="Verified customer CPU is not maxing out during test?"/>
                            <Field label="Connection type" orientation="vertical">
                                <Input name="10"/>
                            </Field>
                            <CustomCheckbox name="6" text="Are pings clean to the ACD modem/router/switch?"/>
                            <CustomCheckbox name="7" text="Can the customer device be pinged?"/>
                            <CustomCheckbox name="8" text="Perform a bypass test and evaluate results?"/>
                            <CustomCheckbox name="9" text="Try Iperf (if supported by the terminating ACD device)?"/>
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
    );
};

FiberSlowSpeeds.propTypes = {
    resetSelection: PropTypes.func.isRequired,
};


export default FiberSlowSpeeds;
