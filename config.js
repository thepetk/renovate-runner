module.exports = {
    platform: 'github',
    onboardingConfig: {
      extends: [
        'config:base',
        ":dependencyDashboard",
        "group:allNonMajor"
      ],
    },
    "automerge": false,
    repositories: [
        'platform-engineering-org/self-hosted-renovate',
        'platform-engineering-org/arcaflow-engine'
    ],
};
