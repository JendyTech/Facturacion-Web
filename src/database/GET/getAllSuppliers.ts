import { supabase } from "../databaseAuth";

export const getAllSuppliers = async () => {
    try {
        
        let { data: Suppliers, error } = await supabase
            .from('Suppliers')
            .select('*')
            
        if (error) {
            throw error;
        }

        return Suppliers;
    } catch (error) {
        console.error('Error al conseguir clientes:', error.message);
    }

}