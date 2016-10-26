var _ = {};

(function() {
  /**
   * Returns true if `value` exists in `list`.
   */
  _.contains = function(list, value){
    var wasFound = false;
    _.each(list,function(item){
      if (item===value){
        wasFound=true;
      }
    })
    return wasFound;
  };

  /**
   * You might find the `_.each` function useful for writing `contains`.
   * Complete the `underscore-each` task first, and copy that function into this file.
   */
    _.each = function(collection, iterator) {
    if (Array.isArray(collection)){
      for (var i = 0; i<collection.length; i++){
        iterator(collection[i],i, collection);
      }
    } else {
      for (var key in collection){
        iterator(collection[key],key, collection);
      }
    }
  };

}).call(this);
