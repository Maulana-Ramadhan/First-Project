const Srand = function rnd(a) { 
function r() { 
  r._mz = 4294967295&36969*(65535&r._mz)+(r._mz>>16),
  r._mw = 4294967295&18e3*(65535&r._mw)+(r._mw>>16);
  return 0.5 + (4294967295&(r._mz<<16)+r._mw)/4294967296; 
}
r._mz = 123456789, this._mw = this._seed = a || 1+Math.floor(4294967295*Math.random());
r.seed = function(a) { return a == null ? this._seed : (this._mz = 123456789, this._mw = this._seed = a); }; 
r.randomize = function() { 
  return this.seed(1+Math.floor(4294967295*Math.random()));
}; 
r.getState = function() { 
  return { seed: this._seed, mz: this._mz, mw: this._mw }; 
}; 
r.inRange = function(c, a) {
  return c+this()*(a-c); 
}; 
r.intInRange = function(a, b) {
  return a+Math.floor(this()*(b-a+1)); 
}; 
r.choice = function(a) {
  if (0 === a.length) return false;
  return a[this.intInRange(0, a.length-1)]; 
}; 
r.choices = function(a, b) {
  const c = Array(b); 
  for (let d = 0; d < b; d++) c[d] = this.choice(a);  
  return c; 
}; 
r.sample = function(a, b) {
  if (b > a.length) throw new Error("Sample size cannot exceed population size."); 
  let e = Array(b);
  for (let c, d = a.length-1, f = {}, g = 0; g < b; g++) {
    do c = this.intInRange(0, d);
    while (f[c]);
    e[g] = a[c], f[c] = !0; 
  } 
  return e; 
}; 
r.shuffle = function(a) {
  for (let d = a.length-1; 0 < d; d--) {
    const b = this.intInRange(0, d-1);
    c = a[d]; a[d] = a[b]; a[b] = c; 
  }
  return a; 
};
return r; };
rng = Srand(7);