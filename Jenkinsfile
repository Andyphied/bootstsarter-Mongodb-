#!/usr/bin/env groovy

    pipeline {
        agent any

        stages {

            stage('Define Services to Build') {
                steps {
                    script {

                        def SERVICES_TO_BUILD = sh script:"./service-change.sh", returnStdout: true
                        SERVICES_TO_BUILD.split("\n").each {
                            echo "Beging build for ${it}"
                            try {
                                build job: "${it}", propagate: false, wait: false
                            } catch (ex) {
                                echo "Failed build for ${it}: ${ex.message}"
                            }

                        }
                    }
                }
            }
        }
    }