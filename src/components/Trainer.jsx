import React from 'react'
import * as data from './data.js'
import { equals } from './utils.js'

class Trainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orbs: [],
      slots: [],
    }
  }
  componentDidMount() {
    this.onKeyUp = this.onKeyUp.bind(this)
    document.addEventListener('keydown', this.onKeyUp)
  }
  isAllowed(k) {
    const allowed = ['q', 'w', 'e', 'r', 'd', 'f']

    return allowed.indexOf(k) >= 0
  }
  handleOrbs(k) {
    const o = data.orbs.filter(d => d.key === k)

    if (o.length <= 0) { return }

    const [orb] = o

    const f = [...this.state.orbs, orb.id]

    this.setState({
      orbs: f.slice(-3),
    })
  }
  handleSlots(k) {
    if (k !== 'r') { return }

    const r = data.spells.filter(a => equals(a.combination.sort(), [...this.state.orbs].sort()))

    if (r.length <= 0) { return }

    const [spell] = r

    if (this.state.slots.indexOf(spell.id) >= 0) { return }

    this.setState({
      slots: [...this.state.slots, spell.id].slice(-2)
    })
  }
  onKeyUp(e) {
    if (!this.isAllowed(e.key)) { return }

    this.handleOrbs(e.key)
    this.handleSlots(e.key)
  }
  render() {
    return (
      <>
        <h1>Invoker Trainer</h1>
        <h2>
          Orbs: {JSON.stringify(this.state.orbs)}
        </h2>
        <h2>
          Orbs Human: {JSON.stringify(this.state.orbs.map(i => data.orbs[i].name))}
        </h2>
        <h2>
          Slots: {JSON.stringify(this.state.slots)}
        </h2>
        <h2>
          Slots Human: {JSON.stringify(this.state.slots.map(i => data.spells[i].name))}
        </h2>
      </>
    )
  }
}

export default Trainer
