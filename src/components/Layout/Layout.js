import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

const layout = (props) => (
  <Aux>
    Toolbar
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;