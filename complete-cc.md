Thanks for taking the time to interview with Complete! We'll ask you to spend no more than an hour implementing a small feature for a frontend web application. We're looking for candidates who are able to take high-level requirements and come up with an effective and extensible implementation that meets the requirements.

At Complete, we develop React applications on NextJS (primarily written in Typescript). This [example blog application](https://github.com/polar-bear-labs/blog) is representative of our application's structure and implementation. The blog app has two significant functionalities, it renders blog posts from markdown and displays a list of available blog posts.

### Up and Running

You can clone the repo [here](https://github.com/complete-labs/blog). Run `yarn` to install dependencies and then `yarn dev` to run the application locally. It should be available at `localhost:3000`

### Feature

Right now, all posts in the blog are visible to the public. **We'd like you to add a "[paywall](https://en.wikipedia.org/wiki/Paywall)" feature so that you cannot view the blog post in full until you've logged in.** Any of the blog posts which are marked as "premium" should be behind this paywall.

**Requirements**

- A [post's markdown metadata](https://github.com/polar-bear-labs/next.js/blob/canary/examples/blog-starter-typescript/_posts/preview.md?plain=1#L2) should be used to indicate whether it is a premium article.
- All posts should be listed on the home page of the application, even if they are premium. There should be some small indicator as to whether or not the article is premium.
- When a user clicks on or directly navigates to a premium article via link, they should be prompted to log in. If the user is already logged in, the article should be rendered as normal.
- The login method need not be secure. You are welcome to hardcode a single username/password into the frontend. The logged-in state of a user should be managed via cookies.

There is a bit of ambiguity in these requirements. Please be prepared to explain the tradeoffs you made. We're happy to answer any questions you have over email `zack@complete.so`.

### Workflow

Please open a pull request with your completed solution at our [fork of this project](https://github.com/polar-bear-labs/blog). The pull request should include a description of the changes you've made.

You do not need to write unit tests for your feature, but we should be able to verify the functionality.

Possible Approach

1. https://hackmamba.io/blog/2023/01/create-a-paywall-on-a-next-js-blog-using-fingerprint/

<!-- chatgpt -->

To create a paywall on a Next.js blog, you can follow these steps:

1. Set up a Payment Gateway: Choose a payment gateway provider to handle the payment processing. Popular options include Stripe, PayPal, and Braintree. Sign up for an account with the chosen provider and obtain the necessary API keys or credentials.

2. Implement Server-side Rendering (SSR): Since Next.js supports server-side rendering, you can use this feature to handle paywall functionality. Create a new API route or modify an existing one to check if a user has a valid subscription or has made a payment. This route will communicate with the payment gateway to verify the user's status.

3. Determine Protected Content: Decide which parts of your blog should be protected by the paywall. For example, you may want to protect certain articles, specific sections of articles, or access to premium features.

4. Add User Authentication: Implement user authentication to track user accounts and manage subscriptions. You can use Next.js authentication libraries like NextAuth.js, Passport.js, or create your own authentication system.

5. Create Subscription Plans: Define different subscription plans or pricing tiers for your blog. This can be achieved by using the features provided by your chosen payment gateway. Set up the plans with the appropriate pricing, billing cycles, and features.

6. Display Paywall: On the client-side, create a component that checks the user's authentication and subscription status. If the user does not have a valid subscription, display a paywall component that prompts them to subscribe or make a payment.

7. Handle Payment Process: When a user clicks on the paywall or subscription button, initiate the payment process. Use the payment gateway's client-side SDK to create the necessary payment elements and handle the payment flow.

8. Update User Status: Once the payment is successfully processed, update the user's status or subscription information in your database or user management system. You can also utilize webhooks provided by the payment gateway to receive notifications about successful payments.

9. Grant Access: When a user successfully subscribes or makes a payment, update their authentication status or session to grant them access to the protected content. This can involve setting a cookie, session variable, or using JSON Web Tokens (JWT) to manage access.

10. Handle Renewals and Cancellations: Implement logic to handle subscription renewals and cancellations. Listen for webhooks or events from the payment gateway to update the user's subscription status accordingly.

Remember to handle edge cases such as expired subscriptions, failed payments, or handling users who have already paid but need to be granted access.

By following these steps, you can create a paywall on your Next.js blog, allowing you to monetize your content effectively.
