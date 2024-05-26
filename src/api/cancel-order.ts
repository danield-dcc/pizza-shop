import { api } from '@/lib/axios'

interface CancelOrdersParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrdersParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
