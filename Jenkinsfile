    pipeline{
        agent any
        environment{
            node_env='prod'
        }
        stages{
            stage('Build'){
                agent{
                    docker{
                        image 'node:22.11.0-alpine3.22'
                        args '-u root'
                        reuseNode true 
                    }
                }
                steps{
                    sh '''
                    ls -l   
                    node --version
                    npm install 
                    npm run build
                    echo $node_env
                    ls -l '''
                }
            }
        }
    }
