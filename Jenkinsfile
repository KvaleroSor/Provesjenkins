pipeline {
    agent any
    tools {
        nodejs 'Node Js'
    }    
    parameters {
        string(name: 'persona_a_saludar', defaultValue: 'user', description: 'Persona a saludar')
    }
    triggers{
        cron('1/5 * * * *')
    }

    stages {
        stage('Execution') {
            steps {
                sh "node index.js '${params.persona_a_saludar}'"
            }
        }

        stage('Exemple Paralel') {
            parallel {
                stage('Text 1') {
                    steps {
                        echo 'Executant stage 1'
                    }
                }
                stage('Text 2') {
                    steps {
                        echo 'Executant stage 2'
                    }
                }
            }
        }
    }
}
