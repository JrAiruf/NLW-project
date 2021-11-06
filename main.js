const linksSocialMedia = {
  github: 'jrAiruf',
  youtube: 'UC51Ixzi6bWa3U2Y0pMtcqvg',
  facebook: 'Junim2019',
  instagram: 'jr_oliver.me',
  twitter: 'JniorAiruf'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      gitBio.textContent = data.bio
      gitHubUser.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
