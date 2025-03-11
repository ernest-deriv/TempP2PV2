import type { Advert } from "@/services/api/api-my-ads"

export const mockAdverts: Advert[] = [
  {
    id: "00000001",
    name: "John_doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    rating: 4.8,
    orders: 120,
    completion: 98,
    following: false,
    online: true,
    rate: 14500.0,
    limits: "USD 10.00 - 100.00",
    minAmount: 10,
    maxAmount: 100,
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "IDR",
    type: "buy",
  },
  {
    id: "00000002",
    name: "Jane_smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    rating: 4.9,
    orders: 85,
    completion: 100,
    following: true,
    online: true,
    rate: 14500.0,
    limits: "USD 10.00 - 100.00",
    minAmount: 10,
    maxAmount: 100,
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "IDR",
    type: "sell",
  },
  {
    id: "00000003",
    name: "Robert_jones",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    rating: 4.7,
    orders: 56,
    completion: 95,
    following: false,
    online: false,
    rate: 14500.0,
    limits: "USD 10.00 - 100.00",
    minAmount: 10,
    maxAmount: 100,
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "IDR",
    type: "buy",
  },
  {
    id: "00000004",
    name: "Sarah_williams",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    rating: 4.6,
    orders: 42,
    completion: 97,
    following: false,
    online: true,
    rate: 14500.0,
    limits: "USD 10.00 - 100.00",
    minAmount: 10,
    maxAmount: 100,
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "IDR",
    type: "sell",
  },
  {
    id: "00000005",
    name: "Michael_brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    rating: 5.0,
    orders: 210,
    completion: 99,
    following: true,
    online: true,
    rate: 14500.0,
    limits: "USD 10.00 - 100.00",
    minAmount: 10,
    maxAmount: 100,
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "IDR",
    type: "buy",
  },
]

