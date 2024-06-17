import { supabase } from "../databaseAuth";

export const getAllProducts = async () => {
    try {
        
        let { data: Products, error } = await supabase
            .from('Product')
            .select('*')
            
        if (error) {
            throw error;
        }

        return Products
    } catch (error) {
        console.error('Error al conseguir productos:', error.message);
    }

}