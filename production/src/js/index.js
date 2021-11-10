import '../css/c.css';
import '../css/l.less';
import '../css/iconfont.css'

const arr = [1, 2, 3];

const ans = arr.map((item) => item + 1);
const promise1 = new Promise(() => {
  setTimeout(() => {
    console.log(1211);
  }, 300);
});
console.log(ans);
console.log(promise1);
