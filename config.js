module.exports = {
    platform: 'github',
    onboardingConfig: {
      extends: [
        'config:base',
        ":dependencyDashboard"
      ],
    },
    repositories: [
        'platform-engineering-org/self-hosted-renovate',
        'platform-engineering-org/arcaflow-engine'
    ],
};
