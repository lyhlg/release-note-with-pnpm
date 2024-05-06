
/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  repositoryUrl: 'https://github.com/lyhlg/release-note-with-pnpm.git',
  extends: "semantic-release-monorepo",
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    // "@semantic-release/npm",
    // "@semantic-release/github"
  ]
};
