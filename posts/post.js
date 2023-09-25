function teste() {
  // Storage do navegador
  const storage = sessionStorage;

  const post = {
    title: 'post title',
    desc: 'asdkjhbjk asdkjasbnd asda'
  };
  // SET AND GET ITENS
  storage.setItem('item', JSON.stringify(post));
  const item = storage.getItem('item');
  console.log(item);
}

export default teste();