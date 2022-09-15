function treeByLevels(rootNode) {
    if (!rootNode || rootNode?.value === null) return [];

    let result = []
    let query = [rootNode]

    while (query.length !== 0) {
        let node = query.shift();

        if (node.value !== null) result.push(node.value)

        if (node.left !== null) query.push(node.left)
        if (node.right !== null) query.push(node.right)
    }

    return result
}