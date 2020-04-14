import { SubmissionError } from "redux-form";
import { validateAddress } from "../../../../shared/services/validate-address";
import IError from "../../Interfaces/IError";
import IStopPoint from "../../Interfaces/IStopPoint";
import IValidateAddressResponse from "../../Interfaces/IValidateAddressResponse";
import { addStopPointWithReset, updateStopPointWithReset } from "../../../../redux/features/itinerary/itinerarySlice";

export const formValidation = (values: IStopPoint) => {
  const errors: IError = { name: '', address: ''};
  if(!values.name) {
    errors.name = 'Required';
  }
  if(!values.address) {
    errors.address = 'Required';
  }
  else if(values.address.length < 3) {
    errors.address = 'Must have at least 3 characters'
  }

  return errors;
}

export const validateAddressAndSubmit = async (values: IStopPoint, dispatch: Function) => {
  try {
    const response = await validateAddress(values.address);
    const responseData: IValidateAddressResponse = response.data;
    if (responseData.valid) {
      if(values.id) {
        dispatch(
          updateStopPointWithReset({
            id: values.id,
            name: values.name,
            address: values.address,
            formattedAddress: responseData.formattedAddress
          })
        );
      }
      else {
        dispatch(
          addStopPointWithReset({
            id: responseData.id,
            name: values.name,
            address: values.address,
            formattedAddress: responseData.formattedAddress
          })
        );
      }
    }
    else{
      throw new SubmissionError({
        address: "The address is unable to be validated",
        _error: "Submit failed!",
      });
    }
  } catch (error) {
    throw error;
  }
}