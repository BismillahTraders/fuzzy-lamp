1. Click **Remove**.
1. セルフホストランナーの削除手順が表示されます。 ランナーがアクセスできる状態にあるかによって、ランナーを削除するための以下のステップのいずれかを実行してください。

    * **ランナーマシンにアクセスできる場合：** マシンのオペレーティングシステムの画面上の指示に従って、削除コマンドを実行してください。 この指示には、必須のURLと自動的に生成された期間限定のトークンが含まれます。

        この削除コマンドは、以下のタスクを実行します。

        * {% data variables.product.product_name %}からのランナーの削除。
        * マシン上のセルフホストランナーアプリケーションの設定ファイルの削除。
        * インタラクティブモードで動作していないのであれば設定されているサービスの削除。

    * **If you don't have access to the machine:** Click **Force remove this runner** to force {% data variables.product.product_name %} to remove the runner.
