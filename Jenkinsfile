pipeline {
    agent any
    tools {
        nodejs 'Node Js'
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
                withCredentials([
                    string(credentialsId: 'chatId', variable: 'CHAT_ID'),
                    string(credentialsId: 'BotToken', variable: 'BOT_TOKEN')
                ]) {
                    sh 'npm install node-telegram-bot-api'
                    echo "CHAT_ID: ${CHAT_ID}, BOT_TOKEN: ${BOT_TOKEN}"
                    sh "'CHAT_ID=${env.CHAT_ID}' 'BOT_TOKEN=${env.BOT_TOKEN}' node ./jenkinsScripts/indexBotTelegram.js '${params.chatId} ${env.resultat_msg}'"
                }
            }
        }
    }
}
