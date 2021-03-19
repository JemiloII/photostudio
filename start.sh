killall -9 node >> /dev/null;
cd /root/photostudio/;
(node redirect.js >> /dev/null &);
(npm run dev >> /dev/null &);
echo "Server Started!";
