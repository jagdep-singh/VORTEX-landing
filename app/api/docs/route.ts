import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'VORDEX.md');
    const content = readFileSync(filePath, 'utf8');
    
    return Response.json({ content });
  } catch (error) {
    return Response.json({ error: 'Failed to load documentation' }, { status: 500 });
  }
}
