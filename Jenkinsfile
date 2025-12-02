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
                   sudo rm -rf /var/lib/jenkins/workspace/nodeCICD/node_modules
                   npm install 
                   npm run build
                   ls -l '''
            }
        } 
    }
}
