# GitHub Pages subpath compatibility

- [ ] Fix the missing portable-assets import and verify configuration loading and regression tests.
- [x] Align Vite production base and React Router without duplicated prefixes.
- [x] Audit resource paths and preserve design and content.
- [x] Add GitHub Pages fallback for direct internal route visits.
- [x] Pass 11 regression tests and verify the real homepage and internal navigation with the deployment base injected in the local browser.
- [x] Confirm automatic compilation reports build OK; add generated-output validation to the GitHub Pages workflow.
- [ ] Verify the new generated production output on GitHub Pages. Blocker: the updated GitHub Actions deployment has not been observed; automatic local build artifacts are not exposed in this sandbox.