pipeline {
    agent any
    environment {
        SAUCE_USERNAME = credentials('SAUCE_USERNAME')
        SAUCE_ACCESS_KEY = credentials('SAUCE_ACCESS_KEY')
        PATH = "/usr/local/bin:/opt/homebrew/bin:$PATH"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[url: 'https://github.com/stefano-sauce/demo-cypress',
                             credentialsId: 'ae053389-695e-4cef-bb11-0be4b5c06010']]])
            }
        }
        stage('Install saucectl') {
            steps {
                sh '''
                    curl -L https://saucelabs.github.io/saucectl/install | bash
                    export PATH=$PATH:$HOME/.sauce/bin
                    saucectl --version
                '''
            }
        }
        stage('Run saucectl tests') {
            steps {
                echo 'Run Sauce Cypress Pipeline Test'
                sh '''
                    export PATH=$PATH:$HOME/.sauce/bin
                    saucectl run --config .sauce/config-ext1.yml
                '''
            }
        }
    }
}