class CosineSimilarity {
    constructor(text1, text2) {
        this.tokens1 = text1.toLowerCase().split(' ');
        this.tokens2 = text2.toLowerCase().split(' ');
        this.all_tokens = new Set([...this.tokens1, ...this.tokens2]);
        this.vector1 = Array.from(this.all_tokens, token => this.tokens1.filter(t => t === token).length);
        this.vector2 = Array.from(this.all_tokens, token => this.tokens2.filter(t => t === token).length);
    }
    
    get value() {
        const dot = this.vector1.reduce((acc, cur, i) => acc + cur * this.vector2[i], 0);
        const norm_x = Math.sqrt(this.vector1.reduce((acc, cur) => acc + cur ** 2, 0));
        const norm_y = Math.sqrt(this.vector2.reduce((acc, cur) => acc + cur ** 2, 0));
        return dot / (norm_x * norm_y);
    }
    
    get_similar_words(threshold) {
        const similar_words = [];
        for (const token of this.all_tokens) {
            const count1 = this.vector1[Array.from(this.all_tokens).indexOf(token)];
            const count2 = this.vector2[Array.from(this.all_tokens).indexOf(token)];
            if (count1 * count2 > 0 && (count1 * count2) / (Math.sqrt(count1 ** 2) * Math.sqrt(count2 ** 2)) >= threshold) {
                similar_words.push(token);
            }
        }
        return similar_words;
    }
}
function cosineSimilarityfunc(text1, text2) {

    const tokenizedText1 = text1.toLowerCase().split(/\W+/);
    const tokenizedText2 = text2.toLowerCase().split(/\W+/);
      const count1 = {};
    tokenizedText1.forEach(token => {
      if (count1[token]) {
        count1[token]++;
      } else {
        count1[token] = 1;
      }
    });
    const count2 = {};
    tokenizedText2.forEach(token => {
      if (count2[token]) {
        count2[token]++;
      } else {
        count2[token] = 1;
      }
    });
  
    let dotProduct = 0;
    Object.keys(count1).forEach(token => {
      if (count2[token]) {
        dotProduct += count1[token] * count2[token];
      }
    });
  
    const magnitude1 = Math.sqrt(Object.values(count1).reduce((acc, val) => acc + val ** 2, 0));
    const magnitude2 = Math.sqrt(Object.values(count2).reduce((acc, val) => acc + val ** 2, 0));
    return dotProduct / (magnitude1 * magnitude2);
  }
  function getColor(perc) {
    var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
  }
  
module.exports= {CosineSimilarity,cosineSimilarityfunc,getColor}