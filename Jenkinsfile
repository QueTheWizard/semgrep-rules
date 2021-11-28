pipeline {
  agent any
  stages {
    stage('scan') {
      steps {
        sh "docker run -v ${WORKSPACE}:/src --workdir /src returntocorp/semgrep-agent:v1 semgrep-agent --config p/ci --config p/security-audit --config p/secrets --publish-token 3073921a66afddc377e4d317f5d18ffa7c69964f25c3aba602180e37f62efd46"
      }
    }
  }
}
