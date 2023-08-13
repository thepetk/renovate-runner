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
    "arcalot/arcaflow-plugin-aws-ec2-control",
    "arcalot/arcaflow-plugin-example",
    "arcalot/arcaflow-plugin-template-python",
    "arcalot/arcaflow-plugin-opensearch",
    "arcalot/arcaflow-plugin-elasticsearch",
    "arcalot/arcaflow-plugin-pcp",
    "arcalot/arcaflow-plugin-utilities",
    "arcalot/arcaflow-plugin-wait",
    "arcalot/arcaflow-plugin-metadata",
    "arcalot/arcaflow-plugin-minio",
    "arcalot/arcaflow-plugin-iperf3",
    "arcalot/arcaflow-plugin-smallfile",
    "arcalot/arcaflow-plugin-uperf",
    "crc-org/crc-cloud",
    "Zlopez/anitya-renovate-poc",
    "platform-engineering-org/renovate-test"
  ]
};
