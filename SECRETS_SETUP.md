# GitHub Secrets Setup Guide

## Required Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

### 1. Docker Hub Secrets

| Secret Name | Value | How to Get |
|-------------|-------|------------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username | Your Docker Hub account username |
| `DOCKERHUB_TOKEN` | Docker Hub access token | https://hub.docker.com/settings/security |

**Get Docker Hub Token:**
1. Go to https://hub.docker.com
2. Click your username → **Account Settings**
3. Click **Security** → **New Access Token**
4. Name: `github-actions`
5. Copy the token (you won't see it again!)

### 2. Server SSH Secrets

| Secret Name | Value | Example |
|-------------|-------|---------|
| `SSH_HOST` | Your server IP or domain | `123.45.67.89` |
| `SSH_USER` | SSH username | `root` or `ubuntu` |
| `SSH_KEY` | Your SSH private key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SSH_PORT` | SSH port | `22` |

**Get SSH Key:**
```bash
# Generate new key (if needed)
ssh-keygen -t ed25519 -C "github-deployment" -f ~/.ssh/github_deploy

# Copy private key
cat ~/.ssh/github_deploy
# Copy everything including BEGIN and END lines

# Add public key to server
ssh-copy-id -i ~/.ssh/github_deploy.pub user@your-server-ip
```

---

## How Deployment Works

```
1. You push to main branch
   ↓
2. GitHub Actions builds Docker image
   ↓
3. Image pushed to Docker Hub
   ↓
4. GitHub connects to your server via SSH
   ↓
5. Server pulls image from Docker Hub
   ↓
6. Server stops old container
   ↓
7. Server starts new container (port 7000:4322)
   ↓
8. ✅ Done!
```

---

## Server Requirements

**Your server only needs:**
- Docker installed
- SSH access
- Port 7000 available

**No need for:**
- Git
- Node.js  
- Project files
- Build tools

---

## Quick Server Setup

```bash
# SSH to your server
ssh user@your-server-ip

# Install Docker (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group
sudo usermod -aG docker $USER

# Log out and back in for changes to take effect
exit
ssh user@your-server-ip

# Verify Docker works
docker --version
docker ps
```

---

## Test Deployment

**Option 1: Push to trigger auto-deploy**
```bash
git add .
git commit -m "Test deployment"
git push origin main
```

**Option 2: Manual trigger from GitHub**
1. Go to your repo on GitHub
2. Click **Actions** tab
3. Click **Deploy to Server** workflow
4. Click **Run workflow** → **Run workflow**

---

## Monitor Deployment

### On GitHub:
- Go to **Actions** tab
- Click on the latest workflow run
- Watch the deployment progress in real-time

### On Server:
```bash
# Check running containers
docker ps

# View logs
docker logs -f sibera-website

# Check if port 7000 is listening
netstat -tuln | grep 7000
# or
ss -tuln | grep 7000
```

---

## Troubleshooting

### "No such file or directory" error
✅ **Fixed!** The new workflow doesn't need project files on the server.

### Docker Hub authentication failed
```bash
# Check secrets are correct
# DOCKERHUB_USERNAME - your username (not email)
# DOCKERHUB_TOKEN - access token (not password)
```

### SSH connection failed
```bash
# Test SSH manually
ssh -i ~/.ssh/github_deploy user@your-server-ip

# Check SSH_KEY secret includes the full key
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
...
-----END OPENSSH PRIVATE KEY-----
```

### Container not starting
```bash
# SSH to server
ssh user@your-server-ip

# Check logs
docker logs sibera-website

# Check if port is in use
sudo lsof -i :4322
sudo lsof -i :7000
```

---

## All Required Secrets Summary

```
✅ DOCKERHUB_USERNAME - Your Docker Hub username
✅ DOCKERHUB_TOKEN    - Docker Hub access token
✅ SSH_HOST           - Server IP or domain
✅ SSH_USER           - SSH username
✅ SSH_KEY            - SSH private key
✅ SSH_PORT           - SSH port (usually 22)
```

---

## Manual Deployment (if needed)

```bash
# SSH to server
ssh user@your-server-ip

# Pull and run manually
docker pull yourusername/sibera-website:latest
docker stop sibera-website || true
docker rm sibera-website || true
docker run -d -p 7000:4322 --name sibera-website --restart unless-stopped yourusername/sibera-website:latest
```

---

**After setup, just push to main and deployment happens automatically!** 🚀
