// component //
export class Component {
	constructor(payload = {}) {
		const { tagName = 'div', props = {}, state = {} } = payload
		this.el = document.createElement(tagName)
		this.props = props
		this.state = state
		this.render()
	}
	render() {
		// ...
	}
}

// router //
function routerRender(routes) {
	if (!location.hash) {
		history.replaceState(null, '', '/#/')
	}
	const routerView = document.querySelector('router-view')
	const [hash, queryString = ''] = location.hash.split('?')

	const query = queryString.split('&').reduce((acc, cur) => {
		const [key, value] = cur.split('=')
		acc[key] = value
		return acc
	}, {})
	history.replaceState(query, '')

	const currentRoute = routes.find(route =>
		new RegExp(`${route.path}/?$`).test(hash)
	)
	if (currentRoute) {
		routerView.innerHTML = ''
		routerView.append(new currentRoute.component().el)
	} else {
		console.error(`No matching route found`)
	}
	// routerView.innerHTML = ''
	// routerView.append(new currentRoute.component().el)

	window.scrollTo(0, 0)
}
export function createRouter(routes) {
	return function () {
		window.addEventListener('popstate', () => {
			routerRender(routes)
		})
		routerRender(routes)
	}
}

//store//
export class Store {
	constructor(state) {
		this.state = {}
		this.observers = {}
		for (const key in state) {
			//상태 변경 감시 설정//
			Object.defineProperty(this.state, key, {
				get: () => state[key],
				set: val => {
					state[key] = val
					if (Array.isArray(this.observers[key])) {
						this.observers[key].forEach(observer => observer(val))
					}
				}
			})
		}
	}
	// 상태 변경 구독//
	subscribe(key, cb) {
		Array.isArray(this.observers[key])
			? this.observers[key].push(cb)
			: (this.observers[key] = [cb])
	}
}
