# bundledeuch
**bundledeuch**, is a drop-in Counter-Strike 2 TypeScript Bundling Template using Bun.

## How to Use

Step 1 - Install: [Bun](https://bun.com)

Step 2 - Navigate to your content/csgo_addons folder and open a Terminal. I recommend [WezTerm](https://wezterm.org/)

Step 3 - Create a New Project with Bundled Scripting, by creating the 'bundledeuch' bun template with the desired project name.
```bash
bun create github:Orb-Workshop/bundledeuch <project-name>
```

Step 4 - Navigate into your project folder and build

```bash
cd <project-name>
bun run build
```

or navigate to the folder and run the `script_build.bat` batch script as an alternative.

## Start Developing

During development, you can run a watch script to keep recompiling your bundled scripts.

```bash
bun run watch
```

or execute the `script_watch.bat` batch script.

NOTE: The watch functionality is experimental and may be buggy.

### Start Hacking!

The entire typescript/javascript ecosystem is now at your disposal!

Edit the package.json file to add more dependencies.