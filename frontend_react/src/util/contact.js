import { apiRequestExternal } from "./util.js";

const endpoint = `https://formspree.io/${process.env.REACT_APP_FORMSPREE_CONTACT_ID}`;

function submit(data) {
  return apiRequestExternal(endpoint, "POST", data);
}

const contact = { submit };

export default contact;
