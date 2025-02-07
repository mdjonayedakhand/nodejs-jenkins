pipeline {
 agent {
  docker {
    image 'node'
  }
}


    stages {
        stage('Build') {
            steps {
                // Checkout from a public repository (no credentials needed)
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mdjonayedakhand/nodejs-jenkins.git']]]) // Removed credentialsId

                // Install Node.js dependencies
                sh 'npm install'

                // Build your Node.js application (replace with your build command)
                sh 'npm run dev' // Or 'npm run production', etc.

                // Optionally, archive build artifacts
                // archiveArtifacts 'dist/**' // Example
            }
        }
    }
}
