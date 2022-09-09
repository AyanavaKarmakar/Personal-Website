interface Props {
  fullName: string;
  emailId: string;
  message: string;
}

export const EmailHandler = (props: Props) => {
  const { fullName, emailId, message } = props;

  return <>Email Handler</>;
};
