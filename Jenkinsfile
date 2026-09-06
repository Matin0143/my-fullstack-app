pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Matin0143/my-fullstack-app.git'
            }
        }

        stage('Backend Install') {
            steps {
                sh '''
                    cd backend

                    python3 -m venv venv

                    ./venv/bin/pip install --upgrade pip

                    ./venv/bin/pip install -r requirements.txt
                '''
            }
        }

        stage('Backend Test') {
            steps {
                sh '''
                    cd backend

                    ./venv/bin/python -m py_compile app.py
                '''
            }
        }

        stage('Frontend Install') {
            steps {
                sh '''
                    cd frontend

                    npm install
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo systemctl restart flask
                    sudo systemctl restart frontend
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                    sleep 5

                    curl -f http://127.0.0.1:5000/
                    curl -f http://127.0.0.1:3000/
                    curl -f http://127.0.0.1/
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
