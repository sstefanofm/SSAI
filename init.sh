#! /usr/bin/env bash

cd backend && node auth.js &

cd frontend && npm run dev
