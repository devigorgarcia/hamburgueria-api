#!/usr/bin/env bash
# exit on error
set -o errexit

yarn build

yarn prisma migrate deploy