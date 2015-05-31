import React from 'react'
import mixinContainer from './mixinContainer'
import assign from 'object-assign'

var AltContainer = React.createClass(assign({
  displayName: 'AltContainer',

  render: function () {
    return this.altRender('div')
  }
}, mixinContainer(React)))

export default AltContainer