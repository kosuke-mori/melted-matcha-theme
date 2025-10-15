# Theme IDs Reference

## GitHub-Connected Themes

- **Production** (main branch): `135179960391` - Published
- **Staging** (staging branch): `135179796551` - Unpublished
- **Development** (dev branch): `135179763783` - Unpublished

## Branch → Theme Mapping

```
dev branch      → Development theme (135179763783)
staging branch  → Staging theme (135179796551)
main branch     → Production theme (135179960391)
```

## Workflow Commands

### Development
```bash
# Local preview
shopify theme dev --theme 135179763783

# Pull changes
shopify theme pull --theme 135179763783
```

### Staging
```bash
# Local preview
shopify theme dev --theme 135179796551

# Pull changes
shopify theme pull --theme 135179796551
```

### Production
```bash
# Local preview (testing only)
shopify theme dev --theme 135179960391

# Pull changes (rare - should be managed via Git)
shopify theme pull --theme 135179960391
```

---

*Last updated: 2025-10-15*
