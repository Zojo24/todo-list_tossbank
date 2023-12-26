import { createRouter } from '../core/zojo'
import Home from './Home'
import About from './About'

export default createRouter([
	{ path: '#/', component: Home },
	{ path: '#/About', component: About }
])
