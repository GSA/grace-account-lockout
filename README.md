# grace-account-lockout [![CircleCI](https://circleci.com/gh/GSA/grace-account-lockout.svg?style=svg)](https://circleci.com/gh/GSA/grace-account-lockout)

Lambda functions for NIST 800-53 AC-7: Unsuccessful Login Attempts

## Features required:

Configurable lock-out (# of failed attempts)
Configurable unlock duration (# of minutes before re-enabled)
Notification of operations team and user email address [resource tag: Email]

## [NIST 800-53 AC-7](https://nvd.nist.gov/800-53/Rev4/control/AC-7)

a. Enforces a limit of [Assignment: organization-defined number] consecutive invalid logon attempts by a user during a [Assignment: organization-defined time period]; and

b. Automatically [Selection: locks the account/node for an [Assignment: organization-defined time period]; locks the account/node until released by an administrator; delays next logon prompt according to [Assignment: organization-defined delay algorithm]] when the maximum number of unsuccessful attempts is exceeded.

## Repository contents

none

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
