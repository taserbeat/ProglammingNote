export default null;

/*
ルックアップ型

以下のAPIResponse型から、FriendList型やFriend型を定義したい場合にキーを指定して型を取得すること(ルックアップ)ができる。
本来であれば下位(FriendListやFriend)の型定義に基づいて上位の型定義を実装していくが、
ルックアップ型を使うことで上位→下位の型定義が可能になる。

例えば、APIのスキーマからTypeScriptの型定義を生成するビルドツールを使用する場合は上位の型定義が先に存在することになるので、
ルックアップによって下位の型定義を取得することができる。

*/

type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
}

/*
キーを指定することで任意の形状(オブジェクトやクラスコンストラクター、配列)にアクセスできる。
配列型から単数型を取得するにはnumberをキーに指定すればよい。

なお、タプル型のルックアップには、0, 1, ...などアクセスしたいインデックスの数値リテラルを使う。
*/

type FriendList = APIResponse['user']['friendList']
type Friend = FriendList['friends'][number]
