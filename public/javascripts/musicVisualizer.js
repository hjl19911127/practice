function MusicVisualizer(obj){
	this.source = null;
	this.count = 0;
	this.analyser = MusicVisualizer.ac.createAnalyser();
	this.size = obj.size;
	this.analyser.fftSize = this.size * 2;
	this.gainNode = MusicVisualizer.ac[MusicVisualizer.ac.createGain ? 'createGain' : 'createGainNode']();
	this.gainNode.connect(MusicVisualizer.ac.destination);
	this.analyser.connect(this.gainNode);
	this.xhr = new XMLHttpRequest();

}

MusicVisualizer.ac = new (window.AudioContext || window.webkitAudioContext)();

MusicVisualizer.prototyp.load = function(url, fun){
	this.xhr.abort();
	this.xhr.open('GET', url);
	this.xhr.responseType = 'arrayBuffer';
	var self = this;
	this.xhr.onload=function(){
		fun(self.xhr.response);
	};
	this.xhr.send();
};

MusicVisualizer.prototype.decode = function(arraybuffer, fun){
	MusicVisualizer.ac.decodeAudioData(arraybuffer, function(buffer){
		fun(buffer);
	},function(err){
		console.log(err);
	});
};

MusicVisualizer.prototype.play = function(url){
	this.source && this.stop();
	var n = ++this.count;
	var self = this;
	this.load(url, function(arraybuffer){
		if(n != self.count) return;
		self.decode(arraybuffer, function(buffer){
			if(n != self.count) return;
			var bs = MusicVisualizer.ac.createBufferSource();
			bs.buffer = buffer;
			bs[bs.start ? 'start' : 'noteOn'](0);
			self.source = bs;
		});
	});
};

MusicVisualizer.prototype.stop = function(){
	this.source[this.source.stop ? 'stop' : 'noteOff'](0);
}

MusicVisualizer.prototype.changeVolume = function(percent){
	this.gainNode.gain.value = percent * percent;
}

MusicVisualizer.prototype.visualizer = function(){
	var arr = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(arr);
	requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	function v(){
		analyser.getByteFrequencyData(arr);
		draw(arr);
		requestAnimationFrame(v);
	}
	requestAnimationFrame(v);
}
