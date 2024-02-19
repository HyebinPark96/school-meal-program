export default function ScMealList(props) {
    
    return (
        <ul>
            ddd
            {props.scMealDatas.cnt > 0 &&
                props.scMealDatas.datas.map((elmt) => {
                    <>
                        <li>학교명</li>
                        <li>{elmt.SCHUL_NM}</li>
                    </>;
                })}
        </ul>
    );
}
