module.exports = {
    platform: 'github',
    onboardingConfig: {
        "extends": [
            "config:base",
            ":enablePreCommit",
            "group:allNonMajor",
            "regexManagers:dockerfileVersions",
            "schedule:weekly",
            "docker:pinDigests"
        ]
    },
    repositories: [
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
