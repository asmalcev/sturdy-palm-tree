export class ListOfClosable {
  constructor(element, content) {
    this.listRoot = element
    this.content = []
    content.forEach((c, i) => {
      this.content.push({
        label: document.createElement('label'),
        p: document.createElement('p'),
        closed: true
      })
      this.content[i].p.style['display'] = 'none'
      this.content[i].label.addEventListener('click', this.changeVisibility.bind(this, i))
      this.content[i].label.innerHTML = c.label
      this.content[i].p.innerHTML = c.p
      const li = document.createElement('li')
      
      li.appendChild(this.content[i].label)
      li.appendChild(this.content[i].p)
      this.listRoot.appendChild(li)
    })
  }

  changeVisibility(index) {
    const li = this.content[index]
    if (li.closed) {
      li.p.style['display'] = 'block'
    } else {
      li.p.style['display'] = 'none'
    }
    li.closed = ! li.closed
  }
}