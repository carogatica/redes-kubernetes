# Quagga BGP

FROM alpine:latest

LABEL description="Quagga BGP - apline based image"

RUN apk update
RUN apk add supervisor quagga heimdal tcpdump

RUN echo "bgpd=yes" > /etc/quagga/daemons
RUN echo "ospfd=yes" >> /etc/quagga/daemons
RUN echo "zebra=yes" >> /etc/quagga/daemons

RUN touch /etc/supervisord.conf

ENTRYPOINT ["/usr/bin/supervisord"]