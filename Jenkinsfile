pipeline{
    agent any
    stages{
        stage('clean workspace'){
            steps{
                cleanWp()
            }
        }
        stage('Build'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true 
                }
            }
            steps{
                sh '''
                   ls -l
                   node --version
                   npm install 
                   npm run build
                   ls -l '''
            }
        } 
    }
}
