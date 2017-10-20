zalando QA Challenge
========================
# TEST AUTOMATION TASK - Test Automation Engineer 

Instructions:
- Candidate is free to use the tool of his/her choice
- Code/script should be Unix executable
- Code/script/file is readable, understandable
- Publish your code in your personal github account and share the link with us. 
- Please provide a “README” document  with clear instructions on how to execute the code

Scenario: Create a automated test for following scenarios: 
1. Go to zalando website www.zalando.de
2. Go to the Search box and search for article DK151H09R-Q11
3. Add it to the cart
4. Go to the cart and change the quantity to 2
5. Move the items from the basket to the wishlist.

# Installation
- git clone git @https://github.com/gaaliche/zalando-challenge.git
- `cd zalando-challenge`
- install node v4.2.6 (or any higher version)
- `source env.sh`
- `npm install`

# Start the e2e tests
- `npm run e2e`.

# Note
- Please use the browser `Firefox`.
- Used language/framework : JS/WebdriverIO-Jasmine
