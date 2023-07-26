module.exports = {
    platform: 'github',
    onboardingConfig: {
        "extends": [
            "github>platform-engineering-org/.github"
        ]
    },
    hostRules: [
      {
        matchHost: 'github.com',
        token: process.env.GITHUB_COM_TOKEN,
      },
      {
        "hostType": "docker",
        "matchHost": "docker.io",
        "username": process.env.DOCKER_AUTH_USERNAME,
        "password": process.env.DOCKER_AUTH_TOKEN
      }
    ],
    repositories: [
        'platform-engineering-org/.github',
        'platform-engineering-org/renovate-runner',
        'platform-engineering-org/bootstrap',
        'platform-engineering-org/helper',
        'platform-engineering-org/gitlab-runners',
        'platform-engineering-org/platform-engineering-org.github.io',
        'platform-engineering-org/gitlab-configuration',
        'arcalot/arcaflow-plugin-aws-ec2-control',
        'arcalot/arcaflow-plugin-example',
        'arcalot/arcaflow-plugin-template-python',
        'crc-org/crc-cloud'
    ]
};
