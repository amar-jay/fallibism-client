import fs from 'fs';


// for ./ui/index.ts
const files = fs.readdirSync('./ui');

const indexFile = files.map((file) => {
	  const [name, ext] = file.split('.');
	  if (name === "index") return "";
	  return `export * from "./${name}";`;
}
)
.filter(e => e.length > 0)
.join('\n');

fs.writeFileSync('./ui/index.ts', indexFile);


// for ./hooks/index.ts
const hooks = fs.readdirSync('./hooks');

const hooksIndexFile = hooks.map((file) => {
	const [name, ext] = file.split('.');
	if (name === "index") return "";
	return `export * from "./${name}";`;
})
.filter(e => e.length > 0)
.join('\n');

fs.writeFileSync('./hooks/index.ts', hooksIndexFile);
