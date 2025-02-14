import { exec } from 'child_process';
import { promisify } from 'util';

// Convert exec to return a Promise
const execPromise = promisify(exec);

export async function runbash(command) {
  try {
    // Execute the command and return the stdout output
    const { stdout, stderr } = await execPromise(command);
    if (stderr) {
      throw new Error(`Error: ${stderr}`);
    }
    return stdout;
  } catch (error) {
    throw new Error(`Failed to execute command: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
