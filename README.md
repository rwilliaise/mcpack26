# `mcpack26`
This is the packwiz modpack for the 2026 epic Gus modpack.

## Usage
Due to the bleeding-edge builds of both VMod and VS: Eureka, you want to have
Git LFS installed.

When adding new files to the `config/` or `kubejs/` folders, please use `packwiz
refresh`. If you're adding repo infra (e.g. `.github/`) please add it to the
`.packwizignore`.

For ease of development, `no-internal-hashes` has been enabled for the pack.
When deploying, use `packwiz refresh --build` to add the hashes into
`index.toml` -- be sure, however, to not commit these to the repo. Running
`packwiz refresh` (no `--build`) will remove the hashes for you.
