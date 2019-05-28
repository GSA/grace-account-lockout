# IAM User Lockout Design

- The IAM user is locked by a Lambda function which is subscribed to a CloudWatch Logs subscription filter.  The filter is looking for more than a specified number of `ConsoleLogin` events with `"errorMessage": "Failed authentication"` within a specified time frame.

- The Lambda function will check if any single IAM user had more than the specified number of failed authentication attempts within the specified time frame, and if so lockout the IAM user.

- If configured to lockout the IAM user for a specified time period, then the Lambda function will apply the AWS managed DenyAll Policy (`arn:aws:iam::aws:policy/AWSDenyAll`) to the IAM user. It will then set a CloudWatch timer event to trigger the Unlock Lambda function after the specified time period.

- If configured to lock the IAM user until released by an administrator, the Lambda function will delete the IAM user's login profile.  This will require resetting the user's console password.

## Details (where the Devil is)

### IAM User Policy for integration test

The `account_lockout_test_user` will have an IAM policy that only allows managing the user's password. See [policy file](../integration/terraform/files/policy.json) for details.]

### Other actions taken by Locking Lambda Function

1. Adds a tag to the IAM user indicating why and when the IAM user was locked:

```
"Tags": [
  {
    "Name": "Locked",
    "Value": "Multiple failed authentications/YYYY-MM-DD hh:mm:ss"
  }
]
```
