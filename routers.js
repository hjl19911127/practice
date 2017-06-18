module.exports = function(router) {
    let lists = [{
        chapter: 2,
        contents: ['assert', 'assertGroup', 'asynAssert']
    }, {
        chapter: 3,
        contents: ['function', 'scope', 'invoke', 'foreach']
    }, {
        chapter: 4,
        contents: ['anonymous', 'recursion', 'funAsObj', 'arguments']
    }, {
        chapter: 5,
        contents: ['closure', 'privateVariable', 'callback', 'functionContext', 'currying', 'functionOverload', 'immediateFunction']
    }];

    router.get('/', function*(next) {
        let data = {};
        data.lists = lists;
        yield this.render('index.html', data);
        yield* next;
    });

    (function() {
        for (let i = 0, len = lists.length; i < len; i++) {
            for (let j = 0, l = lists[i].contents.length; j < l; j++) {
                let index = j + 1;
                router.get('/chapter' + lists[i].chapter + '/' + index, function*(next) {
                    yield this.render('chapter' + lists[i].chapter + '/' + index + '-' + lists[i].contents[j] + '.html');
                    yield* next;
                });
            }
        }
    })();

    router.get('/test', function*(next) {
        yield this.render('test.html');
        yield* next;
    });
};