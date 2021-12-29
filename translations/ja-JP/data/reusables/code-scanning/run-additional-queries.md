コードをスキャンするために{% data variables.product.prodname_codeql %}を使う場合、{% data variables.product.prodname_codeql %}分析エンジンはコードからデータベースを生成し、それに対してクエリを実行します。 {% data variables.product.prodname_codeql %}の分析はデフォルトのクエリセットを使いますが、デフォルトのクエリに加えてもっと多くのクエリを実行するよう指定することもできます。

{% if codeql-packs %}
You can run extra queries if they are part of a
{% data variables.product.prodname_codeql %} pack (beta) published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} or a {% data variables.product.prodname_ql %} pack stored in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

The options available to specify the additional queries you want to run are:

- `packs` to install one or more {% data variables.product.prodname_codeql %} query packs (beta) and run the default query suite or queries for those packs.
- `queries` to specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. クエリスイートの定義に関する詳しい情報については「[{% data variables.product.prodname_codeql %}クエリスイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)」を参照してください。

You can use both `packs` and `queries` in the same workflow.
{% else %}
Any additional queries you want to run must belong to a
{% data variables.product.prodname_ql %} pack in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

単一の _.ql_ ファイル、複数の _.ql_ ファイルを含むディレクトリ、_.qls_ クエリスイート定義ファイル、または任意の組み合わせを指定できます。 クエリスイートの定義に関する詳しい情報については「[{% data variables.product.prodname_codeql %}クエリスイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %}`github/codeql/cpp/ql/src@main`というように、`github/codeql`リポジトリから直接クエリスイートを参照することはおすすめしません。 そういったクエリは、他のクエリで使われるのと同じ{% data variables.product.prodname_codeql %}のバージョンでコンパイルされているとは限らないので、分析の際にエラーが生じるかもしれません。{% endif %}
