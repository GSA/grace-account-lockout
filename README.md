# grace-account-lockout

*Product owner and security engineering decided that lockout is not required as MFA is already implemented*

Lambda functions for NIST 800-53 AC-7: Unsuccessful Login Attempts

## Features required:

Configurable lock-out (# of failed attempts)
Configurable unlock duration (# of minutes before re-enabled)
Notification of operations team and user email address [resource tag: Email]

## [NIST 800-53 AC-7](https://nvd.nist.gov/800-53/Rev4/control/AC-7)

a. Enforces a limit of [Assignment: organization-defined number] consecutive invalid logon attempts by a user during a [Assignment: organization-defined time period]; and

b. Automatically [Selection: locks the account/node for an [Assignment: organization-defined time period]; locks the account/node until released by an administrator; delays next logon prompt according to [Assignment: organization-defined delay algorithm]] when the maximum number of unsuccessful attempts is exceeded.

### Sample Failed Authentication Event

```
{
    "eventVersion": "1.05",
    "userIdentity": {
        "type": "IAMUser",
        "principalId": "ABCDEFGHIJKLMNOPQRSTU",
        "accountId": "999999999999",
        "accessKeyId": "",
        "userName": "account-lockout-test-user"
    },
    "eventTime": "2019-05-14T17:54:29Z",
    "eventSource": "signin.amazonaws.com",
    "eventName": "ConsoleLogin",
    "awsRegion": "us-east-1",
    "sourceIPAddress": "73.19.224.95",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
    "errorMessage": "Failed authentication",
    "requestParameters": null,
    "responseElements": {
        "ConsoleLogin": "Failure"
    },
    "additionalEventData": {
        "LoginTo": "https://console.aws.amazon.com/console/home?state=hashArgs%23&isauthcode=true",
        "MobileVersion": "No",
        "MFAUsed": "Yes"
    },
    "eventID": "bdd2f222-a55d-43f6-8d64-9f89fab243f0",
    "eventType": "AwsConsoleSignIn",
    "recipientAccountId": "999999999999"
}
```

## Repository contents

none

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
