/**
 * Created by Administrator on 2017/7/14.
 */
var Utils = {
    // 过滤data数组中满足fiterFn返回值条件的元素
    arrayTreeFilter: function (data, filterFn, options) {
        options = options || {};
        options.childrenKeyName = options.childrenKeyName || 'children';
        var children = data || [];
        var result = [];
        var level = 0;

        var filterInnerFn = function (item) {
            return filterFn(item, level);
        };

        do {
            var foundItem = children.filter(filterInnerFn)[0];
            if (!foundItem) {
                break;
            }
            result.push(foundItem);
            children = foundItem[options.childrenKeyName] || [];
            level += 1;
        } while (children.length > 0);
        return result;
    }
};
module.exports = Utils;
