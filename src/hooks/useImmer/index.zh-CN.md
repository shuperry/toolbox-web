```js
import React from 'react'
import { useImmer } from 'use-immer'

function App() {
  const [person, updatePerson] = useImmer({
    name: 'Michel',
    age: 33,
  })

  function updateName(name) {
    updatePerson((draft) => {
      draft.name = name
    })
  }

  function becomeOlder() {
    updatePerson((draft) => {
      draft.age++
    })
  }

  return (
    <div className="App">
      <h1>
        Hello {person.name} ({person.age})
      </h1>
      <input
        onChange={(e) => {
          updateName(e.target.value)
        }}
        value={person.name}
      />
      <br />
      <button onClick={becomeOlder}>Older</button>
    </div>
  )
}
```

```js
import React from 'react'
import { useImmerReducer } from 'use-immer'

const initialState = { count: 0 }

function reducer(draft, action) {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return void draft.count++
    case 'decrement':
      return void draft.count--
  }
}

function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  )
}
```
