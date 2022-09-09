interface Props {
  fullName: string;
  emailId: string;
  message: string;
}

export const EmailHandler = (props: Props) => {
  const { fullName, emailId, message } = props;
  console.log(fullName);
  console.log(emailId);
  console.log(message);
};
