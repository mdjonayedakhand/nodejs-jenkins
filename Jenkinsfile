pipeline {
  environment { 
        registry = "jona163922/democicd" 
        registryCredential = 'dockertoken' 
   }
 agent {
  docker {
    image 'node'
  }
}
 
    stages {
        stage('checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mdjonayedakhand/nodejs-jenkins.git']]]) 
            }
        }
        stage('build') {
            steps {
             sh "npm install"
            }
        }
      stage('Install Docker') {
    steps {
        sh '''
            apt-get update
            apt-get install -y docker.io
            usermod -aG docker jenkins
            newgrp docker
        '''
    }
}
       stage('Stage VI: Build Image') {
      steps { 
        echo "Build Docker Image"
        script {
               docker.withRegistry( '', registryCredential ) { 
                 myImage = docker.build registry
                 myImage.push()
                }
        }
      }
    }
    }
}
