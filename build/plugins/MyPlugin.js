/**
 * @file 自定义的webpack插件
 * 
 * https://www.webpackjs.com/contribute/writing-a-plugin/
 */

function HelloWorldPlugin(options) {
    // 使用 options 设置插件实例……
}

HelloWorldPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        console.log('Hello World!');
    });
};

module.exports = HelloWorldPlugin;
