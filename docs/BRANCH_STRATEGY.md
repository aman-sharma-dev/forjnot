# Branch strategy

Forjnot has two products with one source of truth:

- `main` is the reusable starter and the integration branch for backend, shared packages, tooling, and documentation.
- `deployment` adds the public frontend and deployment-specific files. It should regularly receive `main`, never become an independent development line.

## Daily workflow

1. Branch from `main`: `git switch main && git pull && git switch -c feat/my-change`.
2. Open the pull request into `main` and require `pnpm check` to pass.
3. After merging, open a small sync pull request from `main` into `deployment`.
4. Resolve frontend-only conflicts on `deployment`; do not copy fixes back by hand. If a fix applies to both variants, make it on `main` and sync it forward.

Use GitHub branch protection for both long-lived branches. Require pull requests and the validation workflow; direct-push workflows cannot reliably distinguish a merge from a direct push.

For a truly frontend-free download, publish a `starter-*` tag or GitHub release from `main`. Keep `deployment` as the live showcase so users can inspect the finished experience before choosing the template.
