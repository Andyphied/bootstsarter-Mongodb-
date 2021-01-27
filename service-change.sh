#!/usr/bin/env bash

    changeSets=(`git diff-tree --name-status HEAD`)
    for(( i=0; i<${#changeSets[@]}; i++))
    do
      if [ ${changeSets[$i]} == "M" ]
      then
        echo ${changeSets[$i+1]}
      fi
    done