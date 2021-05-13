#!groovy

@Library("workflowlibs@1.8.0") _

pipeline {

    options {
        ansiColor colorMapName: 'XTerm'
        timestamps()
    }

    agent none

    stages {

        stage('Checkout Global Library') {

            steps {

                script{

                    globalBootstrap {

                        libraryName   = "cellsworkflowlibs"
                        libraryBranch = "master"

                        entrypointParams = [
                            type            : "cellsApp",
                            buildConfigs    : [config1:[config:'prod', build:'vulcanize']],
                            deployS3        : false,
                            deploySecGCP    : false,
                            emailRecipients: ["jonathan.diaz.castillo@bbva.com"],
                            deployCDN       : true,
                            cdnConfig       : [
                                cdnId: [
                                    credentialId: 'kmoplgjn', 
                                    deployPro: false,
                                    branch2Pre: [ 'master' ]
                                ]
                            ]
                        ]
                    }
                }
            }
        }
    }
}