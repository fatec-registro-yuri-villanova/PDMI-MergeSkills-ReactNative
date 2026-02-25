import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_CONFIG = {
    BASE_URL: 'https://lddm-api-inicial-1.onrender.com',
    SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaWluYXFmbnB5bGJ4eHhpYXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5OTE5MzIsImV4cCI6MjA4NjU2NzkzMn0.fsh7v8vcbYJYs6QIflE5jMc7qk3tB979ZtsZaXuyn3M',
    TOKEN_KEY: '@mergeskills_token'
};

/**
 * Cliente API REST (Simula o KtorClient do Android)
 */
export const apiClient = {
    privateToken: null as string | null,

    async fetch(endpoint: string, options: RequestInit = {}) {
        const url = endpoint.startsWith('http') ? endpoint : `${API_CONFIG.BASE_URL}${endpoint}`;

        // Carrega token se ainda não estiver em memória
        if (!this.privateToken) {
            this.privateToken = await AsyncStorage.getItem(API_CONFIG.TOKEN_KEY);
        }

        // Configura headers padrão (igual ao KtorClient.kt)
        const headers: any = {
            'Content-Type': 'application/json',
            'apikey': API_CONFIG.SUPABASE_KEY,
            'X-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
            ...options.headers,
        };

        // Usa o token salvo se disponível, senão usa a anon key
        if (this.privateToken) {
            headers['Authorization'] = `Bearer ${this.privateToken}`;
        } else {
            headers['Authorization'] = `Bearer ${API_CONFIG.SUPABASE_KEY}`;
        }

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
            const response = await apiClient.fetch('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password: pass }),
            });

            // Simulação: se a API retornar um access_token, salvamos
            if (response && response.access_token) {
                apiClient.privateToken = response.access_token;
                await AsyncStorage.setItem(API_CONFIG.TOKEN_KEY, response.access_token);
            }
            return response;
        },

        async signUp(name: string, email: string, pass: string) {
            return apiClient.fetch('/auth/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password: pass }),
            });
        },

        async signOut() {
            apiClient.privateToken = null;
            await AsyncStorage.removeItem(API_CONFIG.TOKEN_KEY);
        },

        async isAuthenticated() {
            const token = await AsyncStorage.getItem(API_CONFIG.TOKEN_KEY);
            return !!token;
        }
    },

    db: {
        async from(table: string) {
            return {
                select: async () => {
                    return apiClient.fetch(`/${table}`);
                }
            };
        }
    }
};
