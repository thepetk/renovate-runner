module.exports = {
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "github>platform-engineering-org/.github"
    ]
  },
  hostRules: [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_TOKEN
    }
  ],
  repositories: [
    "platform-engineering-org/.github",
    "platform-engineering-org/renovate-runner",
    "platform-engineering-org/bootstrap",
    "platform-engineering-org/helper",
    "platform-engineering-org/gitlab-runners",
    "platform-engineering-org/platform-engineering-org.github.io",
    "platform-engineering-org/gitlab-configuration",  
    "platform-engineering-org/renovate-test"
  ]
};
