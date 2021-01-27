#!/usr/bin/env bash

    serviceSets=(`git diff-tree --name-status HEAD`)
    for(( i=0; i<${#serviceSets[@]}; i++))
    do
      if [ ${serviceSets[$i]} == "M" ]
      then
        echo ${serviceSets[$i+1]}
      fi
    done