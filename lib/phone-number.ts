export function isValidPhoneNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15 && /^\+?[0-9][0-9().\s-]*$/.test(phone);
}
