module.exports = {
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "local>sagano-org/.github"
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
  autodiscover: true,
  autodiscoverFilter: [
    "centos/centos-boot",
    "centos/.github",
    "centos/centos-boot-infra",
    "centos/fedora-tier1-eln",
    "centos/centos-boot-dev"
  ]
};
