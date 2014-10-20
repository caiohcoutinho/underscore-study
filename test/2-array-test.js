describe("array functions", function() {
  	describe("first", function(){
  		it("don't work on sparse arrays", function() {
	    	expect(_.first).toBeDefined();
	    	var a = [];
	    	a[1] = "a";
	    	a[2] = "b";
	    	expect(_.first(a)).not.toBeDefined();
	  	});  
	  	it("works on empty arrays", function(){
	  		expect(_.first).toBeDefined();
	  		expect(_.first([])).not.toBeDefined();
	  	});
	  	it("returns the first element of the array", function(){
	  		expect(_.first).toBeDefined();
	  		expect(_.first([1,2])).toEqual(1);
	  	});
	  	it("returns the firts n elements of the array", function(){
	  		expect(_.first).toBeDefined();
	  		expect(_.first([1,2, 3, 4], 3)).toEqual([1,2,3]);
	  	});
  	});

  	describe("initial", function(){
  		describe("returns an array with all the elements except for the n last", function(){
  			it("dont work on sparse arrays", function(){
  				expect(_.initial).toBeDefined();
		    	var a = [];
	    		a[0] = 0;
	    		a[1] = 1;
	    		a[4] = 4;
  				expect(_.initial(a)).toEqual([0,1,undefined, undefined]);
  			});
  			it("returns all but last element", function(){
  				expect(_.initial).toBeDefined();
  				expect(_.initial([0,1,2,3,4])).toEqual([0,1,2,3]);
  			});
  			it("returns all but last n elements", function(){
  				expect(_.initial).toBeDefined();
  				expect(_.initial([0,1,2,3,4], 3)).toEqual([0,1]);
  			});
  		});
  	});

  	describe("last", function(){
  		describe("returns the last n elements of the array", function(){
  			it("dont work on sparse arrays", function(){
  				expect(_.last).toBeDefined();
  				var a = [];
	    		a[0] = 0;
	    		a[1] = 1;
	    		a[3] = 3;
	    		a[5] = 5;
	    		delete a[5];
  				expect(_.last(a)).not.toBeDefined();
  			});
  			it("return the last element", function(){
  				expect(_.last).toBeDefined();
  				expect(_.last([0,1,2])).toEqual(2);
  			});
  			it("return the last n elements", function(){
  				expect(_.last).toBeDefined();
  				expect(_.last([0,1,2], 2)).toEqual([1,2]);
  			});
  		});
  	});

  	describe("rest", function(){
  		describe("returns the elements after the index", function(){
  			it("dont work on sparse arrays", function(){
  				expect(_.rest).toBeDefined();
  				var a = [];
  				a[0] = 0;
	    		a[1] = 1;
	    		a[3] = 3;
	    		expect(_.rest(a,1)).toEqual([1, undefined, 3]);
  			});
  			it("return elements after the index", function(){
  				expect(_.rest).toBeDefined();
  				expect(_.rest([0,1,2], 1)).toEqual([1,2]);
  			});
  		});
  	});

  	describe("compact", function(){
  		describe("returns a copy of the array without falsy values: NaN, false, null, 0, '' and undefined.", function(){
  			it("looks like it works on sparse arrays", function(){
  				expect(_.compact).toBeDefined();
  				var a = [];
  				a[0] = 0;
	    		a[1] = 1;
	    		a[3] = 3;
	    		expect(_.compact(a)).toEqual([1,3]);
  			});
  			it("removes falsy values", function(){
  				expect(_.compact).toBeDefined();
				var a = [0, 1, false, 2, '', 3];
				expect(_.compact(a)).toEqual([1,2,3]);
  			});
  		});
  	});

  	describe("flatten", function(){
  		describe("makes nested arrays to be a single level", function(){
  			it("dont work on sparse arrays", function(){
  				expect(_.flatten).toBeDefined();
  				var a = [];
  				a[0] = 0;
	    		a[1] = 1;
	    		a[3] = 3;
	    		expect(_.flatten(a)).toEqual([0,1,undefined,3]);
  			});
  			it("deep flatten", function(){
  				expect(_.flatten).toBeDefined();
  				expect(_.flatten([0,[0],[[0]],[[[0]]]])).toEqual([0,0,0,0]);
  			});
  			it("shallow flatten", function(){
  				expect(_.flatten).toBeDefined();
  				expect(_.flatten([0,[0],[[0]],[[[0]]]], true)).toEqual([0,0,[0],[[0]]]);
  			});
  		});
  	});

  	describe("without", function(){
  		describe("returns the array without selected values", function(){
  			it("dont work on sparse arrays", function(){
  				expect(_.without).toBeDefined();
  				var a = [];
  				a[0] = 0;
	    		a[1] = 1;
	    		a[3] = 3;
	    		a[5] = 5;
	    		expect(_.without(a, 1, 3)).toEqual([0, undefined, undefined, 5]);
  			});
  			it("remove selected values", function(){
  				expect(_.without).toBeDefined();
  				expect(_.without([0,1,2,3,4], 1, 3)).toEqual([0,2,4]);
  			});
  		});
  	});

  	describe("union", function(){
  		describe("set union of uniques in order of apresentation", function(){
  			it("dont work on sparse arrays", function(){
  				expect(_.union).toBeDefined();
  				var a = [];
  				a[0] = 0;
  				a[1] = 1;
  				a[3] = 3;
  				a[5] = 5;
  				var b = [];
  				b[0] = 0;
  				b[1] = 1;
  				b[3] = 3;
  				b[5] = 5;
  				expect(_.union(a,b)).toEqual([0,1,undefined,3,5]);
  			});
  			it("unites arrays", function(){
  				expect(_.union).toBeDefined();
  				expect(_.union([0,1,2],[1,3],[2,3])).toEqual([0,1,2,3])
  			});
  		});
  	});

});
