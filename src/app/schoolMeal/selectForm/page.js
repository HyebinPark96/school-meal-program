"use client";

import ScSearchModal from "@/app/schoolMeal/selectForm/component/modal/scSearchModal";
import { useEffect, useState } from "react";

export default function Form() {
    // 검색 조건
    const [filter, setFilter] = useState({});

    // 학교정보
    const [scData, setScData] = useState(
        // 시도교육청코드
        {
            atptOfcdcScCode: "B10",
            // 시도교육청명
            atptOfcdcScNm: "서울광역시교육청",
            // 행정표준코드
            sdSchulCode: 0,
            // 학교명
            schulNm: "",
            // 식사 구분 코드
            mmealScCode: "0",
        }
    );

    // 급식정보
    const [mealData, setMealData] = useState({});

    // 학교목록
    const [scList, setScList] = useState([]);

    // 학교 조회 모달 open 여부
    const [open, setOpen] = useState(false);

    // 급식 조회
    const getScMeal = () => {
        console.log(scData);
        const options = {
            method: "GET",
        };

        let url =
            "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=" +
            process.env.NEXT_PUBLIC_SCMEAL_API_KEY +
            "&Type=json&ATPT_OFCDC_SC_CODE=" +
            scData.atptOfcdcScCode +
            "&SD_SCHUL_CODE=" +
            scData.sdSchulCode;

        if(scData.mmealScCode != 0) {
            url += "&MMEAL_SC_CODE=" + scData.mmealScCode;
        }

        fetch(
            url,
            options
        )
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        // 급식 검색 양식
        <div>
            {/* 학교명 */}
            <div className="mr-5">
                <label>* 학교명</label>
                <div>
                    <input
                        type="text"
                        className="mr-rg-5"
                        value={scData.schulNm || ""}
                        readOnly
                    />
                    <input
                        type="button"
                        value="학교검색"
                        onClick={() => setOpen(true)}
                    />
                </div>
            </div>
            {/* 구분 */}
            <div className="mr-5">
                <label>* 구분</label>
                <div>
                    <input
                        type="radio"
                        className="mr-rg-5"
                        value="0"
                        onChange={(e) =>
                            setScData({
                                ...scData,
                                mmealScCode: e.target.value,
                            })
                        }
                        checked={scData.mmealScCode === "0"}
                    />
                    전체
                    <input
                        type="radio"
                        className="mr-rg-5"
                        value="2"
                        onChange={(e) =>
                            setScData({
                                ...scData,
                                mmealScCode: e.target.value,
                            })
                        }
                        checked={scData.mmealScCode === "2"}
                    />
                    중식
                    <input
                        type="radio"
                        className="mr-rg-5"
                        value="3"
                        onChange={(e) =>
                            setScData({
                                ...scData,
                                mmealScCode: e.target.value,
                            })
                        }
                        checked={scData.mmealScCode === "3"}
                    />
                    석식
                </div>
            </div>

            <div className="mr-10">
                <input type="button" value="검색" onClick={getScMeal} />
            </div>

            {open && (
                <ScSearchModal
                    scData={scData}
                    setScData={setScData}
                    scList={scList}
                    setScList={setScList}
                    setOpen={setOpen}
                />
            )}
        </div>
    );
}
