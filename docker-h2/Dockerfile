# docker-h2/Dockerfile WikiCareers Johann Ruiz Virginia Tech
# Dockerfile for creating H2 container
# December 2023

FROM adoptopenjdk:11-jre-hotspot

ENV H2_ZIP http://www.h2database.com/h2-2019-03-13.zip
ENV H2_PORT 9092
ENV H2_CONSOLE_PORT 8082
ENV H2_DATA /var/lib/h2
ENV SCHEMA_SCRIPT /docker-entrypoint-initdb.d/schema.sql

RUN apt-get update && apt-get upgrade -y && apt-get install -y unzip && apt-get install -y netcat && \
    curl ${H2_ZIP} -o h2.zip && unzip -q h2.zip -d /opt/ && rm h2.zip && \
    mkdir ${H2_DATA}

COPY schema.sql ${SCHEMA_SCRIPT}
COPY entrypoint.sh /entrypoint.sh

EXPOSE ${H2_PORT} ${H2_CONSOLE_PORT}

WORKDIR ${H2_DATA}

# Set execute permission for the entrypoint script
RUN chmod +x /entrypoint.sh

# Use the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
