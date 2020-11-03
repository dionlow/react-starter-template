import { ERROR_STRINGS } from "../constants"

// 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

/**
 * Returns error strings for given password or null.
 */
export const onPasswordValidates = (pass) => {
  if (!pass || pass?.length === 0) return ERROR_STRINGS.PASSWORD_REQUIRED

  if (pass?.length < 8 || pass?.length > 32) {
    return ERROR_STRINGS.VALID_PASSWORD_LENGTH
  }

  if (!pass.match(PASSWORD_REGEX)) return ERROR_STRINGS.VALID_PASSWORD

  return null
}
