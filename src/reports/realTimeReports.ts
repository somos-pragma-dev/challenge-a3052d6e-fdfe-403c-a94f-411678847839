import { WebSocketServer } from 'ws';

export const realTimeReports = new WebSocketServer({ port: 8080 });