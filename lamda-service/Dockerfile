FROM python:2.7.12-alpine
MAINTAINER Jake Bladt <jake@jakebladt.com>
RUN apk --no-cache add --virtual build-dependencies curl py-pip \
      && curl https://bootstrap.pypa.io/ez_setup.py | python \
      && pip install virtualenv \
      && pip install 'chalice == 0.5.0' \
      && apk del build-dependencies
RUN ['mkdir', '~/code']
WORKDIR ~/code
