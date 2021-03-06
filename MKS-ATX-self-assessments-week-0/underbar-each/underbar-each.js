var _ = {};

(function() {
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
