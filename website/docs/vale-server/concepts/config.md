---
id: config
title: Configuration
---

The `.vale.ini` file is where you'll control the majority of Vale's behavior, including what files to lint and how to lint them.

```ini title=".vale.ini"
# Example Vale config file (`.vale.ini` or `_vale.ini`)

# Core settings
StylesPath = "ci/vale/styles"

# The minimum alert level to display (suggestion, warning, or error).
#
# CI builds will only fail on error-level alerts.
MinAlertLevel = warning

# The "formats" section allows you to associate an "unknown" format
# with one of Vale's supported formats.
[formats]
mdx = md

# Global settings (applied to every syntax)
[*]
# List of styles to load
BasedOnStyles = write-good, Joblint
# Style.Rule = {YES, NO} to enable or disable a specific rule
vale.Editorializing = YES
# You can also change the level associated with a rule
vale.Hedging = error

# Syntax-specific settings
# These overwrite any conflicting global settings
[*.{md,txt}]
vale.Editorializing = NO
```

## Core

### `StylesPath`

:::note Heads up!
Vale Server requires that all paths (on both macOS and Windows) use a forward slash (/) and be *absolute* file paths.
:::


```ini
# Here's an example of a relative path:
#
# .vale.ini
# ci/
# ├── vale/
# │   ├── styles/
StylesPath = "ci/vale/styles"
```

`StylesPath` specifies where Vale should look for its external resources \(e.g., styles and ignore files\). The path value may be absolute or relative to the location of the parent `.vale.ini` file.

### `MinAlertLevel`

```ini
MinAlertLevel = suggestion
```

`MinAlertLevel` specifies the minimum alert severity that Vale will report. The options are "suggestion," "warning," or "error" \(defaults to "suggestion"\).

### `IgnoredScopes`

```ini
# By default, `code` and `tt` are ignored.
IgnoredScopes = code, tt
```

`IgnoredScopes` specifies inline-level HTML tags to ignore. In other words, these tags may occur in an active scope \(unlike `SkippedScopes`, which are _skipped_ entirely\) but their content still won't raise any alerts.

### `IgnoredClasses` (<span className="badge badge--secondary">v2.2.0</span>)

`IgnoredClasses` specifies classes to ignore. These classes may appear on both inline- and block-level HTML elements.

```ini
IgnoredClasses = my-class, another-class
```

### `SkippedScopes`

```ini
# By default, `script`, `style`, `pre`, and `figure` are ignored.
SkippedScopes = script, style, pre, figure
```

`SkippedScopes` specifies block-level HTML tags to ignore. Any content in these scopes will be ignored.

### `WordTemplate`

```ini
WordTemplate = \b(?:%s)\b
```

`WordTemplate` specifies what Vale will consider to be an individual word.

### `SphinxBuildPath` (<span className="badge badge--secondary">v2.0.0</span>)

```ini
SphinxBuildPath = _build
```

`SphinxBuildPath` is the path to your `_build` directory \(relative to the configuration file\).

### `SphinxAutoBuild` (<span className="badge badge--secondary">v2.0.0</span>)

```ini
SphinxAutoBuild = make html
```

`SphinxAutoBuild` is the command that builds your site \(`make html` is the default for Sphinx\).

If this is defined, Vale will re-build your site prior to linting any content -- which makes it possible to use Sphinx and Vale in lint-on-the-fly environments \(e.g., text editors\) at the cost of performance.

## Syntax-specific

### `BasedOnStyles`

```ini
BasedOnStyles = Joblint, write-good
```

`BasedOnStyles` specifies [styles](/vale-server/concepts/styles) that should have all of their rules enabled.

### `BlockIgnores`

```ini
BlockIgnores = (?s) *({< file [^>]* >}.*?{</ ?file >})
```

`BlockIgnores` allow you to exclude certain block-level sections of text that don't have an associated HTML tag that could be used with `SkippedScopes`. See [Non-Standard Markup](/vale-server/concepts/scoping#non-standard-markup) for more information.

### `TokenIgnores`

```ini
TokenIgnores = (\$+[^\n$]+\$+)
```

`TokenIgnores` allow you to exclude certain inline-level sections of text that don't have an associated HTML tag that could be used with `IgnoredScopes`. See [Non-Standard Markup](/vale-server/concepts/scoping#non-standard-markup) for more information.

### `Transform` (<span className="badge badge--secondary">v2.0.0</span>)

```ini
Transform = docbook-xsl-snapshot/html/docbook.xsl
```

`Transform` specifies a version 1.0 XSL Transformation \(XSLT\) for converting to HTML. See [Formats\#XML](/vale-server/concepts/scoping#xml-markup) for more information.

