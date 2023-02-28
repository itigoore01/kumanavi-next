import path from 'path';

export default {
  '*': ['prettier --write --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

/**
 * build eslint command.
 * @param {string[]} filenames
 * @see https://nextjs.org/docs/basic-features/eslint#lint-staged
 */
function buildEslintCommand(filenames) {
  const fileOptions = filenames
    .map((filename) => `--file ${path.relative(process.cwd(), filename)}`)
    .join(' ');

  return `next lint --fix ${fileOptions}`;
}
