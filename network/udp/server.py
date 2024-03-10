import socket

localIP = "127.0.0.1"
localPort = 1337

# Create a datagram socket
ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
# Bind to address and ip

ss.bind((localIP, localPort))

print("UDP server up and listening")

while True:
    message, address = ss.recvfrom(1024)
    clientMsg = "Message from Client:{}".format(message.decode('utf-8'))
    clientIP = "Client IP Address:{}".format(address)
    print(clientMsg)
    print(clientIP)

    # ss.sendto(bytesToSend, address)
