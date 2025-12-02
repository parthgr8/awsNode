pipeline{
    agent any
    stages{
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
                   rm -rf node_modules
                   npm install 
                   npm run build
                   ls -l '''
            }
        } 
    }
}
