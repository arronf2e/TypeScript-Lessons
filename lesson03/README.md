### 接口

```js
interface interfaceName {

}
```

可选属性：

```js
interface Person {
    firstName: string,
    lastName?: string,
    sayHi: () => string
}
​
let arron: Person = {
    firstName: 'arron',
    lastName: 'zhang',
​    sayHi: ():string => {
        return `hi, Here`
    }
}
```

只读属性：
```js
interface Person {
    readonly firstName: string,
    lastName?: string,
    sayHi: () => string
}
​
let arron: Person = {
    firstName: 'arron',
    lastName: 'zhang',
​    sayHi: ():string => {
        return `hi, Here`
    }
}
```