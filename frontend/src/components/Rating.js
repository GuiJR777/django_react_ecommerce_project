import React from 'react'


function get_star_icon(value, color, index){
    var star = index + 1
    return <i style={{ color }} className={
        value >= star
        ? 'fas fa-star'
        : value >= star - 0.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }>
    </i>
    }

function Rating({ value, number_of_reviews, color }) {
    const rating_in_singular = "avaliação"
    const rating_in_plural = "avaliações"

    var stars = []
    for (const index of Array(5).keys()){
        stars.push(
            get_star_icon(value, color, index)
        )
    }

    return (
        <div className="rating d-flex justify-content-between">
            <span>
                { stars }
            </span>
            <span>
                {`${number_of_reviews} ${number_of_reviews > 1 ? rating_in_plural : rating_in_singular}`}
            </span>
        </div>
    )
    }

export default Rating
