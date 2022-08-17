export interface TopHeader {
  phone: number
  email: string
  address: string
  currency: string
  categories: {
    [key: number]: string
  }
  navbar: {
    [key: number]: string
  }
}

export interface NavBar {
  [key: number]: string
}
