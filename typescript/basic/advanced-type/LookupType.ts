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



/*
keyof演算子

keyof演算子を使うと、オブジェクトのすべてのキーを文字列リテラル型の合併として取得できる。

*/

type ResponseKeys = keyof APIResponse                          // "user"型
type UserKeys = keyof APIResponse['user']                      // "userId" | "friendList"型
type FriendListKeys = keyof APIResponse['user']['friendList']  // "count" | "friends"型


/*
ルックアップ型とkeyofを組み合わせることで型安全なゲッター関数を実装することができる。

*/


// ジェネリック型の引数keyにobjのkeyofを型アノテートすることで、入力されたすべてのオブジェクトのキーの合併型(文字列リテラル)を取得する。
// 戻り値のアノテートにルックアップ型を使うことで型安全になる。
function get<O extends object, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key];
}

const user = {
    id: 0,
    name: 'alice',
    age: 23,
}

const userName = get(user, 'name')  // string型
console.log(userName)               // alice

// const gender = get(user, 'gender')  // エラー