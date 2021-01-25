export default null;

/*

マップ型(mapped type)

*/

/*
RecordType.tsにおいて、より安全にnextDayを宣言する方法がマップ型を使うことである。

(マップ型はTypeScriptが言語機能として備えており、マップ型を利用してRecord型が実装されている)
*/

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekday | 'Sat' | 'Sun';

let nextDay: { [K in Weekday]: Day } = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
}

/*
マップ型は、ルックアップ型(LookupType.ts)と組み合わせると、どの値の型がどのキーの名前に対応するかを制約できる。
*/

type Account = {
    id: number,
    isEmployee: boolean,
    notes: string[],
}

// すべてのフィールドを省略可能にする
type OptionalAccount = {
    [Key in keyof Account]?: Account[Key]
}

// let account: Account = {};  // NG
let optionalAccount: OptionalAccount = {};  // OK


// すべてのフィールドをnull許容する
type NullableAccount = {
    [Key in keyof Account]: Account[Key] | null
}

// let account: Account = { id: null, isEmployee: null, notes: null };  // NG
let nullableAccount: NullableAccount = { id: null, isEmployee: null, notes: null };  // OK


// すべてのフィールドを読み取り専用にする
type ReadOnlyAccount = {
    readonly [Key in keyof Account]: Account[Key]
}

let account: Account = { id: 1, isEmployee: true, notes: ['very nice!', 'cool!'] };
let readOnlyAccount: ReadOnlyAccount = { id: 1, isEmployee: true, notes: ['very nice!', 'cool!'] };

account.isEmployee = false;              // OK(再代入可能)
// readOnlyAccount.isEmployee = false;   // NG(読み取り専用プロパティになったので、再代入不可)



/*
組み込み型のマップ型

TypeScriptには多くのマップ型があらかじめ組み込まれている。
*/

/*
・Record<Keys, Values>
Keys型のキーとValues型の値を持つオブジェクト。
*/

type JyankenHands = 'Rock' | 'Scissors' | 'Paper';  // グー、チョキ、パー
let winHands: Record<JyankenHands, JyankenHands> = {
    Rock: 'Scissors',
    Scissors: 'Paper',
    Paper: 'Rock',
}


/*
・Partial<Object>
Object内のすべてのフィールドを省略可能にする。
*/

type Profile = {
    age: number,
    gender: 'male' | 'female',
    address?: string
}

let profile: Profile = {
    age: 25,              // 省略不可
    gender: 'male',       // 省略不可
    // address: 'Tokyo',  // 省略可能
}

let optionalProfile: Partial<Profile> = {
    // age: 25,              // 省略可能になった
    // gender: 'male',       // 省略可能になった
    // address: 'Tokyo',     // 省略可能のまま
}

/*
・Required<Object>
Object内のすべてのフィールドを省略不可にする。
*/

let requiredProfile: Required<Profile> = {
    age: 25,              // 省略不可のまま
    gender: 'male',       // 省略不可のまま
    address: 'Tokyo',     // 省略不可になった
}

/*
・Pick<Object, Keys>
指定されたKeysだけを持つ、オブジェクトのサブタイプを返す。
*/

let openableProfile: Pick<Profile, 'age' | `gender`> = {
    age: 25,
    gender: 'male',
}