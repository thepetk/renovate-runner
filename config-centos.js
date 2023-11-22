module.exports = {
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "local>centos/.github"
    ]
  },
  platformCommit: true,
  hostRules: [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_TOKEN
    }
  ],
  repositories: [
    "centos/.github",
    "centos/centos-boot",
    "centos/centos-boot-infra",
    "centos/fedora-tier1-eln",
    "centos/centos-boot-dev",
    "centos/centos-boot-layered"
  ]
};
