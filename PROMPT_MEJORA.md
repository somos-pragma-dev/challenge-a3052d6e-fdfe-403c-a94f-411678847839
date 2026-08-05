# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: src/config/index.ts
import express from 'express';
import pino from 'pino';
import { createConnection } from 'typeorm';
import { setupRoutes } from '../presentation/routes';

export const app = express();
export const logger = pino();

export const setupApp = async () => {
  await createConnection();
  setupRoutes(app);
};

// === ARCHIVO: src/domain/entities/project.ts
export class Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

// === ARCHIVO: src/application/usecases/createProject.ts
import { Project } from '../../domain/entities/project';
import { ProjectRepository } from '../../infrastructure/repositories/projectRepository';

export class CreateProjectUseCase {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(name: string, description: string): Promise<Project> {
    const project = new Project();
    project.name = name;
    project.description = description;
    project.status = 'backlog';
    return this.projectRepository.save(project);
  }
}

// === ARCHIVO: src/infrastructure/repositories/projectRepository.ts
import { getRepository } from 'typeorm';
import { Project } from '../entities/project';

export class ProjectRepository {
  async save(project: Project): Promise<Project> {
    const repository = getRepository(Project);
    return repository.save(project);
  }
}

// === ARCHIVO: src/presentation/controllers/projectController.ts
import { Request, Response } from 'express';
import { CreateProjectUseCase } from '../../application/usecases/createProject';
import { ProjectRepository } from '../../infrastructure/repositories/projectRepository';

export class ProjectController {
  private createProjectUseCase: CreateProjectUseCase;

  constructor() {
    this.createProjectUseCase = new CreateProjectUseCase(new ProjectRepository());
  }

  async createProject(req: Request, res: Response): Promise<void> {
    try {
      const { name, description } = req.body;
      const project = await this.createProjectUseCase.execute(name, description);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

// === ARCHIVO: src/tests/integration/createProject.test.ts
import { CreateProjectUseCase } from '../../application/usecases/createProject';
import { ProjectRepository } from '../../infrastructure/repositories/projectRepository';
import { Project } from '../../domain/entities/project';

describe('CreateProjectUseCase', () => {
  let createProjectUseCase: CreateProjectUseCase;
  let projectRepository: ProjectRepository;

  beforeEach(() => {
    projectRepository = new ProjectRepository();
    createProjectUseCase = new CreateProjectUseCase(projectRepository);
  });

  it('should create a new project', async () => {
    const project = await createProjectUseCase.execute('Project 1', 'Description 1');
    expect(project.name).toBe('Project 1');
    expect(project.description).toBe('Description 1');
    expect(project.status).toBe('backlog');
  });

  it('should throw an error if name is missing', async () => {
    await expect(createProjectUseCase.execute('', 'Description 1')).rejects.toThrow('Name is required');
  });

  it('should throw an error if description is missing', async () => {
    await expect(createProjectUseCase.execute('Project 1', '')).rejects.toThrow('Description is required');
  });
});

// === ARCHIVO: src/migrations/001-create-projects-table.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjectsTable1643078584528 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE projects (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, description TEXT NOT NULL, status VARCHAR(255) NOT NULL);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projects;`);
  }
}

// === ARCHIVO: src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Aquí iría la lógica de verificación del token
  next();
};

// === ARCHIVO: src/utils/tokenUtils.ts
export const generateToken = (payload: any): string => {
  // Aquí iría la lógica de generación del token
  return 'generated-token';
};

// === ARCHIVO: src/health/healthCheck.ts
import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
};

// === ARCHIVO: src/logging/logger.ts
import pino from 'pino';

export const logger = pino();

// === ARCHIVO: src/metrics/metrics.ts
import { Registry } from 'prom-client';

export const metricsRegistry = new Registry();

// === ARCHIVO: src/cache/redisCache.ts
import redis from 'redis';

export const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

// === ARCHIVO: src/search/elasticsearchService.ts
import { Client } from '@elastic/elasticsearch';

export const elasticsearchClient = new Client({ node: 'http://localhost:9200' });

// === ARCHIVO: src/rateLimiting/rateLimiter.ts
import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// === ARCHIVO: src/compression/compressionMiddleware.ts
import compression from 'compression';

export const compressionMiddleware = compression();

// === ARCHIVO: src/cors/corsConfig.ts
import cors from 'cors';

export const corsConfig = cors({
  origin: '*',
});

// === ARCHIVO: src/notifications/slackNotification.ts
import axios from 'axios';

export const sendSlackNotification = async (message: string) => {
  await axios.post('https://slack.com/api/chat.postMessage', {
    channel: 'general',
    text: message,
  }, {
    headers: {
      'Authorization': 'Bearer your-slack-token',
    },
  });
};

// === ARCHIVO: src/reports/realTimeReports.ts
import { WebSocketServer } from 'ws';

export const realTimeReports = new WebSocketServer({ port: 8080 });

// === ARCHIVO: src/workflow/workflowEngine.ts
export class WorkflowEngine {
  async execute(task: any) {
    // Lógica del motor de workflow
  }
}

// === ARCHIVO: src/auth/oauth2Config.ts
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';

passport.use(new OAuth2Strategy({
  authorizationURL: 'https://authorization-server.com/oauth/authorize',
  tokenURL: 'https://authorization-server.com/oauth/token',
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret',
  callbackURL: 'http://localhost:3000/auth/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Lógica de autenticación
}));

// === ARCHIVO: src/roles/rbacConfig.ts
export const roles = {
  admin: ['create', 'read', 'update', 'delete'],
  user: ['read'],
};

// === ARCHIVO: src/integrations/webhookIntegration.ts
import axios from 'axios';

export const sendWebhookNotification = async (url: string, data: any) => {
  await axios.post(url, data);
};
```
