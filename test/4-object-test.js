describe("object", function(){
	describe("keys", function(){
		it("retrieve object keys", function(){
			expect(_.keys).toBeDefined();
			expect(_.keys([])).toEqual([]);
			expect(_.keys({a: 1, b: 2})).toEqual(['a', 'b']);
		});
	});

	describe("values", function(){
		it("retrieve object values", function(){
			expect(_.values).toBeDefined();
			expect(_.values([])).toEqual([]);
			expect(_.values({a: 1, b: 2, c: 1})).toEqual([1, 2, 1]);
		});
	});

	describe("pairs", function(){
		it("convert an object into a list of key-values", function(){
			expect(_.pairs).toBeDefined();
			expect(_.pairs([])).toEqual([]);
			expect(_.pairs({a: 1, b: 2, c: 1})).toEqual([["a", 1],["b", 2],["c", 1]]);
		});
	});

	describe("invert", function(){
		describe("transforns keys to values and values to keys", function(){
			it("works with serializable and unique values", function(){
				expect(_.invert).toBeDefined();
				expect(_.invert({a: 1, b:2, c: 3})).toEqual({1: 'a', 2: 'b', 3: 'c'});
			});
			it("dont work with non unique values", function(){
				expect(_.invert).toBeDefined();
				expect(_.invert({a: 1, b:2, c: 1})).toEqual({1: 'c', 2: 'b'});
			});
			it("dont work with non serializable values", function(){
				expect(_.invert).toBeDefined();
				expect(_.invert({a: 1, b:2, c: 1})).toEqual({1: 'c', 2: 'b'});
			});
		});
	});

	describe("functions", function(){
		it("list object function names", function(){
			expect(_.functions).toBeDefined();
			var obj = {
				a: function(){},
				b: function(){},
				c: function(){},
				d: 'd',
				e: 1
			};
			expect(_.functions(obj)).toEqual(['a', 'b', 'c']);
		});
	});

	describe("extend", function(){
		it("copies properties from sources to destination", function(){
			expect(_.extend).toBeDefined();
			var a = {
				a: 'a',
				b: 1,
				c: function(){}
			};
			var b = {
				a: 'b',
				b: 2,
				d: 'd'
			}
			_.extend(a, b);
			expect(a.a).toEqual('b');
			expect(a.b).toEqual(2);
			expect(a.d).toEqual('d');
		});
	});

	describe("pick", function(){
		describe("filters object values", function(){
			it("filters by whitelist", function(){
				expect(_.pick).toBeDefined();
				var a = {
					a: 'a',
					b: 1,
					c: function(){}
				};
				expect(_.pick(a, 'a', 'b')).toEqual({
					a: 'a',
					b: 1
				})
			});
			it("filters by criterion", function(){
				expect(_.pick).toBeDefined();
				var a = {
					a: 'a',
					b: 1,
					c: 2,
				};
				expect(_.pick(a, function(value, key, object){
					return _.isNumber(value);
				})).toEqual({
					b: 1,
					c: 2,
				});
			});
		});
	});

	describe("omit", function(){
		describe("just like pick, but returns only not selected properties", function(){
			it("filters by blacklist", function(){
				expect(_.omit).toBeDefined();
				var a = {
					a: 'a',
					b: 1,
					c: 'c'
				};
				expect(_.omit(a, 'a', 'b')).toEqual({
					c: 'c'
				})
			});
			it("filters by criterion", function(){
				expect(_.omit).toBeDefined();
				var a = {
					a: 'a',
					b: 1,
					c: 2,
				};
				expect(_.omit(a, function(value, key, object){
					return _.isNumber(value);
				})).toEqual({
					a: 'a'
				});
			})
		})
	});

	describe("defaults", function(){
		it("fills object's undefined properties based on a default object", function(){
			expect(_.defaults).toBeDefined();
			var def1 = {
				a: 'a',
				b: 'b'
			};
			var def2 = {
				b: 1,
				c: 'c'
			};
			var a = {
				a: 1,
				d: 'd'
			};
			expect(_.defaults(a, def1, def2)).toEqual({
				a: 1,
				b: 'b',
				c: 'c',
				d: 'd'
			});
		});
	});

	describe("clone", function(){
		it("crates a shallow copy of an object. Objects and arrays are copied by reference.", function(){
			expect(_.clone).toBeDefined();
			var b = {
				b: '1',
			};
			var array = [0,1,2,3];
			var a = {
				a: array,
				b: b,
				c: 1,
				d: 'd'
			};
			var clone = _.clone(a);
			expect(clone).toBeDefined();
			expect(clone.a).toBe(array);
			expect(clone.b).toBe(b);
			expect(clone.c).toBe(a.c);
			expect(clone.d).toBe(a.d);
		})
	});

	describe("tap", function(){
		xit("used inside chains. Call a function using object as parameter", function(){
			expect(_.tap).toBeDefined();
		});
	});

	describe("has", function(){
		it("returns true if object has property with given name", function(){
			expect(_.has).toBeDefined();
		});
	});

	describe("property", function(){
		it("creates a function that returns the property of an object", function(){
			expect(_.property).toBeDefined();
			expect(_.property('name')({name: 'blah'})).toEqual('blah');
		});
	});

	describe("matches", function(){
		it("creates a predicate function that returns true if object has all the value/properties passed in", function(){
			expect(_.matches).toBeDefined();
			var matcher = _.matches({a:'a', b: 'b'});
			expect(matcher({a:'a', 'b': 'b'})).toBe(true);
			expect(matcher({a:'a', b: 'b'})).toBe(true);
			expect(matcher({b: 'b'})).toBe(false);
			expect(matcher({a: 'a', b: 'b', c: 1})).toBe(true);
			expect(matcher({'a': 'a', c: 1})).toBe(false);
		});
		it("applying matches to a filter function, render the same result as using the 'where' function", function(){
			expect(_.matches).toBeDefined();
			expect(_.filter).toBeDefined();
			expect(_.where).toBeDefined();
			var clause = {
				a: 'a',
				b: 1,
			};
			function Block(a, b){
				this.a = a;
				this.b = b;
			};
			var b1 = new Block('a', 1);
			var b2 = new Block('a', 'b');
			var b3 = new Block(2, 1);
			var b4 = new Block('a', 1);
			var array = [b1, b2, b3, b4];
			var matcher = _.matches(clause);
			expect(_.filter(array, matcher)).toEqual(_.where(array, clause));
		});
	});

	describe("isEqual", function(){
		it("deep compares two objects", function(){
			expect(_.isEqual).toBeDefined();
			expect(_.clone).toBeDefined();
			var moe   = {name: 'moe', luckyNumbers: [13, 27, 34]};
			var clone = {name: 'moe', luckyNumbers: [13, 27, 34]};
			expect(_.isEqual(moe, clone)).toBe(true);
			expect(moe.luckyNumbers).not.toBe(clone.luckyNumbers);
			expect(moe===clone).toBe(false);
			expect(moe==clone).toBe(false);

			clone = _.clone(moe);
			expect(moe.luckyNumbers).toBe(clone.luckyNumbers);
			expect(_.isEqual(moe, clone)).toBe(true);
			expect(moe===clone).toBe(false);
			expect(moe==clone).toBe(false);
		});
	});
	
	describe("isSomething functions", function(){
		describe("functions that test if argument is of specific category", function(){

			var emptyArray = [];
			var emptyObject = {};
			var emptyString = "";
			var notEmptyArray = [1];
			var notEmptyObject = {a: 1};
			var notEmptyString = "a";
			var number1 = 5;
			var number2 = 5.1;
			var infinity = Infinity;
			var negativeInfinity = -Infinity;
			var stringNumber1 = '5';
			var stringNumber2 = '5.1';
			var theTrue = true;
			var theFalse = false;
			var date = new Date();
			var func = function(){
				alert('called');
			};
			var element = document.createElement('div');
			var args = arguments;
			var regex = /example/i;
			var nan = NaN;
			var theNull = null;
			var theUndefined = undefined;
			var array = [
				emptyArray, emptyObject, emptyString,
				notEmptyArray, notEmptyObject, notEmptyString,
				number1, number2, stringNumber1, stringNumber2,
				theTrue, theFalse, date,
				infinity, negativeInfinity, 
				func, element, args, regex, nan,
				theNull, theUndefined
			];		

			describe("isEmpty", function(){
				it("returns if an enumerable is empty", function(){
					expect(_.isEmpty).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isEmpty)).toEqual([
						emptyArray, emptyObject, emptyString,
						number1, number2, theTrue, theFalse, date, 
						infinity, negativeInfinity,
						func, args, regex, nan, theNull, theUndefined
					]);
				});
			});

			describe("isElement", function(){
				it("returns if the object is a dom element", function(){
					expect(_.isElement).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isElement)).toEqual([
						element
					]);
				});
			});

			describe("isArray", function(){
				it("returns if the object is an array", function(){
					expect(_.isArray).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isArray)).toEqual([
						emptyArray, notEmptyArray
					]);
				});
			});

			describe("isObject", function(){
				it("returns if the object is an object", function(){
					expect(_.isObject).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isObject)).toEqual([
						emptyArray, emptyObject,
						notEmptyArray, notEmptyObject,
						date, 
						func, element, args, regex
					]);
				});
			});

			describe("isArguments", function(){
				it("returns if the object is the arguments object", function(){
					expect(_.isArguments).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isArguments)).toEqual([
						args
					]);
				});
			});

			describe("isFunction", function(){
				it("returns if the object is a function", function(){
					expect(_.isFunction).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isFunction)).toEqual([
						func
					]);
				});
			});

			describe("isString", function(){
				it("returns if the object is a string", function(){
					expect(_.isString).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isString)).toEqual([
						emptyString, notEmptyString,
						stringNumber1, stringNumber2
					]);
				});
			});

			describe("isNumber", function(){
				it("returns if the object is a number", function(){
					expect(_.isNumber).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isNumber)).toEqual([
						number1, number2,
						infinity, negativeInfinity,
						nan
					]);
				});
			});

			describe("isFinite", function(){
				it("returns if the object is finite", function(){
					expect(_.isFinite).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isFinite)).toEqual([
						notEmptyArray, 
						number1, number2,
						stringNumber1, stringNumber2
					]);
				});
			});

			describe("isBoolean", function(){
				it("returns if the object is a boolean", function(){
					expect(_.isBoolean).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isBoolean)).toEqual([
						theTrue, theFalse
					]);
				});
			});

			describe("isDate", function(){
				it("returns if the object is a date", function(){
					expect(_.isDate).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isDate)).toEqual([
						date
					]);
				});
			});

			describe("isRegExp", function(){
				it("returns if the object is a regex", function(){
					expect(_.isRegExp).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isRegExp)).toEqual([
						regex
					]);
				});
			});

			describe("isNaN", function(){
				it("returns if the object is not a number", function(){
					expect(_.isNaN).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isNaN)).toEqual([
						nan
					]);
				});
			});

			describe("isNull", function(){
				it("returns if the object is not a number", function(){
					expect(_.isNull).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isNull)).toEqual([
						theNull
					]);
				});
			});

			describe("isUndefined", function(){
				it("returns if the object is not a number", function(){
					expect(_.isUndefined).toBeDefined();
					expect(_.filter).toBeDefined();

					expect(_.filter(array, _.isUndefined)).toEqual([
						theUndefined
					]);
				});
			});

		});
	});

	
});
