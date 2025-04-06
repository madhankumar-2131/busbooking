# 🚌 Bus Booking Website

A simple static website that allows users to view available buses and simulate a booking experience. Built using **HTML, CSS, and JS**, and deployed on **AWS S3** with CI/CD via **GitHub Actions**.

---

## 🔗 Live Demo

🚀 [Click to View](http://bus-booking-madhan.s3-website.ap-south-1.amazonaws.com/)

---

## ⚙️ Tech Stack

- HTML, CSS, JavaScript
- GitHub Actions for CI/CD
- AWS S3 Static Website Hosting

---

## 🚀 CI/CD with GitHub Actions

This project uses GitHub Actions to auto-deploy the latest code to an S3 bucket on every push to `main`.

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to AWS S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: bus-booking-madhan
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ap-south-1
          SOURCE_DIR: ./
