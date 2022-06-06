// [2차] 자물쇠와 열쇠
// ###문제 설명
// 고고학자인 "튜브"는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다. 그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고 문 앞에는 특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.
// 잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고 특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.
// 자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다. 열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.
// 열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때, 열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.

// ##제한사항
// key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
// lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
// M은 항상 N 이하입니다.
// key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
// 0은 홈 부분, 1은 돌기 부분을 나타냅니다.

const cosX = 0;
const sinX = -1;

// const cosX = Math.round(Math.cos(-Math.PI / 2));
// const sinX = Math.round(Math.sin(-Math.PI / 2));

function rotXY(point) {
	const ret = {
		row: undefined,
		col: undefined,
	};

	ret.row = (point.row - 1) * cosX - (point.col - 1) * sinX + 1;
	ret.col = (point.row - 1) * sinX + (point.col - 1) * cosX + 1;

	return ret;
}
function solution(key, lock) {
	const coord = {
		x0: -1,
		y0: -1,
		x1: -1,
		y1: -1,
	};
	for (let i = 0; i < lock.length; i++) {
		const first = lock[i].indexOf(0);
		const last = lock[i].lastIndexOf(0);
		if (first >= 0) {
			if (coord.row0 == -1) {
				coord.row0 = coord.row1 = first;
			} else {
				if (coord.row0 > first) {
					coord.row0 = first;
				} else if (coord.row1 < last) {
					coord.row1 = last;
				}
			}

			if (coord.col0 == -1) {
				coord.col0 = coord.col1 = i;
			} else {
				if (coord.col0 < i) {
					coord.col1 = i;
				}
			}
		}
	}
	window = {
		x: coord.row0,
		y: coord.col0,
		width: coord.row1 - coord.row0 + 1,
		height: coord.col1 - coord.col0 + 1,
	};

	console.log(window);
	// const flatted = lock.flat();

	// flatted
	//   .filter((o) => !o)
	//   .forEach((o) => {
	//     console.log(flatted.indexOf(o));
	//   });
	// console.log(lock.flat());
	return 1;
}
// console.log(
// 	solution(
// 		[
// 			[0, 0, 0],
// 			[1, 0, 0],
// 			[0, 1, 1],
// 		],
// 		[
// 			[1, 0, 1],
// 			[1, 1, 0],
// 			[1, 0, 1],
// 		]
// 	)
// );

// [0 1 0]
// [1 0 0]
// [1 0 0]

// 0,0 = 0,2
// 1,0 = 1,1
// x = y
// y = -x + 2

function rotateXY(x, y, origin) {
	return {
		x: (x - origin) * cosX - (y - origin) * sinX + origin,
		y: (x - origin) * sinX + (y - origin) * cosX + origin,
	};
}

// 우리가 생각하는거랑 다른 좌표임... y가 내려감

function rotate(matrix) {
	const new_matrix = Array(matrix.length).fill(Array(matrix.length).fill(0));
	// idxRow
	// idxColumn
	for (let idxRow = 0; idxRow < matrix.length; idxRow++) {
		for (let idxColumn = 0; idxColumn < matrix.length; idxColumn++) {
			console.log(`before (x,y): (${idxColumn}, ${idxRow})`);
			const {x, y} = rotateXY(idxColumn, idxRow, Math.floor(matrix.length / 2));
			console.log(`after (x,y): (${x}, ${y})\n`);
		}
	}

	return new_matrix;
}

console.log(
	rotate([
		[0, 0, 0],
		[1, 0, 0],
		[0, 1, 1],
	])
);
