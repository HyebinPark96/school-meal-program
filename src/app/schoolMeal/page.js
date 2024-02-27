"use client";

import ScSearchModal from "@/containers/schoolMeal/scSearchModal";
import { useEffect, useState } from "react";
import List from "../../containers/schoolMeal/scMealList";

export default function Form() {
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

    // 주간/월간
    const [viewType, setViewType] = useState("주간")

    // 학교목록
    const [scList, setScList] = useState([]);

    // 학교 조회 모달 open 여부
    const [open, setOpen] = useState(false);

    // 급식 정보
    const [scMealDatas, setScMealDatas] = useState({
        cnt: 0,
        datas: [],
    });

    // 급식 조회
    const getScMeal = async () => {
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

        if (scData.mmealScCode != 0) {
            url += "&MMEAL_SC_CODE=" + scData.mmealScCode;
        }

        const resp = await fetch(url);
        const datas = await resp.json();
        setScMealDatas({
            cnt: datas.mealServiceDietInfo[0].head[0].list_total_count,
            datas: datas.mealServiceDietInfo[1].row,
        });
    };

    return (
        <div>

            {/* 학교명 */}
            <div className="mr-5">
                <label className="txt-title">학교명</label>
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

            {/* 급식구분 */}
            <div className="mr-5">
                <label className="txt-title">급식구분</label>
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

            {/* 양식 */}
            <div className="mr-5">
                <label className="txt-title">양식</label>
                <div>
                    <input
                        type="radio"
                        className="mr-rg-5"
                        value="주간"
                        onChange={(e) =>
                            setViewType(e.target.value)
                        }
                        checked={viewType === "주간"}
                    />
                    주간
                    <input
                        type="radio"
                        className="mr-rg-5"
                        value="월간"
                        onChange={(e) =>
                            setViewType(e.target.value)
                        }
                        checked={viewType === "월간"}
                    />
                    월간
                </div>
            </div>

            <div className="mr-10">
                <input type="button" value="검색" onClick={getScMeal} />
            </div>

            <ul>
                {scMealDatas.datas.map((elmt) => {
                    return (
                        <div key={elmt.DDISH_NM} className="mr-10 bd-gray1">
                            <div className="mr-bt-5">
                                <p className="txt-title">급식일자</p>
                                <div>{elmt.MLSV_YMD}</div>
                            </div>
                            <div className="mr-bt-5">
                                <p className="txt-title">구분</p>
                                <div>{elmt.MMEAL_SC_NM}</div>
                            </div>
                            <div className="mr-bt-5">
                                <p className="txt-title">메뉴</p>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: elmt.DDISH_NM,
                                    }}
                                ></span>
                            </div>
                        </div>
                    );
                })}
            </ul>

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
