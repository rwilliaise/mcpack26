# `mcpack26`
This is the configuration and packwiz infrastructure for the 2026 epic Gus
modpack.

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

To test the `packwiz-installer` setup, run `packwiz serve` and then make sure
that the URL in the pre-launch command of the instance is set to
`http://localhost:8080/pack.toml`.

A pro tip: you can soft-link the `config/` folder from this repo into your
`packwiz-installer` instance to edit config from in-game and have it update the
repo. On Linux, this can be done with:
```
cd /path/to/instance
ln -s $(realpath /path/to/repo/config/) $(realpath ./config/)
```

On Windows, you're on your own. I have no idea, and I don't care. Screw you!!
