/*
Sample reducer

Exports a function that allows you to set a default state,
and generate a new state based on incoming dispatches.
These functions need to be pure to adhere to Redux principles
and aid in testing.
*/

export function ExampleReducer(state = {
  random: 0
}, action = null) {
  switch (action.type) {
    case 'GENERATE_RANDOM':
      return {
        ...state,
        random: action.data
      }

    default:
      return state;
  }
}