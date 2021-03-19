#!/usr/bin/env sh

(killall -9 node >> /dev/null &);
cd /root/photostudio/ || return;
(node redirect.js >> /dev/null &);
(npm run dev >> /dev/null &);
echo "Server Started!";
