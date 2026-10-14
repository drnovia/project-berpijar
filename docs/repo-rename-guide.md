# GitHub repository rename (owner action)

Cloud Agent tokens cannot rename repositories (`403`). Apply these renames in GitHub **Settings → General → Repository name** (or `gh repo rename` as owner):

| Current slug | Target slug |
| --- | --- |
| `jejakkediri` | `JejakKediri` |
| `kediri-cinematic-history` | `Kediri-Cinematic-History` |
| `novia-studio-blog` | `Novia-Studio-Blog` |
| `project-berpijar` | `Project-Berpijar` |

Already capitalized: `MyWebsite`, `NovSite`.

After rename, update local remotes:

```bash
git remote set-url origin https://github.com/drnovia/<NewName>.git
```

GitHub redirects old URLs temporarily; prefer the new names in docs and clones.
