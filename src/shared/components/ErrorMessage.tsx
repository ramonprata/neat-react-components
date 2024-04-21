const ErrorMessage = (props: { errorMessage: string }) => {
  if (!props.errorMessage) {
    return null;
  }

  return (
    <div>
      <p>{props.errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
