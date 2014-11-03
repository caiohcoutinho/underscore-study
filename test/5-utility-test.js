describe("utility functions", function(){
	describe("multiple functions with diverse utilities", function(){
		describe("noConflict", function(){
			it("gives back _ to it's previous owner", function(){
				expect(_).toBeDefined();
				expect(_.noConflict).toBeDefined();
				var underscore = _.noConflict();
				expect(underscore.noConflict()).toBeDefined();
				expect(_).not.toBeDefined();
				expect(_).not.toEqual(underscore);
				_ = underscore;
			});
		});

		describe("identity", function(){
			it("returns its first argument", function(){
				expect(_.identity).toBeDefined();
				var a = "a";
				expect(_.identity(a)).toEqual(a);
			});
		});

		describe("constant", function(){
			it("creates a functions that returns the same value regardless of the arguments", function(){
				expect(_.constant).toBeDefined();
				var a = "a";
				var cons = _.constant(a);
				expect(cons("args")).toBe(a);
			});
		});

		describe("noop", function(){
			it("creates a functions that returns undefined regardless of the arguments", function(){
				expect(_.noop).toBeDefined();
				expect(_.noop('a')).not.toBeDefined();
			});
		});

		describe("times", function(){
			it("calls a function n times with i as index", function(){
				expect(_.times).toBeDefined();
				expect(_.identity).toBeDefined();
				expect(_.times(4, _.identity)).toEqual([0,1,2,3]);
			});
		});

		describe("random", function(){
			it("returns a random number between a and b", function(){
				expect(_.random).toBeDefined();
				var min = 3;
				var max = 513;
				_(10000).times(function(){
					var random = _.random(min, max);
					expect(random).toBeLessThan(max+1);
					expect(random).toBeGreaterThan(min-1);
				});
			});
			it("if b is not defined, return random numbers from 0 to a", function(){
				expect(_.random).toBeDefined();
				var max = 217;
				_(10000).times(function(){
					var random = _.random(max);
					expect(random).toBeLessThan(max+1);
					expect(random).toBeGreaterThan(-1);
				});
			});
		});

		describe("mixin", function(){
			it("extends underscore with new features", function(){
				expect(_.mixin).toBeDefined();
				expect(_.times).toBeDefined();
				var sumOne = function(number){
					return number+1;
				};
				_.mixin({sumOne: sumOne});
				expect(_(3).times(_.sumOne)).toEqual([1,2,3]);
				delete _.sumOne;
				expect(_.sumOne).not.toBeDefined();
			});
		});

		describe("iteratee", function(){
			describe("it's the function that based on the parameter, creates many forms of iteratees", function(){
				it("can create a property acessor (similar to 'property' function)", function(){
					expect(_.iteratee).toBeDefined();
					expect(_.property).toBeDefined();
					var property = "a";
					var propertyAcessor = _.iteratee(property);
					var object = {a: 1};
					expect(propertyAcessor(object)).toEqual(_.property(property)(object));
				});
				it("can create a predicate matcher based on a where clause  (similar to 'matches' function)", function(){
					expect(_.iteratee).toBeDefined();
					expect(_.matches).toBeDefined();
					var p1 = "p1";
					var p2 = "p2";
					var clause = {p1: p1, p2: p2};
					var iterateeMatcher1 = _.iteratee(clause);
					var matchesMatcher = _.matches(clause);
					var object = {
						p1: p1,
						p2: p2,
						p3: "p3"
					}
					expect(iterateeMatcher1(object)).toEqual(matchesMatcher(object));
				});
				it("can create a function that calls a function on the object", function(){
					expect(_.iteratee).toBeDefined();
					var a = {a: 1};
					var func = function(obj){
						return 2*obj.a;
					};
					var caller = _.iteratee(func);
					expect(caller(a)).toEqual(func(a));
				});
			});
		});

		describe("uniqueId", function(){
			it("generates random unique ids to use on client models", function(){
				expect(_.uniqueId).toBeDefined();
				expect(_.contains).toBeDefined();
				var ids = [];
				_(1000).times(function(){
					var id = _.uniqueId();
					expect(_.contains(ids, id)).toBe(false);
					ids.push(id);
				});
			});
		});

		describe("escape", function(){
			it("escape strings to HTML", function(){
				expect(_.escape).toBeDefined();
				expect(_.escape("&<>\"\'")).toEqual("&amp;&lt;&gt;&quot;&#x27;");
			});
		});

		describe("unescape", function(){
			it("unescape strings to HTML", function(){
				expect(_.unescape).toBeDefined();
				expect(_.unescape("&amp;&lt;&gt;&quot;&#x27;")).toEqual("&<>\"\'");
			});
			it("undos escape function", function(){
				expect(_.escape).toBeDefined();
				expect(_.unescape).toBeDefined();
				var string = "&<>\"\'";
				expect(_.unescape(_.escape(string))).toEqual(string);
			});
		});

		describe("result", function(){
			it("returns an property or call a function of the object", function(){
				expect(_.result).toBeDefined();
				var obj = {prop: "prop", func: function(){
					return this.prop + "2";
				}};
				expect(_.result(obj, "prop")).toEqual("prop");
				expect(_.result(obj, "func")).toEqual("prop2");
			});
		});

		describe("now", function(){
			it("gets the current time in millis", function(){
				expect(_.now).toBeDefined();
				var n1 = _.now();
				expect(n1).toBeGreaterThan(1415016047169);
			});
		});

		describe("template", function(){
			describe("is a powerfull tool to render html using json data", function(){
				it("can print variables into the template", function(){
					expect(_.template).toBeDefined();
					var template = "<span><%= value%></span>";
					var obj = {value: "yes"};
					var func = _.template(template);
					expect("<span>yes</span>").toEqual(func(obj));
				});
				it("can print escaped variables into the template", function(){
					expect(_.template).toBeDefined();
					var template = "<span><%- value%></span>";
					var obj = {value: "<yes>"};
					var func = _.template(template);
					expect("<span>&lt;yes&gt;</span>").toEqual(func(obj));
				});
				describe("has lots of options", function(){
					it("can pass the context as a variable, wich improves render speed", function(){
						expect(_.template).toBeDefined();
						var template = "<span><%= data.value%></span>";
						var obj = {value: "yes"};
						var func = _.template(template, {variable: 'data'});
						expect("<span>yes</span>").toEqual(func(obj));
					});
				})
			});
		})
	});
});