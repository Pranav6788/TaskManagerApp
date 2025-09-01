# Use official Nginx base image
FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Copy frontend files
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80




# # Use official Nginx base image
# FROM nginx:alpine

# # Remove default Nginx website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy frontend files (HTML, JS, and assets)
# COPY ./assets /usr/share/nginx/html/assets
# COPY ./assets1 /usr/share/nginx/html/assets1
# COPY ./*.html /usr/share/nginx/html/
# COPY ./config.js /usr/share/nginx/html/

# # Copy custom nginx config to set loginPage.html as default
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port 80
# EXPOSE 80

# # Keep Nginx running
# CMD ["nginx", "-g", "daemon off;"]



# # Use official Nginx base image
# FROM nginx:alpine

# # Remove default Nginx website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy frontend files into container
# COPY . /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx when container launches
# CMD ["nginx", "-g", "daemon off;"]


# FROM nginx:alpine

# # Remove default Nginx website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy app files
# COPY . /usr/share/nginx/html

# # Copy custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


# # Use official Nginx base image
# FROM nginx:alpine

# # Remove default Nginx website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy only frontend build (adjust if yours is `public` or `frontend`)
# # COPY ./taskmanager-frontend/ /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]



# # Use official Nginx base image
# FROM nginx:alpine

# # Remove default Nginx website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy all your app files into the container
# COPY . /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx when container launches
# CMD ["nginx", "-g", "daemon off;"]
