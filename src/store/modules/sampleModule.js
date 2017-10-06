import * as types from '../mutation-types';

// initial state
const state = {
	stuff: [],
	things: [],
	backup: {
		stuff: [],
		things: []
	}
};

// getters
const getters = {
	stuff: state => state.stuff,
	things: state => state.things
};

// actions
const actions = {
	async doStuff ({ commit }, how) {
		function something (h) { h; };
		const stuff = await something(how); // api call or whatever
		commit('MUTATE_STUFF', stuff);
	}
};

// mutations
const mutations = {
	[types.MUTATE_STUFF] (state, stuff) {
		state.stuff = stuff;
	},
	[types.BACKUP_STATE] (state, { key }) {
		state.backup[key] = state[key];
	},
	[types.REVERT_STATE_BACKUP] (state, { key }) {
		state[key] = state.backup[key];
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
