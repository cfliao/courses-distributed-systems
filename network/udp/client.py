import socket, sys

host = "127.0.0.1"
port = 1337
msg = b"Hello UDP Server"
#bytesToSend = str.encode(msg)
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

s.connect((host, port))

s.send(msg)
s.close()

#while 1:
# print("Looking for replies; press Ctrl-C or Ctrl-Break to stop.")
#  buf = s.recv(1024)
# if not len(buf):
#     break
#  print("Server replies: ")
#  sys.stdout.write(buf)
#  print("\n")
