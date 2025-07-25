# Changelog

## [4.0.0-beta.14](https://github.com/nuxtlabs/docus/compare/v4.0.0-beta.13...v4.0.0-beta.14) (2025-07-25)

## [4.0.0-beta.13](https://github.com/nuxtlabs/docus/compare/v4.0.0-beta.12...v4.0.0-beta.13) (2025-07-25)

## [4.0.0-beta.12](https://github.com/nuxtlabs/docus/compare/v4.0.0-beta.11...v4.0.0-beta.12) (2025-07-25)

## [4.0.0-beta.11](https://github.com/nuxtlabs/docus/compare/v4.0.0-beta.10...v4.0.0-beta.11) (2025-07-24)

## [4.0.0-beta.10](https://github.com/nuxtlabs/docus/compare/v4.0.0-beta.9...v4.0.0-beta.10) (2025-07-24)

## [4.0.0-beta.9](https://github.com/nuxtlabs/docus/compare/v3.0.5...v4.0.0-beta.9) (2025-07-24)

### Features

* **app:** i18n integration ([3854b30](https://github.com/nuxtlabs/docus/commit/3854b30ca6162c56344a738a1fd5d5c961389deb))
* **cli:** add `prepare` command ([2bec323](https://github.com/nuxtlabs/docus/commit/2bec3236ffa47d2503b97e676318122ac9b43d4b))
* **cli:** use native nuxt cli instead of docus CLI ([282d8e5](https://github.com/nuxtlabs/docus/commit/282d8e5b26fe718c4d72d8d75a1a65652ddffe04))
* **cli:** use native nuxt cli instead of docus CLI ([#1117](https://github.com/nuxtlabs/docus/issues/1117)) ([ff4bc93](https://github.com/nuxtlabs/docus/commit/ff4bc93ea3b6b903632b20419ca1ceb6b0965392))

### Bug Fixes

* **app:** correct types ([448b78a](https://github.com/nuxtlabs/docus/commit/448b78a4fb3539047f2e23eb36d04afb77c03f4b))

## [3.0.5](https://github.com/nuxtlabs/docus/compare/v3.0.4...v3.0.5) (2025-07-01)

### Features

* **app:** add `bash` & `diff` highlight langs ([55e0fa0](https://github.com/nuxtlabs/docus/commit/55e0fa0408e5d0656fa36cb49554668dbc288082))
* **app:** handle `github.rootDir` app config ([0698787](https://github.com/nuxtlabs/docus/commit/06987870962d6c3b604f35126c10018388930c37))

### Bug Fixes

* **app:** add `highlight` on content toc ([a511b50](https://github.com/nuxtlabs/docus/commit/a511b508cd2140f86ba7e045244cf59b68f84c68))
* **app:** allow content navigation variant override ([ccc1340](https://github.com/nuxtlabs/docus/commit/ccc1340faa0da10ac8e17d909739b987b337fcd4))
* **app:** display page links in header ([9acc755](https://github.com/nuxtlabs/docus/commit/9acc75565f1f92013371319a2506edbba7dd415c))
* **app:** import from `@nuxt/kit` ([d8dbee4](https://github.com/nuxtlabs/docus/commit/d8dbee4c804754b94ff3abc9e0d0225f5112688a))
* **app:** improve app config type ([246c16a](https://github.com/nuxtlabs/docus/commit/246c16a984e1e837c19bdd22c439bb6fb5bbf813))
* **app:** use `useClipboard` to copy page ([a8cd48b](https://github.com/nuxtlabs/docus/commit/a8cd48b063679b1c58142842ef857abf15fc8630))

## [3.0.4](https://github.com/nuxtlabs/docus/compare/v3.0.3...v3.0.4) (2025-06-24)

### Bug Fixes

* **prerender:** redirect issue with static deployment ([5f8fbb3](https://github.com/nuxtlabs/docus/commit/5f8fbb32c5cba8479b2562495d0fb7c49291c6de))

## [3.0.3](https://github.com/nuxtlabs/docus/compare/v3.0.2...v3.0.3) (2025-06-20)

### Features

* **nav:** handle nav for docs folder ([65a477a](https://github.com/nuxtlabs/docus/commit/65a477a0974ced0cae7aed6d5fd498ec4e7e0687))

### Bug Fixes

* **landing:** conditionally add prose ([1931668](https://github.com/nuxtlabs/docus/commit/19316680c2c2035d7d72b4628d2caa901b3a01a6))
* **landing:** put back prose ([73edf2a](https://github.com/nuxtlabs/docus/commit/73edf2a417802b5a366af17d17961f4e9a900564))
* **prerender:** add mardown raw content ([e35b7aa](https://github.com/nuxtlabs/docus/commit/e35b7aaab954f69b7b8edd67d92a37ba6678c9d4))

## [3.0.2](https://github.com/nuxtlabs/docus/compare/v3.0.1...v3.0.2) (2025-06-17)

### Features

* **llms:** enable full by default ([677078f](https://github.com/nuxtlabs/docus/commit/677078f0d1e432d7b25e876374e36eeb2796d5f2))

### Bug Fixes

* **setup:** docs layer ([d407155](https://github.com/nuxtlabs/docus/commit/d40715593adecf5e8421e100e897687a28a56e39))
* **starter:** prerender issues ([2facbea](https://github.com/nuxtlabs/docus/commit/2facbeaa3c8c9287c2048c754602063912fe5a49))

## [3.0.1](https://github.com/nuxtlabs/docus/compare/v3.0.0...v3.0.1) (2025-06-17)

### Bug Fixes

* **configs:** handle llms and site default configs in a module ([c642df9](https://github.com/nuxtlabs/docus/commit/c642df95c0a3a8b98eddaa33f00b5b1187eeaba8))
* improve async data key for SEO ([2de5ffe](https://github.com/nuxtlabs/docus/commit/2de5ffe22ccfc9fb46c802d0fbc77f4a764f78a5))
* **llms:** missing deps to enable full ([6d354ce](https://github.com/nuxtlabs/docus/commit/6d354ceafa7792880f50487d2ad392172df10d87))
* **setup:** define default app config in module ([b250a1b](https://github.com/nuxtlabs/docus/commit/b250a1b677c6cf1bf68794615c86599864ce9fd5))

## [3.0.0](https://github.com/nuxtlabs/docus/compare/v3.0.0-alpha.3...v3.0.0) (2025-06-13)

### Features

* **llms:** enable full ([65374af](https://github.com/nuxtlabs/docus/commit/65374af2bc44c42cb35fa66055bd65d092dcd32e))

## [3.0.0-alpha.3](https://github.com/nuxtlabs/docus/compare/v3.0.0-alpha.2...v3.0.0-alpha.3) (2025-06-12)

## [3.0.0-alpha.2](https://github.com/nuxtlabs/docus/compare/v3.0.0-alpha.1...v3.0.0-alpha.2) (2025-06-12)

### Bug Fixes

* **ci:** nightly ([26b92a7](https://github.com/nuxtlabs/docus/commit/26b92a71a2abd1e0216f6d7433edfde696c25264))
* **deps:** add brace-expansion as optimized deps ([32a5589](https://github.com/nuxtlabs/docus/commit/32a5589d0abaec0a4566778fa154e1eee28c014a))
* **deps:** remove brace-expansion optimization ([355ac39](https://github.com/nuxtlabs/docus/commit/355ac39d60674aec4e99234a6e73502db00ce4a8))

## [3.0.0-alpha.1](https://github.com/nuxtlabs/docus/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2025-06-12)

### Bug Fixes

* **deps:** refine optimizeDeps of `@nuxt/content` ([#1080](https://github.com/nuxtlabs/docus/issues/1080)) ([ba0f6ef](https://github.com/nuxtlabs/docus/commit/ba0f6effa28b25135719746da17991453ffd678d))

## [3.0.0-alpha.0](https://github.com/nuxtlabs/docus/compare/v2.0.0-alpha.1...v3.0.0-alpha.0) (2025-06-12)

### Bug Fixes

* **docs:** use docus instead of @larbish/docus ([0dee9ec](https://github.com/nuxtlabs/docus/commit/0dee9ec484f4f097c68f2236cb2f927dcbd1db30))

## [2.0.0-alpha.1](https://github.com/nuxtlabs/docus/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2025-06-10)

### Bug Fixes

* **cli:** init command ([cfa6290](https://github.com/nuxtlabs/docus/commit/cfa6290f5aa38da852dad57780a277c502df3daf))

## [2.0.0-alpha.0](https://github.com/nuxtlabs/docus/compare/v2.0.0...v2.0.0-alpha.0) (2025-06-10)

### Features

* animate the menu toggle icon ([1cb0273](https://github.com/nuxtlabs/docus/commit/1cb0273d68e8b28b76c22f07cb40ca74c8034189))
* **app:** build command ([cb505bb](https://github.com/nuxtlabs/docus/commit/cb505bbfffc50654a4634846ff39510401c93bf2))
* **app:** compat nuxt version 4 ([594ac08](https://github.com/nuxtlabs/docus/commit/594ac0834738effb6752f3b3efc25d1dd9f0b3d7))
* **app:** init docus v2 ([bc3a9d1](https://github.com/nuxtlabs/docus/commit/bc3a9d101052fb787e562744d5d9b3d87799c24b))
* **app:** rename DocsHeaderRight to DocsPageHeaderLinks ([82a2ca8](https://github.com/nuxtlabs/docus/commit/82a2ca87aefdf446c62564010c6839b76a57de89))
* **ci:** publish nightly ([4753cd4](https://github.com/nuxtlabs/docus/commit/4753cd450f8f6741572911169ea21c88e1f75915))
* **components:** AppHeaderBody ([ae5ecc8](https://github.com/nuxtlabs/docus/commit/ae5ecc86d00918c9fb35f235bc2b72c322932f9d))
* **components:** customizable app header and docs asides ([4ca262b](https://github.com/nuxtlabs/docus/commit/4ca262b247f01ad4b8041bf106886f3d506525fa))
* **config:** handle app.config.ts ([739cbb1](https://github.com/nuxtlabs/docus/commit/739cbb151a5d8ff510662d1ee534a827e05cb21f))
* **docs:** docs header right ([843527c](https://github.com/nuxtlabs/docus/commit/843527cb6f909fd9cf5492b014b659d45490f3ef))
* **docs:** links from app config from docs aside right bottom ([28f521d](https://github.com/nuxtlabs/docus/commit/28f521dd51aa4ce5b7354416bd3bf626f9f79cd0))
* **docs:** trigger nightly ([4493e33](https://github.com/nuxtlabs/docus/commit/4493e33d6cce899d4eacb4f0191cbfe40b6554d9))
* improvements ([b1af212](https://github.com/nuxtlabs/docus/commit/b1af212900712223673617749eecb227378cb3e3))
* **llms:** integrate nuxt llms by default ([3f060d8](https://github.com/nuxtlabs/docus/commit/3f060d85bca006e8cea412144fdfda7eec481d1f))
* **seo:** og images landing ([a81f07b](https://github.com/nuxtlabs/docus/commit/a81f07b49ee21b6bb1e944178f596065ce8b0ff2))
* **seo:** site name and title template ([19fb325](https://github.com/nuxtlabs/docus/commit/19fb32542036ff943bc1ad532ce182d9fe036a5b))
* **social:** update og image ([87f87e4](https://github.com/nuxtlabs/docus/commit/87f87e4cb2905267feb2bd66fe8c744d7ace53af))
* **starter:** update ([6ddff7f](https://github.com/nuxtlabs/docus/commit/6ddff7fd3909c746c86ac6a82b6bbc350c3e987e))

### Bug Fixes

* add docs dir only if not found as layer ([05fdaf3](https://github.com/nuxtlabs/docus/commit/05fdaf3a87edf1b9470918259e7792b91a82d1a1))
* **app:** config ([af15911](https://github.com/nuxtlabs/docus/commit/af15911b054c9d7c3c22902f4d44860da3510f12))
* **cli:** layers ([370740c](https://github.com/nuxtlabs/docus/commit/370740c4231d147bac5c5f5f90702fc9f0b3a74e))
* **cli:** rename to docus ([ef17013](https://github.com/nuxtlabs/docus/commit/ef1701359be87390ceae4b064970269f4bd206b3))
* **cli:** update init cmd ([b902db7](https://github.com/nuxtlabs/docus/commit/b902db7ce6293c778577747905718e62e1e4d4cd))
* **config:** update toc links schema ([5ce2c70](https://github.com/nuxtlabs/docus/commit/5ce2c70aa7c52be341c9484d5fd10427c8320d09))
* **docs:** copy page ([63f1088](https://github.com/nuxtlabs/docus/commit/63f1088a7b4efe0cf12213df899554cb8e820a86))
* **docs:** safari copy to clipboard ([4761858](https://github.com/nuxtlabs/docus/commit/47618586a94169e9e4f75158ffd2e62539735f01))
* **git:** fetch info ([98dae4b](https://github.com/nuxtlabs/docus/commit/98dae4bf59829313cd630f7bf4eaffb6003cbe95))
* **git:** vercel branch name variable ([966a1b9](https://github.com/nuxtlabs/docus/commit/966a1b9369957e76019efdc3dc0c48c8d3c99a07))
* **icon:** use iconify provider ([f41113c](https://github.com/nuxtlabs/docus/commit/f41113c1f767db3f26830070db245fcd542caa5e))
* **landing:** neutral and primary in iframe command menu ([e16717d](https://github.com/nuxtlabs/docus/commit/e16717df0ae90cea71bf9c83eb8056c4a3d59202))
* **package:** add repository ([cebd917](https://github.com/nuxtlabs/docus/commit/cebd91740a797b7c4f94dd360b335a289f18e2e6))
* **package:** dev without rebuild ([67fad9e](https://github.com/nuxtlabs/docus/commit/67fad9ec773caeac517d737dfc8370b1302d4de5))
* **package:** set pnpm version ([b96e34b](https://github.com/nuxtlabs/docus/commit/b96e34b6cfb6a070667e812925c5058585710169))
* **pages:** possibility to set gh edit url ([85a01e7](https://github.com/nuxtlabs/docus/commit/85a01e79817c53142472c49a4e1db684c71c7b3e))
* **schema:** toc ([00b90d8](https://github.com/nuxtlabs/docus/commit/00b90d89fe16db9ee92894e8bb1e797674c9cd93))
* **seo:** default title and description ([0321956](https://github.com/nuxtlabs/docus/commit/03219562b9fa02eed1ee1bbf4cbab31092028911))
* **seo:** site name and url ([afc59b6](https://github.com/nuxtlabs/docus/commit/afc59b678287caf53b39ac69d65165a67a4840b8))
* **seo:** use seo key instead of site ([68bece7](https://github.com/nuxtlabs/docus/commit/68bece7bdbb9b9ef7d9ed7408a37ffb8445a0453))
* **seo:** use site title ([9e9df32](https://github.com/nuxtlabs/docus/commit/9e9df3264efec4fd6f4cf9843894c05f3f77ce15))
* **setup:** default header title ([1a4ee1d](https://github.com/nuxtlabs/docus/commit/1a4ee1d80f00d673b5b58048c28d673e977b0204))
* **setup:** infer URL ([105e1ca](https://github.com/nuxtlabs/docus/commit/105e1ca4ac7b33fd6589cc533c75bed561c06ca4))
* source app config ([abc5c35](https://github.com/nuxtlabs/docus/commit/abc5c355daa47665c064a19834455c1e57c5799c))
