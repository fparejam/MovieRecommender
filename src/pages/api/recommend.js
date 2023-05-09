import { spawn } from 'child_process';
import path from 'path';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { movie_list } = req.body;

  const pythonScriptPath = path.join(process.cwd(), 'src', 'pages', 'api', 'recommend.py');
  
  const pythonProcess = spawn('python3', [pythonScriptPath, JSON.stringify(movie_list)]);

  let pythonOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    pythonOutput += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).json(JSON.parse(pythonOutput));
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
};
