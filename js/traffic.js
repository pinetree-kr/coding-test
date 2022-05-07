// [1차] 추석 트래픽
// ###문제 설명
// #추석 트래픽
// 이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다.
// 장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다.
// 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.

// ##입력 형식
// solution 함수에 전달되는 lines 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며,
// 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.
// 응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 2016-09-15 hh:mm:ss.sss 형식으로 되어 있다.
// 처리시간 T는 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 s로 끝난다.
// 예를 들어, 로그 문자열 2016-09-15 03:10:33.020 0.011s은 "2016년 9월 15일 오전 3시 10분 33.010초"부터 "2016년 9월 15일 오전 3시 10분 33.020초"까지 "0.011초" 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)
// 서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 0.001 ≦ T ≦ 3.000이다.
// lines 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.

// ##출력 형식
// solution 함수에서는 로그 데이터 lines 배열에 대해 초당 최대 처리량을 리턴한다.

function solution(lines) {
	var parsed = lines.map((log) => {
		var [date, time, duration] = log.split(" ");

		duration = parseFloat(duration.replace("s", ""));
		var end = new Date(`${date} ${time}`).valueOf();

		return {
			end,
			duration,
		};
	});

	var results = [];
	for (let i = 0; i < parsed.length; i++) {
		var source = parsed[i];
		results[i] =
			parsed.filter(
				(target) =>
					// 이후것만 확인
					target.end > source.end &&
					// 소스의 끝을 기준으로 1초 이내에 타겟의 시작과 끝 사이인지 확인
					target.end - target.duration * 1000 + 1 < source.end + 1000
			).length + 1; // 현재 진행중 포함
	}

	//최대값 확인
	return Math.max(...Object.values(results));
}

console.log(
	solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"])
);
