var notificationBox;

// --- setup
window.addEventListener('load', function () {
  document.body.innerHTML += '<div id="notificationBox"></div>';
  notificationBox = document.getElementById('notificationBox');
});

class notification {
  // --- constructor wich executes the rendering method
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

  // --- displays the notification as a HTML element and bind the kill method to a timeout
  render () {
    // - creating the DOM element
    this.html = document.createElement('div');
    this.html.setAttribute('class', 'notification');
    if (this.type) {
      this.html.setAttribute('class', 'notification ' + this.type);
    }
    this.html.innerHTML = this.text;

    // - creating the lifetime indication bar
    var lifetimebar = document.createElement('div');
    lifetimebar.setAttribute('class', 'lifetimebar');
    lifetimebar.style.animationDuration = this.lifetime + 'ms'; // apply the lifetime to the animationDuration so it ends when the notification gets killed

    this.html.appendChild(lifetimebar); // append the lifetimebar to the notification object

    // - create a button to kill the notification before the lifetime runs out
    var buCloseNotification = document.createElement('button');
    buCloseNotification.setAttribute('class', 'buCloseNotification');
    buCloseNotification.setAttribute('title', 'Close Notification');
    buCloseNotification.innerHTML = '&#10006;';
    buCloseNotification.addEventListener('click', this.kill.bind(this));

    this.html.appendChild(buCloseNotification);

    // - append the DOM element to the notificationBox
    notificationBox.appendChild(this.html);

    // - bind the kill function to a timeout
    setTimeout(this.kill.bind(this), this.lifetime);
  }

  // --- removes the HTML element from the DOM
  kill () {
    // console.log('killed!');
    this.html.remove();
  }
}
