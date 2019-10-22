# 哈哈哈
## CSS命名规范
> 类名组成

类名或者ID，一般组成为`[类型]-[命名空间]_[实例名]`<br>
例如一个框架内的按钮的类名为u-FU_btn
其中`u-`为UI组件类型，`FU_`是框架的CSS命名空间，btn则是button的缩写btn,即按钮的意思。
命名空间会导致类名变长，但为了避免冲突也是不得已而为之。私有代码可不使用命名空间，但建议使用带类型前缀的命名哦。
类名分`主导类名`、`辅助类名`、`通用类名`

1、主导类名：一个DOM结构只存在一个主导类名
2、辅助类名：必须以绑定形式存在与主导类名绑定或与标签名绑定，书写样式时与主导类名绑定.m-cat.s-yellow{}
3、通用类名：可主可辅，两者通用

例如，一个红色的导航条，下边距有20，有淡入的CSS动画写法为<br>
`<div class="m-nav s-red g-mb20 a-fadeIn"></div>`

> 类名类型

`.m-`  模块(module)、主导类名，一般结构比较复杂，可假设是一个对象，假设这个模块是一只猫，模块内也是可以存在模块的，假设一只猫`.m-cat`吃了一只鱼`.m-fish`

`.M-`  大模块(module)、主导类名，大写的M，一般表示该模块唯一，#M-，接上脑洞，比如地球`.M-earth`，常用在网页公共部分，比如公共底部，公共头部，公共侧栏，主界面等。

`.p-`  属性(property)、主导类名，相当于组成对象的元素（必须被模块内），常用用到CSS子选择符`.m-cat > .p-foot`（非强制用子选择符）所以这部分类名是可以大量重用的。

`.u-`  UI组件、结构单一，主导类名，比如按钮，单选框，结构简单的元素，接上假设则比如说猫项圈.u-collar，项圈不属于猫天生有的，所以跟模块和属性有些区别

`.g-`  布局(grid)、通用类名，会影响元素空间位置时所用到，接上即猫的位置在哪啊，或者猫多大只啊（当然也可以定义在模块上）

`.a-`  动画(animation)、辅助类名，CSS动画。接上则是这只猫的动作，是跑啊，还是跳啊`.a-jump`

`.s-`  风格(style)、辅助类名，猫的种类有很多，通过该类名来区别不同的猫，灰猫还是黄猫啊，但猫都有脚是吧，该类名就是把不同的地方覆盖掉，默认猫是灰色的，但我这只猫是黄色的，即`.s-yellow`

`.S-`  风格(Style)、通用类名，重用性高的风格，带有强制覆盖性，比如.S-block，接上脑洞，这只猫整容了，染发了，可以这么理解。

`.d-`  设备(device)、通用类名，在各类设备上的表现。

`.z-`  状态、辅助类名，常用的状态比如.z-cur当前、.z-lock锁定、.z-loading加载

`.j-`  辅助类名，JS操作节点、辅助类名，该类名不写样式，供JS选择节点或者添加事件，但需要在与某个主导类名绑定选择或主导类名之内，例如碰了下猫铃铛会响，选择器为$('.m-cat  .j-bell')

`.J-`  通用类名，大写的J表示可直接选择器选择，例如$('.J-goTop')的功能是页面回到顶部，任何DOM只要加了.J-goTop 的类名之后就会获得回到顶部的能力。

`.f-`  通用类名，方法，CSS的方法，比如去除浮动f-clear，另为未来CSS做打算，例如CSS3的calc()

`.i-`  通用类名，图标(icon)，`.i-icoiconfont`（字体图标）

`.I-`  通用类名，图片(Image)，`.I-ico`则是图片精灵的图标（图片图标）

## Demo
<!--地球-->
<div class="M-earth">
    <!--猫-->
    <div class="m-cat a-jump">
        <div class="p-face"></div>
        <div class="p-ear s-left"></div>
        <div class="p-ear s-right"></div>
        <div class="m-fish">
            <div class="p-eye"></div>
        </div>
    </div>
    <!--黄猫-->
    <div class="m-cat s-yellow a-jump z-stop">
        <div class="p-face"></div>
        <div class="p-ear s-left"></div>
        <div class="p-ear s-right"></div>
    </div>
    <!--猫的碗-->
    <div class="u-catBowl">碗</div>
</div>
<style type="text/css">
    .M-earth{ margin: 20px auto; background-color: #71c7f8; width:300px; height: 300px; border-radius: 300px; }
    .m-cat {position: relative; display: inline-block;}
    .m-cat > .p-face {width: 80px; height: 90px; border-radius: 100px; background-color: #ccc; }
    .m-cat > .p-ear {width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 20px solid #ccc; position: absolute; top: 0; }
    .m-cat > .p-ear.s-left { left: 0;transform:rotate(-35deg)}
    .m-cat > .p-ear.s-right { right: 0;transform:rotate(35deg)}
    .m-cat.s-yellow > .p-face{ background-color:#EFF071;}
    .m-cat.s-yellow > .p-ear{ border-bottom-color:#EFF071; }
    .m-cat.z-stop{ animation: none; }
    .u-catBowl { width: 40px; height: 40px; border-radius: 20px; background-color: #000; display: inline-block;color: #fff; line-height: 40px; text-align: center; }
    .m-fish{   width: 0; height: 0; border-top: 10px solid transparent; border-right: 20px solid #fff; border-bottom: 10px solid transparent; position:absolute; bottom: 20px; left: 30px;}
    .m-fish > .p-eye{ position: absolute; width:3px; height: 3px;border-radius: 3px;background-color: #000; left: 10px; top: -2px; }
    .a-jump{animation: jump 0.75s linear infinite alternate;}
     @-webkit-keyframes jump {
    0% {transform:translateY(-5px);}
    100% {transform:translateY(5px);}
    }
</style>

```html
<!--地球-->
<div class="M-earth">
    <!--猫-->
    <div class="m-cat a-jump">
        <div class="p-face"></div>
        <div class="p-ear s-left"></div>
        <div class="p-ear s-right"></div>
        <div class="m-fish">
            <div class="p-eye"></div>
        </div>
    </div>
    <!--黄猫-->
    <div class="m-cat s-yellow a-jump z-stop">
        <div class="p-face"></div>
        <div class="p-ear s-left"></div>
        <div class="p-ear s-right"></div>
    </div>
    <!--猫的碗-->
    <div class="u-catBowl">碗</div>
</div>
<style type="text/css">
    .M-earth{ margin: 20px auto; background-color: #71c7f8; width:300px; height: 300px; border-radius: 300px; }
    .m-cat {position: relative; display: inline-block;}
    .m-cat > .p-face {width: 80px; height: 90px; border-radius: 100px; background-color: #ccc; }
    .m-cat > .p-ear {width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 20px solid #ccc; position: absolute; top: 0; }
    .m-cat > .p-ear.s-left { left: 0;transform:rotate(-35deg)}
    .m-cat > .p-ear.s-right { right: 0;transform:rotate(35deg)}
    .m-cat.s-yellow > .p-face{ background-color:#EFF071;}
    .m-cat.s-yellow > .p-ear{ border-bottom-color:#EFF071; }
    .m-cat.z-stop{ animation: none; }
    .u-catBowl { width: 40px; height: 40px; border-radius: 20px; background-color: #000; display: inline-block;color: #fff; line-height: 40px; text-align: center; }
    .m-fish{   width: 0; height: 0; border-top: 10px solid transparent; border-right: 20px solid #fff; border-bottom: 10px solid transparent; position:absolute; bottom: 20px; left: 30px;}
    .m-fish > .p-eye{ position: absolute; width:3px; height: 3px;border-radius: 3px;background-color: #000; left: 10px; top: -2px; }
    .a-jump{animation: jump 0.75s linear infinite alternate;}
     @-webkit-keyframes jump {
    0% {transform:translateY(-5px);}
    100% {transform:translateY(5px);}
    }
</style>
```