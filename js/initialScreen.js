class InitialScreen {
	constructor(game) {
		this.game = game;
		this.form = document.createElement('form');

		this.setForm();
	}

	setForm() {
		this.form.innerHTML = `
      <form>
        <ol>
          <li>
            <input type="text" id="username" placeholder="Aquí tu nombre" />
          </li>
          <li><input type="submit" value="Comenzar" /></li>
        </ol>
      </form>
   `;

		this.form.addEventListener('submit', (e) => {
			e.preventDefault();

			const userName = this.form.querySelector('#username').value;

			if (!userName) return;

			this.game.start(userName);
		});
	}

	render(wrapper) {
		wrapper.appendChild(this.form);
	}
}
