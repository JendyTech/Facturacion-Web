import { supabase } from "../databaseAuth";

export const getAllClients = async () => {
    try {
        
        let { data: Clients, error } = await supabase
            .from('Client')
            .select('*')
            
        if (error) {
            throw error;
        }

        return Clients
    } catch (error) {
        console.error('Error al conseguir clientes:', error.message);
    }

}