import { Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import PropTypes from "prop-types";

const BigField = ({ label, name }) => {
  return (
    <Field label={label} orientation="vertical">
      <Textarea name={name} />
    </Field>
  );
};

BigField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BigField;