export class ListOfClosable {
  constructor(element, content) {
    this.listRoot = element;
    this.content = [];
    content.forEach((c, i) => {
      this.content.push({
        li: document.createElement('li'),
        closed: true
      });
      const label = document.createElement('label');
      label.innerHTML = c.label + '<span></span>';

      const p = document.createElement('p');
      p.innerHTML = c.p;
      
      this.content[i].li.appendChild(label);
      this.content[i].li.appendChild(p);
      this.content[i].li.addEventListener('click', this.changeVisibility.bind(this, i));
      this.listRoot.appendChild(this.content[i].li);
    })
  }

  changeVisibility(index) {
    const listElement = this.content[index];
    if (listElement.closed) {
      listElement.li.classList.add('active');
    } else {
      listElement.li.classList.remove('active');
    }
    listElement.closed = ! listElement.closed;
  }
}