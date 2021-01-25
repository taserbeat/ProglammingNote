export default null;

/*
制限付きポリモーフィズム

ジェネリックTに型の上限を設ける
*/

/*
例: 二分木について考える。

・二分木はノードで構成され、ノードは値を保持する
・ノードは最大で2個の子ノードを指し示す

①基本的な二分木のノードをTreeNodeと呼ぶ
    TreeNodeはstring型のプロパティvalueを持つオブジェクトとする。

②子ノードを持たないノードはリーフノード(LeafNode)と呼ぶ
    LeafNodeはTreeNodeの継承に加えて、isLeafプロパティにリテラル型のtrueを持つオブジェクトとする。

③子ノードを1つ以上持つノードは内部ノード(InnerNode)と呼ぶ
    InnerNodeはTreeNodeの継承に加えて、1~2個の子ノードをchildrenプロパティに持つオブジェクトとする。

*/

// まずは上の例について、型宣言をしていく
type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

// 次に、mapNode関数について考える
// mapNode関数はTreeNodeと、そのvalueをマッピングして変換する関数オブジェクトを引数にとり、新しいTreeNode型を返す関数
const mapNode = <T extends TreeNode>(node: T, f: (value: string) => string): T => {
    return {
        ...node,
        value: f(node.value)
    };
}

const a: TreeNode = { value: 'a' };
const b: LeafNode = { value: 'b', isLeaf: true };
const c: InnerNode = { value: 'c', children: [a, b] };

mapNode(a, _ => _.toUpperCase());  // { value: 'A' }
mapNode(b, _ => _.toUpperCase());  // { value: 'B', isLeaf: true }
mapNode(c, _ => _.toUpperCase());  // { value: 'C', children: [{ value: 'a' }, { value: 'b', isLeaf: true }]}
