# Project Rules — meetingroomutrecht

## STRICT SCOPE RULE

**Only do exactly what is asked. Nothing more.**

- Do NOT touch any file that was not explicitly mentioned in the request.
- Do NOT refactor, clean up, rename, or "improve" anything beyond the specific change asked for.
- Do NOT remove imports, change component structure, or alter logic in files you are editing unless that specific change was requested.
- If a task requires touching a file, change ONLY the lines needed for that task.

## DO NOT BREAK THE SITE

- Before committing any change, verify there are no unused imports or variables introduced — TypeScript strict mode will fail the build.
- After every edit, mentally trace whether any other component depends on what was changed.
- If unsure whether a change is safe, ask first. Do not guess and push.

## NO UNAUTHORISED CHANGES

Past violations that must never repeat:
- Replacing `ContactLink` components with plain `<a>` tags when only navigation links were asked to be fixed — broke the build.
- Adding `subPage` prop to a component and then not using it — caused TypeScript error.
- Adding legal pages and cookie banners when only a specific element was asked to change.

The rule: **if it was not in the request, do not touch it.**
