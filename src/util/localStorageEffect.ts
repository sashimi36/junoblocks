export function localStorageEffect<T = any>(
  key: string,
  format?: (stateToRestore: T, currentState: T) => T
) {
  return ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key)

      if (savedValue != null) {
        setSelf((currentState) => {
          return format
            ? format(JSON.parse(savedValue), currentState)
            : JSON.parse(savedValue)
        })
      }

      onSet((newValue: T, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue))
      })
    }
  }
}
