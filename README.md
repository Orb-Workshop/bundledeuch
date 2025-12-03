# bundledeuch
**bundledeuch**, is a drop-in Counter-Strike 2 TypeScript Bundling Template using Bun.

## How to use with an existing project named '<project-name>'

Step 1 - Install: [Bun](https://bun.com)

Step 2 - Navigate to your content/csgo_addons folder and open a Terminal. I recommend [WezTerm](https://wezterm.org/)

Step 3 - Apply the 'bundledeuch' bun template with the desired project name.

```bash
bun create Orb-Workshop/bundledeuch <project-name>
```

Step 4 - Navigate into your project folder and build the `src/main.ts` entrypoint by running the 'build' command.

```bash
cd <project-name>
bun run build
```

or navigate to the project folder and run the `script_build.bat` batch script as an alternative.

Conclusion - This builds the file `scripts/main.js`, which can be referenced in your map with a point_script entity

## Start Developing

During development, you can run a watch script to keep recompiling your bundled scripts.

From within your project folder, run:
```bash
bun run watch
```

or execute the `script_watch.bat` batch script.

NOTE: The watch functionality is experimental and may be buggy.

### Start Hacking!

The entire typescript/javascript ecosystem is now at your disposal!

Edit the package.json file to bundle more dependencies.