## [0.14.12] - 2026-06-16

### 🚀 Features

- _(cli)_ add clean command to rari CLI (#218) by @skiniks

### 🚜 Refactor

- _(rsc)_ reorganize module structure and rename wire_format to flight by @skiniks
- _(error)_ change error metadata type from Option<ErrorMetadata> to Option<Box<ErrorMetadata>> by @skiniks
- _(actions)_ move server actions to rsc module by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.11...v0.14.12

## [0.14.11] - 2026-06-12

### 🚀 Features

- _(ssr)_ implement server-side rendering for client components by @skiniks
- _(ssr)_ add support for module imports in RSC rendering by @skiniks
- _(ssr)_ enhance server-side rendering with improved error handling and component stubs by @skiniks
- _(module-loader)_ add stubs for headers, image, and client components by @skiniks

### 🐛 Bug Fixes

- _(ssr)_ render client component children to HTML instead of empty placeholders by @skiniks
- _(ssr)_ enhance component loading and rendering logic by @skiniks
- _(ssr)_ refine component type checks in rendering logic by @skiniks
- _(ssr)_ enhance rendering logic for suspense and client components by @skiniks
- _(ssr)_ improve RSC value handling in rendering logic by @skiniks
- _(ssr)_ streamline RSC value checks in rendering logic by @skiniks
- _(rendering)_ refine RSC string validation logic to support new prefixes by @skiniks
- _(rendering)_ update cloneElement logic to handle children props correctly by @skiniks

### 🚜 Refactor

- _(ssr)_ centralize RSC children type checks in rendering logic by @skiniks
- _(proxy)_ reorganize proxy utilities and introduce new header processing functions by @skiniks
- _(rendering)_ simplify suspense handling in RSC logic by @skiniks
- _(module-loader)_ streamline stub selection logic for module loading by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.9...v0.14.11

## [rari@0.14.9] - 2026-06-11

### ⚙️ Miscellaneous Tasks

- add version 0.0.0 to deploy and logger packages, downgrade rari to version 0.14.8 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.14.9...rari@0.14.9

## [0.14.9] - 2026-06-11

### 🚀 Features

- _(metadata)_ add alternates metadata support for feed generation by @skiniks

### 🚜 Refactor

- _(metadata)_ enhance canonical link handling and improve metadata merging logic by @skiniks
- _(router)_ reorganize imports and enhance utility functions by @skiniks
- _(server)_ streamline server component eligibility checks and enhance file resolution logic by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.8...v0.14.9

## [rari@0.14.8] - 2026-06-08

### 🐛 Bug Fixes

- _(vite-plugin)_ update warning suppression for dynamic imports in dist files by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.14.8...rari@0.14.8

## [0.14.8] - 2026-06-08

### 🚀 Features

- add Next.js App Router template.tsx (per-segment re-mount) to Rari by @jarick

### 🐛 Bug Fixes

- _(rsc)_ await renderServerComponent in traverseReactElement for proper async handling by @skiniks
- _(rsc-client-runtime)_ disable eslint rule for process global usage by @skiniks

### 🚜 Refactor

- _(routing)_ remove deprecated is_layout_ancestor method by @skiniks
- _(vite)_ optimize directive utils with char code comparisons by @skiniks
- _(vite)_ consolidate directive detection and standardize char code constants by @skiniks
- _(vite)_ optimize server component detection and cache html entry imports by @skiniks
- _(rsc)_ extract React symbol constants for improved maintainability by @skiniks
- _(rsc)_ rename REACT_FRAGMENT_SYMBOL to REACT_FRAGMENT_TYPE for consistency by @skiniks
- _(rendering)_ streamline error handling and remove unused components by @skiniks
- _(rendering)_ enhance fallback handling and streamline client component registration by @skiniks
- _(rsc)_ simplify global suspense initialization and remove unused status response interface by @skiniks
- _(rsc)_ enhance async component detection and error handling in traverseReactElement by @skiniks
- _(rendering)_ update component rendering to support async operations by @skiniks
- _(error-handling)_ streamline error display and improve error boundary logic by @skiniks

### ⚙️ Miscellaneous Tasks

- bump version to 0.14.8 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.7...v0.14.8

## [rari@0.14.7] - 2026-06-07

### 🚀 Features

- _(router)_ implement route groups and additional paths for layouts by @jarick
- _(router)_ add duplicate route detection and support API routes in groups by @skiniks
- _(server-build)_ add component export detection for server components by @skiniks
- _(regex)_ improve export detection patterns for functions and classes by @skiniks
- _(regex)_ refine export detection patterns for better accuracy by @skiniks
- _(regex)_ expand const function export pattern to match function declarations by @skiniks
- _(regex)_ improve exported const function pattern to match arrow functions with parameters by @skiniks
- _(regex)_ refine const export pattern to match arrow functions correctly by @skiniks

### 🐛 Bug Fixes

- _(proxy)_ add debug logging when executor not found by @skiniks

### 🚜 Refactor

- improve runtime path resolution across Rust and TypeScript modules by @skiniks
- improve runtime path resolution and internal file detection by @skiniks
- _(cache)_ replace custom LRU implementation with lru crate by @skiniks

### 🧪 Testing

- _(http_utils)_ add comprehensive content type mapping tests by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.6...rari@0.14.7

## [rari@0.14.6] - 2026-06-04

### ⚡ Performance

- _(server,router)_ parallelize cache warmup and optimize route resolution by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.4...rari@0.14.6

## [rari@0.14.4] - 2026-06-03

### 🚀 Features

- add CSS module support for server-rendered pages by @jarick

### 🚜 Refactor

- _(router)_ make componentId optional and reorder CSS modules config by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.3...rari@0.14.4

## [rari@0.14.3] - 2026-06-02

### 🐛 Bug Fixes

- reset suspense.currentBoundaryId between renders to prevent async components from returning null during RSC navigation by @jarick

### 🚜 Refactor

- extract suspense type checking into shared utility by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.2...rari@0.14.3

## [rari@0.14.2] - 2026-06-01

### 🐛 Bug Fixes

- Windows path compatibility for tests and Rust path resolver by @jarick
- streaming nested suspense lazy resolution by @jarick

### 🎨 Styling

- _(path)_ reformat file_path_to_component_id method by @skiniks

### 🆕 New Contributors

- @jarick made their first contribution

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.1...rari@0.14.2

## [rari@0.14.1] - 2026-05-26

### 🚀 Features

- _(rsc)_ add cache warmup for static routes and update route matching by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ await element resolution and wrap state updates in transition by @skiniks
- _(rsc)_ handle streaming responses without transition wrapping by @skiniks

### 🚜 Refactor

- _(rsc)_ remove unused export regex patterns and simplify manifest by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.14.0...rari@0.14.1

## [rari@0.14.0] - 2026-05-26

### 🚀 Features

- _(server)_ remove rate limiting and spam blocking middleware by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ handle double-dollar escape sequences and remove redundant escaping by @skiniks
- _(rsc)_ escape props values before JSON serialization in wire format by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.12...rari@0.14.0

## [rari@0.13.12] - 2026-05-26

### 🚀 Features

- _(sitemap)_ add alias resolution and Vite dev server CORS support by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.11...rari@0.13.12

## [rari@0.13.11] - 2026-05-24

### 🚀 Features

- _(rsc)_ optimize non-streaming route rendering with inline RSC payload by @skiniks

### 🐛 Bug Fixes

- _(security)_ update COEP header from require-corp to credentialless by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.10...rari@0.13.11

## [rari@0.13.9] - 2026-05-24

### ⚙️ Miscellaneous Tasks

- refactor snapshot generation and consolidate dependencies by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.8...rari@0.13.9

## [rari@0.13.8] - 2026-05-24

### 🚀 Features

- _(runtime)_ embed deno_node lazy-loaded sources at compile time by @skiniks
- _(runtime)_ embed deno_node lazy-loaded sources at compile time by @skiniks
- _(runtime)_ embed V8 snapshot at compile time by @skiniks

### 🐛 Bug Fixes

- add binary runtime initialization check and deployment fixes by @skiniks

### ⚙️ Miscellaneous Tasks

- remove binary runtime initialization check by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.7...rari@0.13.8

## [rari@0.13.7] - 2026-05-23

### 🐛 Bug Fixes

- Remove non-streaming rendering path from layout core renderer by @skiniks
- _(runtime)_ resolve V8 isolate slot conflict in deno_node synthetic modules by @skiniks
- _(runtime)_ add withFileTypes option support to readdir stub by @skiniks
- _(runtime)_ initialize globalThis['~rsc'] object before module assignment by @skiniks

### 🚜 Refactor

- _(runtime)_ consolidate module loader stubs and reorganize node initialization by @skiniks
- _(runtime)_ simplify module stub generation by @skiniks
- _(runtime)_ remove init_napi extension and consolidate napi initialization by @skiniks
- _(runtime)_ remove client reference bridge registration by @skiniks

### ⚙️ Miscellaneous Tasks

- refactor release workflow permissions and enhance buffer encoding support by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.6...rari@0.13.7

## [rari@0.13.4] - 2026-05-07

### ⚙️ Miscellaneous Tasks

- _(rari)_ downgrade version to 0.13.2 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.3...rari@0.13.4

## [rari@0.13.2] - 2026-04-29

### 🐛 Bug Fixes

- _(rsc)_ improve component registration and HMR handling by @skiniks

### ⚙️ Miscellaneous Tasks

- update dependencies to latest versions by @skiniks
- bump rari version to 0.13.2 by @skiniks
- _(rari)_ bump rari-binaries to 0.13.2 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.1...rari@0.13.2

## [rari@0.13.1] - 2026-04-24

### ⚙️ Miscellaneous Tasks

- update dependencies and standardize health check endpoint by @skiniks
- update rari version to 0.13.1 in Cargo.toml by @skiniks
- update optionalDependencies to version 0.13.1 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.13.0...rari@0.13.1

## [rari@0.13.0] - 2026-04-21

### 🚀 Features

- _(build, ci)_ add rari-win32-arm64 by @Master-Hash

### ⚙️ Miscellaneous Tasks

- update package version to 0.13.0 in Cargo.toml by @skiniks
- update dependencies in pnpm-workspace.yaml by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.12.2...rari@0.13.0

## [rari@0.12.2] - 2026-04-18

### 🐛 Bug Fixes

- _(rsc)_ mark Image component as client reference on server by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.12.1...rari@0.12.2

## [rari@0.12.1] - 2026-04-16

### 🐛 Bug Fixes

- _(rsc)_ improve client component resolution and simplify external imports by @skiniks
- _(rsc)_ simplify default export resolution in React Flight client config by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.12.1 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.12.0...rari@0.12.1

## [rari@0.12.0] - 2026-04-16

### 🚀 Features

- _(rsc)_ optimize boundary update streaming with progressive HTML rendering by @skiniks
- _(rsc)_ refactor streaming and RSC rendering with React Flight client integration by @skiniks
- _(rsc)_ implement hexadecimal row ID encoding for wire format by @skiniks
- _(rsc)_ implement hexadecimal row reference parsing and streaming bridge by @skiniks
- _(rsc)_ refactor wire format encoding and streaming bridge initialization by @skiniks
- _(rsc)_ implement streaming bridge and hexadecimal chunk encoding by @skiniks
- _(rsc)_ improve wire format validation and streaming cleanup by @skiniks
- _(rsc)_ add export name tracking to component registry by @skiniks
- _(rsc)_ enhance client component registration and reference parsing by @skiniks
- _(rsc)_ improve client component resolution and error handling by @skiniks
- _(rsc)_ add export name tracking to client component loader by @skiniks
- _(rsc)_ improve client reference detection and navigation abort handling by @skiniks
- _(router)_ simplify navigation handler and fix response URL handling by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ normalize path separators in component ID generation by @skiniks
- _(rsc)_ normalize path separators in wire format serializer by @skiniks
- _(rsc)_ normalize path separators in promise resolver by @skiniks
- _(rsc)_ normalize path separators in component registry operations by @skiniks
- _(rsc)_ normalize path separators in client component resolution by @skiniks
- _(rsc)_ add fallback resolution for non-normalized component IDs by @skiniks
- _(rsc)_ normalize path separators in server build component ID resolution by @skiniks
- _(rsc)_ improve render generation error handling and simplify test timeouts by @skiniks
- _(rsc)_ normalize path separators in component resolution and improve error handling by @skiniks
- _(rsc)_ normalize path separators in component registry operations by @skiniks
- _(rsc)_ improve component registry cleanup and streaming initialization by @skiniks
- _(rsc)_ normalize path separators in dependency graph lookups and fix hex digit validation by @skiniks
- _(rsc)_ extract path normalization into reusable method by @skiniks
- _(rsc)_ improve component registry cleanup and streaming initialization by @skiniks
- _(rsc)_ normalize path separators in dependency graph lookups and fix hex digit validation by @skiniks
- _(rsc)_ improve component registry cleanup and hex digit validation by @skiniks

### 🚜 Refactor

- _(rsc)_ extract render generation retrieval and import row parsing by @skiniks
- _(rsc)_ extract path normalization into reusable normalize_id method by @skiniks

### 🧪 Testing

- _(rsc)_ add comprehensive path normalization tests for component registry by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.12.0 by @skiniks
- _(rari)_ bump optional dependencies to 0.12.0 by @skiniks

### ◀️ Revert

- back to working state at 55be557f by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.11.0...rari@0.12.0

## [rari@0.11.0] - 2026-04-03

### 🚀 Features

- _(rsc)_ implement streaming boundary updates with DOM rendering by @skiniks
- _(cli)_ add vite-plus detection and support dual vite/vite-plus usage by @skiniks
- _(rsc)_ implement batch promise resolution with concurrent script execution by @skiniks
- _(rsc)_ enhance HTML rendering with improved attribute handling and streaming by @skiniks
- _(rsc)_ improve error handling and async component rendering by @skiniks
- _(rsc)_ improve RSC rendering with better attribute validation and cookie handling by @skiniks
- _(rsc)_ optimize streaming boundary rendering and promise handling by @skiniks
- _(rsc)_ improve suspense boundary handling and streaming updates by @skiniks
- _(rsc)_ improve streaming and promise handling with better serialization by @skiniks
- _(rsc)_ improve concurrent script execution and promise handling by @skiniks
- _(rsc)_ improve element serialization and attribute handling by @skiniks
- _(rsc)_ improve security, accessibility, and HTML rendering by @skiniks
- _(rsc)_ improve streaming event handling and boundary content rendering by @skiniks
- _(rsc)_ upgrade deno dependencies and improve boundary context handling by @skiniks
- _(rsc)_ enhance component context and improve null checks by @skiniks
- _(rsc)_ improve boundary handling and payload validation by @skiniks
- _(rsc)_ improve suspense boundary handling and navigation state management by @skiniks
- _(rsc)_ improve async boundary handling and add circular reference detection by @skiniks
- _(rsc)_ improve suspense boundary handling and RSC wire format parsing by @skiniks
- _(rsc)_ improve suspense boundary children processing and return structure by @skiniks
- _(rsc)_ add stream completion marker to RSC streaming response by @skiniks
- _(rsc)_ add cookie validation and RSC fallback rendering by @skiniks
- _(rsc)_ add stream completion check to suspense boundary rendering by @skiniks
- _(rsc)_ refactor lazy promise resolution with circular reference detection by @skiniks
- _(runtime)_ refactor request context management and improve origin validation by @skiniks
- _(rsc)_ refactor rendering pipeline with circular reference detection by @skiniks
- _(rsc)_ extract lazy promise resolution into dedicated method by @skiniks
- _(rsc)_ refactor streaming setup and improve origin validation by @skiniks
- _(rsc)_ refactor lazy promise resolution and request context handling by @skiniks
- _(rsc)_ refactor stream context handling and improve directive parsing by @skiniks
- _(rsc)_ improve cache validation and origin pattern matching by @skiniks
- _(rsc)_ refactor request context lifecycle and improve origin validation by @skiniks
- _(rsc)_ refactor directive parsing and stream context handling by @skiniks
- _(rsc)_ refactor rendering pipeline and improve error handling by @skiniks
- _(rsc)_ extract streaming enablement constant and simplify wire format validation by @skiniks
- _(rsc)_ strengthen error handling and extract regex keywords constant by @skiniks
- _(rsc)_ add streaming disable capability and improve render error handling by @skiniks
- _(rsc)_ refactor streaming pipeline and improve error handling by @skiniks
- _(rsc)_ refactor rendering pipeline with cleanup handlers by @skiniks
- _(rsc)_ implement streaming reference counting for lifecycle management by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ update element array length validation for RSC protocol by @skiniks

### 🚜 Refactor

- remove CSRF protection and add search functionality by @skiniks

### 🎨 Styling

- _(rsc)_ fix indentation in layout rendering error handling by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.25...rari@0.11.0

## [rari@0.10.25] - 2026-03-26

### 🚀 Features

- _(rsc)_ add attribute name validation and refactor HTML escaping by @skiniks
- _(rsc)_ enhance HTML rendering security with tag and attribute validation by @skiniks
- _(rsc)_ add automatic px unit suffix for numeric style values by @skiniks
- _(rsc)_ distinguish boolean HTML attributes from aria/content attributes by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ skip non-numeric style values without unit suffix by @skiniks

### 🚜 Refactor

- _(rsc)_ revert wire_format serializer to address memory regressions by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.24...rari@0.10.25

## [rari@0.10.24] - 2026-03-25

### 🚀 Features

- _(rsc)_ add automatic px unit suffix for numeric CSS values by @skiniks

### 🚜 Refactor

- _(rsc)_ consolidate HTML escaping functions and add tag validation by @skiniks
- _(rsc)_ improve event handler detection with character-based validation by @skiniks

### ⚡ Performance

- _(rsc)_ optimize JSON serialization and HTML rendering by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.10.24 by @skiniks
- _(rari)_ bump optional dependencies to 0.10.24 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.23...rari@0.10.24

## [rari@0.10.23] - 2026-03-24

### 🐛 Bug Fixes

- resolve Windows path handling issues in module resolution by @skiniks

### 🚜 Refactor

- _(vite)_ extract use client directive validation logic by @skiniks
- _(vite)_ reorder comment handling logic in HMR coordinator by @skiniks
- _(vite)_ improve comment handling and test organization by @skiniks
- _(vite)_ reorder comment skip logic in HMR coordinator by @skiniks
- _(vite)_ simplify inline block comment stripping logic by @skiniks
- _(vite)_ improve comment stripping and enhance test assertions by @skiniks
- _(vite)_ handle incomplete block comments in directive detection by @skiniks

### 🧪 Testing

- _(vite)_ add comprehensive unit tests for vite plugin by @skiniks
- _(vite)_ add input validation and improve test coverage by @skiniks
- _(vite)_ enhance validation and cross-platform path handling by @skiniks
- _(vite)_ improve block comment handling and cross-platform paths by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.10.23 by @skiniks
- _(rari)_ bump optional dependencies to 0.10.23 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.22...rari@0.10.23

## [rari@0.10.22] - 2026-03-19

### 🐛 Bug Fixes

- _(module-loader)_ refactor React stub resolution logic by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.21...rari@0.10.22

## [rari@0.10.21] - 2026-03-19

### 🐛 Bug Fixes

- resolve removed React stub regression by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.20...rari@0.10.21

## [rari@0.10.20] - 2026-03-18

### 🚀 Features

- _(fetch)_ add cache tags support to fetch operations by @skiniks

### 🐛 Bug Fixes

- add defensive checks and improve path resolution logic by @skiniks

### 🚜 Refactor

- reorganize deployment and streaming setup code by @skiniks
- consolidate deployment and utility functions by @skiniks
- _(runtime)_ consolidate React globals and streaming setup by @skiniks
- _(module_reload)_ remove stats and history tracking by @skiniks
- consolidate React globals and improve fetch cache handling by @skiniks
- improve React setup and error handling across runtime by @skiniks
- improve React JSX handling and image optimization logic by @skiniks
- improve JSX handling, fetch caching, and proxy utilities by @skiniks
- _(ClientRouter)_ move route ref update before state change by @skiniks
- optimize React JSX handling and image component logic by @skiniks
- add defensive type checks and improve null handling by @skiniks
- consolidate JSX delegate creation and improve component resolution by @skiniks
- improve JSX delegate creation and component ID resolution by @skiniks
- add defensive checks and improve component resolution by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.19...rari@0.10.20

## [rari@0.10.19] - 2026-03-15

### 🚀 Features

- _(rari)_ refactor RSC payload handling and suspense management by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.10.19 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.18...rari@0.10.19

## [rari@0.10.18] - 2026-03-14

### 🚀 Features

- _(rari)_ optimize RSC payload ref handling and add CLI integration tests by @skiniks
- _(rari)_ improve RSC rendering and add CLI utility exports by @skiniks
- _(rari)_ improve stale content handling and navigation state tracking by @skiniks
- _(rari)_ refactor RSC payload parsing and freshness tracking by @skiniks
- _(rari)_ add type safety and improve RSC payload ref handling by @skiniks
- _(rari)_ improve component validation and RSC error tracking by @skiniks
- _(rari)_ extract and track freshness token from RSC payload by @skiniks

### ⚙️ Miscellaneous Tasks

- _(typescript)_ centralize TypeScript configuration by @skiniks
- _(rari)_ bump version to 0.10.18 by @skiniks
- _(rari)_ bump binary dependencies to 0.10.18 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.17...rari@0.10.18

## [rari@0.10.17] - 2026-03-14

### 🚀 Features

- _(rari)_ add error boundary support and expand e2e test coverage by @skiniks
- _(rari)_ improve error boundary handling and static file serving by @skiniks
- _(rari)_ add client directive to error boundary and improve component ID generation by @skiniks
- _(rari)_ add lifecycle management to error boundary component by @skiniks
- _(rari)_ remove mount checks and improve use client directive handling by @skiniks
- _(rsc)_ improve component rendering and fix edge cases by @skiniks
- _(rsc)_ improve component rendering stability and HMR cache handling by @skiniks
- _(rsc)_ optimize component rendering with memoized callbacks and lazy content loading by @skiniks
- _(rsc)_ improve error handling, promise cleanup, and component rendering by @skiniks
- _(rsc)_ improve streaming error format and optimize cache invalidation by @skiniks
- _(rari)_ migrate to vite-plus CLI and improve RSC root call handling by @skiniks
- _(rari)_ improve RSC payload handling and suspense cleanup by @skiniks
- _(rari)_ improve component rendering and async loading by @skiniks
- _(rari)_ improve type safety and refactor async component loading by @skiniks

### 🚜 Refactor

- _(rari)_ optimize routing and middleware with extracted utilities by @skiniks

### ⚙️ Miscellaneous Tasks

- migrate from tsdown to vite-plus and consolidate build tooling by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.16...rari@0.10.17

## [rari@0.10.16] - 2026-03-12

### 🚀 Features

- _(runtime)_ remove suppressions + update to Vite 8 by @skiniks
- _(runtime)_ improve export collision detection and skip library component registration by @skiniks
- _(runtime)_ add skipGlobalBinding parameter to component registration by @skiniks
- _(runtime)_ improve component collision detection and client marking by @skiniks
- _(runtime)_ improve client component marking for library components by @skiniks

### 🐛 Bug Fixes

- _(runtime)_ handle component registration collisions and library utilities by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.15...rari@0.10.16

## [rari@0.10.15] - 2026-03-11

### 🐛 Bug Fixes

- _(runtime)_ improve error handling and safety checks in JS helpers by @skiniks
- _(runtime)_ improve component loading and JSON serialization by @skiniks
- _(runtime)_ add serialization error handling and safety checks by @skiniks
- _(runtime)_ improve component loading safety and JSON serialization by @skiniks
- _(runtime)_ improve server action registration safety and namespacing by @skiniks
- _(runtime)_ improve server function namespacing and lookup by @skiniks
- _(runtime)_ enhance server function resolution and cleanup safety by @skiniks
- _(runtime)_ improve module cleanup and component loading safety by @skiniks
- _(runtime)_ enhance server function resolution and component cleanup by @skiniks
- _(runtime)_ enhance server function registry and error handling by @skiniks
- _(runtime)_ improve server function cleanup and error handling by @skiniks
- _(runtime)_ improve component path detection and serialization error logging by @skiniks

### 🚜 Refactor

- _(rari)_ reorganize main entry point exports by @skiniks
- _(runtime)_ restructure JS runtime helpers into modular handlers by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.10.15 by @skiniks
- _(rari)_ bump optional dependencies to 0.10.15 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.14...rari@0.10.15

## [rari@0.10.14] - 2026-03-10

### 🚜 Refactor

- _(rsc)_ replace double underscore globals with bracket notation by @skiniks
- _(rsc)_ replace double underscore globals with tilde by @skiniks
- _(rsc)_ reorganize global namespace under ~rari object by @skiniks
- _(rsc)_ deduplicate rsc namespace initialization and improve suspense handling by @skiniks
- _(rsc)_ simplify client components namespace access by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.13...rari@0.10.14

## [rari@0.10.13] - 2026-03-07

### 🐛 Bug Fixes

- _(runtime)_ update keyseq timeout to use Option type by @skiniks
- _(runtime)_ downgrade libc and simplify interrupt handling by @skiniks
- _(runtime)_ remove WindowResized from readline error handling by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.12...rari@0.10.13

## [rari@0.10.12] - 2026-03-06

### 🐛 Bug Fixes

- _(cli)_ improve main module detection for esm entry points by @skiniks
- _(cli)_ improve main module detection by @skiniks
- _(cli)_ resolve symlinks in module detection by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.11...rari@0.10.12

## [rari@0.10.11] - 2026-03-04

### 🐛 Bug Fixes

- _(cli)_ simplify bun package executor to use bunx directly by @skiniks
- _(cli)_ improve cross-platform spawn handling by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.10...rari@0.10.11

## [rari@0.10.10] - 2026-03-01

### 🚀 Features

- _(fetch-cache)_ add timeout option to global fetch configuration by @skiniks

### 🐛 Bug Fixes

- _(cli)_ improve bun package executor handling for cross-platform compatibility by @skiniks
- _(cli)_ refactor bun package executor to improve cross-platform compatibility by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.9...rari@0.10.10

## [rari@0.10.9] - 2026-02-26

### 🚀 Features

- _(fetch-cache)_ integrate fetch caching into runtime initialization by @skiniks
- _(runtime)_ add request context cleanup and optimize fetch caching by @skiniks
- _(runtime)_ refactor request context cleanup and optimize fetch caching by @skiniks
- _(fetch,routing)_ improve cache key generation and request handling by @skiniks
- _(routing,streaming)_ simplify component ID derivation and improve streaming test coverage by @skiniks
- _(fetch,testing)_ improve cache key generation and add runtime helpers by @skiniks

### 🐛 Bug Fixes

- _(fetch,streaming)_ improve cache handling and clarify test descriptions by @skiniks
- _(routing)_ use cow_replace for efficient path normalization by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.8...rari@0.10.9

## [rari@0.10.8] - 2026-02-25

### 🚀 Features

- _(router)_ add public router API with navigate function and hooks by @skiniks
- _(router)_ add route segment matching and improve parameter extraction by @skiniks
- _(router)_ export navigate getter and improve router provider by @skiniks
- _(router)_ add navigate deregistration and cleanup on unmount by @skiniks

### 🐛 Bug Fixes

- _(router)_ preserve hash in history state and handle hash-based scrolling by @skiniks
- _(router)_ improve navigation registration and hash scrolling behavior by @skiniks
- _(router)_ refactor parameter extraction and improve navigate registration by @skiniks
- _(router)_ add spacing between navigate registration functions by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.10.8 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.7...rari@0.10.8

## [rari@0.10.7] - 2026-02-24

### 🐛 Bug Fixes

- _(rsc)_ add fragment element support for RSC rendering by @skiniks
- _(rsc)_ improve null handling and empty array detection in streaming by @skiniks
- _(rsc)_ use nullish coalescing for children fallback logic by @skiniks
- _(rsc)_ improve children null handling in streaming initialization by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.6...rari@0.10.7

## [rari@0.10.6] - 2026-02-24

### 🐛 Bug Fixes

- _(runtime)_ improve DOM manipulation safety and performance by @skiniks
- _(runtime)_ enhance DOM safety and add HTML sanitization by @skiniks
- _(runtime)_ normalize SVG element names to lowercase by @skiniks
- _(runtime)_ add error handling for client component hydration by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.5...rari@0.10.6

## [rari@0.10.5] - 2026-02-24

### 🐛 Bug Fixes

- _(AppRouterProvider)_ remove redundant cache control headers by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.4...rari@0.10.5

## [rari@0.10.4] - 2026-02-23

### 🚀 Features

- _(http-headers)_ add Vary header to all response types by @skiniks
- _(http-headers)_ add Vary header to cached responses and fix fragment symbol scope by @skiniks
- _(http-headers)_ merge Vary headers from cached responses by @skiniks

### 🐛 Bug Fixes

- _(http-headers)_ handle wildcard Vary header early in merge logic by @skiniks

### 🚜 Refactor

- _(server)_ simplify nested conditionals by @skiniks
- _(http-headers)_ extract Vary header merging logic into utility function by @skiniks
- _(http-headers)_ use cached_key for Vary header sorting and merge in 304 responses by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.3...rari@0.10.4

## [rari@0.10.3] - 2026-02-23

### 🐛 Bug Fixes

- _(rendering,router)_ correct script type and stabilize navigation ref by @skiniks
- _(router)_ use useLayoutEffect for navigate ref synchronization by @skiniks
- _(router)_ move ref assignments into useLayoutEffect with cleanup by @skiniks
- _(router)_ add null safety to navigateRef and cleanup on unmount by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.2...rari@0.10.3

## [rari@0.10.2] - 2026-02-22

### 🐛 Bug Fixes

- _(router)_ ensure stale window and navigate refs update correctly with dependency changes by @skiniks
- _(router)_ refactor effect dependencies and improve test reliability by @skiniks
- _(router)_ separate event listener registration from stale window effect by @skiniks
- _(rendering)_ reorder metadata and asset injection for correct HTML structure by @skiniks
- _(rsc,router,sentry)_ sanitize JSON parsing and secure boundary updates by @skiniks
- _(router,sentry)_ improve JSON parsing resilience and error handling by @skiniks
- _(router)_ improve JSON parsing resilience in route info client by @skiniks
- _(rendering,router,runtime,sentry)_ improve security and error handling by @skiniks
- _(rendering,router,runtime,sentry)_ enhance security and error handling by @skiniks
- _(rendering,rsc-client,sentry)_ enhance security and accessibility by @skiniks
- _(rendering,rsc-client,sentry)_ enhance security and sanitization by @skiniks

### 🚜 Refactor

- _(rendering)_ consolidate HTML escaping and improve metadata injection by @skiniks
- _(rendering)_ consolidate HTML escaping and improve attribute safety by @skiniks
- _(rsc)_ replace innerHTML with DOM API in HMR error overlay by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.10.2 by @skiniks
- _(rari)_ bump optional dependencies to 0.10.2 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.1...rari@0.10.2

## [rari@0.10.1] - 2026-02-20

### 🚀 Features

- _(caching)_ consolidate cache control configuration into server config by @skiniks
- _(rsc)_ add promise caching and improve lazy component resolution for HMR by @skiniks
- _(rsc)_ implement promise caching and improve lazy component resolution by @skiniks
- _(hmr)_ improve error handling and promise cleanup in HMR and RSC runtime by @skiniks
- _(hmr)_ improve server URL resolution and add type safety by @skiniks
- _(hmr)_ improve error handling and response parsing in HMR runtime by @skiniks
- _(rsc-client-runtime)_ improve server URL resolution and add response validation by @skiniks
- _(metadata-injection)_ add default charset and viewport meta tags by @skiniks
- _(rsc-layout)_ add cache clearing on layout render by @skiniks
- _(rsc-layout)_ improve promise caching with unique identifiers by @skiniks

### 🐛 Bug Fixes

- _(server)_ validate cache-control header values during config parsing by @skiniks
- _(server)_ improve cache-control validation error messages and add type checking by @skiniks
- _(server)_ improve path pattern matching and add configurable base path support by @skiniks
- _(rsc)_ improve response validation logic in HMR reload handler by @skiniks

### 🎨 Styling

- _(rsc-client-runtime)_ improve code formatting and extract server URL resolution by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.10.0...rari@0.10.1

## [rari@0.10.0] - 2026-02-18

### 🚀 Features

- _(og)_ add SVG rendering support for open graph images by @skiniks

### 🐛 Bug Fixes

- _(og)_ improve SVG rendering precision and component handling by @skiniks
- _(og)_ handle async components and rendering errors gracefully by @skiniks
- _(og)_ return null for non-function component resolution by @skiniks

### 🚜 Refactor

- _(og)_ extract component resolution logic into dedicated method by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.9.3...rari@0.10.0

## [rari@0.9.3] - 2026-02-17

### 🚀 Features

- _(rsc-rendering)_ improve RSC shell rendering and payload handling by @skiniks

### 🐛 Bug Fixes

- _(rate_limit)_ correct default enabled state in test assertion by @skiniks

### 🚜 Refactor

- extract regex patterns to constants for reusability by @skiniks
- _(node)_ remove redundant PATH_SLASHES_REGEX pattern by @skiniks
- optimize regex patterns and simplify conditional logic by @skiniks
- improve regex patterns and fix capture group references by @skiniks
- improve path handling and rename regex constants for clarity by @skiniks
- optimize path resolution and regex pattern ordering by @skiniks
- improve regex patterns and parameter handling by @skiniks
- improve parameter extraction and remove unused path alias by @skiniks
- _(rsc-rendering)_ simplify RSC payload handling and element rendering by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.9.3 by @skiniks
- _(rari)_ bump optional dependencies to 0.9.3 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.9.2...rari@0.9.3

## [rari@0.9.2] - 2026-02-14

### 🚀 Features

- _(rsc)_ fix 404 not-found route handling with streaming support by @skiniks

### 🚜 Refactor

- _(rsc)_ simplify not-found rendering and add cache key tests by @skiniks
- _(rsc)_ extract streaming setup and add wire format validation by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.9.2 by @skiniks
- _(rari)_ bump optional dependencies to 0.9.2 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.9.1...rari@0.9.2

## [rari@0.9.1] - 2026-02-13

### 🚀 Features

- _(rari)_ implement fetch caching with request deduplication by @skiniks
- _(rari)_ enhance fetch caching with response headers and status text by @skiniks
- _(rari)_ refactor fetch caching with header deduplication and content-type detection by @skiniks
- _(rari)_ enhance fetch response handling with header extraction and cache key optimization by @skiniks

### 🚜 Refactor

- _(server)_ extract client IP detection and make rate limiting environment-aware by @skiniks
- _(server)_ implement custom IP extractor and add memory caps to rate limiters by @skiniks
- _(server)_ replace HashMap with LRU cache for IP rate limiting by @skiniks
- _(server)_ enhance rate limit logging and optimize cleanup by @skiniks
- _(server)_ simplify rate limit logger with extracted IP utility by @skiniks
- _(server)_ extract HTTP client to dedicated module by @skiniks
- _(runtime)_ extract header conversion to dedicated function by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.9.1 by @skiniks
- _(rari)_ bump optional dependencies to 0.9.1 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.9.0...rari@0.9.1

## [rari@0.9.0] - 2026-02-12

### 🚀 Features

- _(runtime)_ split client components from main bundle by @skiniks
- _(vite)_ add import graph tracking for client-only component detection by @skiniks

### 🐛 Bug Fixes

- _(runtime)_ improve error handling in file operations and component loading by @skiniks

### 🚜 Refactor

- _(rsc_renderer)_ remove render_element_to_html module by @skiniks
- _(runtime)_ extract component loading logic and improve client component resolution by @skiniks
- _(runtime)_ unify component loading promise handling by @skiniks
- _(runtime)_ improve component loading and path normalization by @skiniks

### 🎨 Styling

- format conditional statements and update linting rules by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.14...rari@0.9.0

## [rari@0.8.14] - 2026-02-05

### ⚙️ Miscellaneous Tasks

- _(rari)_ add RariResponse to tsdown exports by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.13...rari@0.8.14

## [rari@0.8.13] - 2026-02-05

### 🚜 Refactor

- _(rsc)_ migrate HTML sanitization to Rust ops by @skiniks
- _(rsc)_ improve HTML rendering and sanitization logic by @skiniks
- _(rsc)_ simplify root row selection logic in HTML rendering by @skiniks
- _(rsc)_ extract style object serialization into reusable function by @skiniks
- _(rsc)_ add unsigned integer handling in JSON rendering by @skiniks
- _(rsc)_ improve root row selection logic in HTML rendering by @skiniks
- _(rsc)_ expand self-closing HTML tags list for complete coverage by @skiniks
- _(rsc)_ migrate route rendering from JavaScript to Rust by @skiniks
- _(rsc)_ refactor HTML rendering with row caching and async boxed futures by @skiniks
- _(rsc)_ reorder numeric type checks in style serialization by @skiniks
- _(rsc)_ improve suspense symbol detection in HTML rendering by @skiniks
- _(rsc)_ improve HTML attribute escaping and boolean handling by @skiniks
- _(rsc)_ extract self-closing tags constant and improve style serialization by @skiniks
- _(rsc)_ add tag name validation in HTML rendering by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.8.12 by @skiniks
- _(rari)_ bump optional dependencies to 0.8.12 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.12...rari@0.8.13

## [rari@0.8.12] - 2026-02-04

### 🐛 Bug Fixes

- _(proxy)_ improve module path resolution and runtime imports by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.11...rari@0.8.12

## [0.8.10] - 2026-02-04

### 🚀 Features

- _(runtime)_ export RSC client runtime modules and migrate to TypeScript by @skiniks
- _(vite)_ add wildcard export support and rewrite runtime imports by @skiniks
- _(runtime)_ add react-dom types and migrate to virtual RSC client module by @skiniks

### 🐛 Bug Fixes

- improve error handling and request header management by @skiniks
- _(runtime)_ improve HTML escaping and RSC element parsing by @skiniks
- _(runtime)_ remove unnecessary non-null assertions and improve line splitting by @skiniks
- _(vite)_ add trailing comma to import replacement regex by @skiniks
- _(vite)_ normalize virtual module imports with file extensions by @skiniks
- _(runtime)_ improve error message handling in app rendering by @skiniks
- _(runtime)_ improve attribute handling and import path resolution by @skiniks
- _(vite)_ simplify import rewriting and improve virtual module resolution by @skiniks
- _(vite)_ improve import rewriting with comprehensive pattern matching by @skiniks
- _(vite)_ add runtime directory resolution for chunk imports by @skiniks
- _(vite)_ improve error handling and add security validation for file resolution by @skiniks
- _(vite)_ improve import path matching to support optional parent directory references by @skiniks
- _(vite)_ add rari package detection for .mjs file resolution by @skiniks
- _(vite)_ improve import path matching for react-server-dom-rari-client by @skiniks
- _(router)_ move sitemap directory creation to after module validation by @skiniks
- _(vite)_ skip TypeScript declaration files during directory scan by @skiniks

### 🚜 Refactor

- extract logger utilities into shared package by @skiniks
- improve cross-platform compatibility and code clarity by @skiniks
- simplify code and improve test mocking patterns by @skiniks
- improve type safety and path normalization by @skiniks
- _(proxy)_ extract path normalization logic and add csrf retry test by @skiniks
- _(runtime)_ replace global type declarations with accessor functions by @skiniks
- _(runtime)_ extract getClientComponent to shared utility by @skiniks
- _(runtime)_ extract global type definitions to shared types module by @skiniks
- _(runtime)_ remove unused client component registry and utilities by @skiniks

### ⚙️ Miscellaneous Tasks

- _(runtime)_ remove react-server-dom-shim type definitions by @skiniks
- _(package)_ remove src directory from published files by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.10...v0.8.10

## [rari@0.8.10] - 2026-02-03

### 🚀 Features

- _(rsc-renderer)_ improve error handling and RSC serialization format by @skiniks

### 🐛 Bug Fixes

- _(rsc-renderer)_ simplify React element type checking logic by @skiniks
- _(vite)_ remove redundant component path normalization by @skiniks
- _(rsc-renderer)_ improve RSC payload prefix matching logic by @skiniks

### 🚜 Refactor

- _(rsc-renderer)_ optimize RSC rendering and improve path handling by @skiniks
- _(rsc-renderer)_ simplify style value string conversion logic by @skiniks
- _(rsc-renderer)_ improve RSC payload detection and style value handling by @skiniks

### 🧪 Testing

- add comprehensive unit test suite with vitest by @skiniks

### ⚙️ Miscellaneous Tasks

- _(packages)_ remove @rari/colors package and migrate to native Node.js utilities by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.9...rari@0.8.10

## [rari@0.8.9] - 2026-02-02

### 🚀 Features

- _(module-loader)_ improve package resolution with workspace support by @skiniks
- _(module-loader)_ improve workspace package resolution with nested container support by @skiniks

### 🚜 Refactor

- _(module-loader)_ simplify workspace root detection logic by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.8...rari@0.8.9

## [rari@0.8.8] - 2026-02-02

### 🐛 Bug Fixes

- _(vite)_ handle absolute paths in client and server component resolution by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.7...rari@0.8.8

## [rari@0.8.7] - 2026-02-02

### 🐛 Bug Fixes

- _(module_loader)_ improve CommonJS module resolution and require handling by @skiniks
- _(module_loader)_ improve CommonJS path resolution and error handling by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.6...rari@0.8.7

## [rari@0.8.6] - 2026-02-02

### 🚀 Features

- _(module_loader)_ add CommonJS detection and ESM wrapping support by @skiniks
- _(module_loader)_ improve CommonJS detection and require handling by @skiniks

### 🐛 Bug Fixes

- improve error handling and module type detection across build pipeline by @skiniks
- _(vite)_ improve export parsing and rolldown output handling by @skiniks
- _(router)_ disable code splitting in robots generator build config by @skiniks
- _(vite)_ remove unnecessary resolveDir and external config from server build by @skiniks
- _(router)_ disable file writing in build configs for generators by @skiniks
- _(module_loader)_ improve error handling in CommonJS detection regex by @skiniks
- _(module_loader,router)_ improve path resolution and build output handling by @skiniks
- _(router)_ ensure output directory exists and improve robots file extension handling by @skiniks
- _(router)_ improve type safety and module type handling in robots generator by @skiniks

### 🚜 Refactor

- _(router)_ improve variable naming in robots generator by @skiniks

### ⚙️ Miscellaneous Tasks

- migrate remaining uses of esbuild to rolldown by @skiniks
- _(rari)_ remove redundant no-op log message by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.5...rari@0.8.6

## [rari@0.8.5] - 2026-02-01

### 🚜 Refactor

- _(rari)_ simplify tsdown configuration and external dependencies by @skiniks
- _(packages)_ standardize tsconfig includes and improve deploy exports by @skiniks
- _(cache)_ move cache directory to .cache and improve initialization by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump version to 0.8.5 by @skiniks
- _(rari)_ bump binary package versions to 0.8.5 by @skiniks
- _(rari)_ bump version to 0.8.4 by @skiniks
- _(rari)_ revert version to 0.8.4 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.4...rari@0.8.5

## [0.8.4] - 2026-01-30

### 🐛 Bug Fixes

- correct typos and improve error handling in RSC rendering by @skiniks
- correct error handling and redirect URL assignment by @skiniks

### 🚜 Refactor

- extract React component and SSR manifest creation logic by @skiniks
- _(rsc)_ remove unused rowId parameter from render functions by @skiniks
- _(vite)_ extract error messages to variables for clarity by @skiniks
- _(vite)_ remove unused component tracking sets by @skiniks

### 🎨 Styling

- add blank lines for improved code readability by @skiniks
- remove unnecessary braces from single-statement conditionals by @skiniks
- simplify conditional expressions and improve code readability by @skiniks
- improve regex patterns for string and path normalization by @skiniks
- _(rsc)_ remove redundant loadingComponent check by @skiniks
- _(metadata_collector)_ remove unused eslint directive and simplify error handling by @skiniks
- _(rsc)_ remove unused isAsyncResult assignment by @skiniks
- remove unused variables and simplify property deletion by @skiniks
- _(render_script)_ simplify lazy children detection logic by @skiniks
- remove unused variable assignments and simplify encoding defaults by @skiniks
- _(cli)_ remove unnecessary blank lines in detectPackageManager by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.3...v0.8.4

## [0.8.3] - 2026-01-30

### 🚀 Features

- _(image-optimizer)_ add remote URL validation for security by @skiniks
- _(image-optimizer)_ add request timeouts and improve URL validation by @skiniks

### 🐛 Bug Fixes

- _(server)_ add URL validation and manual redirect handling by @skiniks
- _(image-optimizer)_ redact sensitive URL data in debug logs by @skiniks
- _(image-optimizer)_ enhance remote URL validation with private IP detection by @skiniks
- _(image-optimizer)_ improve private IP range detection and validation by @skiniks
- _(image-optimizer)_ enhance IPv6 private address detection by @skiniks
- _(runtime)_ redact RSC operation JSON in error logs by @skiniks

### 🚜 Refactor

- _(runtime)_ improve HTTP client error handling with Result type by @skiniks

### ⚡ Performance

- _(image-optimizer)_ pre-allocate vector capacity for response bytes by @skiniks
- _(runtime)_ implement HTTP client singleton with OnceLock by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.2...v0.8.3

## [rari@0.8.2] - 2026-01-30

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.8.2 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.8.2...rari@0.8.2

## [0.8.2] - 2026-01-29

### 🚀 Features

- _(image)_ add quality allowlist configuration for image optimization by @skiniks
- _(image)_ add preoptimization manifest support for image variants by @skiniks
- _(image)_ add preload image tracking and metadata injection support by @skiniks
- _(image)_ improve image scanner and optimizer robustness by @skiniks
- _(image)_ improve image scanner and optimizer robustness by @skiniks

### 🐛 Bug Fixes

- _(image)_ move preload registration after dry-run check by @skiniks

### 🚜 Refactor

- _(react)_ remove polyfill for Object.hasOwn by @skiniks
- _(metadata-injection)_ simplify nested conditionals with let-else chains by @skiniks
- _(metadata-injection)_ simplify image optimizer reference handling by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.1...v0.8.2

## [rari@0.8.1] - 2026-01-29

### 🚀 Features

- _(cli)_ add automatic package manager detection and cross-platform execution by @skiniks
- _(cli)_ improve package manager detection with monorepo support by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.8.1 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.8.1...rari@0.8.1

## [0.8.1] - 2026-01-29

### 🚀 Features

- _(vite)_ expand optimizeDeps configuration for React core modules by @skiniks
- _(image)_ add CLI subcommand for pre-optimizing local images by @skiniks
- _(rari)_ export Metadata type and add type annotations to metadata exports by @skiniks
- _(image)_ add dry-run mode to image optimization CLI and improve type safety by @skiniks
- _(image)_ add rkyv serialization for image cache and improve async file operations by @skiniks

### 🚜 Refactor

- _(rari)_ improve path normalization and proxy configuration by @skiniks
- _(rari)_ separate server config from manifest and rename types by @skiniks
- improve code quality and type safety across codebase by @skiniks
- improve async handling and optimize image processing pipeline by @skiniks
- modernize code patterns and improve image optimization configuration by @skiniks
- optimize image processing and improve code constants by @skiniks
- improve code clarity and boolean logic in image optimizer and sidebar by @skiniks
- _(image)_ optimize cache operations and improve async file handling by @skiniks
- _(image)_ make cache get method async and improve file I/O handling by @skiniks
- _(image)_ improve dry-run logging format by @skiniks
- _(image)_ convert local file read to async operation by @skiniks
- _(image)_ improve public directory existence check with async operation by @skiniks
- migrate to ES modules and improve cross-platform compatibility by @skiniks
- _(image)_ add path traversal protection for local file access by @skiniks
- _(logger)_ extract logging utilities into dedicated module by @skiniks
- _(logger)_ remove deprecated logWarning function in favor of logWarn by @skiniks

### 🎨 Styling

- modernize JavaScript and TypeScript code patterns by @skiniks
- remove unnecessary braces from single-statement conditionals by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ remove unused lazy promise resolution script by @skiniks
- upgrade Node.js minimum version to 20.6.0 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.8.0...v0.8.1

## [rari@0.8.0] - 2026-01-27

### ⚙️ Miscellaneous Tasks

- _(rari)_ update optional dependencies to 0.8.0 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.8.0...rari@0.8.0

## [0.8.0] - 2026-01-27

### 🚀 Features

- _(csp)_ add worker-src directive support by @skiniks
- _(vite)_ add HTML import detection and build optimization by @skiniks
- _(sitemap)_ add dynamic sitemap generation support by @skiniks
- _(sentry)_ implement dynamic import and optimize bundle splitting by @skiniks

### 🐛 Bug Fixes

- _(router)_ simplify server URL resolution in ClientRouter by @skiniks
- _(rsc)_ unwrap React.Fragment layout components correctly by @skiniks

### 🚜 Refactor

- _(colors)_ extract colors utility into standalone package by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.14...v0.8.0

## [rari@0.7.14] - 2026-01-27

### 🐛 Bug Fixes

- _(vite)_ correct client reference property names by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.13...rari@0.7.14

## [rari@0.7.13] - 2026-01-27

### 🚀 Features

- _(vite)_ improve server build module resolution and client component handling by @skiniks

### 🚜 Refactor

- _(vite)_ rename server build plugin for clarity by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.12...rari@0.7.13

## [0.7.9] - 2026-01-27

### 🚀 Features

- _(vite)_ enhance client component scanning and import resolution by @skiniks
- _(vite)_ enhance server-side component and action reference handling by @skiniks

### 🐛 Bug Fixes

- _(vite)_ update component import regex to support alias paths by @skiniks

### 💼 Other

- Add DoS mitigations to server action validation by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.11...v0.7.9

## [rari@0.7.11] - 2026-01-26

### 🚀 Features

- _(rari)_ add platform entry point to tsdown by @skiniks
- _(rari)_ add input options to suppress postcss export warnings by @skiniks

### 🚜 Refactor

- _(router)_ replace chokidar with vite dev server watcher by @skiniks
- _(router)_ replace dynamic import function with vite-ignore comments by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.10...rari@0.7.11

## [rari@0.7.10] - 2026-01-24

### 💼 Other

- _(tsdown)_ enable minification for build output by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.9...rari@0.7.10

## [rari@0.7.9] - 2026-01-24

### 🚜 Refactor

- _(vite)_ replace acorn with esbuild by @skiniks
- _(rari)_ replace picocolors with internal colors util by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.8...rari@0.7.9

## [0.7.7] - 2026-01-23

### 🚀 Features

- _(rendering)_ fix support for dangerouslySetInnerHTML and object-style props by @skiniks
- _(cli)_ add dev command and support scoped package names by @skiniks
- _(cli)_ add build command and unify package scripts by @skiniks

### 🐛 Bug Fixes

- Suspense boundary support with streaming by @skiniks

### 🚜 Refactor

- _(og-cache)_ defer cache directory creation until first use by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.6...v0.7.7

## [0.7.6] - 2026-01-21

### 🐛 Bug Fixes

- _(rsc)_ update eslint and oxlint rules in page render script by @skiniks

### 🚜 Refactor

- _(exports)_ reorganize proxy and image module exports by @skiniks

### 📚 Documentation

- _(rari)_ standardize rari branding to lowercase in package description by @skiniks

### 🎨 Styling

- standardize rari branding to lowercase in console messages by @skiniks
- standardize rari branding to lowercase in error messages by @skiniks
- standardize rari branding to lowercase in runtime logs by @skiniks
- standardize rari branding in log messages and error outputs by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.7.5 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.7.5...v0.7.6

## [0.7.5] - 2026-01-18

### 🚀 Features

- _(rari)_ refactor routing and rendering architecture with improved component resolution by @skiniks
- _(rari,web)_ add custom define option and integrate sponsor link into navigation by @skiniks
- _(og)_ add ImageResponse documentation by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.4...v0.7.5

## [rari@0.7.4] - 2026-01-15

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump binary version to 0.7.4 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.7.4...rari@0.7.4

## [0.7.4] - 2026-01-15

### 🚀 Features

- _(rari)_ optimize component resolution and rendering performance by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump binary version to 0.7.4 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.3...v0.7.4

## [rari@0.7.3] - 2026-01-14

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump binary version to 0.7.3 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.7.3...rari@0.7.3

## [0.7.3] - 2026-01-14

### 🚀 Features

- _(rari)_ enhance open graph and twitter metadata handling by @skiniks
- _(rari)_ add body scripts extraction and injection support by @skiniks

### 🚜 Refactor

- rename docs directory to web and update references by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump binary version to 0.7.3 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.2...v0.7.3

## [rari@0.7.1] - 2026-01-13

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.7.1 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.7.1...rari@0.7.1

## [0.7.1] - 2026-01-13

### ⚙️ Miscellaneous Tasks

- remove dav1d dependency and update dependencies by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.7.0...v0.7.1

## [rari@0.7.0] - 2026-01-13

### 🚀 Features

- _(image)_ add image optimization and caching system by @skiniks
- _(og)_ add open graph image generation with dynamic rendering by @skiniks
- _(security)_ add IP-based rate limiting for critical endpoints by @skiniks
- _(image)_ add local image pattern matching and AVIF native support by @skiniks
- _(og)_ inject generated OG images into page metadata by @skiniks
- _(security)_ add environment-aware rate limiting configuration by @skiniks
- _(image)_ change default image format from WebP to AVIF by @skiniks
- _(security)_ make CSRF protection optional with environment configuration by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ handle stale content and missing promises gracefully by @skiniks

### 🚜 Refactor

- _(error)_ simplify error enum and clippy configuration by @skiniks
- _(hmr)_ consolidate HMR handlers into unified action endpoint by @skiniks
- _(server)_ move register endpoints to development-only routes by @skiniks
- _(rsc)_ stream RSC responses directly without buffering by @skiniks
- _(sync)_ replace std::sync with parking_lot for better performance by @skiniks
- _(vite)_ fix client component HMR handling by @skiniks
- _(image)_ rename priority to preload and add custom loader support by @skiniks
- _(api)_ consolidate internal routes under /\_rari namespace by @skiniks
- _(path)_ remove unused custom paths constructor and test by @skiniks
- _(layout)_ remove unused skeleton validation and layout structure methods by @skiniks
- _(spam_blocker)_ add block reason tracking and improve response handling by @skiniks
- _(server)_ improve app router error handling and validation by @skiniks
- _(cache)_ remove production environment check from caching logic by @skiniks
- _(rendering)_ improve HTML structure handling and asset extraction by @skiniks
- _(config)_ migrate CSP and rate limit config from environment variables to manifest by @skiniks
- _(config)_ remove TOML file support and simplify configuration loading by @skiniks

### ⚡ Performance

- _(rsc)_ replace string allocations with cow-utils for efficiency by @skiniks

### 🎨 Styling

- _(rsc)_ remove unnecessary braces from single-statement conditionals by @skiniks
- _(node)_ fix formatting in promisify callback handler by @skiniks

### ⚙️ Miscellaneous Tasks

- _(router)_ remove item from skip directories list by @skiniks
- _(rari)_ bump optional dependencies to 0.7.0 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.6.1...rari@0.7.0

## [0.6.1] - 2026-01-08

### 🚀 Features

- _(server)_ implement separate rate limiting for revalidation endpoints by @skiniks
- _(server)_ expand spam blocker patterns for WordPress and IDE configs by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.6.0...v0.6.1

## [0.6.0] - 2026-01-08

### 🚀 Features

- _(proxy)_ add request/response proxy middleware and runtime execution by @skiniks
- _(middleware)_ add spam blocker middleware for request filtering by @skiniks
- _(robots)_ add robots.txt generation support by @skiniks
- _(metadata)_ add comprehensive metadata support for icons, theme, and apple web app by @skiniks
- _(vite)_ skip robots and sitemap files in server component scanning by @skiniks

### 🚜 Refactor

- _(router)_ remove loading component map generation by @skiniks

### 🎨 Styling

- _(router)_ remove unnecessary braces from conditional statements by @skiniks
- _(rari)_ remove unnecessary braces from conditional statements by @skiniks
- _(router)_ remove unnecessary braces from conditional statements by @skiniks
- remove unnecessary braces from conditional statements by @skiniks
- remove unnecessary braces from conditional statements by @skiniks
- _(vite)_ remove unnecessary braces from conditional statements by @skiniks
- _(rari)_ remove unnecessary braces from conditional statements by @skiniks
- _(rari)_ remove unnecessary braces from conditional statements by @skiniks
- _(router)_ remove unnecessary braces from conditional statements by @skiniks
- _(vite)_ remove esbuildOptions deprecation warning suppression by @skiniks
- _(rari)_ remove unnecessary blank lines from conditional statements by @skiniks
- _(rari)_ remove unnecessary blank lines from vite plugin by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ remove useActionState hook and exports by @skiniks
- _(rari)_ remove file extensions from mdx exports by @skiniks
- _(rari)_ remove AppRouterProvider export from package.json by @skiniks
- _(rari)_ remove fsevents from external dependencies by @skiniks
- _(vite)_ remove external dependencies configuration by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.30...v0.6.0

## [rari@0.5.30] - 2026-01-03

### 🚀 Features

- _(rsc)_ add client-side RSC fetching and dev server proxying by @skiniks

### 🚜 Refactor

- _(router)_ remove unused exports and internal utilities by @skiniks
- _(router)_ remove legacy layout and runtime management systems by @skiniks

### ⚙️ Miscellaneous Tasks

- _(router)_ remove router index barrel export and consolidate exports by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.29...rari@0.5.30

## [0.5.23] - 2026-01-02

### 🚀 Features

- _(rsc)_ improve streaming updates by @skiniks
- _(rsc)_ enhance lazy loading and streaming completion handling by @skiniks
- _(rsc-client-runtime)_ improve RSC row parsing by @skiniks
- _(rsc)_ optimize lazy loading and promise resolution handling by @skiniks
- _(rari)_ implement partial hydration and dynamic module loading by @skiniks
- _(rsc)_ implement lazy promise resolution and streaming suspense by @skiniks
- _(rsc)_ rename internal module markers from double underscore to tilde prefix by @skiniks
- _(rari)_ add chunked transfer encoding to streaming RSC responses by @skiniks
- _(server)_ add stream compression support with zstd, brotli, and gzip by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ correct row ID generation in serializer by @skiniks
- _(rari)_ remove debug console.warn statements from RSC client by @skiniks

### 🚜 Refactor

- _(rsc)_ extract HTML closing generation into dedicated method by @skiniks
- _(server)_ remove x-accel-buffering header from streaming responses by @skiniks
- _(rsc)_ remove suspense module and consolidate functionality by @skiniks

### 🎨 Styling

- _(rari)_ remove unnecessary comment by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.28...v0.5.23

## [0.5.22] - 2025-12-24

### 🚀 Features

- _(server)_ invalidate caches on server action redirects by @skiniks

### 🐛 Bug Fixes

- _(server)_ return correct HTTP status codes for not-found routes by @skiniks

### 🚜 Refactor

- _(module-loader)_ improve dynamic import path resolution logic by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.27...v0.5.22

## [0.5.21] - 2025-12-24

### 🚀 Features

- _(server)_ implement on-demand revalidation and response caching by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.26...v0.5.21

## [0.5.20] - 2025-12-23

### 🚀 Features

- _(routing)_ implement dynamic route info endpoint and remove manifest injection by @skiniks

### 🐛 Bug Fixes

- _(server)_ block access to app-routes.json in request handlers by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.25...v0.5.20

## [0.5.19] - 2025-12-23

### 🚀 Features

- _(rsc)_ add RSC wire format payload and manifest embedding by @skiniks
- _(mdx)_ replace mdx-remote with native @mdx-js/mdx compilation by @skiniks

### 🐛 Bug Fixes

- _(rsc)_ correct React element symbol and add transitional element support by @skiniks
- _(rsc)_ correct React symbol property names from single to double dollar signs by @skiniks
- _(rsc)_ update React element symbol to use transitional variant by @skiniks
- _(rsc)_ remove ref property from React element objects by @skiniks
- _(rsc)_ remove ref property from React element objects by @skiniks
- _(rsc)_ update React element symbol to use transitional variant by @skiniks
- _(rsc)_ remove ref property and forwardRef from React elements by @skiniks

### 🎨 Styling

- _(rsc)_ remove unnecessary braces from single-line conditional by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.24...v0.5.19

## [0.5.18] - 2025-12-20

### 🚜 Refactor

- _(rsc)_ rename client component registry globals to use tilde prefix by @skiniks
- _(rsc)_ migrate global namespace from \_\_rari to ~rari by @skiniks
- _(rsc)_ migrate global namespace from \_\_rari to ~rari by @skiniks
- _(rsc)_ migrate global namespace from \_\_rsc to ~rsc by @skiniks
- _(rsc)_ remove Counter component special handling from RSC traversal by @skiniks
- _(rsc)_ migrate global namespace from double underscore to tilde prefix by @skiniks
- _(rsc)_ migrate global namespace from double underscore to tilde prefix by @skiniks
- _(rsc)_ migrate global namespace from double underscore to tilde prefix by @skiniks
- _(runtime)_ migrate error handling globals from double underscore to tilde prefix by @skiniks
- _(rsc)_ migrate registry proxy global from double underscore to tilde prefix by @skiniks
- _(hmr)_ improve component specifier handling and remove debug logging by @skiniks
- _(rsc)_ remove debug logging statements across codebase by @skiniks
- _(runtime)_ remove lifecycle logging from LayoutWrapper by @skiniks

### ⚙️ Miscellaneous Tasks

- _(logging)_ remove info-level logging statements across codebase by @skiniks
- _(logging)_ remove warn-level logging statements by @skiniks
- _(logging)_ remove warn-level logging and upgrade to error-level where appropriate by @skiniks
- _(logging)_ remove warn-level logging and unused variables by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.23...v0.5.18

## [rari@0.5.23] - 2025-12-18

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.5.17 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.5.17...rari@0.5.23

## [0.5.17] - 2025-12-18

### 🚀 Features

- _(rsc)_ implement getData-based page not found detection by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.22...v0.5.17

## [rari@0.5.22] - 2025-12-17

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.5.16 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.5.16...rari@0.5.22

## [0.5.16] - 2025-12-17

### 🐛 Bug Fixes

- _(server)_ return 404 status code for not found routes by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.21...v0.5.16

## [rari@0.5.21] - 2025-12-17

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.5.15 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.5.15...rari@0.5.21

## [0.5.15] - 2025-12-17

### 🐛 Bug Fixes

- _(server)_ block access to sensitive internal files by @skiniks
- _(server)_ block access to sensitive internal files by @skiniks

### 🚜 Refactor

- _(server)_ separate stylesheet and script injection into head and body by @skiniks
- _(rsc)_ standardize boundary ID prop naming to ~boundaryId by @skiniks
- _(rsc)_ standardize pre-serialized suspense prop naming by @skiniks
- _(rsc)_ standardize client component marker prop naming by @skiniks
- _(rsc)_ standardize data attribute naming with tilde prefix by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.20...v0.5.15

## [0.5.14] - 2025-12-17

### 🚀 Features

- _(runtime)_ add module loading and component initialization improvements by @skiniks
- _(rari)_ add external module configuration for server builds by @skiniks
- _(server)_ improve server action module loading with ESM support by @skiniks

### 🚜 Refactor

- _(vite)_ remove unnecessary banners and optimize minification settings by @skiniks
- _(rsc)_ remove legacy module fallback patterns and simplify runtime by @skiniks
- _(vite)_ simplify node imports transformation in server build by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.19...v0.5.14

## [0.5.12] - 2025-12-16

### 🐛 Bug Fixes

- _(server)_ correct asset injection detection logic by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.17...v0.5.12

## [0.5.11] - 2025-12-16

### 🚀 Features

- _(metadata)_ add page metadata collection and injection system by @skiniks

### 🚜 Refactor

- _(server)_ extract html wrapping logic into function by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.16...v0.5.11

## [rari@0.5.16] - 2025-12-13

### 🚜 Refactor

- _(docs,examples)_ migrate to path aliases by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.15...rari@0.5.16

## [0.5.10] - 2025-12-12

### 🚀 Features

- _(rsc)_ enhance prop serialization and client component registration by @skiniks
- _(runtime)_ enhance Node.js compatibility stubs for fs, path, and process by @skiniks

### 🐛 Bug Fixes

- _(router)_ improve component loading fallback logic by @skiniks

### 🚜 Refactor

- _(docs,rari)_ improve markdown rendering and module resolution by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.14...v0.5.10

## [0.5.8] - 2025-12-11

### 🐛 Bug Fixes

- add Win32_System_SystemInformation feature for windows-sys by @skiniks
- _(deps)_ expand windows-sys features for Windows API support by @skiniks
- _(deps)_ add Win32_System_SystemInformation feature to windows-sys by @skiniks
- _(deps)_ add Win32_Networking_WinSock feature to windows-sys by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.5.7...v0.5.8

## [0.5.7] - 2025-12-11

### 🐛 Bug Fixes

- _(cli)_ guard main execution to prevent running when imported as module by @skiniks

### 🚜 Refactor

- _(runtime)_ remove unnecessary clone on cache options by @skiniks

### ⚙️ Miscellaneous Tasks

- _(server)_ simplify startup logging and remove verbose debug output by @skiniks
- _(rari)_ disable doctests and remove bin tests by @skiniks
- _(server)_ remove verbose startup completion messages by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.12...v0.5.7

## [rari@0.5.12] - 2025-12-11

### 🚀 Features

- _(router)_ improve loading component handling and validation by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.11...rari@0.5.12

## [rari@0.5.11] - 2025-12-11

### 🚀 Features

- _(rari)_ improve client-server routing and add manifest middleware by @skiniks
- _(router)_ convert loading component modules to Map by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.10...rari@0.5.11

## [rari@0.5.10] - 2025-12-09

### ⚙️ Miscellaneous Tasks

- _(rari)_ bump optional dependencies to 0.5.6 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.5.6...rari@0.5.10

## [0.5.6] - 2025-12-09

### 🚀 Features

- _(server)_ add path validation utilities for security by @skiniks
- _(server)_ add path validation to HMR component reload handler by @skiniks
- _(server)_ add CSRF token protection to server actions by @skiniks
- _(server)_ add CSRF token generation and injection to HTML responses by @skiniks
- _(server)_ integrate CSRF token generation into RSC rendering pipeline by @skiniks
- _(server)_ add configurable CORS support with origin validation by @skiniks
- _(server)_ add input validation with configurable depth and size limits by @skiniks
- _(server)_ add redirect URL validation with configurable host allowlist by @skiniks
- _(server)_ add configurable Content Security Policy support by @skiniks
- _(server)_ enhance security headers and simplify CSP configuration by @skiniks
- _(server)_ add granular body size limits for API routes by @skiniks
- _(error)_ add HTTP status codes and safe error messages for API responses by @skiniks
- _(server)_ add configurable rate limiting with per-IP tracking by @skiniks
- _(csrf)_ move CSRF token generation to client-side runtime by @skiniks
- _(actions)_ add reserved export name validation for server actions by @skiniks
- _(rsc)_ add special value and reference type parsing for wire format by @skiniks

### ⚙️ Miscellaneous Tasks

- upgrade dependencies and enhance linting rules by @skiniks
- bump rari version to 0.5.6 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.9...v0.5.6

## [rari@0.5.9] - 2025-12-09

### 🚀 Features

- _(rsc)_ extract RSC wire format escaping utilities by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.8...rari@0.5.9

## [0.5.4] - 2025-12-04

### 🚀 Features

- _(rsc)_ extract client-side RSC runtime from inline and update rendering pipeline by @skiniks
- _(runtime)_ extract client-side entry point and RSC wire format parser by @skiniks

### 🚜 Refactor

- _(rsc)_ reorganize module structure for rendering pipeline by @skiniks
- _(runtime)_ use StreamOpState from ops module by @skiniks
- _(server)_ reorganize vite proxy into module structure by @skiniks
- _(server)_ reorganize types by @skiniks
- _(server)_ reorganize module structure by @skiniks
- _(runtime)_ move transpile module into utils by @skiniks
- _(rsc)_ extract JavaScript initialization and rendering scripts by @skiniks

### 🎨 Styling

- _(runtime)_ clean up linting directives and modernize string formatting by @skiniks

### ⚙️ Miscellaneous Tasks

- _(rari)_ configure cargo-machete to ignore num-bigint-dig dependency by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.7...v0.5.4

## [0.5.2] - 2025-12-03

### 🐛 Bug Fixes

- _(router)_ Add Vite ignore comments to dynamic imports by @skiniks
- _(security)_ prevent prototype pollution in server actions (CVE-2025-55182) by @skiniks

### 🚜 Refactor

- _(rsc)_ Extract and reorganize type definitions and fix dupes by @skiniks
- _(server)_ Reorganize server module structure by @skiniks
- _(runtime)_ Extract runtime_factory into submodules by @skiniks
- _(module_loader)_ Extract module loader into submodules by @skiniks
- _(runtime)_ Extract runtime submodules into new org by @skiniks
- _(rsc)_ Reorganize RSC module structure into submodules by @skiniks
- _(rsc)_ Extract streaming module scripts into separate files by @skiniks
- _(rsc)_ Extract streaming submodules into separate files by @skiniks
- _(rsc)_ Extract renderer scripts and constants into separate files by @skiniks
- _(rsc)_ Extract renderer core logic and utilities into submodules by @skiniks
- _(rsc)_ Extract layout renderer scripts into separate files by @skiniks
- _(layout_renderer)_ Extract core logic and utilities into submodules by @skiniks
- _(rsc)_ Remove unused fields and dead code by @skiniks
- _(runtime)_ Remove unused fields and dead code by @skiniks
- _(rsc,runtime)_ Remove auto-register logic and hardcoded paths by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.5...v0.5.2

## [0.5.1] - 2025-12-02

### 🚜 Refactor

- _(rsc)_ Replace timestamp-based key generation with counter for stable key gen by @skiniks

### ⚙️ Miscellaneous Tasks

- bump binary packages to v0.5.1 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.4...v0.5.1

## [rari@0.5.4] - 2025-11-24

### 🚜 Refactor

- _(cli)_ fix for issue #45 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.5.3...rari@0.5.4

## [0.5.0] - 2025-11-24

### 🚀 Features

- _(error)_ Add comprehensive streaming and loading state error handling by @skiniks
- _(rsc)_ Add RSC wire format parser and streaming layout renderer by @skiniks
- _(rsc)_ Refactor streaming render completion to use async/await with channel signaling by @skiniks
- _(router)_ Implement client-side routing with layout management and error handling by @skiniks

### 🚜 Refactor

- _(vite)_ Simplify client-side rendering logic by @skiniks
- _(exports)_ Rename server export to vite for clarity by @skiniks

### 🧪 Testing

- _(layout_renderer)_ Remove obsolete assertion messages from tests by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.4.0...v0.5.0

## [rari@0.4.0] - 2025-10-30

### 🚀 Features

- _(runtime)_ Add API request bridge for Rari server runtime by @skiniks
- _(runtime)_ Upgrade Deno dependencies and improve module loading by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.3.3...rari@0.4.0

## [rari@0.3.3] - 2025-10-28

### 🚜 Refactor

- _(rsc)_ Remove JSX transformation from core and simplify dependency extraction by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.3.2...rari@0.3.3

## [0.3.2] - 2025-10-28

### 🐛 Bug Fixes

- prevent false ES module detection when code contains "export" in strings by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.3.1...v0.3.2

## [0.3.1] - 2025-10-24

### 🚀 Features

- _(rari)_ Add pathname support for layouts and server components by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.3.0...v0.3.1

## [0.3.0] - 2025-10-21

### 🚀 Features

- implement app router with dynamic routing, layouts, and error handling; add example application by @skiniks
- add static asset serving and production handling in server by @skiniks
- implement server actions and enhance form handling with progressive enhancement in example app by @skiniks
- _(HMR)_ implement component reload functionality and error handling by @skiniks
- _(ssr)_ introduce server-side rendering capabilities and configuration options by @skiniks
- _(ssr)_ enhance SSR rendering with raw content handling and improved child rendering logic by @skiniks
- _(ssr)_ Enhance script and link tag extraction with improved handling by @skiniks
- _(rsc)_ Enhance layout rendering with performance metrics and direct HTML rendering by @skiniks
- _(rsc)_ introduce direct HTML rendering and enhance layout rendering with caching by @skiniks
- _(runtime)_ Enhance request context handling and runtime integration by @skiniks
- _(rsc)_ introduce RSC HTML rendering and refactor SSR components by @skiniks
- _(router)_ Add support for global and scoped not-found routes by @skiniks

### 🐛 Bug Fixes

- correct component path replacement by @skiniks

### 🚜 Refactor

- remove 'use server' directives from components and update documentation to clarify server/client component usage by @skiniks
- replace entry-client.tsx with virtual import for client components by @skiniks
- simplify server component detection logic by removing redundant checks by @skiniks
- streamline rari router plugin by removing unused options and simplifying route generation logic by @skiniks
- clean up routing code by deleting obsolete files by @skiniks
- remove obsolete '.rari' directory references and streamline routing logic by @skiniks
- unify cache configuration types and simplify route matching logic in server module by @skiniks
- enhance middleware handling and dynamic Vite port config by @skiniks
- enhance async handling in layout and streaming renderers, update RSC traversal logic for better error handling by @skiniks
- remove unused test handler and direct registration route by @skiniks
- expanding HMR for app router support by @skiniks
- _(error)_ Improve ModuleReloadError handling with boxed error variant by @skiniks
- _(AppRouterHMRProvider)_ streamline event handling and enhance RSC payload management by @skiniks
- _(ssr)_ reorganize SSR rendering logic and improve error handling by @skiniks
- _(rsc)_ Remove renderer pool and simplify layout rendering by @skiniks
- _(rari)_ simplify server component checks and remove unused directory validations by @skiniks
- _(rsc)_ Simplify caching logic and remove route-specific cache exclusions by @skiniks
- _(rsc)_ Rename RSC function registration global to improve clarity by @skiniks
- _(rsc)_ Remove HTML diagnostics and simplify rendering logging by @skiniks
- _(rsc)_ enhance HTML template handling and logging by @skiniks
- _(rsc)_ consolidate HTML rendering logic and improve cache management by @skiniks
- _(rsc)_ Simplify component registration and remove redundant hash-based keys by @skiniks
- _(rsc)_ Rename RSC rendering functions to follow consistent naming convention by @skiniks
- _(rsc)_ Improve component invalidation and registration mechanisms by @skiniks
- _(rsc)_ Improve component import transformation for global component resolution by @skiniks
- _(rsc)_ Enhance HTML rendering with raw content support and vendor prefix handling by @skiniks
- _(rsc)_ Improve client-side rendering and hydration logic by @skiniks
- _(rsc)_ fix hydration logic in renderApp by @skiniks
- _(server)_ Enhance static file handling and security configuration by @skiniks
- _(server)_ Enhance Content Security Policy configuration by @skiniks
- _(rsc)_ Enhance layout renderer test cases with not_found support by @skiniks

### 📚 Documentation

- _(rari)_ Add comprehensive package metadata for Cargo.toml by @skiniks

### ⚙️ Miscellaneous Tasks

- update server and Vite configuration ports to 5173 by @skiniks
- _(dependencies)_ Update project dependencies to latest versions by @skiniks
- _(dependencies)_ Update project dependencies by @skiniks
- fix linting errors by @skiniks
- _(dependencies)_ Update project dependencies and linting config by @skiniks
- _(rari)_ Bump package version to 0.3.0 by @skiniks
- _(rari)_ Bump package version to 0.3.0 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.24...v0.3.0

## [rari@0.2.24] - 2025-09-23

### ⚙️ Miscellaneous Tasks

- update dependencies across multiple packages to latest versions by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.23...rari@0.2.24

## [rari@0.2.23] - 2025-09-23

### 🚀 Features

- add support for component initial loading state and enhance HMR functionality by @skiniks

### 🚜 Refactor

- enhance error handling and retry logic in component rendering and registration processes by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.22...rari@0.2.23

## [rari@0.2.22] - 2025-09-04

### 🚜 Refactor

- improve formatting and error handling in extractCacheConfigFromContent function by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.21...rari@0.2.22

## [rari@0.2.21] - 2025-09-04

### ⚙️ Miscellaneous Tasks

- update rari dependencies to version 0.2.15 and remove unused client-dev entry by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.2.15...rari@0.2.21

## [0.2.15] - 2025-09-04

### ⚙️ Miscellaneous Tasks

- update rari to version 0.2.8 and bump dependencies across multiple packages by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.20...v0.2.15

## [rari@0.2.20] - 2025-09-04

### 🚜 Refactor

- remove unused router components and functions, simplify package.json dependencies by @skiniks

### ⚙️ Miscellaneous Tasks

- update dependencies across multiple packages to latest versions by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.19...rari@0.2.20

## [rari@0.2.19] - 2025-09-02

### ⚙️ Miscellaneous Tasks

- update rari to version 0.2.7, add caching configuration support, and remove macOS Rust version override in release workflow by @skiniks
- update optionalDependencies for rari to version 0.2.14 by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.18...rari@0.2.19

## [rari@0.2.18] - 2025-08-22

### ⚙️ Miscellaneous Tasks

- bump rari version to 0.2.6 and update type annotations by @skiniks
- update dependencies by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.17...rari@0.2.18

## [rari@0.2.17] - 2025-08-21

### ⚙️ Miscellaneous Tasks

- adjust resource limits and improve performance by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.16...rari@0.2.17

## [rari@0.2.16] - 2025-08-21

### ⚙️ Miscellaneous Tasks

- update rari crate version to 0.2.4, adjust dependencies, and improve error handling in module loader by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.15...rari@0.2.16

## [rari@0.2.15] - 2025-08-20

### 🐛 Bug Fixes

- preserve React module side effects to prevent import transformation issues by @skiniks
- rolling back aggressive optimizations by @skiniks

### ⚙️ Miscellaneous Tasks

- update optionalDependencies in package.json to version 0.2.2 for Rari binaries by @skiniks
- bump rari package version to 0.2.3 by @skiniks
- update rari package version to 0.2.4 and format Cargo.toml for consistency by @skiniks
- update rari package version to 0.2.13 and bump optional dependencies to 0.2.9 by @skiniks
- bump rari package version to 0.2.14 by @skiniks
- increase resource limits and configuration parameters for improved performance by @skiniks
- bump rari package version to 0.2.3 by @skiniks
- bump rari package version to 0.2.15-next.0 by @skiniks
- remove CHANGELOG.md and update release script to copy generated changelog to package directory by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.2.2...rari@0.2.15

## [0.2.2] - 2025-08-15

### ⚙️ Miscellaneous Tasks

- update rari package to use workspace link and remove unused cache control settings by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.2...v0.2.2

## [rari@0.2.2] - 2025-08-15

### 🚀 Features

- enhance documentation and meta description handling by @skiniks
- enhance caching and HTML optimization in Rari server by @skiniks
- enhance Google Tag Manager integration and improve layout responsiveness by @skiniks

### 💼 Other

- Framework-level React DOM optimizations - partial implementation by @skiniks

### 🚜 Refactor

- enhance router functionality and improve code structure by @skiniks
- streamline Vite configuration and enhance component registration by @skiniks

### ⚙️ Miscellaneous Tasks

- update rari package version to 0.2.8 in package.json and dependencies by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.8...rari@0.2.2

## [0.2.7] - 2025-08-16

### ⚙️ Miscellaneous Tasks

- bump all package versions to 0.2.7 after rollback to stable commit by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.1...v0.2.7

## [rari@0.2.1] - 2025-08-13

### 🚜 Refactor

- streamline RscClient endpoint configuration by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.2.0...rari@0.2.1

## [0.2.0] - 2025-08-13

### 🚀 Features

- enhance Vite configuration for React integration by @skiniks

### 🚜 Refactor

- enhance error handling and improve streaming functionality by @skiniks
- streamline error handling and reduce console warnings in init_react.js by @skiniks
- remove streaming_v2 module and update streaming functionality by @skiniks
- simplify fallback handling in rendering components by @skiniks
- streamline module specifier generation and enhance promise resolution handling by @skiniks
- improve promise handling in StreamingRenderer by @skiniks
- update dependency registration logic in RscRenderer by @skiniks
- optimize dependency registration in RscRenderer by @skiniks

### ⚙️ Miscellaneous Tasks

- update dependencies and improve streaming support by @skiniks
- update rari package version and dependencies by @skiniks
- update oxlint and rolldown-vite dependencies across multiple packages by @skiniks
- update rolldown-vite version to 7.1.2 and enhance streaming functionality by @skiniks
- update changelog generation settings and remove unused changelog files by @skiniks
- update esbuild and eslint-react dependencies by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.1.5...v0.2.0

## [0.1.5] - 2025-08-07

### ⚙️ Miscellaneous Tasks

- update rari dependency versions to 0.1.4 in examples and docs, and bump optional dependencies to 0.1.5 in rari package by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/rari@0.1.4...v0.1.5

## [rari@0.1.4] - 2025-08-07

### ⚙️ Miscellaneous Tasks

- add git-cliff configuration and update changelog generation by @skiniks

**Full Changelog**: https://github.com/rari-build/rari/compare/v0.1.3...rari@0.1.4
