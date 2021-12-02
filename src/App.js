import './styles/reset.css'
import './styles/index.css'

import Store from './Store'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const App = () => {
  return(
    <Store />
  )
}

export default App