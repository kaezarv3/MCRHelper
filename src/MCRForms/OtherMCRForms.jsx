import { Button, Card, Image, AbsoluteCenter} from "@chakra-ui/react"
import PropTypes from "prop-types";

const OtherForms = ({ resetSelection }) => {

    const handleClick = () => {
        window.open("https://wiki.acd.net/index.php/Level_1_Support_Call_Flow_&_Troubleshooting", "_blank");
      };
    

 return (
<AbsoluteCenter>
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAd/pulp-fiction-john-travolta.gif"
        alt="You right now"
      />
      <Card.Body gap="2">
        <Card.Title>Visit the Wiki</Card.Title>
        <Card.Description>
            Usually navigating through the Lv1 support call flow wiki page will get you to where you need to be.
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button onClick={resetSelection} variant="solid">Go Back</Button>
        <Button onClick={handleClick}>Visit Wiki</Button>
      </Card.Footer>
    </Card.Root>
    </AbsoluteCenter>
    );
}

OtherForms.propTypes = {
    resetSelection: PropTypes.func.isRequired,
  };
  

export default OtherForms; 