function int64(t,i){return this.low=t>>>0,this.hi=i>>>0,this.add32inplace=function(t){var i=((this.low>>>0)+t&4294967295)>>>0,n=this.hi>>>0;i<this.low&&n++,this.hi=n,this.low=i},this.add32=function(t){var i=((this.low>>>0)+t&4294967295)>>>0,n=this.hi>>>0;return i<this.low&&n++,new int64(i,n)},this.sub32=function(t){var i=((this.low>>>0)-t&4294967295)>>>0,n=this.hi>>>0;return i>this.low&4294967295&&n--,new int64(i,n)},this.sub32inplace=function(t){var i=((this.low>>>0)-t&4294967295)>>>0,n=this.hi>>>0;i>this.low&4294967295&&n--,this.hi=n,this.low=i},this.and32=function(t){return new int64(this.low&t,this.hi)},this.and64=function(t,i){return new int64(this.low&t,this.hi&i)},this.toString=function(t){var i=(this.low>>>0).toString(16),n=(this.hi>>>0).toString(16);return 0==this.hi?i:n+(i=zeroFill(i,8))},this}function zeroFill(t,i){return(i-=t.toString().length)>0?new Array(i+(/\./.test(t)?2:1)).join("0")+t:t+""}function zeroFill(t,i){return(i-=t.toString().length)>0?new Array(i+(/\./.test(t)?2:1)).join("0")+t:t+""}