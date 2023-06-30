import fs from 'fs';


// for ./ui/index.ts
const files = fs.readdirSync('./ui');

const indexFile = files.map((file) => {
	  const [name, ext] = file.split('.');
  return `export * from "./${name}.${ext}";`;
}
).join('\n');

fs.writeFileSync('./ui/index.ts', indexFile);


// for ./hooks
const hooks = fs.readdirSync('./hooks');

const hooksIndexFile = hooks.map((file) => {
	const [name, ext] = file.split('.');
	return `export * from "./${name}.${ext}";`;
}).join('\n');

fs.writeFileSync('./hooks/index.ts', hooksIndexFile);
