import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import './App.css';
import logo1 from './assets/logo3.png' 
import Whatsapp from './assets/whatsapp.png' 
import telegram from './assets/telegram.png' 
import phone from './assets/phone.png' 
import mainlogo from './assets/mainlogo.png' 


function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      mobileNumber: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid mobile number')
        .required('Mobile number is required'),
    }),
    onSubmit: async (values) => {
      console.log("value =>", values);
    },
  });

  return (
    <>
      <div className="signup-container">
        <div className="upper-section flex-column d-flex align-items-center">
          <img className='mt-1' src={mainlogo} alt="" width={350} style={{zIndex: 30}}/>
            <img className='mb-4' src={logo1} alt="" height={240} style={{zIndex: 30}}/>
        </div>
        <div className="w-100 d-flex flex-column align-items-center" style={{ position: 'absolute' }}>
          <div className="card signup-card p-4" style={{ width: '400px' }}>
            <div className="text-center">
              {/* <h3>Prediction</h3> */}
            </div>
            <Form onSubmit={formik.handleSubmit}>
              
              {/* Name Field */}
              <FormGroup className="mb-3">
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  className={formik.touched.name && formik.errors.name ? 'is-invalid' : ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="invalid-feedback d-block">{formik.errors.name}</div>
                )}
              </FormGroup>

              {/* Mobile Number Field */}
              <FormGroup className="mb-3">
                <Label for="mobileNumber">Mobile Number</Label>
                <div className="input-group">
                  <span className="input-group-text">+91</span>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="number"
                    className={formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileNumber}
                  />
                </div>
                {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                  <div className="invalid-feedback d-block">{formik.errors.mobileNumber}</div>
                )}
              </FormGroup>

              {/* Submit Button */}
              <Button type="submit" color="primary" className="w-100">
                Contact Us
              </Button>
              <div className='d-flex mt-3' style={{justifyContent: 'space-evenly'}}>
                <img className='' src={Whatsapp} alt="" height={50}/>
                <img className='' src={telegram} alt="" height={50}/>
                <img className='' src={phone} alt="" height={50}/>
              </div>
            </Form>
          </div>
        </div>
        <div className="below-section"></div>
      </div>
    </>
  );
}

export default App;
