export const sendMessage = (textMessage: string) => {
  const message = encodeURIComponent(textMessage);
  const phoneNumber = "5554981559983";

  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
  );
};
