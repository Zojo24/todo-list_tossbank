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
function routeRender(routes) {
	if (!location.hash) {
		history.replaceState(null, '', '/#/')
	}
	const routerView = document.querySelector('router-view')
	const hash = location.hash
	const queryString = location.search

	function parseQuery(queryString) {
		return queryString.split('&').reduce((acc, cur) => {
			const [key, value] = cur.split('=')
			acc[key] = value
			return acc
		}, {})
	}
	history.replaceState(parseQuery(queryString), '')

	const currentRoute = routes.find(route =>
		new RegExp(`${route.path}/?$`).test(hash)
	)
	routerView.innerHTML = ''

	if (!currentRoute) {
		routerView.append(new NotFoundElement())
	} else {
		routerView.append(new currentRoute.component().el)
	}

	window.scrollTo(0, 0)
}
export function createRouter(routes) {
	return function () {
		window.addEventListener('popstate', () => {
			routeRender(routes)
		})
		routeRender(routes)
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
