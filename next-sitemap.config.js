const siteUrl = 'https://aperezl.com'
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
