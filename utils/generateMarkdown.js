// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return "## License";
  }

  return "";
}

// TODO: Create a function to generate markdown for README
var generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description


  ${data.description}


  ${renderLicenseSection(true)}

`;
}

module.exports = {
  renderLicenseBadge: renderLicenseBadge,
  renderLicenseLink: renderLicenseLink,
  renderLicenseSection: renderLicenseSection,
  generateMarkdown: generateMarkdown
};
