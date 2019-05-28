# Integration Tests

This folder contains Makefile, JavaScript jQuery and Go code to perform
integration tests to verify account lockout is working as intended.

## Terraform

Creates a test user with minimum privileges (only `grace-development-mfa` policy applied)

## JavaScript jQuery

Programatically emulates user trying to log in to AWS console

## Go Code

- Checks if failed login attempts were were logged to CloudWatch
- Checks if CloudWatch event was triggered if specified number of failed logins
occured inside the specified duration required for logout
- Verifies the account was locked out
-
