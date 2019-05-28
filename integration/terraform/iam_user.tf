provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    region = "us-east-1"
  }
}

data "aws_caller_identity" "current" {}

resource "aws_iam_user" "user" {
  name = "account-lockout-test-user"
}

resource "aws_iam_policy" "policy" {
  name        = "grace-account-lockout-test-policy"
  description = "For account lockout integration testing. Only allows managing individual password"
  policy      = "${file("${path.module}/files/account_lockout_test_user_policy.json")}"
}

resource "aws_iam_user_policy_attachment" "attachment" {
  user       = "${aws_iam_user.user.name}"
  policy_arn = "${aws_iam_policy.policy.arn}"
}
