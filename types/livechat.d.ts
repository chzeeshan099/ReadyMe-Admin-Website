export {};

declare global {
  interface Window {
    __lc?: any;
    LiveChatWidget?: {
      call: (method: string, ...args: any[]) => void;
      on: (event: string, callback: () => void) => void; // ✅ ADD THIS
    };
  }
}