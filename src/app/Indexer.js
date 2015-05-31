import lunr from 'lunr'

class Indexer {

	constructor() {
		this.index = lunr(function() {
			this.field('title', { boost: 10})
			this.field('fulfilled')
			this.ref('id')
		})
	}
}

export default new Indexer()