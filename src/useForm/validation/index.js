import { FORM_FIELDS } from "../../constants"
import { ERROR_STRINGS } from "./constants"
import { onPasswordValidates } from "./password"
import { isURL } from "./url"

// TODO: use a more robust and tested validation library.
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// Returns error not valid or null if no error.
// eslint-disable-next-line import/prefer-default-export
export const validate = (field, value) => {
  switch (field) {
    case FORM_FIELDS.BUSINESS_NAME:
      if (!value || value?.length === 0) return ERROR_STRINGS.BUSINESS_REQUIRED
      break
    case FORM_FIELDS.EMAIL:
      if (!value || value?.length === 0) return ERROR_STRINGS.EMAIL_REQUIRED
      if (value?.length && !EMAIL_REGEX.test(value))
        return ERROR_STRINGS.VALID_EMAIL_REQUIRED
      break
    case FORM_FIELDS.PASSWORD:
      return onPasswordValidates(value)
    case FORM_FIELDS.TICKETING_SYSTEM:
      if (!value) return ERROR_STRINGS.TICKETING_SYSTEM_REQUIRED
      break
    case FORM_FIELDS.URL:
      if (!value) return ERROR_STRINGS.URL_REQUIRED
      if (!isURL(value)) return ERROR_STRINGS.VALID_URL
      break
    default:
      break
  }
  return null
}
