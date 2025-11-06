import type { User } from '../models/User';

export const getUser = async (id: number): Promise<User> => {
  // Simulación de llamada a API
  return {
    id,
    name: 'Ejemplo Usuario',
    email: 'usuario@ejemplo.com',
  };
};
