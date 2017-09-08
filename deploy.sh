#!/usr/bin/env bash

echo "Deploying updates to GitHub..."

echo "Removing old build..."
rm -rf build

echo "Initializing git..."
git clone -b master --single-branch git@github.com:neueda/neueda.github.io.git build

echo "Building project..."
rm -rf build/*
hugo && cd build

echo "Adding changes..."
git add -A

# Commit changes.
msg="Rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
echo "Creating commit: $msg"
git commit -am "$msg"

# Push source and build repos.
echo "Deploy..."
git push -f origin master

echo "Done!"
