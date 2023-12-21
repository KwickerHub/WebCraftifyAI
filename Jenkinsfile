pipeline {
  agent any {
    tools {
      nodejs 'node19'
    }
    environment {
      SCANNER_HOME = tool 'sonar-scanner'
    }
    stages {
      stage('Git Checkout') {
        steps {
          git branch: 'main', url: 'https://github.com/Curtis-Thomas/free-api-list-with-react.git'
        }
      }
      stage('Quality Gate') {
        steps {
          script {
            waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token'
          }
        }
      }
      stage('OWASP File Security Scan') {
        steps {
          script {
            dependencyCheck additionalArguments: '', odcInstallation: 'DP-Check'
          }
        }
      }
      stage('Trivy File System Scan') {
        steps {
          sh 'trivy fs .'
        }
      }
      stage('Docker Build and Push') {
        steps {
          script {
            withDockerRegistry(credentialsId: 'docker') {
              sh 'docker build -t dockerusername:latest .'
              sh 'docker tag dockerusername/latest repotag/swoc:latest'
              // Consider merging or removing this line
              sh 'docker push repotag/swoc:latest'
            }
          }
        }
      }
      stage('Deploy to Container') {
        steps {
          sh 'docker run -d -p 80:80  dockerusername/swoc:latest'
        }
      }
    }
  }
}
