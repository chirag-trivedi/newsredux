import React from "react";
import { Link } from 'react-router-dom'

const showLatest = ({ latestData }) => {
    if (latestData) {
        return latestData.map((data) => {
            return(
            <Link key={data.id} to={`/details/${data.id}`} >
                <div style={{ background: `url(/images/articles/${data.img})` }}>
                    <div>
                        <span> {data.category}</span>
                        <div>{data.title}</div>
                    </div>

                </div>
            </Link>
            )
        }

        )
    }
}

const LatestNews = (props) => {
    return (

        <div>
            {showLatest(props)}
        </div>
    )

}

export default LatestNews;