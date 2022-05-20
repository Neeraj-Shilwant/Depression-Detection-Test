// Quiz Creator;
function CQuiz(que, o1, o2, o3, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	'Do I feel sad and unhappy most of the time?',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Do i fell tired, little energy and i am unable to concentrate?',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'I have lost interest in all aspects of life that used to be more important to me',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'I feel that i am guilty person who deserves to be punished',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'I often feel restless with decreased activity',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 6
var q6 = new CQuiz(
	'I have difficulty in making decisions and do things slowly',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 7
var q7 = new CQuiz(
	'It takes great effort for me to do simple things',
	'Agree',
	'Neutral',
	'Disagree',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'I feel depressed even when good things happen to me',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'I often get thoughts of suicide or death',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// Question 10
var q10 = new CQuiz(
	'My sleep has been disturbed its either too much or too little',
	'Agree',
	'Neutral',
	'Disagree',
	
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
