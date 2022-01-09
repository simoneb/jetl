import React from 'react'

import * as jetl from '../jetl'

const ReactLiveScope = {
  React,
  ...React,
  ...jetl,
}

export default ReactLiveScope
