let divHeight = $('#specific-div').outerHeight();

const remCalculator = (size) => {
	let remSize = size / 16;
	return remSize + "rem";
}

console.log(remCalculator(divHeight), divHeight + "px");

//output: size of div both in rem and px
