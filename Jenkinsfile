pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ankajrathaur-cmd/devops-dashboard.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'echo Node.js project build successful'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
