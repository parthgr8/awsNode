pipeline{
    agent any
    stages{
        stage('Build'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode false 
                }
            }
            steps{
                sh '''
                   ls -l
                   node --version
                   rm -rf node_modules package-lock.json
                   npm install 
                   npm run build
                   ls -l '''
            }
        } 
    }
}
