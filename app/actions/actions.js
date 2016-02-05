/*
Sample Action function

Export action functions which have a type and an optional payload.
This triggers the state to change via reducers
*/

export function random() {
  return {
    type: 'GENERATE_RANDOM',
    data: Math.ceil(Math.random()*20)
  }
}