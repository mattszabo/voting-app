import Server from 'socket.io';

function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.emit('action', store.dispatch.bind(store));
  });

}

export { startServer as default };
