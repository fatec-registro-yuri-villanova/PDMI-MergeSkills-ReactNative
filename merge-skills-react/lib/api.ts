import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_CONFIG = {
    BASE_URL: 'https://lddm-api-inicial-1.onrender.com',
    SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaWluYXFmbnB5bGJ4eHhpYXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5OTE5MzIsImV4cCI6MjA4NjU2NzkzMn0.fsh7v8vcbYJYs6QIflE5jMc7qk3tB979ZtsZaXuyn3M',
};

/**
 * Cliente API REST (Simula o KtorClient do Android)
 */
export const apiClient = {
    async fetch(endpoint: string, options: RequestInit = {}) {
        const url = endpoint.startsWith('http') ? endpoint : `${API_CONFIG.BASE_URL}${endpoint}`;

        // Configura headers padrão (igual ao KtorClient.kt)
        const headers = {
            'Content-Type': 'application/json',
            'apikey': API_CONFIG.SUPABASE_KEY,
            'Authorization': `Bearer ${API_CONFIG.SUPABASE_KEY}`,
            ...options.headers,
        };

        try {
            const response = await fetch(url, {
                ...options,
                headers,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Erro na requisição API (${url}):`, error);
            throw error;
        }
    },

    // Helpers específicos
    auth: {
        async signIn(email: string, pass: string) {
            // Endpoint de autentiação no Render
            return apiClient.fetch('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password: pass }),
            });
        },

        async signUp(name: string, email: string, pass: string) {
            return apiClient.fetch('/auth/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password: pass }),
            });
        }
    },

    db: {
        async from(table: string) {
            return {
                select: async () => {
                    // No Render, as tabelas são expostas via REST (ex: /courses)
                    return apiClient.fetch(`/${table}`);
                }
            };
        }
    }
};
