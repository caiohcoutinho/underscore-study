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

    describe("intersection", function(){
      describe("set intersection of uniques in order of apresentation", function(){
        it("dont work on sparse arrays", function(){
          expect(_.intersection).toBeDefined();
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
          expect(_.intersection(a,b)).toEqual([0,1,undefined,3,5]);
        });
        it("intersects arrays", function(){
          expect(_.intersection).toBeDefined();
          expect(_.intersection([0,1,2],[1,3],[1, 2,3])).toEqual([1])
        });
      });
    });

    describe("difference", function(){
      describe("similar to without, but receives arrays instead of single values", function(){
        it("dont work on sparse arrays", function(){
          expect(_.difference).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 3;
          a[5] = 5;
          var b = [];
          b[0] = 0;
          b[1] = 1;
          expect(_.difference(a,b)).toEqual([undefined, 3, undefined, 5]);
        });
        it("calculates set difference", function(){
          expect(_.difference).toBeDefined();
          expect(_.difference([0,1,2,3,4],[0,1],[3,4])).toEqual([2]);
        });
      });
    });

    describe("uniq", function(){
      describe("create an array only with the uniques of the array", function(){
        it("dont work on sparse arrays", function(){
          expect(_.uniq).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 0;
          a[4] = 1;
          expect(_.uniq(a)).toEqual([0,1,undefined]);
        });
        it("uses === to test uniqueness", function(){
          expect(_.uniq).toBeDefined();
          expect(_.uniq([0,1,0,1,0,1])).toEqual([0,1]);
        });
        it("uses a default function to test uniqueness", function(){
          expect(_.uniq).toBeDefined();
          function criterion(number){
            return number%2;
          }
          expect(_.uniq([0,1,2,3,4,5], false, criterion)).toEqual([0,1]);
        });
        it("can receive a flag that means the array is sorted", function(){
          expect(_.uniq).toBeDefined();
          expect(_.uniq([0,0,0,1,1,1], true)).toEqual([0,1]);
        });
        it("dont work on unsorted arrays if you pass the sorted flag", function(){
          expect(_.uniq).toBeDefined();
          expect(_.uniq([0,0,0,1,1,1,0], true)).toEqual([0,1,0]);
        });
      });
    });

    describe("zip", function(){
      describe("create an array that merges information from multiple arrays by index", function(){
        it("dont work on sparse arrays", function(){
          expect(_.zip).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 0;
          a[4] = 1;
          var b = [];
          b[0] = 0;
          b[1] = 1;
          b[3] = 0;
          b[4] = 1;
          expect(_.zip(a,b)).toEqual([[0,0],[1,1],[undefined,undefined],[0,0],[1,1]]);
        });
        it("work correctly on not sparse arrays", function(){
          expect(_.zip).toBeDefined();
          expect(_.zip([0,1,2,3,4],[0,1,2,3,4])).toEqual([[0,0],[1,1],[2,2],[3,3],[4,4]]);
        });
        it("can traspose matrizes", function(){
          expect(_.zip).toBeDefined();
          expect(_.zip.apply(_, [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]])).toEqual([[0,0,0,0],[1,1,1,1],[2,2,2,2],[3,3,3,3]]);
        });
      })
    });

    describe("zip", function(){
      describe("create an array that merges information from multiple arrays by index", function(){
        it("dont work on sparse arrays", function(){
          expect(_.zip).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 0;
          a[4] = 1;
          var b = [];
          b[0] = 0;
          b[1] = 1;
          b[3] = 0;
          b[4] = 1;
          expect(_.zip(a,b)).toEqual([[0,0],[1,1],[undefined,undefined],[0,0],[1,1]]);
        });
        it("work correctly on not sparse arrays", function(){
          expect(_.zip).toBeDefined();
          expect(_.zip([0,1,2,3,4],[0,1,2,3,4])).toEqual([[0,0],[1,1],[2,2],[3,3],[4,4]]);
        });
        it("can traspose matrizes", function(){
          expect(_.zip).toBeDefined();
          expect(_.zip.apply(_, [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]])).toEqual([[0,0,0,0],[1,1,1,1],[2,2,2,2],[3,3,3,3]]);
        });
      })
    });

    describe("object", function(){
      describe("creates an object based on key/values", function(){
        it("dont work on sparse arrays", function(){
          expect(_.object).toBeDefined();
          var a = [];
          a[0] = 'a';
          a[2] = 'b';
          var b = [];
          b[0] = 0;
          b[2] = 1;
          var obj = _.object(a, b);
          //expect(obj).toEqual({a:0, b:1});
          expect(_.has).toBeDefined();
          expect(_.has(obj, "undefined")).toBe(true);
        });
        it("works with key/value pairs", function(){
          expect(_.object).toBeDefined();
          expect(_.object([['a',0],['b',1],['c',2],['d',3]])).toEqual({a:0,b:1,c:2,d:3});
        });
        it("works with key array and value array", function(){
          expect(_.object).toBeDefined();
          expect(_.object(['a', 'b', 'c', 'd'], [0,1,2,3])).toEqual({a:0,b:1,c:2,d:3});
        });
        it("repeated keys are overwritten", function(){
          expect(_.object).toBeDefined();
          expect(_.object(['a', 'a', 'a', 'a'], [0,1,2,3])).toEqual({a:3});
        });
      });
    });

    describe("indexOf", function(){
      describe("find an element in the array", function(){
        it("dont work on sparse arrays", function(){
          expect(_.indexOf).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 3;
          a[4] = 4;
          expect(_.indexOf(a, undefined)).toEqual(2);
        });
        it("works correctly on dense arrays", function(){
          expect(_.indexOf).toBeDefined();
          expect(_.indexOf([8,6,4,3,5],4)).toEqual(2);
        })
        it("can be faster if array is sorted", function(){
          expect(_.indexOf).toBeDefined();
          expect(_.indexOf([0,1,2,3,4], 4, true)).toEqual(4);
        });
        it("breaks if array isn't sorted and the flag is true", function(){
          expect(_.indexOf).toBeDefined();
          expect(_.indexOf([4,3,2,3,4], 2, true)).toEqual(-1);
        });
        it("can receive an index to look only past that index", function(){
          expect(_.indexOf).toBeDefined();
          expect(_.indexOf([4,3,2,3,4], 4, 1)).toEqual(4);
        });
      });
    });

    describe("lastIndexOf", function(){
      describe("find the last appearence of the element in the array", function(){
        it("dont work on sparse arrays", function(){
          expect(_.lastIndexOf).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 0;
          a[4] = 1;
          expect(_.lastIndexOf(a, undefined)).toEqual(2);
        });
        it("work on dense arrays", function(){
          expect(_.lastIndexOf).toBeDefined();
          expect(_.lastIndexOf([0,1,0,1],1)).toEqual(3);
          expect(_.lastIndexOf([0,1,0,1],undefined)).toEqual(-1);
        });
        it("can receive an index to look only before the index", function(){
          expect(_.lastIndexOf).toBeDefined();
          expect(_.lastIndexOf([1, 2, 3, 1, 2, 3], 1, 1)).toEqual(0);
        });
      });
    });

    describe("sortedIndex", function(){
      describe("calculates the index you should insert an item to preserv the order", function(){
        it("apparently, work on sparse arrays", function(){
          expect(_.sortedIndex).toBeDefined();
          var a = [];
          a[0] = 0;
          a[1] = 1;
          a[3] = 3;
          a[6] = 6;
          expect(_.sortedIndex(a, 4)).toEqual(4);
        });
        it("can receive a function to calculate ranking", function(){
          expect(_.sortedIndex).toBeDefined();
          function criterion(number){
            return -number;
          }
          expect(_.sortedIndex([4,3,2,0], 1, criterion)).toEqual(3);
        });
        it("can receive a property name as ranking", function(){
          expect(_.sortedIndex).toBeDefined();
          function Box(value, rank){
            this.value = value;
            this.rank = rank;
          }
          expect(_.sortedIndex([new Box(0,4),new Box(1,3),new Box(3,1), new Box(4,0)], new Box(2,2), "value")).toEqual(2);
        });
        it("breks if arrays is not sorted", function(){
          expect(_.sortedIndex).toBeDefined();
          expect(_.sortedIndex([4,3,1,0], 2)).toEqual(4);
        });
      });
    })

    describe("range", function(){
      describe("creates a list of integers based on start, stop and step", function(){
        it("default is start 0 and step 1", function(){
          expect(_.range).toBeDefined();
          expect(_.range(4)).toEqual([0,1,2,3]);
        });
        it("can receive start", function(){
          expect(_.range).toBeDefined();
          expect(_.range(2,4)).toEqual([2,3]);
        });
        it("can receive step", function(){
          expect(_.range).toBeDefined();
          expect(_.range(2, 10, 2)).toEqual([2,4,6,8]);
        });
        it("can receive negative step", function(){
          expect(_.range).toBeDefined();
          expect(_.range(10, 2, -2)).toEqual([10,8,6,4]);
        });
      });
    })
});
