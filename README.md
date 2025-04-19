**ScrapeDeployonWeb**
An application that combines Node.js with puppeteer for web scraping and python flask for hosting scraped data as JSON, the project is containerized using a multistage Dockerfile for build and deployment.

**prerequisites**
1.Docker
2.python
3.we need node.js 
**for testing scrape.js before containerization we can use command node scrape.js** 

**Directory structure**
I have created one directory named as exactproj,which contains the following files:

exactproj/ 
-scrape.js   ** node.js script that uses Puppeteer to scrape a given url.
-package.json ** for node dependencies.
-requirements.txt ** for python dependecies.
-server.py ** flask app which serves the scraped data.
-Dockerfile ** a multi stage Dockerfile that builds the complete app.

**Steps to build**

1.Build the Docker image

sudo docker build -t scraperapp . 

2.Run the container

sudo docker run -p 5000:500 scraperapp

**steps to deploy using AWS or Vm machine**

-Launch an Instance 
-Install the required packages mention above.
-clone the Git repo. by using: 
**git clone https://github.com/himanshu38885/ScrapeDeployonWeb.git**
-Enter in the project directory 
-Build the Docker image using the Dockerfile
-Run the container to start the application and check the output on the web using system Ip at port no:5000.
http://systemip:5000

NOTE: To access this application on the web, we have to add a security group rule to allow traffic on port 5000.
Type:custom TCP,Protocol:TCP, Port range :5000. and check the firewall setting in VM before checking the output.
