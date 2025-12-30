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

### Soft-linking `config/`
You can soft-link the `config/` folder from this repo into your
`packwiz-installer` instance to edit config from in-game and have it update the
repo. On Linux, this can be done with:
```
cd /path/to/instance
ln -s $(realpath /path/to/repo/config/) $(realpath ./config/)
```

On Windows, you're on your own. I have no idea, and I don't care. Screw you!!

### Setting up `packwiz-installer`
You can read more about how to setup a `packwiz-installer` pack
[here](https://packwiz.infra.link/tutorials/installing/packwiz-installer/).

The overall gist is that you have the `packwiz-installer-bootstrap.jar` in the
`.minecraft/` folder of your MMC-compatible instance, and then you should set
the pre-launch command to something along these lines:
```
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar
http://localhost:8080/pack.toml
```

Then, you can do `packwiz serve` to run a local instance of packwiz to test the
installer. The actual link in the final packwiz instance will be:
`https://rwilliaise.github.io/mcpack26/pack.toml`. Please note that this command
will *add* the hashes back into the `index.toml`, so you will have to stop the
`packwiz serve` command and then do `packwiz refresh` to clear the hashes before
committing.

