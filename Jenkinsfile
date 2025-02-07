pipeline {
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
    }
}
