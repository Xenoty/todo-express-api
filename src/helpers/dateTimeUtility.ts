/**
 * Returns the current UNIX timestamp.
 *
 * @returns {Number}
 */
export function unixTimeStampInSeconds() {
  return Math.floor(Date.now() / 1000);
}
