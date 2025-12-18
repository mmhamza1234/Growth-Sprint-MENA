// Chatbase client utility
// JWT identification requires backend integration - see server setup in comments

export const initializeChatbase = async () => {
  if (typeof window === 'undefined') return;

  // Initialize Chatbase widget
  if (window.chatbase) {
    window.chatbase('show');
    
    // To enable JWT identification:
    // 1. Create a backend endpoint that generates JWT token using the secret
    // 2. Call that endpoint from here
    // 3. Pass the token to window.chatbase('identify', { token })
    
    // Placeholder for future implementation:
    // const response = await fetch('/api/chatbase-token');
    // const { token } = await response.json();
    // window.chatbase('identify', { token });
  }
};

declare global {
  interface Window {
    chatbase: (action: string, data?: any) => void;
  }
}
