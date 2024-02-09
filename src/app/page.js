"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const atptOfcdcScList = [
        { name: "서울특별시교육청", code: 7010000 },
        { name: "부산광역시교육청", code: 7150000 },
        { name: "대구광역시교육청", code: 7240000 },
        { name: "인천광역시교육청", code: 7310000 },
        { name: "광주광역시교육청", code: 7380000 },
        { name: "대전광역시교육청", code: 7430000 },
        { name: "울산광역시교육청", code: 7480000 },
        { name: "경기도교육청", code: 7530000 },
        { name: "강원특별자치도교육청", code: 7801000 },
        { name: "충청북도교육청", code: 8000000 },
        { name: "충청남도교육청", code: 8140000 },
        { name: "전라북도교육청", code: 8320000 },
        { name: "전라남도교육청", code: 8490000 },
        { name: "경상북도교육청", code: 8750000 },
        { name: "경상남도교육청", code: 9010000 },
        { name: "제주특별자치도교육청", code: 9290000 },
        { name: "세종특별자치시교육청", code: 9300000 },
    ];

    const [atptOfcdcScCode, setAtptOfcdcScCode] = useState();

    return (
        <>
            <div>HEADER</div>
            <div>
                <div>
                    <label>교육청</label>
                    <select value={atptOfcdcScCode} defaultValue={7010000}>
                        {atptOfcdcScList.map((atptOfcdcSc) => {
                            return (
                                <option
                                    key={atptOfcdcSc.code}
                                    value={atptOfcdcSc.code}
                                >
                                    {atptOfcdcSc.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label>학교명</label>
                    <input />
                </div>
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
            </div>
            <div>FOOTER</div>
        </>
    );
}
