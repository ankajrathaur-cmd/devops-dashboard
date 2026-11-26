
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
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Node.js project build successful'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
}
