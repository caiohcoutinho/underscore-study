describe("functions", function(){
	describe("bind", function(){
		describe("bind a function to an object so that when the function is called, this references the object", function(){
			it("works without arguments", function(){
				expect(_.bind).toBeDefined();
				var getValue = function(sum){
					return this.value + sum;
				}
				var obj = {
					value: 3
				};
				expect(_.bind(getValue, obj)(2)).toEqual(5);
			});
			it("works with partial application", function(){
				expect(_.bind).toBeDefined();
				var getValue = function(sum1, sum2, sum3){
					return this.value + sum1 + sum2 + sum3;
				}
				var obj = {
					value: 1
				};
				expect(_.bind(getValue, obj, 2, 3)(4)).toEqual(10);
			});
		});
	});

	describe("bindAll", function(){
		describe("binds an object's function to it, preventing the function to be called with another context", function(){
			it("binds many functions at once", function(){
				expect(_.bindAll).toBeDefined();
				var value = 5;
				var obj = {
					value: value,
					getValue: function(){
						return this.value;
					},
					getOtherValue: function(){
						return 2*this.value;
					}
				};
				expect(obj.getValue.call({})).not.toBeDefined();
				expect(obj.getOtherValue.call({})).toEqual(NaN);
				_.bindAll(obj, "getValue", "getOtherValue");
				expect(obj.getValue.call({})).toEqual(value);
				expect(obj.getOtherValue.call({})).toEqual(2*value);
			});
		});
	});

	describe("partial", function(){
		describe("partially fill a function's arguments", function(){
			it("works applying only some arguments", function(){
				expect(_.partial).toBeDefined();
				function code(a, b, c){
					return "A"+a+"B"+b+"C"+c;
				};
				var newCode = _.partial(code, 1, 2);
				expect(newCode(3)).toEqual("A1B2C3");
			});
			it("works applying only all arguments", function(){
				expect(_.partial).toBeDefined();
				function code(a, b, c){
					return "A"+a+"B"+b+"C"+c;
				};
				var newCode = _.partial(code, 1, 2, 3);
				expect(newCode()).toEqual("A1B2C3");
			});
			it("can apply arguments in any order", function(){
				expect(_.partial).toBeDefined();
				function code(a, b, c, d){
					return "A"+a+"B"+b+"C"+c+"D"+d;
				};
				var newCode = _.partial(code, _, _, 3, 4);
				expect(newCode(1,2)).toEqual("A1B2C3D4");
			});
		});
	});

	describe("memoize", function(){
		describe("caches the result of a function using its parameters", function(){
			it("does not call the original function twice", function(){
				var statefull = (function(){
					var i = 0;
					return function(){
						return i++;
					}
				})();
				expect(statefull()).toEqual(0);
				expect(statefull()).toEqual(1);
				expect(statefull()).toEqual(2);
				var cached = _.memoize(statefull);
				expect(cached()).toEqual(3);
				expect(cached()).toEqual(3);
				expect(cached()).toEqual(3);
			});
			it("cache by parameter hash", function(){
				var statefull = (function(){
					var i = 0;
					var j = 0;
					return function(index){
						if(index==0){
							return i++;
						}
						return j++;
					}
				})();
				expect(statefull(0)).toEqual(0);
				expect(statefull(0)).toEqual(1);
				expect(statefull(0)).toEqual(2);
				expect(statefull(0)).toEqual(3);
				expect(statefull(0)).toEqual(4);
				expect(statefull(1)).toEqual(0);
				expect(statefull(1)).toEqual(1);
				expect(statefull(1)).toEqual(2);
				var cached = _.memoize(statefull);
				expect(cached(0)).toEqual(5);
				expect(cached(0)).toEqual(5);
				expect(cached(0)).toEqual(5);
				expect(cached(1)).toEqual(3);
				expect(cached(1)).toEqual(3);
				expect(cached(1)).toEqual(3);
			});
			it("accepts hashfunction", function(){
				expect(_.memoize).toBeDefined();
				var statefull = (function(){
					var i = 0;
					var j = 0;
					return function(index){
						if(index==0){
							return i++;
						}
						return j++;
					}
				})();
				var hashFunction = function(){
					return 0;
				}
				expect(statefull(0)).toEqual(0);
				expect(statefull(0)).toEqual(1);
				expect(statefull(0)).toEqual(2);
				expect(statefull(0)).toEqual(3);
				expect(statefull(0)).toEqual(4);
				expect(statefull(1)).toEqual(0);
				expect(statefull(1)).toEqual(1);
				expect(statefull(1)).toEqual(2);
				var cached = _.memoize(statefull, hashFunction);
				expect(cached(0)).toEqual(5);
				expect(cached(0)).toEqual(5);
				expect(cached(0)).toEqual(5);
				expect(cached(1)).toEqual(5);
				expect(cached(1)).toEqual(5);
				expect(cached(1)).toEqual(5);
			});
			it("improves performance", function(){
				expect(_.memoize).toBeDefined();
				var fibonacci = function(n){
					return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
				};

				var slowStart = _.now();
				expect(fibonacci(30)).toEqual(832040);
				var slowEnd = _.now();

				fibonacci = _.memoize(fibonacci);
				var fastStart = _.now();
				expect(fibonacci(10000)).toEqual(Infinity);
				var fastEnd = _.now();
				expect(slowEnd - slowStart).toBeGreaterThan(fastEnd - fastStart);
			});
		});
	});

	describe("TODO: timed function require a specific file with time tratatives", function(){
		describe("delay", function(){
			xit("just like setTimeout", function(){
				expect(_.delay).toBeDefined();
				expect(_.now).toBeDefined();
				var time = 1000;
				var start = _.now();
				var a = 0;
				var newValue = 1;
				_.delay(function(){
					a = newValue;
				}, time);
				var end = _.now();
				expect(end-start).toBeGreaterThan(time);
				expect(a).toEqual(newValue);
			});
		});

		describe("defer", function(){
			xit("delays execution when stack is over", function(){
				expect("this test").toBe("easier to write =/");
			})
		});

		describe("throttle", function(){
			xit("creates a function that can be executed at most n times per seconde. Great for graphics!", function(){
				expect("this test").toBe("run at another envyronmnent");
			})
		});

		describe("debounce", function(){
			xit("creates a function that delays its execution to n millis after its last execution", function(){
				expect("this test").toBe("run at another envyronmnent");
			});
			xit("immediate parameter makes the function execute now, and postpone the next execution", function(){
				expect("this test").toBe("run at another envyronmnent");
			});
		});
	});
	
	describe("once", function(){
		it("makes a function that can only be called once. If called again, will return the last result", function(){
			expect(_.once).toBeDefined();
			var run = (function(){
				var i = 0;
				return function(){
					return i++;
				};
			})()
			expect(run()).toEqual(0);
			expect(run()).toEqual(1);
			var runOnce = _.once(run);
			expect(runOnce()).toEqual(2);
			expect(runOnce()).toEqual(2);
			expect(runOnce()).toEqual(2);
		})
	});

	describe("after", function(){
		it("makes a function thats only called when called n times.", function(){
			expect(_.after).toBeDefined();
			var run = (function(){
				var i = 0;
				return function(){
					return i++;
				};
			})()
			expect(run()).toEqual(0);
			expect(run()).toEqual(1);
			var runAfter3 = _.after(3, run);
			expect(runAfter3()).not.toBeDefined();
			expect(runAfter3()).not.toBeDefined();
			expect(runAfter3()).toEqual(2);
			expect(runAfter3()).toEqual(3);
			expect(runAfter3()).toEqual(4);
		});
	});

	describe("before", function(){
		it("makes a function thats only called n times. After n, the last result is returned", function(){
			expect(_.before).toBeDefined();
			var run = (function(){
				var i = 0;
				return function(){
					return i++;
				};
			})()
			expect(run()).toEqual(0);
			expect(run()).toEqual(1);
			var runAfter3 = _.before(3, run);
			expect(runAfter3()).toEqual(2);
			expect(runAfter3()).toEqual(3);
			expect(runAfter3()).toEqual(3);
		});
	});	

	describe("wrap", function(){
		it("wraps the function inside another function", function(){
			expect(_.wrap).toBeDefined();
			var say = function(text){
				return text;
			};
			var append = function(func, text){
				return text +" "+ func("World!");
			};
			var wrap = _.wrap(say, append);
			expect(wrap("Hello")).toEqual("Hello World!");
		});
	});

	describe("negate", function(){
		it("creates a function that negates the predicate", function(){
			expect(_.negate).toBeDefined();
			var alwaysTrue = function(){
				return true;
			};
			expect(_.negate(alwaysTrue)()).toBe(false);
		});
	});

	describe("compose", function(){
		it("mathematical composition of functions", function(){
			expect(_.compose).toBeDefined();
			var times = function(number){
				return 3*number;
			};
			var sum = function(number){
				return number + 3;
			};
			var square = function(number){
				return number * number;
			};
			var composition = _.compose(square, sum, times);
			expect(composition(0)).toEqual(9);
			expect(composition(1)).toEqual(36);
			expect(composition(2)).toEqual(81);
		})
	});
});


