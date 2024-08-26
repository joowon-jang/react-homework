// src/types/service-worker.d.ts

interface Window {
  __WB_MANIFEST: Array<{ url: string; revision: string }>;
}

declare let self: ServiceWorkerGlobalScope;
