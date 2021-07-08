const validateHTTPS = (url) => (url.includes('https') ? url : `https://${url}`)

const validateUrl = (url) => {
  const includesProtocol = validateHTTPS(url)

  return /^(ftp|http|https):\/\/[^ "]+$/.test(includesProtocol)
}
