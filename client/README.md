# Client development

The client uses Vite and requires Node.js 22.12 or newer.

```sh
cd client
npm ci
npm run dev
```

Open <http://127.0.0.1:5173>. Vite proxies `/api` to the Flask server at
<http://127.0.0.1:5000>; run `python app.py` from the repository root when
working with API data.

## Build and test

From `client`, run `npm run build` to create `dist/` or `npm run preview` to
serve that build locally. Run `npm run test:e2e` for the browser smoke test
after building.

From the repository root, run `./build-front.sh` to rebuild the client and copy
`dist/` into the tracked `frontend/` directory used by Flask and Vercel. This
includes `THIRD_PARTY_LICENSES.md` for bundled dependencies. Run
`./scripts/check-generated-frontend.sh` to check that all generated files are
committed; CI runs the same check.
