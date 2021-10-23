const LinksSocialMedia = {
  github: 'jeffreyRodriigues',
  youtube: 'jeffrey.rodriigues',
  facebook: 'jeffrey',
  instagram: 'jeffrey.rodrigues_',
  twitter: 'innocenciox'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    /* Template String */
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //fetch está consumindo a API do github e passando para as funções dentro da promisse .then
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//ARROW FUNCTIONS (dentro do then) = Forma contraída da função, exemplo: argumento => { }

// const LinksSocialMedia; PascalCase, começa com a primeira letra Maiúscula

//const linksSocialMedia; camelCase, começa com a primeiraletra minúscula
