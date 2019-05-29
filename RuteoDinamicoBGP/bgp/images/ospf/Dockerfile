# Quagga OSPF

FROM alpine:latest

LABEL description="Quagga OSPF - apline based image"

RUN apk update
RUN apk add supervisor quagga heimdal tcpdump

RUN echo "ospfd=yes" >> /etc/quagga/daemons
RUN echo "zebra=yes" >> /etc/quagga/daemons

ENTRYPOINT ["/usr/bin/supervisord"]