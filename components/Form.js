import { Form, Input, Select, Checkbox, Relevant, Debug } from "informed";

const onSubmit = ({ values }) => {
  console.log(values);
  this.reset();
};

const FormyBoi = () => (
  <Form onSubmit={onSubmit}>
    <Input name="title" label="title" placeholder="Elon" />
    <Input
      name="author"
      type="number"
      label="author"
      required="Author Required"
    />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default FormyBoi;
