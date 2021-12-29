## 機能ベースのバージョン管理

機能ベースのバージョン管理によって、任意の名前の「機能」のバージョンの定義とコントロールを一カ所で行えるようになります。

**ノート:** テストで使用されるので、`data/features/placeholder.yml`は削除しないでください。

## 動作の仕組み

このディレクトリで使いたい機能名で新しいYAMLファイルを追加してください。 `meow`という名前の機能であれば、このファイルは`data/features/meow.yml`になります。

その機能が利用できるバージョンの短い名前で、このYMLファイルに`versions`ブロックを追加してください。 例:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

フォーマットと使用可能な値は[ frontmatter versionsプロパティ](/content#versions)と同じです。

### Liquidの条件演算子

コンテンツファイルで`{% if meow %} ... {% endif %}`が使えるようになりました！ これは`if`タグであり、新しい`ifversion`タグではないことに注意してください。

### Frontmatter

コンテンツファイル中のfrontmatterでこの機能を使うこともできます。

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

コンテンツファイルを複数の機能に適用したい場合は、以下のようにすることができます。

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: ['meow', 'blorp']
```

## スキーマの適用

機能のバージョン管理の検証のためのスキーマは[`tests/helpers/schemas/feature-versions.js`](tests/helpers/schemas/feature-versions.js)にあり、[`tests/content/lint-files.js`](tests/content/lint-files.js)によって実行されます。

## 機能タグを削除するためのスクリプト

未定!
