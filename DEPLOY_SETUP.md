# Deploy Setup: MEPWebsite2 → mpapka.github.io

This site auto-deploys to `mpapka.github.io` when changes are merged to the `main` branch. For this to work, the GitHub Action needs a Personal Access Token (PAT) with permission to push to the `mpapka.github.io` repo.

## Step 1: Create a Personal Access Token

1. Go to [GitHub → Settings → Developer Settings → Fine-grained tokens](https://github.com/settings/personal-access-tokens/new)
2. Fill in:
   - **Token name:** `MEPWebsite2 Deploy`
   - **Expiration:** 90 days (or custom — you'll need to regenerate when it expires)
   - **Resource owner:** `mpapka`
   - **Repository access:** Select "Only select repositories" → choose `mpapka/mpapka.github.io`
   - **Permissions → Repository permissions:**
     - **Contents:** Read and write
     - Leave everything else as default (No access)
3. Click **Generate token**
4. **Copy the token** — you won't be able to see it again

## Step 2: Add the Token as a Repository Secret

1. Go to [MEPWebsite2 → Settings → Secrets and variables → Actions](https://github.com/mpapka/MEPWebsite2/settings/secrets/actions)
2. Click **New repository secret**
3. Fill in:
   - **Name:** `DEPLOY_TOKEN`
   - **Secret:** paste the token from Step 1
4. Click **Add secret**

## Step 3: Verify

1. Create a PR from `dev` to `main` on [MEPWebsite2](https://github.com/mpapka/MEPWebsite2/compare/main...dev)
2. Merge the PR
3. Go to [Actions](https://github.com/mpapka/MEPWebsite2/actions) and watch the "Deploy site" workflow run
4. Once complete, check [mpapka.github.io](https://mpapka.github.io) for the updated site

## Workflow Summary

```
dev branch (work here)
    │
    ├── Push changes
    │
    └── Open PR to main
            │
            └── Merge PR
                    │
                    └── GitHub Action triggers
                            │
                            ├── Builds Jekyll site
                            └── Pushes _site/ to mpapka.github.io
```

## Token Renewal

The PAT will expire based on the expiration you set. When it does:

1. Generate a new token (repeat Step 1)
2. Go to [MEPWebsite2 Secrets](https://github.com/mpapka/MEPWebsite2/settings/secrets/actions)
3. Click the pencil icon next to `DEPLOY_TOKEN`
4. Paste the new token and save
