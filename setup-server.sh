#!/bin/bash

################################################################################
# Server Setup Script for Sibera Website
# Run this script on your server to prepare for GitHub auto-deployment
################################################################################

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Sibera Website Server Setup${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Configuration
REPO_URL="https://github.com/yourusername/sibera-website.git"  # Update this
PROJECT_DIR="/opt/sibera-website"
DOMAIN="yourdomain.com"  # Update this

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   echo -e "${YELLOW}Warning: Running as root. Consider using a non-root user.${NC}"
fi

# Update system
echo -e "${YELLOW}[1/6] Updating system...${NC}"
sudo apt-get update
sudo apt-get upgrade -y

# Install Docker
echo -e "${YELLOW}[2/6] Installing Docker...${NC}"
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    echo -e "${GREEN}✓ Docker installed${NC}"
else
    echo -e "${GREEN}✓ Docker already installed${NC}"
fi

# Install Git
echo -e "${YELLOW}[3/6] Installing Git...${NC}"
sudo apt-get install -y git

# Clone repository
echo -e "${YELLOW}[4/6] Setting up project directory...${NC}"
if [ -d "$PROJECT_DIR" ]; then
    echo "Directory $PROJECT_DIR already exists"
else
    sudo mkdir -p $PROJECT_DIR
    sudo chown $USER:$USER $PROJECT_DIR
    git clone $REPO_URL $PROJECT_DIR
    echo -e "${GREEN}✓ Repository cloned${NC}"
fi

# Install NGINX
echo -e "${YELLOW}[5/6] Installing NGINX...${NC}"
if ! command -v nginx &> /dev/null; then
    sudo apt-get install -y nginx
    echo -e "${GREEN}✓ NGINX installed${NC}"
else
    echo -e "${GREEN}✓ NGINX already installed${NC}"
fi

# Setup NGINX config
echo -e "${YELLOW}[6/6] Configuring NGINX...${NC}"
sudo cp $PROJECT_DIR/nginx/nginx.conf /etc/nginx/sites-available/sibera-website

# Update domain in config
sudo sed -i "s/yourdomain.com/$DOMAIN/g" /etc/nginx/sites-available/sibera-website

# Enable site
sudo ln -sf /etc/nginx/sites-available/sibera-website /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and restart NGINX
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Setup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${GREEN}Next Steps:${NC}"
echo ""
echo "1. Add your SSH public key to GitHub:"
echo "   cat ~/.ssh/id_ed25519.pub"
echo "   (Copy this and add to GitHub: Settings → SSH Keys)"
echo ""
echo "2. Add GitHub Secrets:"
echo "   SSH_HOST: $(curl -s ifconfig.me)"
echo "   SSH_USER: $USER"
echo "   SSH_PRIVATE_KEY: (your private key)"
echo ""
echo "3. Test deployment by pushing to main branch"
echo ""
echo "4. Project directory: $PROJECT_DIR"
echo ""
echo -e "${YELLOW}Note: You may need to log out and back in for Docker group changes to take effect${NC}"
echo ""
