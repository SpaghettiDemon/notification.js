var notificationBox;

window.addEventListener('load', function () {
  document.body.innerHTML += '<div id="notificationBox"></div>';
  notificationBox = document.getElementById('notificationBox');
});

class notification {
  constructor (text, type, lifetime) {
    this.text = null;
    this.type = null;
    this.lifetime = 5000;

    if (text) {
      this.text = text;
    }
    if (type) {
      this.type = type;
    }
    if (lifetime) {
      this.lifetime = lifetime;
    }

    this.render();
  }

  render () {
    this.html = document.createElement('div');
    this.html.setAttribute('class', 'notification');
    this.html.innerHTML = this.text;

    // console.log(this.html);
    notificationBox.appendChild(this.html);
    setTimeout(this.kill.bind(this), this.lifetime);
  }

  kill () {
    // console.log('killed!');
    this.html.remove();
  }
}
