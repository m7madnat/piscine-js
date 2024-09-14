function blockChain(data, prev = { index: 0, hash: '0' }) {
    const index = prev.index + 1;
    const dataString = JSON.stringify(data);
    const hash = hashCode(`${index}${prev.hash}${dataString}`);
    const block = {
      index: index,
      hash: hash,
      data: data,
      prev: prev,
      chain: function(newData) {
        return blockChain(newData, this);
      }
    };
    return block;
  }