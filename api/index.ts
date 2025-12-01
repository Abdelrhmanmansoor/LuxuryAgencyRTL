let app: any;

async function initializeApp() {
  if (app) return app;
  const module = await import("../dist/index.cjs");
  app = module.default;
  return app;
}

export default async function handler(req: any, res: any) {
  const expressApp = await initializeApp();
  return expressApp(req, res);
}
