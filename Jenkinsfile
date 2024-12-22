pipeline {
    agent any
    tools {
        nodejs 'Node Js'
    }
    environment {
        CHAT_ID = credentials('chatId')
        BOT_TOKEN = credentials('BotToken')
    }
    parameters {
        string(name: 'parametro1', defaultValue: 'true', description: 'Parametro 1')
        string(name: 'parametro2', defaultValue: 'false', description: 'Parametro 2')
    }

    stages {
        stage('Instal·lant dependències') {
            steps {
                sh 'npm install'
            }
        }

        stage('Parametro-1') {
            steps {
                script {
                    env.resultat_stage1 = sh(script: "node ./jenkinsScripts/index.js '${params.parametro1}'", returnStatus: true)
                }
            }
        }

        stage('Parametro-2') {
            steps {
                script {
                    env.resultat_stage2 = sh(script: "node ./jenkinsScripts/index.js '${params.parametro2}'", returnStatus: true)
                }
            }
        }

        stage('Mostrant resultat') {
            steps {
                script {
                    echo env.resultat_stage1
                    if (env.resultat_stage1 == '0' && env.resultat_stage2 == '0') {
                        env.resutat_msg = 'El projecte va viento en popa.'
                        sh "echo '${env.resutat_msg}'"
                    } else if (env.resultat_stage1 != '0' && env.resultat_stage2 != '0') {
                        env.resutat_msg = 'Esto pinta muy mal.'
                        sh "echo '${env.resutat_msg}'"
                    } else {
                        env.resutat_msg = 'Alguno de les stages ha fallat.'
                        sh "echo '${env.resutat_msg}'"
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                sh 'npm install node-telegram-bot-api'
                sh "node ./jenkinsScripts/indexBotTelegram.js '${params.chatId} ${env.resultat_msg}'"
            }
        }
    }
}

