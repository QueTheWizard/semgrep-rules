pipeline {
  agent any
  stages {
    stage('scan') {
      steps {
        sh "docker run -v $(pwd):$(pwd) --workdir $(pwd) returntocorp/semgrep-agent:v1 semgrep-agent --config p/secrets --no-git-ignore"
      }
    }
  }
}
