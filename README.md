# Cypress Examples with Cypress 10 and above.

> **For Demonstration Purposes Only**\
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied,
> including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a
> particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only,
> and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts
> are maintained by the Technical Services team at Sauce Labs.

## Introduction

This repository will hold multiple examples on how to run Cypress tests locally and with the
[Sauce Labs saucectl CLI](https://docs.saucelabs.com/dev/cli/saucectl/).

It is based on the following user journey:

1. A QA/DEV already has Cypress tests which he/she can run on his local machine
2. A QA/DEV wants to run his existing tests on Sauce Labs VMs

## Prerequisites

- Please check our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/) for installing SauceCTL
- Make sure you've set up your credentials on your local machine and or CI-pipeline, see
  [this](https://docs.saucelabs.com/dev/cli/saucectl/#associate-your-credentials)-doc
- Check the [Cypress](https://docs.saucelabs.com/web-apps/automated-testing/cypress/yaml/v1/)-docs for all options

### Install dependencies

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `demo-Cypresss` when you execute this command

### Install `saucectl`

You can install only saucectl by running the following command

```shell
npm install -g saucectl
```

## Cypress info

More information about Cypress and writing Cypress tests can be found
[here](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## Sauce Labs saucectl info

More information about the Sauce Labs saucectl can be found
[here](https://docs.saucelabs.com/dev/cli/saucectl/)

## Examples:

All below mentioned examples can be found in the [`.sauce`](./.sauce/)-folder. You can run the configurations by running
the following command from the root of this folder

      saucectl run --config ./.sauce/config-ex{#}.yml

      # OR for use with the EU data center
      npm run test.sauce.ex{#}.eu

      # OR for use with the US data center
      npm run test.sauce.ex{#}.us

The `#` stands for the number of the below mentioned examples.

### Example 1 - Minimal configuration for all tests

[`config-ex1.yml`](./.sauce/config-ex1.yml) provides a minimum configuration needed to run the Cypress tests.
In this example, all tests are executed on a single chrome browser in sequential order.

### Example 2 - Automatically sharding the tests

[`config-ex2.yml`](./.sauce/config-ex2.yml) run all tests on chrome. saucectl automatically
splits the tests by using "shard" property with the value "spec" so that they can easily run in parallel.

### Example 3 - Cross Browser tests

[`config-ex3.yml`](./.sauce/config-ex3.yml) run the login and the swag item tests on 3 different types of browsers where saucectl automatically splits the tests by using "shard" property with the value "spec" so that they can easily run in parallel.

### Example 4 - Cross Versions tests

[`config-ex4.yml`](./.sauce/config-ex4.yml) run all tests on different Chrome versions where saucectl automatically
splits the tests by using "shard" property with the value "shard" so that they can easily run in parallel.
