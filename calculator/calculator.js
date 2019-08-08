module.exports = {
  add,
};

function add(...args) {
  return args.reduce((accu, curr) =>{
    return accu + curr
  }, 0);
}
