
import './App.css';

import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Container, Grid, Typography } from '@mui/material';
import TextFieldWrapper from './Components/FormsUI/Textfield/Index';
import Select from "./Components/FormsUI/SelectUI"
import countries from "./Data/countries.json"

import Radio from "./Components/FormsUI/RadioUi"
import Button from "./Components/FormsUI/ButtonUi"
import MultiSelect from './Components/FormsUI/MultipleSelectUI';

const initialState = {
  name: "",
  address: "",
  country: "",
  gender: "",
  hobbies: [],
}

const formValidation = Yup.object({
  name: Yup.string()
    .required('Required'),
  address: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  hobbies: Yup.array().min(1, 'At least one option must be selected'),
  gender: Yup.string().required("Required"),
})

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Formik
            initialValues={{ ...initialState }}
            validationSchema={formValidation}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} >
                  <Typography>
                    Your Details
                  </Typography>
                </Grid>
                <Grid item xs={12} >
                  <TextFieldWrapper
                    name="name"
                    label="Enter your name"
                  />
                </Grid>

                <Grid item xs={12} >
                  <Typography>
                    Address
                  </Typography>
                </Grid>

                <Grid item xs={12} >
                  <TextFieldWrapper
                    multiline={true}
                    rows={3}
                    name="address"
                    label="Enter you Address"
                  />
                </Grid>
                <Grid item xs={12} >
                  <Select
                    name="country"
                    label="Select your Country"
                    options={countries}
                  />
                </Grid>
                <Grid item xs={12} >
                  <Typography>
                    Your Details
                  </Typography>
                </Grid>
                <Grid item xs={12} >
                  <Radio
                    name="gender"
                    label="Select Your Gender"
                  />
                </Grid>
                <Grid item xs={12} >
                  <MultiSelect
                    name="hobbies"
                    label="Select your hobbies"
                    options={countries}
                  />
                </Grid>
                <Grid item xs={12} >
                  <Button type="submit">
                    Submit From
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid >
  )
}

export default App;
