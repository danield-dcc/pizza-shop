import { api } from '@/lib/axios'

interface ApprovedOrdersParams {
  orderId: string
}

export async function approvedOrder({ orderId }: ApprovedOrdersParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
