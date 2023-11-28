#!/bin/bash

# Start H2 server in the background
java -cp /opt/h2/bin/h2*.jar org.h2.tools.Server \
    -baseDir ${H2_DATA} -ifNotExists \
    -tcp -tcpAllowOthers -tcpPort ${H2_PORT} \
    -web -webAllowOthers -webPort ${H2_CONSOLE_PORT} &

# Wait for the H2 server to be ready
while ! nc -z localhost ${H2_PORT}; do
  sleep 1
done

echo "running the schema script"

# Run the schema script
java -cp /opt/h2/bin/h2*.jar org.h2.tools.RunScript -url jdbc:h2:tcp://localhost:${H2_PORT}/test -user sa -script ${SCHEMA_SCRIPT}

# Keep the script running
tail -f /dev/null
