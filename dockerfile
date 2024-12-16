# Use Node.js 20 Alpine as base image
FROM node:20-alpine
# Install PNPM globally, create directories, and install dependencies
RUN npm i -g pnpm && \
    # Create the /data directory with appropriate permissions
    mkdir -p /data && chmod -R 777 /data && \
    # Create the flowise directory with appropriate permissions
    mkdir -p /usr/local/lib/node_modules/flowise && chmod -R 777 /usr/local/lib/node_modules/flowise && \
    # Install dependencies
    apk add --no-cache git python3 py3-pip make g++ build-base cairo-dev pango-dev chromium
# Switch to a non-root user for security
USER node
# Arguments that can be passed at build time and set them as environment variables
ARG FLOWISE_PATH=/usr/local/lib/node_modules/flowise
ARG BASE_PATH=/data/.flowise
ENV FLOWISE_PATH=$FLOWISE_PATH \
    BASE_PATH=$BASE_PATH \
    DATABASE_PATH=$BASE_PATH \
    APIKEY_PATH=$BASE_PATH \
    SECRETKEY_PATH=$BASE_PATH \
    LOG_PATH=$BASE_PATH/logs \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
# Create the /app directory with appropriate permissions, set working directory
RUN mkdir -p /home/node/app && chmod -R 777 /home/node/app
WORKDIR /home/node/app

RUN \
    # Clone the Flowise repository from GitHub
    git clone https://github.com/FlowiseAI/Flowise.git . && \
    # Install Flowise dependencies
    pnpm install && \
    # Build Flowise
    pnpm build
# Set permissions and create directories
RUN sh -c 'mkdir -p $LOG_PATH && chmod -R 777 $LOG_PATH && \
           mkdir -p $FLOWISE_PATH/uploads && chmod -R 777 $FLOWISE_PATH/uploads'
           
# Set the entry point to run Flowise
CMD pnpm start