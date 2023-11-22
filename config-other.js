module.exports = {
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "github>platform-engineering-org/.github"
    ]
  },
  gitPrivateKey: process.env.GPG_KEY,
  platformCommit: true,
  hostRules: [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_TOKEN
    }
  ],
  autodiscover: false,
  repositories: [
    "crc-org/crc-cloud",
    "devfile/registry",
    "thepetk/registry",
    "ralphbean/dnf-plugin-lockfile",
    "kubevirt/hyperconverged-cluster-operator"
  ],
  constraints: {
    go: "1.19"
  }
};
