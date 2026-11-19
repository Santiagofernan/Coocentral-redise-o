export const openPrivacyPolicyModalEvent = "coocentral:open-privacy-policy-modal";
export const privacyPolicyPath = "/documentos/cooperativa/politica-de-privacidad.pdf";

export function requestPrivacyPolicyModal() {
  window.dispatchEvent(new Event(openPrivacyPolicyModalEvent));
}
