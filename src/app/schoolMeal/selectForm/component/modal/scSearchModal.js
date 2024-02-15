import { useEffect, useState } from "react";

export default function ScSearchModal(props) {
    useEffect(() => {
        return () => {
            setSearchSchulNm("");
            props.setScList([]);
        };
    }, []);

    // 검색어
    const [searchSchulNm, setSearchSchulNm] = useState("");

    // 학교 조회
    const getScInfo = () => {
        const options = {
            method: "GET",
            // mode: 'no-cors',
        };

        fetch(
            "https://open.neis.go.kr/hub/schoolInfo?Key=" +
                process.env.NEXT_PUBLIC_SCINFO_API_KEY +
                "&SCHUL_NM=" +
                searchSchulNm +
                "&Type=json",
            options
        )
            .then((resp) => resp.json())
            .then((result) => {
                if (result.schoolInfo[0].head[0].list_total_count > 0) {
                    props.setScList([...result.schoolInfo[1].row]);
                }
            });
    };

    return (
        <div>
            <h1>학교 검색 모달입니다.</h1>
            <input
                type="text"
                value={searchSchulNm || ""}
                onChange={(e) => setSearchSchulNm(e.target.value)}
            />
            <input type="button" value="검색" onClick={getScInfo} />
            {props.scList.length > 0 && (
                <div>
                    <div>[학교 목록]</div>
                    {props.scList.map((elmt) => {
                        return (
                            <div key={elmt.SD_SCHUL_CODE}>
                                <div>
                                    <span>{elmt.SCHUL_NM}</span>
                                    <input
                                        type="button"
                                        value="선택"
                                        onClick={() => {
                                            props.setScData({
                                                ...props.scData,

                                                // 시도교육청코드
                                                atptOfcdcScCode:
                                                    elmt.ATPT_OFCDC_SC_CODE,
                                                // 시도교육청명
                                                atptOfcdcScNm:
                                                    elmt.ATPT_OFCDC_SC_NM,
                                                // 행정표준코드
                                                sdSchulCode: elmt.SD_SCHUL_CODE,
                                                // 학교명
                                                schulNm: elmt.SCHUL_NM,
                                            });
                                            props.setOpen(false);
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <div>
                <input
                    type="button"
                    value="닫기"
                    onClick={() => props.setOpen(false)}
                />
            </div>
        </div>
    );
}
