#!/bin/bash

if [[ "$1" != "run-me" ]];
then
  echo "In order to prevent accidental deployments you have to call this with: './deploy.sh run-me'"
  exit 1
fi

heroku_api_key="01d797b55dc19ed8703fbdae2ea4a4a99dc9dffb"

environment_names_for_test="avira-jsgame-test"
environment_names_for_production="avira-jsgame"

git_remote_name_for_test="avira-jsgame-test"
git_remote_name_for_production="avira-jsgame"

source $(dirname -- "$0")/deploy_functions.sh


install_and_setup_heroku
add_git_remotes_for_heroku
install_phantomjs_and_casperjs


print_banner "start testing LOCAL environment"
start_node_server
run_tests_against_environment development
kill_node_server


print_banner "start deployment to TEST environment"
create_heroku_instance_if_needed test
deploy_code_to_heroku test
run_tests_against_environment test

stop_if_not_production_branch

print_banner "start deployment to PRODUCTION environment"
deploy_code_to_heroku production
run_tests_against_environment production

