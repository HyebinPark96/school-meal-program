"use client";

import ScSearchModal from "@/app/component/modal/scSearchModal";
import { useEffect, useState } from "react";

export default function Form() {
    // 학교정보
    const [scData, setScData] = useState([
        // 시도교육청코드
        { atptOfcdcScCode: "B10" },
        // 시도교육청명
        { atptOfcdcScNm: "서울광역시교육청" },
        // 행정표준코드
        { sdSchulCode: 0 },
        // 학교명
        { schulNm: "" },
    ]);

    // 급식정보
    const [mealData, setMealData] = useState({});

    // 학교목록
    const [scList, setScList] = useState([]);

    // 학교 조회 모달 open 여부
    const [open, setOpen] = useState(false);

    return (
        // 급식 검색 양식
        <div>
            {/* 학교명 */}
            <div>
                <label>학교명</label>
                <input type="text" value={scData.schulNm || ""} readOnly />
                <input
                    type="button"
                    value="검색"
                    onClick={() => setOpen(true)}
                />
            </div>
            {/* 구분 */}
            <div>
                <label>구분</label>
                <div>
                    <input type="radio" />
                    전체
                    <input type="radio" />
                    중식
                    <input type="radio" />
                    석식
                </div>
            </div>
            <input type="button" value="검색" />

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
