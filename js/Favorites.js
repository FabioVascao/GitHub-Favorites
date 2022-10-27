// Classe para conter a lógica dos dados
// Como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
      login: 'FabioVascao',
      name: "FabioVascão",
      public_repos: '50',
      followers: '1200',
      },
      {
        login: 'diego3g',
        name: "Diego Fernades",
        public_repos: '70',
        followers: '1500',
        }
    ]
  }
}

//Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }
  update() {
    this.removeAllTr();
    
    this.entries.forEach(user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector(`.user p`).textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row)
    })    
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove();
      })
  }

  createRow() {
    const tr = document.createElement('tr');

    tr.innerHTML = `
            <td class="user">
              <img src="https://github.com/diego3g.png" alt="Imagem de Diego Fernandes">
              <a href="https://github.com/diego3g" target="_blank">
                <p>Diego Fernandes</p>
                <span>diego3g</span>
              </a>
            </td>
            <td class="repositories">
              60
            </td>
            <td class="followers">
              2000
            </td>
            <td>
              <button class="remove">&times;</button>
            </td>
          `
    return tr
  }
  
}