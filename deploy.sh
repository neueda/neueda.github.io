#!/usr/bin/env bash

echo "Deploying updates to GitHub..."

# Build the project.
echo "Building project..."
hugo

# Add changes to git.
echo "Adding changed to git..."
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
echo "Creating commit: $msg"
git commit -m "$msg"

# Push source and build repos.
git subtree push --prefix=build git@github.com:neueda/neueda.github.io.git master
