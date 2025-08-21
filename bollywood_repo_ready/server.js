import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Serve web files
app.use(express.static(path.join(__dirname, 'public')));

// Simple health
app.get('/health', (req,res)=> res.send('ok'));

// --- Minimal rooms for online play (create/join, relay events) ---
const rooms = new Map(); // code -> Set<socket.id>
function makeCode(){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out=''; for (let i=0;i<5;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}
io.on('connection', (socket)=>{
  let joined = null;
  socket.on('create_room', ()=>{
    let code; do{ code = makeCode(); } while(rooms.has(code));
    rooms.set(code, new Set([socket.id]));
    socket.join(code); joined = code;
    socket.emit('room_created', code);
  });
  socket.on('join_room', (code)=>{
    code = (code||'').toUpperCase();
    if (!rooms.has(code)) rooms.set(code, new Set());
    rooms.get(code).add(socket.id);
    socket.join(code); joined = code;
    socket.emit('room_joined', code);
    socket.to(code).emit('system', 'A player joined.');
  });
  const relay = evt => payload => { if (!joined) return; socket.to(joined).emit(evt, payload); };
  socket.on('start_round', relay('start_round'));
  socket.on('guess', relay('guess'));
  socket.on('full_guess', relay('full_guess'));
  socket.on('hint', relay('hint'));
  socket.on('lifeline', relay('lifeline'));
  socket.on('disconnect', ()=>{
    if (joined && rooms.has(joined)){
      const set = rooms.get(joined); set.delete(socket.id);
      if (set.size===0) rooms.delete(joined);
      else socket.to(joined).emit('system', 'A player left.');
    }
  });
});

const PORT = process.env.PORT || 5174;
server.listen(PORT, ()=> console.log('Server listening on :' + PORT));