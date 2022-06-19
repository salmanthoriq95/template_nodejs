// @ts-check

/**
 *
 * @param {object} payload
 * @param {boolean} payload.success
 * @param {any} [payload.data]
 * @param {string} [payload.message]
 * @returns {object}
 */
export default (payload) => ({
  success: payload.success,
  message: payload.message,
  data: payload.data,
});
