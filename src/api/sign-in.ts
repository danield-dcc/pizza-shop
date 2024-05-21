import { api } from '@/lib/axios'

export interface SingInBody {
  email: string
}

export async function signIn({ email }: SingInBody) {
  // rota do backend
  await api.post('/authenticate', { email })
}
