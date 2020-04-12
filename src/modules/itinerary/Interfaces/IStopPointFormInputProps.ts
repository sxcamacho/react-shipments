export default interface IStopPointFormInputProps {
  id?: string;
  test?: string;
  name: string;
  address: string;
  dispatch: Function;
  handleSubmit: Function;
  pristine: boolean;
  reset:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  submitting: boolean;
  invalid: boolean;
}