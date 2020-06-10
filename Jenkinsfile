node{
    stage('Git Checkout'){
        checkout([$class: 'GitSCM', branches: [[name: '$Branches']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'd65cafd5-3cff-4b2b-9fe2-643c4218034e', url: 'http://gitlab2.cspiretech.com/puer/zs/web-puer-cockpit-chuangwen-m.git']]])
    }

    stage('Unit Testing'){
        sh '''

        '''
    }

    stage('Build'){
        sh '''
        npm config set registry http://registry.cnpm.cspiretech.com
        npm install
        # npm run build
        npm run build:${profiles}
        '''
    }

    stage('Build & Push Image'){
        if(profiles == 'test'){
            sh '''
            Registry=10.2.130.19
            docker login -u puer -p Puer_2020 $Registry
            docker build -t $Registry/puer-zs/web-puer-cockpit-chuangwen-m:${version}  -f Dockerfile .
            docker push $Registry/puer-zs/web-puer-cockpit-chuangwen-m:${version}
            '''
        }else {
            sh '''
            Registry=harbor-puer.cspiretech.com
            docker login -u admin -p Yunyoung@_2020 $Registry
            docker build -t $Registry/puer-zs-prod/web-puer-cockpit-chuangwen-m:${version}  -f Dockerfile .
            docker push $Registry/puer-zs-prod/web-puer-cockpit-chuangwen-m:${version}
            '''
        }
    }

    stage('Deploy to K8S'){
        if (profiles == 'test') {
            echo '接下来进行普尔云-测试的发布...'
            sh '''
            sed -i "/image/{s/latest/${version}/}"  f-web-puer-cockpit-chuangwen-m-test.yaml
            sed -i "/profiles/{s/profiles/${profiles}/}"  f-web-puer-cockpit-chuangwen-m-test.yaml
            '''
            kubernetesDeploy configs: 'f-web-puer-cockpit-chuangwen-m-test.yaml', kubeConfig: [path: ''], kubeconfigId: 'eb2157e9-aa85-41e8-86e3-95b0bf48d238', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
        }
        if (profiles == 'prod') {
            echo '接下来进行生产环境的发布...'
            sh '''
            sed -i "/image/{s/latest/${version}/}"  f-web-puer-cockpit-chuangwen-m-prod.yaml
            sed -i "/profiles/{s/profiles/${profiles}/}"  f-web-puer-cockpit-chuangwen-m-prod.yaml
            '''
            kubernetesDeploy configs: 'f-web-puer-cockpit-chuangwen-m-prod.yaml', kubeConfig: [path: ''], kubeconfigId: '728605b7-3fdd-4d0d-aeaf-304f2bead801', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
        }
    }

    stage ('Post-Build') {
        echo "移除本地构建的镜像"
        sh '''
            docker image rm -f `docker image ls | grep web-puer-cockpit-chuangwen-m.* | awk '{print $3}'`
        '''
        script {
            currentBuild.description = "${version}"
        }
    }
}
