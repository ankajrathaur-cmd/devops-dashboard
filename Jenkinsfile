
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'set "PATH=C:\\Program Files\\nodejs;%PATH%" && "C:\\Program Files\\nodejs\\npm.cmd" install'
            }
        }

        stage('Build') {
            steps {
                bat 'set "PATH=C:\\Program Files\\nodejs;%PATH%" && node --version && echo Node.js project build successful'
            }
        }

        stage('Test') {
            steps {
                bat 'set "PATH=C:\\Program Files\\nodejs;%PATH%" && "C:\\Program Files\\nodejs\\npm.cmd" test'
            }
        }
    }
}
