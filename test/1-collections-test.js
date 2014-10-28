describe("collections functions", function() {
	describe("each", function() {
	  it("iterates list", function() {
	    expect(_.each).toBeDefined();
	    var text = "";
	    _.each([1,2,3], function(element, index, list){
	    	text += element;
	    });
	    expect(text).toEqual("123");
	  });  
	});

	describe("map", function() {
	  it("iterates list producind another list", function() {
	    expect(_.map).toBeDefined();
	    var array = [];
	    _.map([1,2,3], function(element, index, list){
	    	array.push(element*2);
	    });
	    expect(array).toEqual([2,4,6]);
	  }); 
	});

	describe("reduce", function() {
	  describe("generates one result from array", function() {
	  	it("with initial memo", function(){
	  		expect(_.reduce).toBeDefined();
		    var array = [1, 2, 3];
		    var iteratee = function(memo, value){
		    	return memo+value;
		    };
		    var result = _.reduce(array, iteratee, 2);
		    expect(result).toEqual(8);
	  	});
	  	it("without initial memo", function(){
	  		expect(_.reduce).toBeDefined();
		    var array = [1, 2, 3];
		    var iteratee = function(memo, value){
		    	return memo+value;
		    };
		    var result = _.reduce(array, iteratee);
		    expect(result).toEqual(6);
	  	});
	  }); 
	});

	describe("reduceRight", function() {
	  describe("generates one result from array walking backwards", function() {
	  	it("with initial memo", function(){
	  		expect(_.reduceRight).toBeDefined();
		    var array = [1, 2, 3];
		    var iteratee = function(memo, value){
		    	return memo+value;
		    };
		    var result = _.reduceRight(array, iteratee, "2");
		    expect(result).toEqual("2321");
	  	});
	  	it("without initial memo", function(){
	  		expect(_.reduceRight).toBeDefined();
		    var array = ["1", "2", "3"];
		    var iteratee = function(memo, value){
		    	return memo+value;
		    };
		    var result = _.reduceRight(array, iteratee);
		    expect(result).toEqual("321");
	  	});
	  }); 
	});

	describe("find", function() {
	  describe("returns first element that matches predicate", function() {
	  	it("with result", function(){
	  		expect(_.find).toBeDefined();
		    var array = [1, 2, 3];
		    var predicate = function(num){
		    	return num%2==0;
		    };
		    var result = _.find(array, predicate);
		    expect(result).toEqual(2);
	  	});
	  	it("without result", function(){
	  		expect(_.find).toBeDefined();
		    var array = [1, 3, 5];
		    var predicate = function(num){
		    	return num%2==0;
		    };
		    var result = _.find(array, predicate);
		    expect(result).not.toBeDefined();
	  	});
	  }); 
	});

	describe("filter", function(){
		xit("filter a collection based on the predicate. Can receive a context", function(){
			expect("this test").toBe("done");
		})
	})

	describe("where", function() {
	  describe("filters many elements, like a sql where clause", function() {
	  	function Fruit(color, size){
	  		this.color = color;
	  		this.size = size;
	  	}
		var apple = new Fruit("red", "medium");
		var orange = new Fruit("orange", "medium");
		var grape = new Fruit("red", "small");
	  	it("with lots of results", function(){
	  		expect(_.where).toBeDefined();
	  		
		    var array = [apple, orange, grape];
		    expect(_.where(array, {color: "red"}))
		    	.toEqual([apple, grape]);
	    	expect(_.where(array, {size: "medium"}))
		    	.toEqual([apple, orange]);
	  	});
	  	it("without results", function(){
	  		expect(_.where).toBeDefined();
	  		
		    var array = [apple, orange, grape];
		    expect(_.where(array, {color: "blue"}))
		    	.toEqual([]);
	  	});
	  }); 
	});

	describe("findWhere", function() {
	  describe("return first element that matches properties in where clause", function() {
	  	function Fruit(color, size){
	  		this.color = color;
	  		this.size = size;
	  	}
		var apple = new Fruit("red", "medium");
		var orange = new Fruit("orange", "medium");
		var grape = new Fruit("red", "small");
	  	it("with result", function(){
	  		expect(_.findWhere).toBeDefined();
	  		
		    var array = [apple, orange, grape];
		    expect(_.findWhere(array, {color: "red"}))
		    	.toEqual(apple);
	  	});
	  	it("without results", function(){
	  		expect(_.findWhere).toBeDefined();
	  		
		    var array = [apple, orange, grape];
		    expect(_.findWhere(array, {color: "blue"}))
		    	.not.toBeDefined();
	  	});
	  }); 
	});

	describe("reject", function() {
	  describe("oposite of filter, returns elements that to not match predicate", function() {
	  	it("with result", function(){
	  		expect(_.reject).toBeDefined();
	  		
		    var array = [1, 2, 3];
		    var predicate = function(element){
		    	return element%2 == 0;
		    }
		    expect(_.reject(array, predicate))
		    	.toEqual([1, 3]);
	  	});
	  	it("without results", function(){
	  		var array = [1, 3, 5];
		    var predicate = function(element){
		    	return element%2 == 0;
		    }
		    expect(_.reject(array, predicate))
		    	.toEqual([1, 3, 5]);
	  	});
	  }); 
	});

	describe("every", function(){
		describe("return true if all elements pass the predicate", function(){
			it("return true", function(){
				expect(_.every).toBeDefined();

				var array = [2, 4, 6];
				var predicate = function(element){
					return element%2 == 0;
				}
				expect(_.every(array, predicate)).toBe(true);
			});
			it("return false", function(){
				expect(_.every).toBeDefined();

				var array = [2, 4, 5];
				var predicate = function(element){
					return element%2 == 0;
				}
				expect(_.every(array, predicate)).not.toBe(true);
			});
		});
	});

	describe("some", function(){
		describe("return true if at lease one element pass the predicate", function(){
			it("return true", function(){
				expect(_.some).toBeDefined();

				var array = [1, 3, 6];
				var predicate = function(element){
					return element%2 == 0;
				}
				expect(_.some(array, predicate)).toBe(true);
			});
			it("return false", function(){
				expect(_.some).toBeDefined();

				var array = [1, 3, 5];
				var predicate = function(element){
					return element%2 == 0;
				}
				expect(_.some(array, predicate)).toBe(false);
			});
		});
	});

	describe("contains", function(){
		describe("if list contains value", function(){
			it("return true", function(){
				expect(_.contains).toBeDefined();

				var array = [1, 3, 6];
				expect(_.contains(array, 1)).toBe(true);
			});
			it("return false", function(){
				expect(_.contains).toBeDefined();

				var array = [1, 3, 6];
				expect(_.contains(array, 2)).toBe(false);
			});
		});
	});

	describe("invoke", function(){
		function Engine(throttle){
			this.throttle = throttle;
			this.speed = 0;
			this.turnOn = function(gas){
				this.speed = this.throttle*gas;
			}
		}
		describe("invokes a method on all list", function(){
			it("return true", function(){
				expect(_.invoke).toBeDefined();

				var e1 = new Engine(1);
				var e2 = new Engine(2);
				var e3 = new Engine(3);
				var array = [e1, e2, e3];
				_.invoke(array, "turnOn", 2);
				expect(e1.speed).toBe(2);
				expect(e2.speed).toBe(4);
				expect(e3.speed).toBe(6);
			});
		});
	});

	describe("pluck", function(){
		describe("pluck is like map, but only returns properties", function(){
			it("extract one property from all elements in array", function(){
				expect(_.pluck).toBeDefined();
				var Box = function(value, size){
					this.value = value;
					this.size = size;
				}
				expect(_.pluck([new Box(1,2), new Box(1,2), new Box(1,3), new Box(1,4)],"size")).toEqual([2,2,3,4]);
			})
		})
	});

	describe("max", function(){
		describe("find the maximum object of a list", function(){
			it("list of numbers", function(){
				expect(_.max).toBeDefined();
				expect(_.max([1,5,3])).toEqual(5);
			});
			it("list of objects with ranking function", function(){
				expect(_.max).toBeDefined();
				function criterion(obj){
					return obj.value;
				}
				function Box(name, value){
					this.name = name;
					this.value = value;
				}
				var b1 = new Box("b1", 4);
				var b2 = new Box("b2", 1);
				var b3 = new Box("b3", 3);
				expect(_.max([b1, b2, b3], criterion)).toEqual(b1);
			});
			it("returns infinity if list is empty", function(){
				expect(_.max).toBeDefined();
				expect(_.max([])).toEqual(-Infinity);
			});
		});
	});

	describe("min", function(){
		describe("find the minimun object of a list", function(){
			it("list of numbers", function(){
				expect(_.min).toBeDefined();
				expect(_.min([1,5,3])).toEqual(1);
			});
			it("list of objects with ranking function", function(){
				expect(_.min).toBeDefined();
				function criterion(obj){
					return obj.value;
				}
				function Box(name, value){
					this.name = name;
					this.value = value;
				}
				var b1 = new Box("b1", 4);
				var b2 = new Box("b2", 1);
				var b3 = new Box("b3", 3);
				expect(_.min([b1, b2, b3], criterion)).toEqual(b2);
			});
			it("returns infinity if list is empty", function(){
				expect(_.min).toBeDefined();
				expect(_.min([])).toEqual(Infinity);
			});
		});
	});

	describe("sortBy", function(){
		describe("sort the list in ascending order", function(){
			function Box(name, value){
				this.name = name;
				this.value = value;
			}
			var b1 = new Box("b1", 4);
			var b2 = new Box("b2", 1);
			var b3 = new Box("b3", 3);
			it("list of numbers", function(){
				expect(_.sortBy).toBeDefined();
				expect(_.sortBy([3,5,1])).toEqual([1, 3, 5]);
			});
			it("list of objects with ranking function", function(){
				expect(_.sortBy).toBeDefined();
				function criterion(obj){
					return obj.value;
				}
				expect(_.sortBy([b1, b2, b3], criterion)).toEqual([b2, b3, b1]);
			});
			it("list of objects by property", function(){
				expect(_.sortBy).toBeDefined();
				expect(_.sortBy([b1, b2, b3], "value")).toEqual([b2, b3, b1]);
			});
		});
	});

	describe("groupBy", function(){
		describe("groups the collection in different sets based on a value", function(){
			function Fruit(color, size){
		  		this.color = color;
		  		this.size = size;
		  	}
			var apple = new Fruit("red", "medium");
			var orange = new Fruit("orange", "medium");
			var grape = new Fruit("red", "small");
			it("list of numbers", function(){
				expect(_.groupBy).toBeDefined();
				expect(_.groupBy([1,1,3,3,5])).toEqual({1: [1, 1], 3: [3, 3], 5: [5]});
			});
			it("list of objects with ranking function", function(){
				expect(_.groupBy).toBeDefined();
				function criterion(obj){
					return obj.color;
				}
				expect(_.groupBy([apple, orange, grape], criterion)).toEqual({"red": [apple, grape], "orange" : [orange]});
			});
			it("list of objects by property", function(){
				expect(_.groupBy).toBeDefined();
				expect(_.groupBy([apple, orange, grape], "color")).toEqual({red:[apple, grape], orange:[orange]});
			});
		});
	});

	describe("indexBy", function(){
		describe("groupBy where each group only have one element", function(){
			function Fruit(name){
		  		this.name = name;
		  	}
			var apple = new Fruit("apple");
			var orange = new Fruit("orange");
			var grape = new Fruit("grape");
			var fruits = [apple, orange, grape];
			it("list of numbers", function(){
				expect(_.indexBy).toBeDefined();
				expect(_.indexBy([1,3,5])).toEqual({1: 1, 3: 3, 5: 5});
			});
			it("list of objects with ranking function", function(){
				expect(_.indexBy).toBeDefined();
				function criterion(obj){
					return obj.name;
				}
				expect(_.indexBy(fruits, criterion)).toEqual({apple: apple, orange: orange, grape: grape});
			});
			it("list of objects by property", function(){
				expect(_.indexBy).toBeDefined();
				expect(_.indexBy(fruits, "name")).toEqual({apple: apple, orange: orange, grape: grape});
			});
			it("list with multiple elements per group, in this case, the last elements with the key is returned for each key", function(){
				expect(_.indexBy).toBeDefined();
				function Info(key, value){
					this.key = key;
					this.value = value;
				}
				var i1 = new Info(1, 1);
				var i2 = new Info(1, 2);
				var i3 = new Info(2, 1);
				var i4 = new Info(2, 2);
				var i5 = new Info(3, 1);
				var i6 = new Info(3, 2);

				expect(_.indexBy([i1, i2, i3, i4, i5, i6], "key")).toEqual({1: i2, 2: i4, 3: i6});
			});
		});
	});

	describe("countBy", function(){
		describe("similar to groupBy, but returns element count instead of elements", function(){
			function Fruit(color, size){
		  		this.size = size;
		  		this.color = color;
		  	}
			var apple = new Fruit("red", "medium");
			var orange = new Fruit("orange", "medium");
			var grape = new Fruit("red", "small");
			var fruits = [apple, orange, grape];
			it("list of numbers", function(){
				expect(_.countBy).toBeDefined();
				expect(_.countBy([1, 1, 3, 3, 5, 5])).toEqual({1: 2, 3: 2, 5: 2});
			});
			it("list of objects with ranking function", function(){
				expect(_.countBy).toBeDefined();
				function criterion(obj){
					return obj.color;
				}
				expect(_.countBy(fruits, criterion)).toEqual({red:2, orange:1});
			});
			it("list of objects by property", function(){
				expect(_.countBy).toBeDefined();
				expect(_.countBy(fruits, "color")).toEqual({red:2, orange:1});
			});
			it("list of objects by inner property", function(){
				expect(_.countBy).toBeDefined();
				var a = {color: {level: 1}};
				var b = {color: {level: 1}};
				var c = {color: {level: 1}};
				expect(_.countBy([a, b, c], "color.level")).toEqual({undefined: 3})
				var a = {"color.level": 1};
				var b = {"color.level": 1};
				var c = {"color.level": 1};
				expect(_.countBy([a, b, c], "color.level")).toEqual({1: 3})
			});
		});
	});

	describe("shuffle", function(){
		it("shuffles the list using Fisher-Yates shuffle", function(){
			expect(_.shuffle).toBeDefined();
			var array = [1,2,3,4,5,6];
			expect(_.shuffle(array)).not.toEqual(array);
		});
	});

	describe("sample", function(){
		it("samples n random itens from the list", function(){
			expect(_.sample).toBeDefined();
			expect(_.contains).toBeDefined();
			var array = [1,2,3,4,5,6];
			function criterion(element){
				return _.contains(array, element);
			}
			expect(_.every(_.sample(array, 4), criterion)).toBe(true);
		});

		it("samples a random item from the list", function(){
			expect(_.sample).toBeDefined();
			expect(_.contains).toBeDefined();
			var array = [1,2,3,4,5,6];
			expect(_.contains(array, _.sample(array))).toBe(true);
		});
	});

	describe("toArray", function(){
		it("should create an array over iterative element", function(){
			expect(_.toArray).toBeDefined();
			expect((function(){
				return _.toArray(arguments);
			})(1, 2, 3, 4)).toEqual([1,2,3,4]);
		});
	});

	describe("size", function(){
		it("returns the size of the list", function(){
			expect(_.size).toBeDefined();
			expect(_.size([1,2,3,4])).toEqual(4);
		});
	});

	describe("partition", function(){
		it("divide list in elements that satisfy or not the predicate", function(){
			expect(_.partition).toBeDefined();
			function predicate(element){
				return element%2==0;
			}
			expect(_.partition([1,2,3,4,5,6], predicate)).toEqual([[2,4,6], [1,3,5]]);
		});
	});
});