# Angular 17 to Angular 21 Migration Guide

This document outlines the breaking changes and migrations performed to upgrade this project from Angular 17 to Angular 21.

## Summary of Changes

### 1. **Node Version Update**
- **Changed from**: Node ^18.10.0
- **Changed to**: Node >=20.0.0
- **Reason**: Angular 21 requires Node 20+

**Files updated:**
- `package.json`

### 2. **Dependency Upgrades**

All Angular packages and related dependencies were updated to version 21.1.5 or compatible versions:

```json
{
  "@angular/animations": "21.1.5",
  "@angular/cdk": "21.1.5",
  "@angular/common": "21.1.5",
  "@angular/compiler": "21.1.5",
  "@angular/core": "21.1.5",
  "@angular/forms": "21.1.5",
  "@angular/localize": "21.1.5",
  "@angular/platform-browser": "21.1.5",
  "@angular/platform-browser-dynamic": "21.1.5",
  "@angular/router": "21.1.5",
  "@angular/service-worker": "21.1.5",
  "@nx/angular": "22.5.2",
  "zone.js": "0.16.1"
}
```

### 3. **Constructor Injection → `inject()` Function**

**Breaking Change**: Angular 21 prefers the new `inject()` function over constructor parameter injection.

#### Before (Angular 17):
```typescript
constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private ga: AnalyticsService
) {
}
```

#### After (Angular 21):
```typescript
import { inject } from '@angular/core';

private titleService = inject(Title);
private metaService = inject(Meta);
private router = inject(Router);
private ga = inject(AnalyticsService);
```

**Components/Services Updated:**
- `app.component.ts`
- `app.module.ts` (app providers)
- `footer.component.ts`
- `menu.component.ts`
- `about.component.ts`
- `contact.component.ts`
- `credit.component.ts`
- `experience.component.ts`
- `projects.component.ts`
- `terminal.component.ts`
- `analytics.service.ts`
- `language.service.ts`

### 4. **Template Control Flow Syntax**

**Breaking Change**: Angular 21 replaces `*ngIf`, `*ngFor`, and `*ngSwitch` with new control flow syntax: `@if`, `@for`, `@switch`.

#### Before (Angular 17):
```html
<div *ngIf="menuOpen" class="menu-overlay">
    <ol class="menu-items">
        <li *ngFor="let item of items; let i = index">
            {{item.label}}
        </li>
    </ol>
</div>
```

#### After (Angular 21):
```html
@if (menuOpen) {
    <div class="menu-overlay">
        <ol class="menu-items">
            @for (item of items; track item) {
                <li>
                    {{item.label}}
                </li>
            }
        </ol>
    </div>
}
```

**Key Changes:**
- `*ngIf` → `@if`
- `*ngFor` → `@for` (with required `track` expression)
- `let i = index` → `$index` (built-in variable in @for loops)
- `let item of collection` → `item of collection`

**Templates Updated:**
- `menu.component.html` - Updated `@if` and `@for` with track expressions
- `background.component.html` - Updated `@for` with track
- `footer.component.html` - Updated `@for` with track
- `experience.component.html` - Updated `@if` and `@for` with track and `$index`
- `about.component.html` - Updated `@for` with track
- `highlights.component.html` - Updated `@for` with track and nested loops
- `projects.component.html` - Updated `@if`, `@for` with track, and `$index`
- `terminal.component.html` - Updated `@if` and `@for` with track

### 5. **Track Expression for @for Loops**

Angular 21 requires a `track` expression in `@for` loops to help Angular identify when items have changed. This provides better performance and ensures proper tracking of items in the collection.

```typescript
// Track by the item itself (for simple objects)
@for (item of items; track item) {
    <div>{{item.name}}</div>
}

// Track by a specific property
@for (item of items; track item.id) {
    <div>{{item.name}}</div>
}

// Track by index alternative
@for (item of items; track $index) {
    <div>{{item.name}}</div>
}
```

### 6. **Module Reorganization**

To avoid circular dependencies and module resolution issues:

- Moved `DragDropModule` to `app.module.ts` (root level)
- Simplified `home.module.ts` to only import necessary modules
- Simplified `terminal.module.ts` to avoid duplicate HttpClient imports
- Removed redundant `TranslateModule.forChild()` and `HttpClient` setup from child modules

### 7. **TypeScript Compiler Options**

Updated `tsconfig.json` to be compatible with Angular 21:

```json
{
  "target": "es2022",
  "module": "esnext",
  "lib": ["es2020", "dom"]
}
```

## Breaking Changes Summary

| Feature | Angular 17 | Angular 21 | Migration |
|---------|-----------|-----------|-----------|
| Dependency Injection | Constructor | `inject()` function | Add `import { inject }` and use property injection |
| Conditionals | `*ngIf` | `@if` | Replace all `*ngIf` directives |
| Loops | `*ngFor` | `@for` | Replace all `*ngFor` with `track` expression |
| Loop Index | `let i = index` | `$index` | Use `$index` built-in variable |
| Node Version | ^18.10.0 | >=20.0.0 | Update Node to version 20 or later |
| Zone.js | 0.14.3 | 0.16.1 | Updated automatically via npm |

## File Changes Overview

### TypeScript Components Modified:
1. `src/app/app.component.ts` - Migrated to `inject()`
2. `src/app/app.module.ts` - Added `DragDropModule`
3. `src/app/components/general/footer/footer.component.ts` - Migrated to `inject()`
4. `src/app/components/general/menu/menu.component.ts` - Migrated to `inject()`
5. `src/app/components/home/about/about.component.ts` - Migrated to `inject()` and fixed constructor
6. `src/app/components/home/contact/contact.component.ts` - Migrated to `inject()`
7. `src/app/components/home/credit/credit.component.ts` - Migrated to `inject()`
8. `src/app/components/home/experience/experience.component.ts` - Migrated to `inject()`
9. `src/app/components/home/projects/projects.component.ts` - Migrated to `inject()` and added type annotations
10. `src/app/components/terminal/terminal.component.ts` - Migrated to `inject()` and fixed HostListener type
11. `src/app/services/analytics/analytics.service.ts` - Migrated to `inject()`
12. `src/app/services/language/language.service.ts` - Migrated to `inject()`

### HTML Templates Modified:
1. `src/app/components/general/menu/menu.component.html` - Control flow syntax
2. `src/app/components/general/background/background.component.html` - Control flow syntax
3. `src/app/components/general/footer/footer.component.html` - Control flow syntax
4. `src/app/components/home/about/about.component.html` - Control flow syntax
5. `src/app/components/home/experience/experience.component.html` - Control flow syntax
6. `src/app/components/home/highlights/highlights.component.html` - Control flow syntax
7. `src/app/components/home/projects/projects.component.html` - Control flow syntax
8. `src/app/components/terminal/terminal.component.html` - Control flow syntax

### Configuration Files Modified:
1. `package.json` - Updated Node engine requirement and all Angular dependencies
2. `tsconfig.json` - Updated compiler options for Angular 21

## Testing & Validation

After migration, run the following commands to validate:

```bash
# Lint the project
pnpm run lint

# Build the project
nx build

# Run tests (if configured)
pnpm test

# Run e2e tests (if configured)
pnpm run e2e
```

## Performance Improvements

Angular 21 brings several performance improvements:

1. **Better Tree-shaking**: The `inject()` function enables better dead-code elimination
2. **Faster Change Detection**: The new control flow syntax is more efficient than directive-based control flow
3. **Reduced Bundle Size**: Unused Angular directives can be better tree-shaken

## References

- [Angular 17 to 18 Update Guide](https://angular.io/guide/update-to-latest-version)
- [Angular 18 to 19 Update Guide](https://angular.io/guide/update-to-latest-version)
- [Angular 19 to 20 Update Guide](https://angular.io/guide/update-to-latest-version)
- [Angular 20 to 21 Update Guide](https://angular.io/guide/update-to-latest-version)
- [Angular Built-in Control Flow](https://angular.io/guide/control-flow)
- [Angular Dependency Injection with inject()](https://angular.io/guide/dependency-injection-in-action#injecting-services)

## Rollback Instructions

If you need to roll back to Angular 17:

```bash
git checkout HEAD -- package.json pnpm-lock.yaml
git checkout HEAD -- src/
pnpm install
```

\
## Common Issues & Solutions

### Issue: "Cannot find module '@angular/cdk/drag-drop'"
**Solution**: Ensure `DragDropModule` is imported at the root `app.module.ts`, not in child modules.

### Issue: "@for loop must have a 'track' expression"
**Solution**: Add a `track` clause to all `@for` loops: `@for (item of items; track item)`

### Issue: "Prefer using the inject() function over constructor parameter injection"
**Solution**: Replace constructor parameter injection with property-level injection using `inject()` function.

### Issue: "'app-component' is not a known element"
**Solution**: Ensure all components are properly declared in their respective modules or imported.

---

**Migration Date**: February 2026
**Migrated By**: Automated Migration Tool
**Status**: Complete
