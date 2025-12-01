# Docker Build and Run Commands

## ⚠️ Important: Stop npm run dev first!
The dev server uses port 4322. Stop it before running Docker:
```bash
# Press Ctrl+C in the terminal running npm run dev
```

## Clean Up Old Containers

```bash
docker rm -f sibera-website
```

## Build Docker Image

```bash
docker build -t sibera-website .
```

## Run Docker Container

**Port Mapping: 7000 (external) → 4322 (internal)**

```bash
docker run -d -p 7000:4322 --name sibera-website sibera-website
```

## Check if Running

```bash
docker ps
```

## View Logs

```bash
docker logs sibera-website
docker logs -f sibera-website  # Follow live logs
```

## Test Locally

```bash
curl http://localhost:7000
```

## Stop Container

```bash
docker stop sibera-website
```

## Remove Container

```bash
docker rm sibera-website
```

## Complete Rebuild and Restart

```bash
docker stop sibera-website
docker rm sibera-website
docker build -t sibera-website .
docker run -d -p 7000:4322 --name sibera-website sibera-website
```

---

## NGINX Setup (Linux/Ubuntu Server)

### 1. Install NGINX

```bash
sudo apt update
sudo apt install nginx -y
```

### 2. Copy Configuration

```bash
sudo cp nginx/nginx.conf /etc/nginx/sites-available/sibera-website
sudo ln -s /etc/nginx/sites-available/sibera-website /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Remove default site
```

### 3. Test and Restart NGINX

```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 4. Check Status

```bash
sudo systemctl status nginx
```

---

## 🔒 Rate Limiting

NGINX is configured with:
- **10 requests per minute** per IP
- **Burst of 20** requests allowed
- Returns **429 Too Many Requests** when limit exceeded

Test rate limiting:
```bash
# Make 15 rapid requests (should hit limit)
for i in {1..15}; do curl -I http://localhost; sleep 0.1; done
```

---

## Port Configuration

| Location | Port | Description |
|----------|------|-------------|
| Container Internal | **4322** | Astro app listens here |
| Docker External | **7000** | Exposed Docker port |
| NGINX | **80** | Public HTTP port |

**Flow:** User → Port 80 (NGINX) → Port 7000 (Docker) → Port 4322 (Container)

---

## Troubleshooting

### Port 4322 already in use
```bash
# Stop npm run dev first (Ctrl+C)
# Or check what's using the port:
netstat -ano | findstr :4322  # Windows
lsof -i :4322  # Linux/Mac
```

### Container won't start
```bash
# Check logs
docker logs sibera-website

# Run in foreground to see errors
docker run -p 7000:4322 sibera-website
```

### Build fails
```bash
# Clean build
docker build --no-cache -t sibera-website .
```
