// AWS Console Login
const rp = require('request-promise');
const cheerio = require('cheerio');
const v4 = require('aws-signature-v4')
const user = 'acount_lockout_test_user'
const button_link = 'https://us-east-1.signin.aws.amazon.com/oauth?SignatureVersion=4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJMOATPLHVSJ563XQ&X-Amz-Date=2019-05-14T19%3A41%3A34.913Z&X-Amz-Signature=bd0e65118c5f41e8fa3983d892f28b176d54790f8b83efd71bc0c3adf5f4a4e8&X-Amz-SignedHeaders=host&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&response_type=code&state=hashArgs%23#'
