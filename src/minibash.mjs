import { execSync } from 'child_process';

export function runbash(command) {
  try {
    // Execute the command synchronously and return the output
    return execSync(command, { encoding: 'utf-8', stdio: 'pipe' }).trim();
  } catch (error) {
    throw new Error(`Failed to execute command: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}