import { createClient } from "@supabase/supabase-js/dist/module"

const supabaseUrl = 'https://hzllmdfokcmplavwfyov.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGxtZGZva2NtcGxhdndmeW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0ODc5ODUsImV4cCI6MjAzNDA2Mzk4NX0.0XaXsQdaatJft6wKg8EmFIRwyvKgEiBNrfC_YjixN5o'
export const supabase = createClient(supabaseUrl, supabaseKey)
