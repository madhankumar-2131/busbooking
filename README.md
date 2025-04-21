## 🚌 Bus Booking Website

A simple static website that allows users to view available buses and simulate a booking experience. Built using **HTML, CSS, and JavaScript**, deployed to **AWS S3**, and continuously delivered with **GitHub Actions**. The S3 bucket is also created and managed with **Terraform**.

---

## 🔗 Live Demo

🚀 [Click to View Website](http://bus-booking-madhan.s3-website.ap-south-1.amazonaws.com/)

---

## ⚙️ Tech Stack

- HTML, CSS, JavaScript
- AWS S3 (Static Website Hosting)
- Terraform (Infrastructure as Code)
- GitHub Actions (CI/CD)

---

## 🚀 CI/CD with GitHub Actions

This project uses GitHub Actions to auto-deploy the latest version of the website to the S3 bucket whenever changes are pushed to the `main` branch.

### `.github/workflows/deploy.yml`



![S31](https://github.com/user-attachments/assets/b61d1dfc-c3f5-4f60-88d0-20d4e2bc8e1e)
![S2](https://github.com/user-attachments/assets/5c95ab4b-a5a8-4ebc-a950-5782e976eb06)

![s4](https://github.com/user-attachments/assets/f234679e-2661-45d4-954e-a8099cddb896)


![s5](https://github.com/user-attachments/assets/b0a305c9-af1f-4fb4-97d2-9b6e70653d20)

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
