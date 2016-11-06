/** @babel */
/** @jsx etch.dom */
/* eslint-disable react/no-unknown-property */

import etch from 'etch'
import EtchComponent from '../etch-component'

export default class AtomLogo extends EtchComponent {
  render () {
    return (
      <img className='about-logo' src='../../../substance-ide.png'></img>
    )
  }
}
