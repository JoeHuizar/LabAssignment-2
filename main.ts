

class Greeter {
  constructor(private firstName: string, private lastName: string) {
  }
    showGreeting() {
      const banner = document.getElementById('banner');
      banner.innerHTML = 'Hello '  + this.firstName + ' ' + this.lastName + '.';
    }
    hideGreeting() {
      const banner = document.getElementById('banner');
      banner.innerHTML = 'r1c2';
    }

}
const greeter = new Greeter("Joseph", "Huizar");