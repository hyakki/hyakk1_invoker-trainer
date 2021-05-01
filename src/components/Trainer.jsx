import React from 'react'
import * as data from './data.js'
import { equals } from './utils.js'

class Trainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orbs: [],
      slots: [
        {
          key: 'd',
          spell: null,
          ready: false,
        },
        {
          key: 'f',
          spell: null,
          ready: false,
        },
      ],
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

    if (this.state.slots[0].spell === spell.id) { return }

    this.setState({
      slots: [
        {
          ...this.state.slots[0],
          spell: spell.id,
          ready: true,
        },
        {
          ...this.state.slots[1],
          spell: this.state.slots[0].spell,
          ready: this.state.slots[0].ready,
        },
      ]
    })
  }
  handleSpells(k) {
    const allowed = ['d', 'f']
    const index = allowed.indexOf(k)

    if (index < 0) { return }

    const slot = this.state.slots[index]

    if (!slot.ready || slot.spell === null) { return }

    this.castSpell(slot.spell)
  }
  castSpell(i) {
    // alert(`Cast spell ${data.spells[i].name}`)

    const slots = [...this.state.slots]
    slots.find(f => f.spell === i).ready = false

    this.setState({
      slots,
    })
  }
  onKeyUp(e) {
    if (!this.isAllowed(e.key)) { return }

    this.handleOrbs(e.key)
    this.handleSlots(e.key)
    this.handleSpells(e.key)
  }
  render() {
    return (
      <>
        <h1 className="title">Invoker Trainer</h1>
        
        <div className="ui">
          <div className="ui-orbs">
            {this.state.orbs.map((i, index) => (
              <div className="ui-orb" key={index} >
                <img className="ui-orb__picture" src={data.orbs[i].picture} alt={data.orbs[i].name}/>
              </div>
            ))}
          </div>

          <div className="ui-items">
            {data.orbs.map((o, index) => (
              <div className="ui-item" key={index}>
                <div className="ui-item__letter">
                  {o.key}
                </div>
                <div className="ui-item__picture-outer">
                  <img src={o.picture} alt="" className="ui-item__picture"/>
                </div>
              </div>
            ))}

            {this.state.slots.map((s, index) => {
              const pictureSrc = s.spell !== null ? data.spells[s.spell].picture : data.icons.placeholder
              const readyClass = s.spell !== null && !s.ready ? 'is-in-cooldown' : ''

              return (
                <div className={`ui-item ${readyClass}`} key={index}>
                  <div className="ui-item__letter">
                    {s.key}
                  </div>
                  <div className="ui-item__picture-outer">
                    <img src={pictureSrc} alt="" className="ui-item__picture"/>
                  </div>
                </div>
              )
            })}

            <div className="ui-item">
              <div className="ui-item__letter">
                r
              </div>
              <div className="ui-item__picture-outer">
                <img src={data.icons.invoke} alt="" className="ui-item__picture"/>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Trainer
