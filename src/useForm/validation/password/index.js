import { ERROR_STRINGS } from "../constants"

const MIN_LENGTH = 8
const MAX_LENGTH = 15
// 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

/**
 * Returns error strings for given password or null.
 */
export const onPasswordValidates = (pass) => {
  if (!pass || pass?.length === 0) return ERROR_STRINGS.PASSWORD_REQUIRED

  if (pass?.length < MIN_LENGTH || pass?.length > MAX_LENGTH) {
    return ERROR_STRINGS.VALID_PASSWORD_LENGTH
  }

  if (!pass.match(PASSWORD_REGEX)) return ERROR_STRINGS.VALID_PASSWORD

  return null
}
