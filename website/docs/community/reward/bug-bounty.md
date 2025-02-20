---
last_modified_on: "2021-07-03"
title: Bug Bounty
description: Report a bug in Qovery and get rewarded
---

import Alert from '@site/src/components/Alert';

Our team is committed to working with security experts across the globe to stay up to date with the latest security techniques. If you have discovered a security issue that you believe we should know about, we would welcome working with you. Please let us know about it and we'll make every effort to quickly correct the issue.

<Alert type="success">

Earn from $100 to $5000 Qovery credits per exploit.

</Alert>

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/community/reward/bug-bounty.md.erb
-->

## Eligibility

- You must be the first reporter of the vulnerability.
- You do not access data of other users and solely use your created accounts.
- You may not publicly disclose the vulnerability prior to our resolution.
- You provide a working proof of concept that exploits the security issue.
- The exploit scopes are:
  - Website related endpoints on `www.qovery.com` and `console.qovery.com`
  - API related endpoints on `*.qovery.com` and `*.qovery.io`

### Exclusions
- Login/Logout CSRF
- DDoS
- Social engineering on customers or employees of Qovery
- Self-XSS (we require evidence on how the XSS can be used to attack another Qovery user)
- Miss of rate limits
- Report from automated tools and scans
- Vulnerabilities sending spam or unauthorised messages
- Bugs in 3rd party software
- X-Frame-Options related
- Customer's sites
- Relating to HSTS
- DNSSEC
- Missing security headers which do not lead directly to a vulnerability
- Physical attack on the infrastructure
- Theoretical attacks
- Breaking of SSL/TLS trust
- Compromising of browser/device (ex. computer sharing, physical access to a user's device, ...)
- Vulnerabilities only affecting users of outdated or unpatched browsers and platforms
- Password and account recovery policies, such as reset link expiration or password complexity
- Vulnerabilities without solution on our side (HEIST, ...)
- Outdated DNS record pointing to system which does not belong to Qovery
- Any DNS record outdated for less than 48 hours

## Rewards

- Minimum reward is $100 Qovery credits for security vulnerabilities.
- Maximum reward is $3000 Qovery credits for security vulnerabilities.

The reward depends on the vulnerability severity and will be paid via Qovery credits only. Issues without security impact are not eligible for a bounty, yet still welcomed and will be treated like any other report.

## How to submit your exploit

Complete [this form][urls.qovery_submit_bug_bounty_form] to share with us your exploit.

## FAQ

### Why do you reward users?

Read [this post][urls.qovery_billing_context] to know more about it.

### What are "Qovery credits"?

They are free credits that you can use on your Qovery Community and Startup plan.

### Can I pay to get more credits on my Community plan?

No you can’t pay to get more credits on your Community plan. *Read the question below 👇 to get a more detailed response*.

### Why don't you allow users to pay their credits?

**Qovery IS NOT a hosting platform and will never be**. We offer free hosting because it is our way to give back to the our developers community. But we want to encourage them to give back in return by helping each other and sharing their love of Qovery. See the “Community plan and free credits” section above.

### What happens if I no longer have credits for my Community plan?

We notify you to give back to the community to get more credits. If you have not taken any action within:
1. 48 hours, Qovery will shut down your applications.
2. 30 days, Qovery will permanently delete your applications

### How long I do have to use my free credits?

You have 12 months to use your earned credits.

### Are credits recurrent?

Credits are only recurrent for granted [ambassadors][docs.community.become-an-ambassador].

### Can I be eligible to multiple rewards?

Absolutely.

### Can I use my free credits on my Startup and Enterprise plans?

Absolutely 🙂.


[docs.community.become-an-ambassador]: /docs/community/become-an-ambassador/
[urls.qovery_billing_context]: https://www.qovery.com/blog/how-qovery-billing-works
[urls.qovery_submit_bug_bounty_form]: https://qovery.typeform.com/to/gp9v3CTN
