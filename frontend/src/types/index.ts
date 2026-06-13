export interface Event {
  id: string
  name: string
  description: string
  date: string
  location: string
  price: number
  capacity: number
  ticketsSold: number
  image: string
  category: string
}

export interface Ticket {
  id: string
  eventId: string
  type: string
  price: number
  available: number
}

export interface CartItem {
  eventId: string
  ticketType: string
  quantity: number
  price: number
}

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
}
