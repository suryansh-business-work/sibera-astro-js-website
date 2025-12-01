# GitHub Auto-Deployment Setup Guide

This guide will help you set up automatic deployment to your server via SSH using GitHub Actions.

## 📋 Overview

When you push to the `main` branch, GitHub Actions will automatically:
1. Connect to your server via SSH
2. Pull the latest code
3. Build Docker image
4. Stop old container
5. Start new container on port 7000
6. Clean up old images

---

## 🔑 Step 1: Setup SSH on Your Server

### On Your Server:

**1. Clone the repository:**
```bash
# SSH into your server
ssh user@your-server-ip

# Create directory
sudo mkdir -p /opt/sibera-website
sudo chown $USER:$USER /opt/sibera-website

# Clone repository
cd /opt
git clone https://github.com/yourusername/sibera-website.git
cd sibera-website
```

**2. Install Docker (if not already installed):**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
# Log out and log back in for group changes to take effect
```

**3. Setup NGINX (optional):**
```bash
sudo apt install nginx -y
sudo cp nginx/nginx.conf /etc/nginx/sites-available/sibera-website
sudo ln -s /etc/nginx/sites-available/sibera-website /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔐 Step 2: Setup GitHub Secrets

### Get Your SSH Private Key:

**On your local machine:**
```bash
# If you don't have an SSH key, generate one:
ssh-keygen -t ed25519 -C "github-deployment" -f ~/.ssh/github_deploy

# Copy the private key content
cat ~/.ssh/github_deploy
# Copy the entire output including:
# -----BEGIN OPENSSH PRIVATE KEY-----
# ...
# -----END OPENSSH PRIVATE KEY-----

# Copy the public key to your server
ssh-copy-id -i ~/.ssh/github_deploy.pub user@your-server-ip
```

### Add Secrets to GitHub:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `SSH_HOST` | Your server IP or domain | `123.45.67.89` or `server.example.com` |
| `SSH_USER` | SSH username | `root` or `ubuntu` |
| `SSH_PRIVATE_KEY` | Your private key content | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SSH_PORT` | SSH port (optional, default 22) | `22` |

---

## ✅ Step 3: Test the Deployment

### Option A: Push to Main Branch

```bash
# Make a change
git add .
git commit -m "Test deployment"
git push origin main
```

Then go to **GitHub** → **Actions** tab to watch the deployment.

### Option B: Manual Trigger

1. Go to **GitHub** → **Actions**
2. Click on **Deploy to Server** workflow
3. Click **Run workflow**
4. Select `main` branch
5. Click **Run workflow**

---

## 📊 Deployment Flow

```
Push to main
    ↓
GitHub Actions triggers
    ↓
Connect to server via SSH
    ↓
Pull latest code (git pull)
    ↓
Build Docker image
    ↓
Stop old container
    ↓
Start new container (port 7000:4322)
    ↓
Verify deployment
    ↓
Clean up old images
    ↓
✅ Done!
```

---

## 🔍 Monitoring Deployment

### In GitHub:
1. Go to **Actions** tab
2. Click on the latest workflow run
3. View logs in real-time

### On Server:
```bash
# Check running containers
docker ps

# View container logs
docker logs -f sibera-website

# Check NGINX status
sudo systemctl status nginx
```

---

## 🛠️ Troubleshooting

### Deployment fails with "Permission denied"

**Solution:** Add SSH public key to server
```bash
# On your local machine
cat ~/.ssh/github_deploy.pub

# On your server
echo "ssh-ed25519 AAAA..." >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Deployment fails at "git pull"

**Solution:** Ensure git repository is properly set up
```bash
# On your server
cd /opt/sibera-website
git remote -v
git pull origin main
```

### Container doesn't start

**Solution:** Check Docker logs
```bash
docker logs sibera-website
docker ps -a
```

### Port 7000 already in use

**Solution:** Stop conflicting process
```bash
sudo lsof -i :7000
sudo kill -9 <PID>
```

---

## 🔄 Update Deployment

To change deployment settings, edit `.github/workflows/deploy.yml`:

**Change deployment directory:**
```yaml
script: |
  cd /your/custom/path
  git pull origin main
```

**Change port mapping:**
```yaml
docker run -d \
  -p 8080:4322 \  # Change 7000 to 8080
  --name sibera-website \
```

**Add environment variables:**
```yaml
docker run -d \
  -p 7000:4322 \
  -e NODE_ENV=production \
  -e API_KEY=${{ secrets.API_KEY }} \
  --name sibera-website \
```

---

## 📝 Manual Deployment (Fallback)

If GitHub Actions fails, deploy manually:

```bash
# SSH to server
ssh user@your-server-ip

# Navigate to project
cd /opt/sibera-website

# Pull changes
git pull origin main

# Rebuild and restart
docker stop sibera-website
docker rm sibera-website
docker build -t sibera-website .
docker run -d -p 7000:4322 --name sibera-website sibera-website

# Check status
docker ps
docker logs sibera-website
```

---

## 🎯 Best Practices

1. **Use Deploy Keys:** For better security, use GitHub Deploy Keys instead of personal SSH keys
2. **Set up Staging:** Create a `staging` branch for testing before production
3. **Backup Data:** Always backup important data before deploying
4. **Monitor Logs:** Check logs after each deployment
5. **Rollback Plan:** Keep previous Docker images for quick rollback

---

## 🚀 Quick Reference

**View deployment logs:**
```bash
# GitHub: Repo → Actions → Latest run
```

**Server commands:**
```bash
docker ps                    # Check running container
docker logs sibera-website   # View logs
sudo systemctl status nginx  # Check NGINX
sudo nginx -t                # Test NGINX config
```

**Restart services:**
```bash
docker restart sibera-website
sudo systemctl restart nginx
```

---

## 📞 Support

- **GitHub Actions Logs:** Check the Actions tab for detailed error messages
- **Server Logs:** `docker logs sibera-website`
- **NGINX Logs:** `sudo tail -f /var/log/nginx/error.log`

---

**Last Updated:** December 2025
