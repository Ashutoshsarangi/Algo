const reverse = str => {
	let i = str.length-1;
  	const helper = str => i === 0 ? str[0] : str[i--] + helper(str);
    return helper(str);
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
