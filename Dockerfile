# Add nodejs & gobgp npm on top of donn/gobgp
FROM donn/gobgp

MAINTAINER Donn Lee <docker@pluza.com>
ARG user=donn

USER root
WORKDIR /root

RUN echo "Fetching gorpc..." \
 && go get google.golang.org/grpc

# Install node.js version 4.x
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get update && apt-get install -y --no-install-recommends \
  nodejs \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir /root/nodejs \
  && npm install --prefix /root/nodejs gobgp

ADD add_route.js /root/nodejs/
ADD add_lots_of_routes.js /root/nodejs/
ADD source_me.bash /root/

RUN mkdir /config
ADD rtr3.conf /config/
ADD rtr4.conf /config/

