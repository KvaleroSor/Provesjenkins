pipeline {
    agent any
    tools { nodejs 'Node Js' }
    parameters {
        string(name: 'persona_a_saludar', defaultValue: 'user', description: 'Nombre de la persona a saludar')
        booleanParam(name: 'parametro-1', defaultValue: 'true', description: 'Parametro 1')
        booleanParam(name: 'parametro-2', defaultValue: 'false', description: 'Parametro 2')
    }

    stages {
        stage('Execucio') {
            steps {
                sh 'node index.js'
            }
        }

        stage('Persona a saludar'){
            steps{
                sh "node index.js ${params.persona_a_saludar}"
            }
        }

        stage('Parametro-1') {
            steps {
                script {
                    env.resultat_stage1 = sh(script: "node ./jenkinsScripts/index.js '${params.parametro-1}'", returnStdout: true)
                }
            }
        }

        stage('Parametro-2') {
            steps {
                script {
                    env.resultat_stage2 = sh(script: "node ./jenkinsScripts/index.js '${params.parametro-2}'", returnStdout: true)
                }
            }
        }

        stage('Mostrant resultat') {
            steps {
                script {
                    echo env.resultat_stage1
                    if (env.resultat_stage1 == '0' && env.resultat_stage2 == '0') {
                        sh 'echo "El projecte va viento en popa."'
                    } else if (env.resultat_stage1 != '0' && env.resultat_stage2 != '0') {
                        sh 'echo "Esto pinta muy mal."'
                    } else {
                        sh 'echo "Alguno de los stages ha fallat."'
                    }
                }
            }
        }
    }
}
