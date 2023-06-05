import { type Storage } from './types/storage.type'

const localstorage: Storage = {
  set(key: string, value: any): void {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  get(key: string): any {
    const data = localStorage.getItem(key) as string
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  },
  remove(key: string): void {
    localStorage.removeItem(key)
  }
}

export default localstorage
